import Image from "next/image";
import Link from "next/link";

type NoteType = "info" | "warning" | "tip";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#faf8f8]">
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
          <p className="text-[14px] text-[#999] leading-[1.8]">
            Go to the{" "}
            <Link href="/#pricing" className="text-[#e63535]">
              pricing section
            </Link>{" "}
            on the homepage. Enter your name and email address, then click{" "}
            <Strong>Get SlapWindows — $3</Strong>. You will be redirected to a
            secure checkout page to complete your payment.
          </p>
          <Note type="info">
            Your card details are handled securely by our payment processor — we never see or store them.
          </Note>
        </Step>

        {/* STEP 2 */}
        <Step number="02" title="Check your email for the license key">
          <p className="text-[14px] text-[#999] leading-[1.8] mb-3">
            Within a few seconds of payment, you will receive an email with your
            personal license key. It looks like this:
          </p>
          <CodeBlock>SLAP-A1B2-C3D4-E5F6-G7H8</CodeBlock>
          <p className="text-[14px] text-[#999] leading-[1.8] mt-3">
            Copy this key — you will need it in Step 5.
          </p>
          <Note>
            Don&apos;t see the email? Check your spam or junk folder. If it&apos;s not there
            after 5 minutes, email us at support@slapwindows.site.
          </Note>
        </Step>

        {/* STEP 3 */}
        <Step number="03" title="Download SlapWindows.exe">
          <p className="text-[14px] text-[#999] leading-[1.8] mb-3">
            In the same email, click the <Strong>Download SlapWindows.exe</Strong>{" "}
            button. The file will download to your computer.
          </p>
          <SpecRow label="File name" value="SlapWindows.exe" />
          <SpecRow label="Compatible with" value="Windows 10 and Windows 11" />
          <SpecRow label="Requires" value="A working microphone (built-in or external)" />
        </Step>

        {/* STEP 4 */}
        <Step number="04" title="Run the app — handle the Windows warning">
          <p className="text-[14px] text-[#999] leading-[1.8] mb-4">
            Double-click <Strong>SlapWindows.exe</Strong>. Windows will show a
            blue security warning — this is normal for indie apps. Here is exactly
            what to do:
          </p>
          <SubStep n={1} text='Click "More info" on the blue warning screen.' />
          <SubStep n={2} text='Click "Run anyway" that appears at the bottom.' />
          <SubStep n={3} text="The SlapWindows activation dialog will open." />
          <Note type="warning">
            Do not click &quot;Don&apos;t run&quot; — that will close the app without launching it.
          </Note>
          <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl px-5 py-4 mt-4">
            <p className="text-[12px] text-[#555] mb-2">Why does this warning appear?</p>
            <p className="text-[13px] text-[#666] leading-relaxed">
              Windows SmartScreen flags apps that don&apos;t have a paid code-signing
              certificate. SlapWindows is safe — it only accesses your microphone
              to detect slap sounds. It does not collect or transmit any data.
            </p>
          </div>
        </Step>

        {/* STEP 5 */}
        <Step number="05" title="Enter your license key">
          <p className="text-[14px] text-[#999] leading-[1.8] mb-4">
            The activation window will appear asking for your license key.
          </p>

          {/* Mock dialog */}
          <div className="bg-[#111] border border-[#333] rounded-xl px-6 py-5 mb-5 max-w-sm">
            <p className="text-[16px] font-semibold text-white mb-1">👋 SlapWindows</p>
            <p className="text-[13px] text-[#666] mb-4">Enter your license key to activate</p>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-2.5 font-mono text-[14px] text-[#aaa] mb-2">
              SLAP-XXXX-XXXX-XXXX-XXXX
            </div>
            <p className="text-[11px] text-[#444] mb-4">Format: SLAP-XXXX-XXXX-XXXX-XXXX</p>
            <div className="bg-[#e63535] rounded-lg py-2.5 text-center text-[14px] font-semibold text-white">
              Activate SlapWindows
            </div>
          </div>

          <SubStep n={1} text="Open the email you received in Step 2." />
          <SubStep n={2} text="Copy your license key (starts with SLAP-)." />
          <SubStep n={3} text="Paste it into the activation box." />
          <SubStep n={4} text='Click "Activate SlapWindows".' />
          <Note type="info">
            Your license key is tied to your purchase. Do not share it — each key is for one user only.
          </Note>
        </Step>

        {/* STEP 6 */}
        <Step number="06" title="The app is now running in your system tray">
          <p className="text-[14px] text-[#999] leading-[1.8] mb-4">
            Once activated, SlapWindows runs silently in the background. Look for
            the <Strong>red circle icon</Strong> in your system tray — the row of
            small icons in the bottom-right corner of your taskbar.
          </p>

          {/* Tray icon screenshot */}
          <Image
            src="/guide-tray-icon.png"
            alt="SlapWindows tray icon location in Windows taskbar"
            className="w-full rounded-xl border border-[#ede8e8] mb-4"
            width={500}
            height={500}
          />

          <Note type="tip">
            Can&apos;t find the icon? Click the <Strong>▲ arrow</Strong> in the
            bottom-right corner of your taskbar to reveal hidden icons.
            SlapWindows shows as a <Strong>red circle icon</Strong> — drag it out
            to always keep it visible.
          </Note>

          <p className="text-[14px] text-[#999] leading-[1.8] mt-4 mb-3">
            Right-click the tray icon to open the full menu:
          </p>

          {/* Tray menu mock */}
          <div className="bg-[#111] border border-[#333] rounded-xl py-2 max-w-60 text-[13px] mb-4">
            <div className="px-4 py-1.5 text-[#555]">Slaps: 164</div>
            <div className="border-t border-[#222] my-1" />
            <div className="px-4 py-1.5 text-[#ccc]">Pause detection</div>
            <div className="px-4 py-1.5 text-[#ccc]">Mute sounds</div>
            <div className="border-t border-[#222] my-1" />
            <div className="px-4 py-1.5 text-[#ccc] font-semibold">Sound Pack ►</div>
            <div className="px-4 py-1.5 text-[#ccc]">USB Sound: ON</div>
            <div className="border-t border-[#222] my-1" />
            <div className="px-4 py-1.5 text-[#ccc]">Settings</div>
            <div className="px-4 py-1.5 text-[#ccc]">Quit SlapWindows</div>
          </div>
        </Step>

        {/* STEP 7 */}
        <Step number="07" title="Slap your laptop">
          <p className="text-[14px] text-[#999] leading-[1.8] mb-4">
            With the app running, firmly slap your desk, your laptop lid, or the
            side of your laptop. The microphone will detect the impact and play a
            sound from your selected pack.
          </p>
          <SpecRow label="Volume" value="Scales with how hard you slap" />
          <SpecRow label="Trigger" value="Sharp impact sound via microphone" />
          <SpecRow label="Won't trigger on" value="Normal typing or background noise" />
          <Note type="tip">
            If it&apos;s not triggering, try increasing <Strong>Sensitivity</Strong> in
            Settings — right-click tray icon → Settings → drag the slider to the right.
          </Note>
        </Step>

        {/* STEP 8 */}
        <Step number="08" title="Customize your sound pack" last>
          <p className="text-[14px] text-[#999] leading-[1.8] mb-4">
            Right-click the tray icon → <Strong>Sound Pack</Strong> to choose your
            pack and a specific sound.
          </p>

          {/* Sound pack screenshot */}
          <Image
            src="/guide-sound-pack.png"
            alt="SlapWindows sound pack selection menu"
            className="w-full rounded-xl border border-[#ede8e8] mb-4"
            width={500}
            height={500}
          />

          {/* Sound pack breakdown */}
          <div className="bg-[#fafafa] border border-[#f0eded] rounded-xl px-5 py-5 mb-4">
            <p className="text-[12px] text-[#aaa] mb-3">Tray menu → Sound Pack</p>
            <div className="flex flex-col gap-1.5 text-[13px] text-[#888]">
              <span>✓ <strong className="text-black font-semibold">Special</strong> — currently selected</span>
              <span className="pl-4 text-[#bbb]">→ Random, Sound 1, Sound 2...</span>
              <span><strong className="text-black font-semibold">Combo Hit</strong> → Random, Sound 1...</span>
              <span><strong className="text-black font-semibold">Male</strong> → Random, Man-1, Man-2, Man-4...</span>
              <span><strong className="text-black font-semibold">Fart</strong> → Random, Sound 1...</span>
              <span><strong className="text-black font-semibold">Gentleman</strong> → Random, Sound 1...</span>
              <span><strong className="text-black font-semibold">Yamete</strong> → Random, Sound 1...</span>
              <span><strong className="text-black font-semibold">Goat</strong> → Random, Sound 1...</span>
            </div>
          </div>

          <p className="text-[14px] text-[#999] leading-[1.8] mb-4">
            Click any <Strong>pack name</Strong> to expand it, then select a{" "}
            <Strong>specific sound</Strong> — or choose <Strong>Random</Strong> to
            play a different sound every slap.
          </p>

          <Note type="tip">
            You can also open <Strong>Settings</Strong> from the tray to adjust
            Sensitivity, Cooldown, Volume, and USB Sound mode.
          </Note>

          <div className="flex flex-col gap-2 mt-4">
            <SettingRow name="Sound Pack" desc="Choose from 7 packs — Special, Combo Hit, Male, Fart, Gentleman, Yamete, Goat." />
            <SettingRow name="Sensitivity" desc="Controls how loud the impact needs to be. Increase if slaps aren't detected." />
            <SettingRow name="Cooldown" desc="Minimum time between two triggers. Prevents rapid-fire sounds." />
            <SettingRow name="Volume" desc="Master volume for all sound packs." />
            <SettingRow name="USB Sound" desc="Plays a sound every time you plug or unplug a USB device." />
          </div>
        </Step>

        {/* FAQ */}
        <div className="mt-12 pt-12 border-t border-[#ede8e8]">
          <h2 className="text-lg font-semibold mb-6 text-black">Common issues</h2>

          <FaqItem q="The app opens but no sound plays when I slap.">
            Try these in order: (1) Make sure your speakers or headphones are not
            muted. (2) Open Settings and increase Sensitivity. (3) Make sure
            Windows has microphone access — go to Windows Settings → Privacy →
            Microphone → allow desktop apps.
          </FaqItem>

          <FaqItem q="I don't see the tray icon.">
            Click the ▲ arrow in the bottom-right of your taskbar to reveal hidden
            icons. SlapWindows runs there. You can drag the icon out to always show it.
          </FaqItem>

          <FaqItem q="My license key is not working.">
            Make sure you are copying the full key including the SLAP- prefix (e.g.
            SLAP-A1B2-C3D4-E5F6-G7H8). If it still fails, your internet connection
            may be down — the app needs to connect once to validate your key.
          </FaqItem>

          <FaqItem q="I lost my license key email.">
            Email us at support@slapwindows.site with the email address you used to
            purchase. We&apos;ll resend your key.
          </FaqItem>

          <FaqItem q="Windows Defender is flagging the app as a virus." last>
            This is a false positive. You can add an exclusion in Windows Security
            → Virus & threat protection → Exclusions → add SlapWindows.exe. If
            you&apos;re still not comfortable, email us and we&apos;ll walk you through it.
          </FaqItem>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-white border border-[#ede8e8] rounded-xl p-8 text-center">
          <p className="text-[15px] text-[#888] mb-4">Still need help?</p>
          <a
            href="mailto:support@slapwindows.site"
            className="inline-block bg-[#e63535] text-white px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Contact Support
          </a>
          <p className="text-xs text-[#bbb] mt-4">We typically reply within a few hours.</p>
        </div>

        {/* Footer */}
        <div className="border-t border-[#ede8e8] mt-12 pt-8 text-xs text-[#aaa] flex justify-between flex-wrap gap-2">
          <span>© 2026 SlapWindows</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#bbb] hover:text-[#666] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[#bbb] hover:text-[#666] transition-colors">Terms</Link>
            <a href="mailto:support@slapwindows.site" className="text-[#bbb] hover:text-[#666] transition-colors">Support</a>
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
        <div className="absolute left-5 top-12 -bottom-10 w-px bg-[#ede8e8]" />
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
        <h2 className="text-[1.1rem] font-semibold mb-4 text-black">{title}</h2>
        <div className="text-sm text-black leading-7">{children}</div>
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
  return <strong className="text-black font-semibold">{children}</strong>;
}

function SubStep({ n, text }: any) {
  return (
    <div className="flex gap-3 items-start mb-2">
      <div className="w-5 h-5 border border-[#ddd] rounded-full flex items-center justify-center text-[11px] text-[#e63535] font-semibold mt-1 shrink-0">
        {n}
      </div>
      <p className="text-sm text-[#999]">{text}</p>
    </div>
  );
}

function SpecRow({ label, value }: any) {
  return (
    <div className="flex gap-3 py-2 border-b border-[#f0eded] text-sm">
      <span className="text-[#bbb] min-w-35">{label}</span>
      <span className="text-[#555]">{value}</span>
    </div>
  );
}

function SettingRow({ name, desc }: any) {
  return (
    <div className="bg-[#fafafa] border border-[#f0eded] rounded-lg px-4 py-3">
      <p className="text-sm font-semibold text-black mb-1">{name}</p>
      <p className="text-[13px] text-black">{desc}</p>
    </div>
  );
}

function FaqItem({ q, children, last }: any) {
  return (
    <div className={`${!last ? "border-b border-[#f0eded]" : ""} py-5`}>
      <p className="text-sm font-semibold text-black mb-2">{q}</p>
      <p className="text-sm text-black leading-relaxed">{children}</p>
    </div>
  );
}