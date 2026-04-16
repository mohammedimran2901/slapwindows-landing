"use client";
import { useState } from "react";
import Image from "next/image";
import img from "../public/img.png";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [activePack, setActivePack] = useState(0);
  const [slapCount, setSlapCount] = useState(1247839);
  const [slapPopup, setSlapPopup] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSlapping, setIsSlapping] = useState(false);

  const sounds = [
    "OUCH!!",
    "STOP!!",
    "WHY?!",
    "OW OW OW",
    "NOT AGAIN",
    "PLS NO",
  ];

  const packs = [
    { emoji: "💋", name: "Special", desc: "Use headphones" },
    { emoji: "🥊", name: "Combo Hit", desc: "" },
    { emoji: "👨", name: "Male", desc: "" },
    { emoji: "💨", name: "Fart", desc: "" },
    { emoji: "🎩", name: "Gentleman", desc: "" },
    { emoji: "🌸", name: "Yamete", desc: "" },
    { emoji: "🐐", name: "Goat", desc: "" },
  ];

  const faqs = [
    {
      q: "Will it trigger while typing?",
      a: "No. The mic detection is tuned to sharp impact sounds. Normal typing won't trigger it. You can also adjust sensitivity in settings.",
    },
    {
      q: "Does it work without a mic?",
      a: "You need a microphone for slap detection. All Windows laptops have a built-in mic, so you're covered. USB Sound Pack works without mic.",
    },
    {
      q: "How do I get my license key?",
      a: "After payment, your license key is emailed to you instantly. Enter it in the app to unlock everything.",
    },
    {
      q: "Can I get a refund?",
      a: "All sales are final. Please make sure you have Windows 10/11 and a working microphone before purchasing.",
    },
    {
      q: "Will it drain my battery?",
      a: "No. It sits idle in the system tray and only activates for a split second when a slap is detected.",
    },
  ];

  const handleSlap = () => {
  const word = sounds[Math.floor(Math.random() * sounds.length)];
  setSlapPopup(word);
  setSlapCount((c) => c + 1);
  setTimeout(() => setSlapPopup(""), 800);

  // Image rotate animation
  setIsSlapping(true);
  setTimeout(() => setIsSlapping(false), 300);

  // Single sound
  const audio = new Audio("/sound.wav");
  audio.volume = 0.9;
  audio.play().catch(() => {});
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Google Fonts — Inter */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

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
          
          <div className="text-base sm:text-lg font-bold tracking-tight">
            <a href="https://www.producthunt.com/products/slapwindows?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-slapwindows" target="_blank" rel="noopener noreferrer"><img alt="SlapWindows - Slap your Windows, it screams back | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1113990&amp;theme=light&amp;t=1775621834233" /></a>
          </div>
          <div className="flex gap-3 sm:gap-6 items-center">
            <span
              onClick={() => scrollTo("faq")}
              className="hidden sm:inline text-sm text-[#999] cursor-pointer hover:text-[#555] transition-colors font-medium"
            >
              FAQ
            </span>
            <span
              onClick={() => scrollTo("pricing")}
              className="hidden sm:inline text-sm text-[#999] cursor-pointer hover:text-[#555] transition-colors font-medium"
            >
              Pricing
            </span>
            <a
              href="/guide"
              className="hidden sm:inline text-sm text-[#999] hover:text-[#555] transition-colors font-medium"
              style={{ textDecoration: "none" }}
            >
              📖 Guide
            </a>
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
          {/* Badge */}
          <div
            className="inline-block text-xs px-3 py-1 rounded-full mb-5 sm:mb-6 font-medium"
            style={{
              background: "linear-gradient(135deg, #fff0f0, #fff5f5)",
              border: "1px solid #ffd5d5",
              color: "#e63535",
            }}
          >
            ✦ Windows version of SlapMac
          </div>
          <div className="flex justify-center items-center">
  <Image
    src={img}
    alt="SlapWindows laptop screaming"
    height={700}
    width={700}
    onClick={handleSlap}
    className="cursor-pointer select-none"
    style={{
      transform: isSlapping ? "rotate(-2deg) scale(0.95)" : "rotate(0deg) scale(1)",
      transition: isSlapping
        ? "transform 0.08s ease-in"
        : "transform 0.25s ease-out",
      filter: isSlapping ? "brightness(1.15)" : "brightness(1)",
    }}
  />
</div>

          <h1
            className="text-[2.6rem] sm:text-5xl font-bold tracking-[-2px] mb-4"
            style={{ letterSpacing: "-2.5px" }}
          >
            SlapWindows
          </h1>

          <p className="text-base sm:text-lg text-[#777] mb-8 sm:mb-10 font-normal mx-auto max-w-md">
            Slap your Windows. It screams back. That&apos;s it. That&apos;s the
            app.
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
              onClick={() => scrollTo("faq")}
              className="bg-transparent text-black border border-[#ddd] px-7 py-3.5 rounded-full text-base cursor-pointer hover:border-[#bbb] transition-colors font-medium"
            >
              How does it work?
            </button>
          </div>

          <p className="text-xs text-[#aaa] mt-4 font-medium">
            Windows 10/11 · Microphone required · One-time payment
          </p>
        </section>

        {/* DEMO */}
        <section
          className="px-4 sm:px-8 py-8 sm:py-12"
          style={{ borderBottom: "1px solid #ede8e8" }}
        >
          <div
            className="py-10 sm:py-12 rounded-3xl"
            style={{
              background: "#fff",
              border: "1px solid #ede8e8",
              boxShadow: "0 2px 24px rgba(0,0,0,0.04)",
            }}
          >
            <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3 text-center">
              Try it
            </p>
            <h2 className="text-xl sm:text-[1.8rem] font-bold tracking-[-1px] mb-3 text-center px-4">
              Your laptop has feelings now
            </h2>
            <p className="text-sm sm:text-base text-[#888] mb-8 text-center px-4 font-normal">
              Click the laptop to simulate a slap
            </p>

            <div className="flex justify-center">
              <div
                onClick={handleSlap}
                className="inline-block relative cursor-pointer select-none"
              >
                {slapPopup && (
                  <div
                    className="absolute -top-9 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg, #ff4444, #e63535)",
                      boxShadow: "0 4px 14px rgba(230,53,53,0.5)",
                    }}
                  >
                    {slapPopup}
                  </div>
                )}
                <div className="w-40 h-24 sm:w-56 sm:h-36 bg-[#1c1c1e] rounded-2xl border-2 border-[#333] flex items-center justify-center text-4xl sm:text-5xl transition-transform duration-75 hover:scale-95 active:scale-90">
                  💻
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#aaa] mt-8 text-center px-4 font-medium">
              In real app — just slap your desk or laptop lid
            </p>
          </div>
        </section>

        {/* FEATURES STRIP */}
        <section
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ borderBottom: "1px solid #ede8e8" }}
        >
          {[
            {
              icon: "🎙",
              title: "Mic detection",
              desc: "Detects slap via microphone",
            },
            {
              icon: "🔧",
              title: "System tray",
              desc: "No dock icon, lurks silently",
            },
            {
              icon: "🔌",
              title: "USB Sound Pack",
              desc: "Reacts on plug/unplug too",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 text-center"
              style={{
                borderRight: "1px solid #ede8e8",
                borderBottom: "1px solid #ede8e8",
              }}
            >
              <div className="text-xl sm:text-[22px] mb-2">{f.icon}</div>
              <div className="text-xs sm:text-[13px] font-semibold">
                {f.title}
              </div>
              <div className="text-[10px] sm:text-xs text-[#999] mt-1 leading-snug font-normal">
                {f.desc}
              </div>
            </div>
          ))}
        </section>

        {/* VOICE PACKS */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 text-center">
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
            Sound Packs
          </p>
          <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-bold tracking-[-1px] mb-3">
            Seven moods of protest
          </h2>
          <p className="text-sm sm:text-base text-[#999] mb-8 sm:mb-10 max-w-md mx-auto font-normal">
            sound clips across 7 voice packs. Your office will have questions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5 max-w-2xl mx-auto">
            {packs.map((p, i) => (
              <div
                key={i}
                onClick={() => setActivePack(i)}
                className="rounded-xl p-4 sm:p-5 cursor-pointer text-left transition-all"
                style={{
                  background:
                    activePack === i
                      ? "linear-gradient(135deg, #fff5f5, #fff0f0)"
                      : "#fff",
                  border:
                    activePack === i
                      ? "1.5px solid #e63535"
                      : "1px solid #ebebeb",
                  boxShadow:
                    activePack === i
                      ? "0 4px 16px rgba(230,53,53,0.12)"
                      : "none",
                }}
              >
                <div className="text-xl mb-1.5">{p.emoji}</div>
                <div className="text-xs sm:text-[13px] font-semibold">
                  {p.name}
                </div>
                {p.desc && (
                  <div className="text-[10px] sm:text-[11px] text-[#aaa] mt-0.5 font-normal">
                    {p.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* USB MOANER */}
        <section
          className="px-4 sm:px-8 py-12 sm:py-16 text-center"
          style={{ borderTop: "1px solid #f5f0f0" }}
        >
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
            Bonus feature
          </p>
          <h2 className="text-2xl sm:text-[1.8rem] font-bold tracking-[-1px] mb-3">
            USB Sound Pack
          </h2>
          <p className="text-sm sm:text-base text-[#999] mb-6 max-w-sm mx-auto font-normal">
            Plug or unplug a USB device. It moans. You&apos;re welcome.
          </p>

          <div
            className="flex items-center gap-4 sm:gap-6 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 max-w-md mx-auto text-left"
            style={{
              background: "#fff",
              border: "1px solid #ede8e8",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div className="text-2xl sm:text-[32px] shrink-0">🔌</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-[15px] font-semibold mb-1">
                USB Sound Pack
              </h3>
              <p className="text-xs sm:text-[13px] text-[#999] leading-relaxed font-normal">
                Your laptop reacts every time you connect or disconnect a
                device.
              </p>
            </div>
            <div
              className="w-10 h-6 rounded-full relative cursor-pointer shrink-0"
              style={{
                background: "linear-gradient(135deg, #ff4444, #e63535)",
              }}
            >
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </div>
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
          <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-bold tracking-[-1px] mb-3">
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
              className="text-6xl sm:text-[4rem] font-black tracking-[-2px]"
              style={{ letterSpacing: "-3px" }}
            >
              <sup className="text-xl sm:text-2xl font-medium align-super">
                $
              </sup>
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
              ].map((f, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-black py-2.5 font-medium"
                  style={{ borderBottom: "1px solid #f5f5f5" }}
                >
                  <span className="text-[#e63535] font-bold">✓ </span>
                  {f}
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
                  boxShadow: loading
                    ? "none"
                    : "0 6px 20px rgba(230,53,53,0.4)",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                {loading
                  ? "Redirecting to payment..."
                  : "👋 Get SlapWindows for $3"}
              </button>
            </div>
            <p className="text-[11px] text-[#ccc] mt-3 font-normal">
              All sales final · No refunds · Windows 10/11 + mic required
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="px-4 sm:px-8 py-12 sm:py-16 max-w-2xl mx-auto"
        >
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3 text-center">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-[1.8rem] font-bold tracking-[-1px] mb-6 sm:mb-8 text-center">
            Common questions
          </h2>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #f0eded" }}>
              <div
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="py-4 text-sm sm:text-base cursor-pointer flex justify-between items-center gap-4 text-[#333] hover:text-[#e63535] transition-colors font-medium"
              >
                <span>{f.q}</span>
                <span className="text-lg shrink-0 font-light text-[#ccc]">
                  {openFaq === i ? "−" : "+"}
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

        {/* FOOTER */}
        <footer
          className="px-4 sm:px-8 py-8 text-center text-sm text-[#aaa]"
          style={{ borderTop: "1px solid #ede8e8" }}
        >
          <p className="font-medium">
            built with frustration by someone whose laptop had it coming
          </p>
          <p className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
            {[
              ["built with 👋 by amitkushh", "https://x.com/amitkushh/"],
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
    </>
  );
}
