"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mic,
  Plug,
  Music2,
  Laptop,
  Shield,
  Settings,
  Mail,
  Check,
  HelpCircle,
  DollarSign,
  Download,
  Star,
  Wrench,
  Zap,
  Users,
  Volume2,
  Headphones,
  Gamepad2,
  Home,
  Package,
  AlertTriangle,
  Info,
  Clock,
  Repeat,
  ThumbsUp,
  Award,
  Cpu,
  MonitorSmartphone,
  PlugZap,
  VolumeX,
  Smile,
  Laugh,
  Flame,
  MousePointer2,
  Sword,
} from "lucide-react";
import { PSEOPage } from "../../data/pseo-pages";

// Icon name → Lucide component map
const iconMap: Record<string, React.ReactNode> = {
  mic: <Mic size={20} />,
  plug: <Plug size={20} />,
  plugZap: <PlugZap size={20} />,
  music: <Music2 size={20} />,
  laptop: <Laptop size={20} />,
  shield: <Shield size={20} />,
  settings: <Settings size={20} />,
  mail: <Mail size={20} />,
  check: <Check size={20} />,
  help: <HelpCircle size={20} />,
  dollar: <DollarSign size={20} />,
  download: <Download size={20} />,
  star: <Star size={20} />,
  wrench: <Wrench size={20} />,
  zap: <Zap size={20} />,
  users: <Users size={20} />,
  volume: <Volume2 size={20} />,
  volumeX: <VolumeX size={20} />,
  headphones: <Headphones size={20} />,
  gamepad: <Gamepad2 size={20} />,
  home: <Home size={20} />,
  package: <Package size={20} />,
  alert: <AlertTriangle size={20} />,
  info: <Info size={20} />,
  clock: <Clock size={20} />,
  repeat: <Repeat size={20} />,
  thumbsUp: <ThumbsUp size={20} />,
  award: <Award size={20} />,
  cpu: <Cpu size={20} />,
  monitor: <MonitorSmartphone size={20} />,
  smile: <Smile size={20} />,
  laugh: <Laugh size={20} />,
  flame: <Flame size={20} />,
  cursor: <MousePointer2 size={20} />,
  sword: <Sword size={20} />,
};

