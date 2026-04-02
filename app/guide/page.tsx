import Link from "next/link";

type NoteType = "info" | "warning" | "tip";

export default function GuidePage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-180 mx-auto px-8 py-12">

        {/* Back */}
        <Link href="/" className="text-[#666] text-md">
          ← Back to home
        </Link>

        {/* Header */}
        <div className="mt-8 mb-12">
          <p className="text-lg text-[#e63535] uppercase tracking-wider mb-3">
            Setup Guide
          </p>

          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-1px] mb-3 leading-tight">
            How to install & use SlapWindows
          </h1>

          <p className="text-[15px] text-[#666] leading-7">
            Follow these steps in order. The whole setup takes about 2 minutes.
          </p>
        </div>

        {/* STEP 1 */}
        <Step number="01" title="Purchase SlapWindows" status="Start here">
          <p>
            Go to the{" "}
            <Link href="/#pricing" className="text-[#e63535]">
              pricing section
            </Link>{" "}
            and click <Strong>Get SlapWindows — $4</Strong>.
          </p>
        </Step>

        {/* STEP 2 */}
        <Step number="02" title="Check your email for the license key">
          <p>You'll receive a license key like:</p>
          <CodeBlock>SLAP-A1B2-C3D4-E5F6-G7H8</CodeBlock>
          <Note type="warning">
            Check spam folder if not received.
          </Note>
        </Step>

        {/* STEP 3 */}
        <Step number="03" title="Download SlapWindows.exe">
          <SpecRow label="File name" value="SlapWindows.exe" />
          <SpecRow label="Compatible" value="Windows 10 / 11" />
        </Step>

        {/* STEP 4 */}
        <Step number="04" title="Run the app">
          <SubStep n={1} text='Click "More info"' />
          <SubStep n={2} text='Click "Run anyway"' />
        </Step>

        {/* STEP 5 */}
        <Step number="05" title="Enter your license key">
          <SubStep n={1} text="Copy license key" />
          <SubStep n={2} text="Paste in app" />
        </Step>

        {/* STEP 6 */}
        <Step number="06" title="Runs in system tray">
          <Note type="tip">
            Check hidden icons (▲) if not visible.
          </Note>
        </Step>

        {/* STEP 7 */}
        <Step number="07" title="Slap your laptop">
          <SpecRow label="Trigger" value="Sharp sound" />
        </Step>

        {/* STEP 8 */}
        <Step number="08" title="Customize settings" last>
          <SettingRow name="Sound Pack" desc="Choose sound style" />
          <SettingRow name="Sensitivity" desc="Adjust detection level" />
        </Step>

        {/* FAQ */}
        <div className="mt-12 pt-12 border-t border-[#1a1a1a]">
          <h2 className="text-lg font-semibold mb-6">Common issues</h2>

          <FaqItem q="No sound plays">
            Check volume & sensitivity.
          </FaqItem>

          <FaqItem q="Tray icon missing" last>
            Click ▲ in taskbar.
          </FaqItem>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#111] border border-[#222] rounded-xl p-8 text-center">
          <p className="text-[15px] text-[#888] mb-4">
            Still need help?
          </p>

          <a
            href="mailto:support@slapwindows.com"
            className="inline-block bg-[#e63535] text-white px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Contact Support
          </a>

          <p className="text-xs text-[#444] mt-4">
            We reply within a few hours.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1a1a1a] mt-12 pt-8 text-xs text-[#444] flex justify-between flex-wrap gap-2">
          <span>© 2026 SlapWindows</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#666]">Privacy</Link>
            <Link href="/terms" className="text-[#666]">Terms</Link>
            <a href="mailto:support@slapwindows.com" className="text-[#666]">Support</a>
          </div>
        </div>

      </div>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Step({ number, title, children, status, last }: any) {
  return (
    <div className={`flex gap-6 relative ${!last ? "mb-10" : ""}`}>
      {!last && (
        <div className="absolute left-5 top-12 -bottom-10 w-px bg-[#1a1a1a]" />
      )}

      <div className="w-10 h-10 bg-[#e63535] rounded-full flex items-center justify-center text-xs font-bold text-white mt-1 shrink-0">
        {number}
      </div>

      <div className="flex-1 pb-4">
        {status && (
          <p className="text-[11px] text-[#e63535] uppercase tracking-wider font-semibold mb-1">
            {status}
          </p>
        )}

        <h2 className="text-[1.1rem] font-semibold mb-4 text-black">
          {title}
        </h2>

        <div className="text-sm text-black leading-7">
          {children}
        </div>
      </div>
    </div>
  );
}

function Note({ children, type = "info" }: { children: React.ReactNode; type?: NoteType }) {
  const styles = {
    info: "bg-[#0d1a0d] border-[#1a3a1a] text-[#4a9a4a]",
    warning: "bg-[#1a0d0d] border-[#3a1a1a] text-[#e63535]",
    tip: "bg-[#0d0d1a] border-[#1a1a3a] text-[#4a6ae6]",
  }[type];

  return (
    <div className={`border rounded-lg px-4 py-3 my-4 ${styles}`}>
      <span className="text-[11px] font-bold uppercase tracking-wider mr-2">
        {type}
      </span>
      <span className="text-[13px] text-[#888]">{children}</span>
    </div>
  );
}

function CodeBlock({ children }: any) {
  return (
    <div className="bg-[#111] border border-[#222] rounded-lg px-5 py-3 my-3 text-center font-mono text-[15px] tracking-[3px] text-[#e63535]">
      {children}
    </div>
  );
}

function Strong({ children }: any) {
  return <strong className=" font-semibold">{children}</strong>;
}

function SubStep({ n, text }: any) {
  return (
    <div className="flex gap-3 items-start mb-2">
      <div className="w-5 h-5 border border-[#333] rounded-full flex items-center justify-center text-[11px] text-[#e63535] font-semibold mt-1">
        {n}
      </div>
      <p className="text-sm text-[#999]">{text}</p>
    </div>
  );
}

function SpecRow({ label, value }: any) {
  return (
    <div className="flex gap-3 py-2 border-b border-[#111] text-sm">
      <span className="text-[#555] min-w-[140px]">{label}</span>
      <span className="text-[#aaa]">{value}</span>
    </div>
  );
}

function SettingRow({ name, desc }: any) {
  return (
    <div className="bg-[#111] border border-[#1a1a1a] rounded-lg px-4 py-3 mb-2">
      <p className="text-sm font-semibold text-[#ddd]">{name}</p>
      <p className="text-sm text-[#666]">{desc}</p>
    </div>
  );
}

function FaqItem({ q, children, last }: any) {
  return (
    <div className={`${!last ? "border-b border-[#1a1a1a]" : ""} py-5`}>
      <p className="text-sm font-semibold text-[#ddd] mb-2">{q}</p>
      <p className="text-sm text-[#666]">{children}</p>
    </div>
  );
}