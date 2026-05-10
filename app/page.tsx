"use client";
import { useState } from "react";
import Image from "next/image";
import img from "../public/img.png";
import {
  Mic,
  Settings,
  Usb,
  Heart,
  Swords,
  User,
  Wind,
  Crown,
  Flower2,
  Rabbit,
  Angry,
  Guitar,
  Gift,
  Laugh,
  Bot,
  Upload,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Check,
  Sparkles,
  Volume2,
  Music,
} from "lucide-react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [activePack, setActivePack] = useState(0);
  const [slapPopup, setSlapPopup] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSlapping, setIsSlapping] = useState(false);
  const [playingSound, setPlayingSound] = useState<number | null>(null);

  const sounds = [
    "OUCH!!",
    "STOP!!",
    "WHY?!",
    "OW OW OW",
    "NOT AGAIN",
    "PLS NO",
  ];

  const packs = [
    {
      icon: <Heart size={20} color="#e63535" />,
      name: "Special",
      desc: "Use headphones",
    },
    { icon: <Swords size={20} color="#e63535" />, name: "Combo Hit", desc: "" },
    { icon: <User size={20} color="#e63535" />, name: "Male", desc: "" },
    { icon: <Wind size={20} color="#e63535" />, name: "Fart", desc: "" },
    { icon: <Crown size={20} color="#e63535" />, name: "Gentleman", desc: "" },
    { icon: <Flower2 size={20} color="#e63535" />, name: "Yamete", desc: "" },
    { icon: <Rabbit size={20} color="#e63535" />, name: "Goat", desc: "" },
    { icon: <Angry size={20} color="#e63535" />, name: "Angry", desc: "New!" },
    { icon: <Guitar size={20} color="#e63535" />, name: "Metal", desc: "New!" },
    { icon: <Gift size={20} color="#e63535" />, name: "Santa", desc: "New!" },
    {
      icon: <Laugh size={20} color="#e63535" />,
      name: "Evil Laugh",
      desc: "New!",
    },
    { icon: <Bot size={20} color="#e63535" />, name: "Robot", desc: "New!" },
  ];

  const interactiveSounds = [
    {
      icon: <Heart size={22} color="#e63535" />,
      name: "Special",
      file: "/sounds/special.mp3",
    },
    {
      icon: <Swords size={22} color="#e63535" />,
      name: "Combo Hit",
      file: "/sounds/combo.wav",
    },
    {
      icon: <User size={22} color="#e63535" />,
      name: "Male",
      file: "/sounds/male.wav",
    },
    {
      icon: <Wind size={22} color="#e63535" />,
      name: "Fart",
      file: "/sounds/fart.wav",
    },
    {
      icon: <Crown size={22} color="#e63535" />,
      name: "Gentleman",
      file: "/sounds/gentleman.mp3",
    },
    {
      icon: <Flower2 size={22} color="#e63535" />,
      name: "Yamete",
      file: "/sounds/yamete.mp3",
    },
    {
      icon: <Rabbit size={22} color="#e63535" />,
      name: "Goat",
      file: "/sounds/goat.mp3",
    },
    {
      icon: <Angry size={22} color="#e63535" />,
      name: "Angry",
      file: "/sounds/angry.ogg",
    },
    {
      icon: <Guitar size={22} color="#e63535" />,
      name: "Metal",
      file: "/sounds/metal.wav",
    },
    {
      icon: <Gift size={22} color="#e63535" />,
      name: "Santa",
      file: "/sounds/santa.wav",
    },
    {
      icon: <Laugh size={22} color="#e63535" />,
      name: "Evil Laugh",
      file: "/sounds/evil.wav",
    },
    {
      icon: <Bot size={22} color="#e63535" />,
      name: "Robot",
      file: "/sounds/robot.wav",
    },
  ];

  const whatsNew = [
    {
      icon: <Angry size={20} color="#e63535" />,
      title: "Angry Pack",
      desc: "New sound pack",
      isNew: true,
    },
    {
      icon: <Guitar size={20} color="#e63535" />,
      title: "Metal Pack",
      desc: "New sound pack",
      isNew: true,
    },
    {
      icon: <Gift size={20} color="#e63535" />,
      title: "Santa Pack",
      desc: "New sound pack",
      isNew: true,
    },
    {
      icon: <Laugh size={20} color="#e63535" />,
      title: "Evil Laugh Pack",
      desc: "New sound pack",
      isNew: true,
    },
    {
      icon: <Bot size={20} color="#e63535" />,
      title: "Robot Pack",
      desc: "New sound pack",
      isNew: true,
    },
    {
      icon: <Upload size={20} color="#e63535" />,
      title: "Custom Sound Upload",
      desc: "Upload your own MP3/WAV",
      isNew: false,
    },
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
    {
      q: "Can I use my own sounds?",
      a: "Yes! v2.0.0 includes Custom Sound Upload. Go to Settings → Upload Sounds → select any MP3 or WAV file. Restart the app and select Custom pack from tray.",
    },
  ];

  const handleSlap = () => {
    const word = sounds[Math.floor(Math.random() * sounds.length)];
    setSlapPopup(word);
    setTimeout(() => setSlapPopup(""), 800);
    setIsSlapping(true);
    setTimeout(() => setIsSlapping(false), 300);
    const audio = new Audio("/sound.wav");
    audio.volume = 0.9;
    audio.play().catch(() => {});
  };

  const handlePlaySound = (index: number, file: string) => {
    setPlayingSound(index);
    const audio = new Audio(file);
    audio.volume = 0.9;
    audio.play().catch(() => {});
    audio.onended = () => setPlayingSound(null);
    setTimeout(() => setPlayingSound(null), 3000);
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
            <a
              href="https://www.producthunt.com/products/slapwindows?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-slapwindows"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="SlapWindows - Slap your Windows, it screams back | Product Hunt"
                width="250"
                height="54"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1113990&theme=light&t=1775621834233"
              />
            </a>
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
                transform: isSlapping
                  ? "rotate(-2deg) scale(0.95)"
                  : "rotate(0deg) scale(1)",
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

        {/* VIDEO PREVIEW */}
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
              Preview
            </p>
            <section className="w-full flex flex-col items-center px-4 py-10">
              <h2 className="text-2xl font-bold text-center mb-6">
                👀 See It In Action
              </h2>
              <div className="relative w-70 h-125 sm:w-78.75 sm:h-140 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/KqsnOdI2EM4"
                  title="SlapWindows Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          </div>
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
                <div className="w-40 h-24 sm:w-56 sm:h-36 bg-[#1c1c1e] rounded-2xl border-2 border-[#333] flex items-center justify-center transition-transform duration-75 hover:scale-95 active:scale-90">
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
              icon: <Mic size={22} color="#e63535" />,
              title: "Mic detection",
              desc: "Detects slap via microphone",
            },
            {
              icon: <Settings size={22} color="#e63535" />,
              title: "System tray",
              desc: "No dock icon, lurks silently",
            },
            {
              icon: <Usb size={22} color="#e63535" />,
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
              <div className="flex justify-center mb-2">{f.icon}</div>
              <div className="text-xs sm:text-[13px] font-semibold">
                {f.title}
              </div>
              <div className="text-[10px] sm:text-xs text-[#999] mt-1 leading-snug font-normal">
                {f.desc}
              </div>
            </div>
          ))}
        </section>

        {/* WHAT'S NEW IN V2 */}
        <section
          className="px-4 sm:px-8 py-12 sm:py-16 text-center"
          style={{ borderBottom: "1px solid #ede8e8" }}
        >
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
            v2.0.0
          </p>
          <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-bold tracking-[-1px] mb-3">
            What&apos;s new
          </h2>
          <p className="text-sm sm:text-base text-[#999] mb-8 max-w-md mx-auto font-normal">
            Free update for all existing users. Download and enjoy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            {whatsNew.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl px-5 py-4 text-left"
                style={{
                  background: "#fff",
                  border: "1px solid #ede8e8",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <div className="shrink-0">{f.icon}</div>
                <div>
                  <div className="text-sm font-semibold">{f.title}</div>
                  <div className="text-xs text-[#aaa] mt-0.5">{f.desc}</div>
                </div>
                {f.isNew && (
                  <div
                    className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0"
                    style={{
                      background: "#fff0f0",
                      color: "#e63535",
                      border: "1px solid #ffd5d5",
                    }}
                  >
                    NEW
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* VOICE PACKS */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 text-center">
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
            Sound Packs
          </p>
          <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-bold tracking-[-1px] mb-3">
            12 moods of protest
          </h2>
          <p className="text-sm sm:text-base text-[#999] mb-8 sm:mb-10 max-w-md mx-auto font-normal">
            Sound clips across 12 voice packs. Your office will have questions.
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
                <div className="mb-1.5">{p.icon}</div>
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

        {/* INTERACTIVE SOUND PLAYER */}
        <section
          className="px-4 sm:px-8 py-12 sm:py-16 text-center"
          style={{ borderTop: "1px solid #f5f0f0" }}
        >
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
            Listen
          </p>
          <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-bold tracking-[-1px] mb-3">
            Click to hear each pack
          </h2>
          <p className="text-sm sm:text-base text-[#999] mb-8 sm:mb-10 max-w-md mx-auto font-normal">
            Tap any pack to preview the sound your laptop makes when slapped.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {interactiveSounds.map((s, i) => (
              <button
                key={i}
                onClick={() => handlePlaySound(i, s.file)}
                className="rounded-xl p-4 sm:p-5 text-left transition-all relative overflow-hidden"
                style={{
                  background:
                    playingSound === i
                      ? "linear-gradient(135deg, #fff5f5, #fff0f0)"
                      : "#fff",
                  border:
                    playingSound === i
                      ? "1.5px solid #e63535"
                      : "1px solid #ebebeb",
                  boxShadow:
                    playingSound === i
                      ? "0 4px 16px rgba(230,53,53,0.15)"
                      : "0 2px 8px rgba(0,0,0,0.03)",
                  cursor: "pointer",
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                {playingSound === i && (
                  <div
                    className="absolute top-2 right-2 w-2 h-2 rounded-full"
                    style={{
                      background: "#e63535",
                      animation: "pulse 0.8s infinite",
                    }}
                  />
                )}
                <div className="mb-2">{s.icon}</div>
                <div className="text-xs sm:text-[13px] font-semibold text-left">
                  {s.name}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {playingSound === i ? (
                    <>
                      <Pause size={10} color="#e63535" />
                      <span className="text-[10px] text-[#e63535] font-medium">
                        Playing...
                      </span>
                    </>
                  ) : (
                    <>
                      <Play size={10} color="#aaa" />
                      <span className="text-[10px] text-[#aaa] font-normal">
                        Play sample
                      </span>
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>
          <p className="text-xs text-[#ccc] mt-6 font-normal">
            These are sample clips — full packs have multiple variations
          </p>
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.5; transform: scale(1.3); }
            }
          `}</style>
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
            <Usb size={32} color="#e63535" className="shrink-0" />
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

        {/* CUSTOM SOUND UPLOAD */}
        <section
          className="px-4 sm:px-8 py-12 sm:py-16 text-center"
          style={{ borderTop: "1px solid #f5f0f0" }}
        >
          <p className="text-xs font-bold text-[#e63535] tracking-widest uppercase mb-3">
            New in v2.0.0
          </p>
          <h2 className="text-2xl sm:text-[1.8rem] font-bold tracking-[-1px] mb-3 flex items-center justify-center gap-2">
            <Music size={24} color="#e63535" /> Custom Sound Upload
          </h2>
          <p className="text-sm sm:text-base text-[#999] mb-8 max-w-sm mx-auto font-normal">
            Use your own MP3 or WAV file. Make your laptop scream in any voice
            you want.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
            {[
              {
                step: "1",
                icon: <Settings size={16} color="#fff" />,
                text: "Open Settings → Upload Sounds",
              },
              {
                step: "2",
                icon: <Upload size={16} color="#fff" />,
                text: "Select your MP3 or WAV file",
              },
              {
                step: "3",
                icon: <Volume2 size={16} color="#fff" />,
                text: "Select Custom pack → Slap!",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl px-5 py-5 text-center"
                style={{
                  background: "#fff",
                  border: "1px solid #ede8e8",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "linear-gradient(135deg, #ff4444, #e63535)",
                  }}
                >
                  {s.icon}
                </div>
                <div className="text-xs sm:text-sm text-[#555] font-medium leading-snug">
                  {s.text}
                </div>
              </div>
            ))}
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
                "All 12 voice packs",
                "Custom Sound Upload",
                "USB Sound Pack mode",
                "Lifetime updates",
                "License key via email",
                "Windows 10 & 11 support",
              ].map((f, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-black py-2.5 font-medium flex items-center gap-2"
                  style={{ borderBottom: "1px solid #f5f5f5" }}
                >
                  <Check size={14} color="#e63535" strokeWidth={3} />
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
                {openFaq === i ? (
                  <ChevronUp size={18} color="#ccc" />
                ) : (
                  <ChevronDown size={18} color="#ccc" />
                )}
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
          className="px-4 sm:px-8 py-8 text-center flex flex-col items-center text-sm text-[#aaa]"
          style={{ borderTop: "1px solid #ede8e8" }}
        >
          <a
            href="https://www.scrolllaunch.com/products/slapwindows?utm_source=badge&utm_medium=embed&utm_campaign=slapwindows&ref=scrolllaunch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.scrolllaunch.com/api/badge/slapwindows"
              alt="Featured on ScrollLaunch"
              width="220"
              height="48"
              loading="lazy"
            />
          </a>
          <p className="font-medium">
            built with frustration by someone whose laptop had it coming
          </p>
          <p className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
            {[
              ["built with 👋 by amitkushh", "https://x.com/amitkushh/"],
              ["Privacy", "/privacy"],
              ["Terms", "/terms"],
              ["Guide", "/guide"],
              ["Support", "mailto:amitkush.dev@gmail.com"],
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
