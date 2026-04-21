import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate("/admin/chat", { replace: true });
        return;
      }

      setCheckingSession(false);
    };

    checkSession();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message || "Login gagal.");
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/admin/chat", { replace: true });
  };

  if (checkingSession) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="rounded-3xl bg-white px-6 py-5 text-sm text-slate-500 shadow-sm">
          Mengecek sesi admin...
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-100 px-4">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl md:grid-cols-[1.05fr_0.95fr]">
        <div className="hidden bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-500 p-10 text-white md:block">
          <div className="max-w-md">
            <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]">
              Admin Access
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight">
              Jasapro Admin Portal
            </h1>

            <p className="mt-4 text-sm leading-7 text-white/90">
              Login untuk mengakses dashboard admin live chat. Halaman ini
              dilindungi dan hanya bisa diakses oleh admin yang memiliki akun.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} />
                  <div>
                    <div className="font-semibold">Akses Terproteksi</div>
                    <div className="text-sm text-white/85">
                      Admin chat tidak bisa dibuka tanpa login.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Lock size={18} />
                  <div>
                    <div className="font-semibold">Supabase Auth</div>
                    <div className="text-sm text-white/85">
                      Session aman dan terjaga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600">
                Login Admin
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                Selamat datang
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Masuk dengan email dan password admin Anda.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Admin
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Mail size={18} className="text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@email.com"
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Lock size={18} className="text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-slate-400 transition hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {errorMessage && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(13,148,136,0.22)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sedang masuk..." : "Masuk ke Admin"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}