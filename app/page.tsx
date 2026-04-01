"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [activePack, setActivePack] = useState(0);
  const [slapCount, setSlapCount] = useState(1247839);
  const [slapPopup, setSlapPopup] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sensitivity, setSensitivity] = useState(5);
  const [cooldown, setCooldown] = useState(3);

  const sounds = [
    "OUCH!!",
    "STOP!!",
    "WHY?!",
    "OW OW OW",
    "NOT AGAIN",
    "PLS NO",
  ];

  const packs = [
    { emoji: "💋", name: "Sexy", desc: "Use headphones" },
    { emoji: "🐐", name: "Goat", desc: "20 clips" },
    { emoji: "😤", name: "Angry", desc: "18 clips" },
    { emoji: "😭", name: "Dramatic", desc: "22 clips" },
    { emoji: "🤖", name: "Robot", desc: "15 clips" },
    { emoji: "👶", name: "Baby", desc: "17 clips" },
    { emoji: "🎙", name: "Commentator", desc: "21 clips" },
  ];

  const faqs = [
    {
      q: "Will it trigger while typing?",
      a: "No. The mic detection is tuned to sharp impact sounds. Normal typing won't trigger it. You can also adjust sensitivity in settings.",
    },
    {
      q: "Does it work without a mic?",
      a: "You need a microphone for slap detection. All Windows laptops have a built-in mic, so you're covered. USB Moaner mode works without mic.",
    },
    {
      q: "How do I get my license key?",
      a: "After payment, your license key is emailed to you instantly. Enter it in the app to unlock everything.",
    },
    {
      q: "Can I get a refund?",
      a: "If SlapWindows doesn't work on your machine, reach out within 7 days for a full refund. No questions asked.",
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
      const data = await res.json();
      window.location.href = data.checkout_url;
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#fdf8f8] text-black min-h-screen">
      {/* NAV */}
      <nav className="flex justify-between items-center px-4 sm:px-8 py-4 sticky top-0 backdrop-blur-md z-100 border-b border-[#f0d0d0]">
        <div className="text-base sm:text-lg font-medium tracking-tight">
          SlapWindows
        </div>
        <div className="flex gap-3 sm:gap-6 items-center">
          <span
            onClick={() => scrollTo("faq")}
            className="hidden sm:inline text-sm text-[#999] cursor-pointer hover:text-[#797979] transition-colors"
          >
            FAQ
          </span>
          <span
            onClick={() => scrollTo("pricing")}
            className="hidden sm:inline text-sm text-[#999] cursor-pointer hover:text-[#797979] transition-colors"
          >
            Pricing
          </span>
          <button
            onClick={() => scrollTo("pricing")}
            className="bg-[#e63535] text-white border-none px-4 py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer hover:bg-[#cc2020] transition-colors whitespace-nowrap"
          >
            Buy $4
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center px-4 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-12">
        <div className="inline-block bg-[#1a1a1a] border border-[#333] text-[#aaa] text-xs px-3 py-1 rounded-full mb-5 sm:mb-6">
          Windows version of SlapMac
        </div>

        <h1 className="text-[2.6rem] sm:text-5xl font-semibold tracking-[-2px] leading-[1.05] mb-4">
          Slap your
          <br />
          <span className="text-[#e63535]">Windows laptop.</span>
          <br />
          It screams back.
        </h1>

        <p className="text-base sm:text-lg text-[#777] mb-8 sm:mb-10">
          That's it. That's the app.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <button
            onClick={() => scrollTo("pricing")}
            className="bg-[#e63535] text-white border-none px-7 py-3.5 rounded-full text-base font-medium cursor-pointer hover:bg-[#cc2020] transition-colors"
          >
            Get SlapWindows — $4
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="bg-transparent text-black border border-[#333] px-7 py-3.5 rounded-full text-base cursor-pointer hover:border-[#555] transition-colors"
          >
            How does it work?
          </button>
        </div>

        <p className="text-xs text-[#555] mt-4">
          Windows 10/11 · Microphone required
        </p>

        <div className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#777]">
          Total slaps:{" "}
          <span className="text-[#e63535] font-medium">
            {slapCount.toLocaleString()}
          </span>
        </div>
      </section>

      {/* DEMO */}
      <section className="px-4 sm:px-8 py-8 sm:py-12 border-b border-[#e8c8c8]">
        <div className="bg-white py-8 sm:py-10 rounded-3xl border border-[#e8c8c8]">
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3 text-center">
            Try it
          </p>
          <h2 className="text-xl sm:text-[1.8rem] font-semibold tracking-[-1px] mb-3 text-center px-4">
            Your laptop has feelings now
          </h2>
          <p className="text-sm sm:text-base text-[#666] mb-6 text-center px-4">
            Click the laptop to simulate a slap
          </p>

          <div className="flex justify-center">
            <div
              onClick={handleSlap}
              className="inline-block relative cursor-pointer select-none"
            >
              {slapPopup && (
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#e63535] text-white text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap animate-bounce">
                  {slapPopup}
                </div>
              )}
              <div className="w-40 h-24 sm:w-56 sm:h-36 bg-[#1c1c1e] rounded-xl border-2 border-[#333] flex items-center justify-center text-4xl sm:text-5xl transition-transform duration-75 hover:scale-95 active:scale-90">
                💻
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#555] mt-8 text-center px-4">
            In real app — just slap your desk or laptop lid
          </p>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-[#e8c8c8]">
        {[
          {
            icon: "🎙",
            title: "Mic detection",
            desc: "Detects slap via microphone",
          },
          {
            icon: "🔊",
            title: "Volume scales",
            desc: "Harder slap = louder scream",
          },
          {
            icon: "🔧",
            title: "System tray",
            desc: "No dock icon, lurks silently",
          },
          {
            icon: "🔌",
            title: "USB moaner",
            desc: "Reacts on plug/unplug too",
          },
          { icon: "📊", title: "Slap counter", desc: "Tracks lifetime slaps" },
        ].map((f, i) => (
          <div
            key={i}
            className="p-4 sm:p-6 border-r border-b border-[#e8c8c8] text-center"
          >
            <div className="text-xl sm:text-[22px] mb-2">{f.icon}</div>
            <div className="text-xs sm:text-[13px] font-medium">{f.title}</div>
            <div className="text-[10px] sm:text-xs text-[#666] mt-1 leading-snug">
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
        <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-semibold tracking-[-1px] mb-3">
          Seven moods of protest
        </h2>
        <p className="text-sm sm:text-base text-[#666] mb-8 sm:mb-10 max-w-md mx-auto">
          130+ sound clips across 7 voice packs. Your office will have
          questions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5 max-w-2xl mx-auto">
          {packs.map((p, i) => (
            <div
              key={i}
              onClick={() => setActivePack(i)}
              className={`rounded-xl p-4 sm:p-5 cursor-pointer text-left transition-colors ${
                activePack === i
                  ? "bg-white border border-[#e63535]"
                  : "bg-white border border-[#ddd] hover:border-[#aaa]"
              }`}
            >
              <div className="text-xl mb-1.5">{p.emoji}</div>
              <div className="text-xs sm:text-[13px] font-medium">{p.name}</div>
              <div className="text-[10px] sm:text-[11px] text-[#555] mt-0.5">
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SETTINGS SLIDERS */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-6 sm:p-10">
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
            Settings
          </p>
          <h2 className="text-2xl sm:text-[1.8rem] font-semibold tracking-[-1px] mb-6 sm:mb-8">
            Dial in your slap
          </h2>

          {[
            {
              label: "Sensitivity",
              value: sensitivity,
              setValue: setSensitivity,
              min: 1,
              max: 10,
              display: String(sensitivity),
              left: "Butterfly landing",
              right: "Full commitment",
            },
            {
              label: "Cooldown",
              value: cooldown,
              setValue: setCooldown,
              min: 1,
              max: 10,
              display: (cooldown * 0.2).toFixed(1) + "s",
              left: "Rapid-fire",
              right: "Dramatic pauses",
            },
          ].map((s, i) => (
            <div key={i} className="mb-6 text-left">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs sm:text-[13px] text-[#999] w-24 shrink-0 font-medium">
                  {s.label}
                </span>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  value={s.value}
                  onChange={(e) => s.setValue(Number(e.target.value))}
                  className="flex-1 accent-[#e63535]"
                />
                <span className="text-sm text-[#e63535] font-medium w-10 text-right shrink-0">
                  {s.display}
                </span>
              </div>
              <div className="flex justify-between text-[10px] sm:text-[11px] text-[#aaa] pl-26">
                <span>{s.left}</span>
                <span>{s.right}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USB MOANER */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 text-center">
        <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
          Bonus feature
        </p>
        <h2 className="text-2xl sm:text-[1.8rem] font-semibold tracking-[-1px] mb-3">
          USB Moaner
        </h2>
        <p className="text-sm sm:text-base text-[#666] mb-6 max-w-sm mx-auto">
          Plug or unplug a USB device. It moans. You're welcome.
        </p>

        <div className="flex items-center gap-4 sm:gap-6 bg-white border border-[#e8c8c8] rounded-xl px-5 sm:px-8 py-5 sm:py-6 max-w-md mx-auto text-left">
          <div className="text-2xl sm:text-[32px] shrink-0">🔌</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-[15px] font-medium mb-1">
              USB Moaner mode
            </h3>
            <p className="text-xs sm:text-[13px] text-[#666] leading-relaxed">
              Your laptop reacts every time you connect or disconnect a device.
            </p>
          </div>
          <div className="w-10 h-6 bg-[#e63535] rounded-full relative cursor-pointer shrink-0">
            <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-4 sm:px-8 py-14 sm:py-20 text-center">
        <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
          Pricing
        </p>
        <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-semibold tracking-[-1px] mb-3">
          One-time. No subscriptions.
        </h2>
        <p className="text-sm sm:text-base text-[#666] mb-8 max-w-xs mx-auto">
          Less than a chai. More fun than your antivirus.
        </p>

        <div className="bg-white border border-[#ddd] rounded-2xl p-6 sm:p-10 max-w-sm mx-auto w-full">
          <div className="text-6xl sm:text-[4rem] font-bold tracking-[-2px]">
            <sup className="text-xl sm:text-2xl font-normal align-super">$</sup>
            4
          </div>
          <div className="text-xs sm:text-sm text-[#666] mb-6">
            one-time payment · lifetime license
          </div>

          <ul className="list-none text-left mb-8">
            {[
              "All 7 voice packs (130+ sounds)",
              "USB Moaner mode",
              "Lifetime updates",
              "License key via email",
              "Windows 10 & 11 support",
            ].map((f, i) => (
              <li
                key={i}
                className="text-xs sm:text-sm text-black py-2 border-b border-[#eee]"
              >
                <span className="text-[#e63535]">✓ </span>
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
              className="bg-[#fafafa] border border-[#ddd] text-black px-3.5 py-3 rounded-lg text-sm outline-none placeholder:text-[#aaa] focus:border-[#e63535] transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#fafafa] border border-[#ddd] text-black px-3.5 py-3 rounded-lg text-sm outline-none placeholder:text-[#aaa] focus:border-[#e63535] transition-colors"
            />
            <button
              onClick={handleBuy}
              disabled={loading}
              className={`text-white border-none py-3.5 rounded-full text-sm sm:text-[15px] font-medium mt-1 transition-colors ${
                loading
                  ? "bg-[#aaa] cursor-not-allowed"
                  : "bg-[#e63535] cursor-pointer hover:bg-[#cc2020]"
              }`}
            >
              {loading ? "Redirecting to payment..." : "Get SlapWindows for $4"}
            </button>
          </div>
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
        <h2 className="text-2xl sm:text-[1.8rem] font-semibold tracking-[-1px] mb-6 sm:mb-8 text-center">
          Common questions
        </h2>
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-[#e8c8c8]">
            <div
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="py-4 text-sm sm:text-base cursor-pointer flex justify-between items-center gap-4 text-black hover:text-[#e63535] transition-colors"
            >
              <span>{f.q}</span>
              <span className="text-lg shrink-0">
                {openFaq === i ? "−" : "+"}
              </span>
            </div>
            {openFaq === i && (
              <div className="text-xs sm:text-sm text-[#666] pb-4 leading-relaxed">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="px-4 sm:px-8 py-8 text-center text-xs text-[#888] border-t border-[#e8c8c8]">
        <p>built with frustration by someone whose laptop had it coming</p>
        <p className="mt-2">
          <a
            href="#"
            className="text-[#999] no-underline mx-2 hover:text-[#555] transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-[#999] no-underline mx-2 hover:text-[#555] transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-[#999] no-underline mx-2 hover:text-[#555] transition-colors"
          >
            Support
          </a>
        </p>
        <p className="mt-2 text-[#bbb]">© 2026 SlapWindows</p>
      </footer>
    </main>
  );
}
