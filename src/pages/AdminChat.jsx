import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import {
  Bell,
  Headset,
  Search,
  Send,
  UserRound,
  MessageSquareText,
  ShieldCheck,
  Clock3,
  Eye,
  EyeOff,
  Filter,
  AlertTriangle,
  Trash2,
  MessageCircle,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminChat() {
  const navigate = useNavigate();

  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [search, setSearch] = useState("");
  const [hideGibberish, setHideGibberish] = useState(true);
  const [deletingChatId, setDeletingChatId] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);

  const audioRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    );

    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    fetchChats();

    const channel = supabase
      .channel("admin-room")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        async (payload) => {
          await fetchChats();

          if (selectedChat) {
            await fetchMessages(selectedChat.id);
          }

          if (payload.new.sender === "client") {
            try {
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
              }
            } catch (error) {
              console.error("Audio notification error:", error);
            }

            if (
              "Notification" in window &&
              Notification.permission === "granted"
            ) {
              new Notification("Chat baru masuk", {
                body: payload.new.message,
              });
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedChat]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, hideGibberish]);

  const fetchChats = async () => {
    const { data, error } = await supabase
      .from("chats")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch chats error:", error);
      return;
    }

    setChats(data || []);
  };

  const fetchMessages = async (chatId) => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("chat_id", chatId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Fetch messages error:", error);
      return;
    }

    setMessages(data || []);
  };

  const handleSelectChat = async (chat) => {
    setSelectedChat(chat);
    await fetchMessages(chat.id);
  };

  const sendReply = async () => {
    if (!reply.trim() || !selectedChat) return;

    const { error } = await supabase.from("messages").insert({
      chat_id: selectedChat.id,
      sender: "admin",
      message: reply,
    });

    if (error) {
      console.error("Send reply error:", error);
      return;
    }

    setReply("");
    await fetchMessages(selectedChat.id);
    await fetchChats();
  };

  const handleLogout = async () => {
    const confirmed = window.confirm("Logout dari admin?");
    if (!confirmed) return;

    setLoggingOut(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error);
      alert("Gagal logout.");
      setLoggingOut(false);
      return;
    }

    setLoggingOut(false);
    navigate("/admin/login", { replace: true });
  };

  const deleteChat = async (chat, event) => {
    if (event) {
      event.stopPropagation();
    }

    const confirmed = window.confirm(
      `Hapus chat dengan ${chat.client_name || "Client"}?\n\nSemua pesan di chat ini juga akan ikut terhapus.`
    );

    if (!confirmed) return;

    try {
      setDeletingChatId(chat.id);

      const { error: messagesError } = await supabase
        .from("messages")
        .delete()
        .eq("chat_id", chat.id);

      if (messagesError) {
        console.error("Delete messages error:", messagesError);
        alert("Gagal menghapus messages chat.");
        return;
      }

      const { error: chatError } = await supabase
        .from("chats")
        .delete()
        .eq("id", chat.id);

      if (chatError) {
        console.error("Delete chat error:", chatError);
        alert("Gagal menghapus chat.");
        return;
      }

      if (selectedChat?.id === chat.id) {
        setSelectedChat(null);
        setMessages([]);
        setReply("");
      }

      await fetchChats();
    } catch (error) {
      console.error("Delete chat unexpected error:", error);
      alert("Terjadi kesalahan saat menghapus chat.");
    } finally {
      setDeletingChatId(null);
    }
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const normalizeText = (text) => {
    return (text || "").trim().replace(/\s+/g, " ");
  };

  const isGibberishMessage = (text) => {
    const clean = normalizeText(text);
    if (!clean) return true;

    const lower = clean.toLowerCase();
    const lettersOnly = lower.replace(/[^a-z]/g, "");
    const alnumOnly = lower.replace(/[^a-z0-9]/g, "");

    const uniqueChars = new Set(alnumOnly.split("")).size;
    const vowelCount = (lettersOnly.match(/[aiueo]/g) || []).length;
    const sameCharRun = /(.)\1{4,}/.test(lower);
    const repeatedChunk = /(.{1,4})\1{3,}/.test(lower);

    const noiseWords = [
      "awd",
      "asdf",
      "qwe",
      "zx",
      "testtest",
      "xxxx",
      "aaaa",
      "bbbb",
      "cccc",
      "gaje",
    ];

    const hasNoiseWord = noiseWords.some((word) => lower.includes(word));

    const singleShortNoise =
      clean.length <= 4 && !/[0-9]/.test(clean) && /^[a-z]+$/i.test(clean);

    const tooManyConsonants =
      lettersOnly.length >= 8 &&
      vowelCount <= Math.max(1, lettersOnly.length * 0.15);

    const lowVariationLongText = alnumOnly.length >= 10 && uniqueChars <= 4;

    const randomLikeMidText =
      clean.length >= 6 &&
      clean.length <= 20 &&
      /^[a-z]+$/i.test(clean) &&
      vowelCount <= 1;

    return (
      singleShortNoise ||
      hasNoiseWord ||
      sameCharRun ||
      repeatedChunk ||
      tooManyConsonants ||
      lowVariationLongText ||
      randomLikeMidText
    );
  };

  const filteredChats = useMemo(() => {
    if (!search.trim()) return chats;

    return chats.filter((chat) =>
      (chat.client_name || "Client")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [chats, search]);

  const visibleMessages = useMemo(() => {
    if (!hideGibberish) return messages;

    return messages.filter((msg) => {
      if (msg.sender === "admin") return true;
      return !isGibberishMessage(msg.message);
    });
  }, [messages, hideGibberish]);

  const hiddenMessagesCount = useMemo(() => {
    return messages.filter(
      (msg) => msg.sender === "client" && isGibberishMessage(msg.message)
    ).length;
  }, [messages]);

  return (
    <div className="grid min-h-screen grid-cols-[340px_1fr] bg-gradient-to-br from-slate-100 via-slate-50 to-cyan-50">
      <aside className="flex h-screen flex-col border-r border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="border-b border-slate-200 px-5 py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg">
                <Headset size={20} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">Admin Live Chat</h1>
                <p className="text-xs text-slate-500">
                  Dashboard percakapan pelanggan
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50 disabled:opacity-60"
            >
              <LogOut size={14} />
              {loggingOut ? "Logout..." : "Logout"}
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
              <div className="text-xs text-slate-500">Total Chat</div>
              <div className="mt-1 text-lg font-bold text-slate-800">
                {chats.length}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
              <div className="text-xs text-slate-500">Notifikasi</div>
              <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                <Bell size={14} />
                Aktif
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
              <Search size={16} className="text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama client..."
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Chat List
            </p>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
              {filteredChats.length} item
            </span>
          </div>

          <div className="space-y-3">
            {filteredChats.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                {search.trim()
                  ? "Tidak ada client yang cocok."
                  : "Belum ada chat masuk."}
              </div>
            ) : (
              filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`group rounded-2xl border p-4 text-left shadow-sm transition ${
                    selectedChat?.id === chat.id
                      ? "border-teal-400 bg-gradient-to-r from-teal-50 to-cyan-50 shadow-[0_12px_30px_rgba(13,148,136,0.10)]"
                      : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => handleSelectChat(chat)}
                      className="flex min-w-0 flex-1 items-start gap-3 text-left"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                          selectedChat?.id === chat.id
                            ? "bg-gradient-to-br from-teal-500 to-cyan-500 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <UserRound size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="truncate font-semibold text-slate-800">
                          {chat.client_name || "Client"}
                        </div>
                        <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                          <Clock3 size={12} />
                          {formatDateTime(chat.created_at)}
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={(e) => deleteChat(chat, e)}
                      disabled={deletingChatId === chat.id}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 opacity-100 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50 md:opacity-0 md:group-hover:opacity-100"
                      title="Hapus chat"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </aside>

      <main className="flex h-screen flex-col">
        <div className="border-b border-slate-200/80 bg-white/80 px-6 py-5 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                {selectedChat
                  ? `Chat dengan ${selectedChat.client_name || "Client"}`
                  : "Pilih chat dari sebelah kiri"}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {selectedChat
                  ? "Balas pesan client secara real-time."
                  : "Pilih salah satu percakapan untuk mulai membalas."}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:flex">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  Realtime Active
                </div>
                <div className="h-6 w-px bg-slate-200" />
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MessageSquareText size={16} className="text-teal-600" />
                  {visibleMessages.length} pesan
                </div>
              </div>

              {selectedChat && (
                <button
                  onClick={() => deleteChat(selectedChat)}
                  disabled={deletingChatId === selectedChat.id}
                  className="inline-flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Trash2 size={16} />
                  Hapus Chat
                </button>
              )}
            </div>
          </div>

          {selectedChat && hiddenMessagesCount > 0 && (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-amber-700">
                <AlertTriangle size={16} />
                {hiddenMessagesCount} pesan client terdeteksi gajelas/spam.
              </div>

              <button
                onClick={() => setHideGibberish((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                {hideGibberish ? <Eye size={16} /> : <EyeOff size={16} />}
                {hideGibberish ? "Tampilkan semua" : "Sembunyikan pesan gajelas"}
              </button>
            </div>
          )}
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {!selectedChat ? (
              <div className="flex h-full items-center justify-center">
                <div className="max-w-md rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg">
                    <Headset size={28} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-800">
                    Belum ada chat yang dipilih
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Pilih salah satu percakapan dari panel kiri untuk melihat isi
                    chat dan membalas pesan client.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mx-auto flex max-w-5xl flex-col gap-4">
                {visibleMessages.length === 0 ? (
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-500 shadow-sm">
                    Tidak ada pesan yang ditampilkan.
                  </div>
                ) : (
                  visibleMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sender === "admin" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div className="flex max-w-[78%] items-end gap-3">
                        {msg.sender !== "admin" && (
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-200 text-slate-600">
                            <UserRound size={17} />
                          </div>
                        )}

                        <div
                          className={`rounded-3xl px-4 py-3 shadow-sm ${
                            msg.sender === "admin"
                              ? "rounded-br-lg bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-[0_12px_28px_rgba(13,148,136,0.20)]"
                              : "rounded-bl-lg border border-slate-200 bg-white text-slate-700"
                          }`}
                        >
                          <div className="whitespace-pre-wrap break-words text-sm leading-relaxed">
                            {msg.message}
                          </div>
                          <div
                            className={`mt-2 text-[11px] font-medium ${
                              msg.sender === "admin"
                                ? "text-white/80"
                                : "text-slate-400"
                            }`}
                          >
                            {formatTime(msg.created_at)}
                          </div>
                        </div>

                        {msg.sender === "admin" && (
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
                            <Headset size={17} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {selectedChat && (
            <div className="border-t border-slate-200/80 bg-white/85 px-6 py-4 backdrop-blur-xl">
              <div className="mx-auto max-w-5xl">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Balas ke {selectedChat.client_name || "Client"}
                    </p>
                    <p className="text-xs text-slate-500">
                      Kirim respon yang cepat, jelas, dan profesional.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
                    <Filter size={14} />
                    {hideGibberish ? "Filter gajelas aktif" : "Semua pesan tampil"}
                  </div>
                </div>

                <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-2 shadow-inner">
                  <div className="flex items-end gap-2">
                    <textarea
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendReply();
                        }
                      }}
                      placeholder="Tulis balasan..."
                      rows={1}
                      className="max-h-40 min-h-[52px] flex-1 resize-none bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />

                    <button
                      onClick={sendReply}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-[0_10px_24px_rgba(13,148,136,0.24)] transition hover:brightness-105"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>

                <p className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                  <MessageCircle size={13} />
                  Tekan Enter untuk kirim, Shift + Enter untuk baris baru.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}