function Icon({ name }: { name: string }) {
  return (
    <span
      style={{
        color: "#e63535",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {iconMap[name] ?? <Zap size={20} />}
    </span>
  );
}

export default function PSEOClient({ page }: { page: PSEOPage }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBuy = async () => {
    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      if (!data.checkout_url) throw new Error("No checkout URL");
      window.location.href = data.checkout_url;
    } catch {
      alert(
        "Something went wrong. Please try again or contact support@slapwindows.site",
      );
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen text-black"
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        background: "#faf8f8",
      }}
    >
      {/* NAV */}
      <nav
        className="flex justify-between items-center px-4 sm:px-8 py-4 sticky top-0 backdrop-blur-md z-50"
        style={{
          borderBottom: "1px solid #f0eded",
          background: "rgba(250,248,248,0.95)",
        }}
      >
        <Link
          href="/"
          className="text-base sm:text-lg font-bold tracking-tight"
          style={{ textDecoration: "none", color: "#000" }}
        >
          SlapWindows
        </Link>
        <div className="flex gap-3 sm:gap-6 items-center">
          <Link
            href="/#faq"
            className="hidden sm:inline text-sm text-[#999] hover:text-[#555] transition-colors font-medium"
            style={{ textDecoration: "none" }}
          >
            FAQ
          </Link>
          <Link
            href="/#pricing"
            className="hidden sm:inline text-sm text-[#999] hover:text-[#555] transition-colors font-medium"
            style={{ textDecoration: "none" }}
          >
            Pricing
          </Link>
          <button
            onClick={() => scrollTo("pricing")}
            className="text-white border-none px-4 py-2 rounded-full text-xs sm:text-sm font-semibold cursor-pointer whitespace-nowrap transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #ff4444, #e63535)",
              boxShadow: "0 4px 14px rgba(230,53,53,0.35)",
            }}
          >
            Buy $3
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="text-center px-4 sm:px-8 pt-14 sm:pt-24 pb-10 sm:pb-14"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(255,80,80,0.1) 0%, transparent 65%)",
        }}
      >
        {page.badge && (
          <div
            className="inline-block text-xs px-3 py-1 rounded-full mb-5 sm:mb-6 font-medium"
            style={{
              background: "linear-gradient(135deg, #fff0f0, #fff5f5)",
              border: "1px solid #ffd5d5",
              color: "#e63535",
            }}
          >
            {page.badge}
          </div>
        )}
        <h1
          className="text-[2.2rem] sm:text-5xl font-bold mb-4 mx-auto max-w-2xl"
          style={{ letterSpacing: "-2px", lineHeight: 1.15 }}
        >
          {page.heroTitle}
        </h1>
        <p className="text-base sm:text-lg text-[#777] mb-8 sm:mb-10 font-normal mx-auto max-w-md">
          {page.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <button
            onClick={() => scrollTo("pricing")}
            className="text-white border-none px-7 py-3.5 rounded-full text-base font-semibold cursor-pointer transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #ff4444, #e63535)",
              boxShadow: "0 6px 24px rgba(230,53,53,0.4)",
            }}
          >
            Get SlapWindows — $3
          </button>
          <button
            onClick={() => scrollTo("answer")}
            className="bg-transparent text-black border border-[#ddd] px-7 py-3.5 rounded-full text-base cursor-pointer hover:border-[#bbb] transition-colors font-medium"
          >
            Learn more
          </button>
        </div>
        <p className="text-xs text-[#aaa] mt-4 font-medium">
          Windows 10/11 · Microphone required · One-time payment
        </p>
      </section>

      {/* ANSWER BOX — Google Featured Snippet */}
      <section
        id="answer"
        className="px-4 sm:px-8 py-8 sm:py-10"
        style={{ borderBottom: "1px solid #ede8e8" }}
      >
        <div
          className="rounded-3xl py-8 sm:py-10 px-6 sm:px-10 max-w-2xl mx-auto"
          style={{
            background: "#fff",
            border: "1px solid #ede8e8",
            boxShadow: "0 2px 24px rgba(0,0,0,0.04)",
          }}
        >
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
            Quick answer
          </p>
          <h2
            className="text-xl sm:text-2xl font-bold mb-3"
            style={{ letterSpacing: "-0.5px" }}
          >
            {page.answerQuestion}
          </h2>
          <p className="text-sm sm:text-base text-[#666] leading-relaxed">
            {page.answerText}
          </p>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section
        className="grid grid-cols-1 sm:grid-cols-3"
        style={{ borderBottom: "1px solid #ede8e8" }}
      >
        {page.features.map((f, i) => (
          <div
            key={i}
            className="p-5 sm:p-6 text-center flex flex-col items-center gap-2"
            style={{
              borderRight: "1px solid #ede8e8",
              borderBottom: "1px solid #ede8e8",
            }}
          >
            <Icon name={f.icon} />
            <div className="text-xs sm:text-[13px] font-semibold">
              {f.title}
            </div>
            <div className="text-[10px] sm:text-xs text-[#999] leading-snug font-normal">
              {f.desc}
            </div>
          </div>
        ))}
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="px-4 sm:px-8 py-14 sm:py-20 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,80,80,0.06) 0%, transparent 70%), #faf8f8",
          borderTop: "1px solid #f0eded",
        }}
      >
        <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
          Pricing
        </p>
        <h2
          className="text-[clamp(1.6rem,4vw,2.5rem)] font-bold mb-3"
          style={{ letterSpacing: "-1px" }}
        >
          One-time. No subscriptions.
        </h2>
        <p className="text-sm sm:text-base text-[#999] mb-8 max-w-xs mx-auto font-normal">
          Less than a coffee. More fun than your antivirus.
        </p>

        <div
          className="rounded-2xl p-6 sm:p-10 max-w-sm mx-auto w-full"
          style={{
            background: "#fff",
            border: "1.5px solid #ebebeb",
            boxShadow: "0 8px 48px rgba(0,0,0,0.07)",
          }}
        >
          <div
            className="text-6xl sm:text-[4rem] font-black"
            style={{ letterSpacing: "-3px" }}
          >
            <sup className="text-xl sm:text-2xl font-medium align-super">$</sup>
            3
          </div>
          <div className="text-xs sm:text-sm text-[#aaa] mb-6 font-medium">
            one-time payment · lifetime license · no refunds
          </div>

          <ul className="list-none text-left mb-8">
            {[
              "All 7 voice packs",
              "USB Sound Pack mode",
              "Lifetime updates",
              "License key via email",
              "Windows 10 & 11 support",
            ].map((label, i) => (
              <li
                key={i}
                className="py-2.5"
                style={{ borderBottom: "1px solid #f5f5f5" }}
              >
                <span className="flex items-center gap-2 text-xs sm:text-sm text-black font-medium">
                  <Check size={14} color="#e63535" strokeWidth={3} />
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2.5">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#fafafa] text-black px-3.5 py-3 rounded-xl text-sm outline-none placeholder:text-[#ccc] transition-colors"
              style={{
                border: "1.5px solid #ebebeb",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#e63535")}
              onBlur={(e) => (e.target.style.borderColor = "#ebebeb")}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#fafafa] text-black px-3.5 py-3 rounded-xl text-sm outline-none placeholder:text-[#ccc] transition-colors"
              style={{
                border: "1.5px solid #ebebeb",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#e63535")}
              onBlur={(e) => (e.target.style.borderColor = "#ebebeb")}
            />
            <button
              onClick={handleBuy}
              disabled={loading}
              className="text-white border-none py-3.5 rounded-full text-sm sm:text-[15px] font-semibold mt-1 transition-all active:scale-95"
              style={{
                background: loading
                  ? "#ccc"
                  : "linear-gradient(135deg, #ff4444, #e63535)",
                boxShadow: loading ? "none" : "0 6px 20px rgba(230,53,53,0.4)",
                cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              {loading ? "Redirecting to payment..." : "Get SlapWindows for $3"}
            </button>
          </div>
          <p className="text-[11px] text-[#ccc] mt-3 font-normal">
            All sales final · No refunds · Windows 10/11 + mic required
          </p>
        </div>
      </section>

      {/* FAQ */}
      {page.faqs.length > 0 && (
        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-2xl mx-auto">
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3 text-center">
            FAQ
          </p>
          <h2
            className="text-2xl sm:text-[1.8rem] font-bold mb-6 sm:mb-8 text-center"
            style={{ letterSpacing: "-1px" }}
          >
            Common questions
          </h2>
          {page.faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #f0eded" }}>
              <div
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="py-4 text-sm sm:text-base cursor-pointer flex justify-between items-center gap-4 text-[#333] hover:text-[#e63535] transition-colors font-medium"
              >
                <span>{f.q}</span>
                <span style={{ color: "#ccc", flexShrink: 0 }}>
                  {openFaq === i ? (
                    <Check size={16} />
                  ) : (
                    <HelpCircle size={16} />
                  )}
                </span>
              </div>
              {openFaq === i && (
                <div className="text-xs sm:text-sm text-[#888] pb-4 leading-relaxed font-normal">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* FOOTER */}
      <footer
        className="px-4 sm:px-8 py-8 text-center flex flex-col items-center text-sm text-[#aaa]"
        style={{ borderTop: "1px solid #ede8e8" }}
      >
        <p className="font-medium">
          built with frustration by someone whose laptop had it coming
        </p>
        <p className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
          {[
            ["built with love by amitkushh", "https://x.com/amitkushh/"],
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
            ["Guide", "/guide"],
            ["Support", "mailto:support@slapwindows.site"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              className="text-[#bbb] hover:text-[#666] transition-colors font-medium"
              style={{ textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        </p>
        <p className="mt-3 text-[#ddd] text-xs font-normal">
          © 2026 SlapWindows
        </p>
      </footer>
    </main>
  );
}
