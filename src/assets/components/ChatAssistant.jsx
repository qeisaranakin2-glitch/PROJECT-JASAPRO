import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headset,
  X,
  Send,
  Sparkles,
  Globe,
  MessageCircleMore,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [chatId, setChatId] = useState(localStorage.getItem("chat_id") || "");
  const [clientName, setClientName] = useState(
    localStorage.getItem("client_name") || ""
  );
  const [nameInput, setNameInput] = useState(
    localStorage.getItem("client_name") || ""
  );
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState(
    localStorage.getItem("chat_language") || "en"
  );
  const [adminTyping, setAdminTyping] = useState(false);
  const [starting, setStarting] = useState(false);

  const messagesEndRef = useRef(null);
  const typingTimerRef = useRef(null);
  const nameInputRef = useRef(null);

  const whatsappNumber = "628981910600";

  const quickActions = useMemo(() => {
    if (language === "id") {
      return [
        "Minta Penawaran",
        "Lihat Layanan",
        "Konsultasi Project",
        "Bahasa Inggris",
      ];
    }

    return [
      "Request a Quote",
      "View Services",
      "Project Consultation",
      "Bahasa Indonesia",
    ];
  }, [language]);

  useEffect(() => {
    localStorage.setItem("chat_language", language);
  }, [language]);

  useEffect(() => {
    if (open && !chatId && nameInputRef.current) {
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 120);
    }
  }, [open, chatId]);

  useEffect(() => {
    if (!chatId) return;

    fetchMessages(chatId);

    const channel = supabase
      .channel(`chat-room-${chatId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `chat_id=eq.${chatId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);

          if (payload.new.sender === "admin") {
            setAdminTyping(true);

            if (typingTimerRef.current) {
              clearTimeout(typingTimerRef.current);
            }

            typingTimerRef.current = setTimeout(() => {
              setAdminTyping(false);
            }, 1200);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [chatId]);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, adminTyping, open]);

  const fetchMessages = async (id) => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("chat_id", id)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Fetch messages error:", error);
      return;
    }

    setMessages(data || []);
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const insertWelcomeMessages = async (newChatId, userName, lang) => {
    const cleanName = userName?.trim() ? ` ${userName}` : "";

    const welcomeSet =
      lang === "id"
        ? [
            {
              chat_id: newChatId,
              sender: "admin",
              message: `Halo${cleanName} 👋 Selamat datang di Jasapro Support.`,
            },
            {
              chat_id: newChatId,
              sender: "admin",
              message:
                "Kami siap membantu kebutuhan surveying, mapping, LiDAR, dan geotechnical Anda.",
            },
          ]
        : [
            {
              chat_id: newChatId,
              sender: "admin",
              message: `Hello${cleanName} 👋 Welcome to Jasapro Support.`,
            },
            {
              chat_id: newChatId,
              sender: "admin",
              message:
                "We are here to assist with surveying, mapping, LiDAR, and geotechnical services.",
            },
          ];

    const { error } = await supabase.from("messages").insert(welcomeSet);

    if (error) {
      console.error("Insert welcome messages error:", error);
    }
  };

  const startChat = async () => {
    const cleanName = nameInput.trim();

    if (!cleanName || starting) return;

    try {
      setStarting(true);

      const { data, error } = await supabase
        .from("chats")
        .insert({ client_name: cleanName })
        .select()
        .single();

      if (error) {
        console.error("Start chat error:", error);
        alert(
          language === "id"
            ? error.message || "Gagal memulai chat. Coba lagi."
            : error.message || "Failed to start chat. Please try again."
        );
        return;
      }

      localStorage.setItem("chat_id", data.id);
      localStorage.setItem("client_name", cleanName);

      setChatId(data.id);
      setClientName(cleanName);

      await insertWelcomeMessages(data.id, cleanName, language);
    } catch (err) {
      console.error("Unexpected start chat error:", err);
      alert(
        language === "id"
          ? "Terjadi kesalahan. Coba lagi."
          : "Something went wrong. Please try again."
      );
    } finally {
      setStarting(false);
    }
  };

  const sendMessage = async (textArg) => {
    const text = typeof textArg === "string" ? textArg : input;

    if (!text.trim() || !chatId) return;

    const { error } = await supabase.from("messages").insert({
      chat_id: chatId,
      sender: "client",
      message: text,
    });

    if (error) {
      console.error("Send message error:", error);
      return;
    }

    setInput("");
  };

  const handleQuickAction = async (action) => {
    if (!chatId) return;

    if (action === "Bahasa Indonesia" || action === "Bahasa Inggris") {
      const nextLang = action === "Bahasa Indonesia" ? "id" : "en";
      setLanguage(nextLang);

      if (nextLang === "id") {
        await sendMessage("Saya ingin menggunakan Bahasa Indonesia.");
        await supabase.from("messages").insert({
          chat_id: chatId,
          sender: "admin",
          message:
            "Tentu. Kita lanjut dalam Bahasa Indonesia. Silakan pilih topik atau kirim detail kebutuhan project Anda.",
        });
      } else {
        await sendMessage("I would like to continue in English.");
        await supabase.from("messages").insert({
          chat_id: chatId,
          sender: "admin",
          message:
            "Of course. We can continue in English. Please choose a topic or send your project requirements.",
        });
      }

      return;
    }

    await sendMessage(action);

    const adminTemplates = {
      "Request a Quote":
        "Sure. Please share your project type, location, scope of work, and preferred timeline.",
      "View Services":
        "Jasapro provides surveying, mapping, LiDAR acquisition, and geotechnical investigation services.",
      "Project Consultation":
        "We would be happy to assist. Please tell us about your project goals and technical requirements.",
      "Minta Penawaran":
        "Tentu. Mohon kirim jenis project, lokasi, ruang lingkup pekerjaan, dan estimasi waktu.",
      "Lihat Layanan":
        "Jasapro menyediakan layanan surveying, mapping, LiDAR acquisition, dan geotechnical investigation.",
      "Konsultasi Project":
        "Dengan senang hati. Silakan jelaskan tujuan project dan kebutuhan teknis Anda.",
    };

    const reply = adminTemplates[action];

    if (reply) {
      await supabase.from("messages").insert({
        chat_id: chatId,
        sender: "admin",
        message: reply,
      });
    }
  };

  const resetChat = () => {
    localStorage.removeItem("chat_id");
    localStorage.removeItem("client_name");
    localStorage.removeItem("chat_language");

    setChatId("");
    setClientName("");
    setNameInput("");
    setMessages([]);
    setInput("");
    setLanguage("en");
    setAdminTyping(false);

    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 150);
  };

  const openWhatsApp = () => {
    const text =
      language === "id"
        ? "Halo Jasapro, saya butuh respon cepat terkait layanan Anda."
        : "Hello Jasapro, I need a fast response regarding your services.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const getQuickActionLabel = (action) => {
    const map = {
      "Request a Quote": "Quotation",
      "View Services": "Services",
      "Project Consultation": "Consult",
      "Minta Penawaran": "Penawaran",
      "Lihat Layanan": "Layanan",
      "Konsultasi Project": "Consult",
      "Bahasa Indonesia": "ID",
      "Bahasa Inggris": "EN",
    };

    return map[action] || action;
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="fixed bottom-20 right-5 z-50"
          >
            <button
              onClick={() => setOpen(true)}
              className="group rounded-full border border-white/70 bg-white/95 px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-[0_14px_35px_rgba(15,23,42,0.14)] backdrop-blur-xl transition hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md">
                  <Sparkles size={13} />
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
                </span>
                Live Support
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-500 text-white shadow-[0_14px_30px_rgba(13,148,136,0.35)] ring-4 ring-white/50"
      >
        <span className="absolute inset-0 rounded-full bg-white/10" />
        {open ? <X size={24} /> : <Headset size={25} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="fixed right-2 left-2 top-[86px] bottom-24 z-50 flex w-auto sm:left-auto sm:right-4 sm:w-[360px] md:w-[380px] max-w-[calc(100vw-16px)] flex-col overflow-hidden rounded-[24px] border border-white/60 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 px-4 py-3 text-white">
              <div className="relative flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                      Live Support
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/20 px-2 py-1 text-[10px] font-semibold text-white">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      Online
                    </span>
                  </div>

                  <h3 className="truncate text-base font-bold">Jasapro Support</h3>

                  {clientName && (
                    <p className="mt-1 text-xs leading-relaxed text-white/90">
                      Connected as {clientName}
                    </p>
                  )}
                </div>

                <div className="relative z-10 flex items-center gap-2">
                  <button
                    onClick={() =>
                      setLanguage((prev) => (prev === "en" ? "id" : "en"))
                    }
                    className="flex items-center gap-1 rounded-xl bg-white/15 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur transition hover:bg-white/20"
                  >
                    <Globe size={13} />
                    {language === "en" ? "EN" : "ID"}
                  </button>

                  {chatId && (
                    <button
                      onClick={resetChat}
                      className="flex items-center gap-1 rounded-xl bg-white/15 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur transition hover:bg-white/20"
                    >
                      <RotateCcw size={12} />
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>

            {!chatId ? (
              <div className="space-y-4 bg-white p-4">
                <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-800">
                    Start a conversation with Jasapro
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Enter your name to begin a live chat.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-600">
                    {language === "id" ? "Nama" : "Name"}
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && startChat()}
                    placeholder={language === "id" ? "Nama Anda" : "Your name"}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-100"
                  />
                </div>

                <button
                  onClick={startChat}
                  disabled={!nameInput.trim() || starting}
                  className="w-full rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(13,148,136,0.22)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {starting
                    ? language === "id"
                      ? "Memulai..."
                      : "Starting..."
                    : language === "id"
                    ? "Mulai Chat"
                    : "Start Chat"}
                </button>

                <button
                  onClick={openWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-green-200 bg-green-50 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100"
                >
                  <MessageCircleMore size={16} />
                  Chat via WhatsApp
                </button>
              </div>
            ) : (
              <>
                <div className="border-b border-slate-100 bg-white px-4 py-3">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Quick Actions
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600">
                      <CheckCircle2 size={11} />
                      Active
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action) => (
                      <button
                        key={action}
                        onClick={() => handleQuickAction(action)}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                      >
                        {getQuickActionLabel(action)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-gradient-to-b from-slate-50 to-white px-3 py-4 sm:px-4">
                  <div className="mt-auto space-y-3">
                    {messages.length === 0 ? (
                      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-500 shadow-sm">
                        <p className="leading-6">
                          {language === "id"
                            ? `Halo ${clientName}, pesan Anda akan muncul di sini.`
                            : `Hello ${clientName}, your conversation will appear here.`}
                        </p>
                      </div>
                    ) : (
                      messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${
                            msg.sender === "client"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[90%] sm:max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm ${
                              msg.sender === "client"
                                ? "bg-gradient-to-br from-teal-500 to-cyan-500 text-white"
                                : "border border-slate-200 bg-white text-slate-700"
                            }`}
                          >
                            <div className="whitespace-pre-wrap break-words">
                              {msg.message}
                            </div>
                            <div
                              className={`mt-2 text-[10px] font-medium ${
                                msg.sender === "client"
                                  ? "text-white/80"
                                  : "text-slate-400"
                              }`}
                            >
                              {formatTime(msg.created_at)}
                            </div>
                          </div>
                        </div>
                      ))
                    )}

                    {adminTyping && (
                      <div className="flex justify-start">
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                          <div className="mb-1">
                            {language === "id"
                              ? "Admin sedang mengetik"
                              : "Admin is typing"}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.3s]" />
                            <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.15s]" />
                            <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </div>

                <div className="border-t border-slate-200 bg-white p-3">
                  <div className="mb-2 flex items-center justify-between gap-3 text-[11px]">
                    <span className="leading-relaxed text-slate-400">
                      {language === "id"
                        ? "Suggested: lokasi project, layanan, scope, timeline."
                        : "Suggested: project location, service, scope, timeline."}
                    </span>
                    <button
                      onClick={openWhatsApp}
                      className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 font-semibold text-green-600 transition hover:bg-green-100 hover:text-green-700"
                    >
                      WA
                    </button>
                  </div>

                  <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-2">
                    <div className="flex items-end gap-2">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder={
                          language === "id"
                            ? "Tulis pesan Anda..."
                            : "Write your message..."
                        }
                        className="min-h-[44px] flex-1 bg-transparent px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      />

                      <button
                        onClick={() => sendMessage()}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-[0_10px_20px_rgba(13,148,136,0.22)] transition hover:brightness-105"
                      >
                        <Send size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}