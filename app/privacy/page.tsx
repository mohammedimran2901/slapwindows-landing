import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-170 mx-auto px-8 py-12">

        <Link href="/" className="text-[#666] text-sm no-underline">
          ← Back to home
        </Link>

        <h1 className="text-[2.5rem] font-bold tracking-[-1px] mt-8 mb-2">
          Privacy Policy
        </h1>

        {/* TL;DR */}
        <div className="bg-[#111] border border-[#222] rounded-xl px-6 py-5 mb-10">
          <p className="text-[13px] text-[#e63535] font-semibold mb-1">
            TL;DR
          </p>
          <p className="text-sm text-[#aaa] leading-7">
            SlapWindows does not track you, does not collect analytics, and does not sell your data.
            All microphone and USB event data is processed entirely on your device and never stored.
            The only network request is for license key validation.
          </p>
        </div>

        <Section title="1. Data We Do Not Collect">
          <p>SlapWindows does not collect, transmit, or store any of the following:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Personal information (name, address, phone number)</li>
            <li>Usage analytics or telemetry</li>
            <li>Microphone audio recordings</li>
            <li>USB device information</li>
            <li>Crash reports</li>
            <li>Location data</li>
            <li>Browsing or app usage history</li>
          </ul>
          <p className="mt-2">
            There are no analytics SDKs, no tracking pixels, and no third-party data collection of any kind embedded in SlapWindows.
          </p>
        </Section>

        <Section title="2. On-Device Processing">
          <p>
            All microphone audio is analyzed locally on your Windows device to detect slap sounds.
            Raw audio is never recorded, saved, or transmitted. USB connect and disconnect events
            are processed locally in the same way. This data never leaves your device.
          </p>
        </Section>

        <Section title="3. Local Storage">
          <p>
            SlapWindows stores your preferences (sensitivity, cooldown, selected sound pack, volume, slap count, etc.)
            locally in a config file on your machine (
            <code className="bg-[#1a1a1a] px-1.5 py-0.5 rounded text-xs text-[#aaa] font-mono">
              %APPDATA%\SlapWindows\config.json
            </code>
            ). This data stays on your machine and is never uploaded or synced anywhere.
          </p>
        </Section>

        <Section title="4. Network Requests">
          <p>SlapWindows makes exactly one type of network request:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>License validation</strong> — When you activate your license key, SlapWindows sends
              your key to our server to verify it is valid. No other personal information is sent.
              If the server is unreachable, a local format check is performed as a fallback.
            </li>
          </ul>
          <p className="mt-2">That's it. No other network requests are made.</p>
        </Section>

        <Section title="5. Hardware Access">
          <p>SlapWindows accesses the following on your Windows machine:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Microphone</strong> — To detect slap sounds via audio input. No audio is recorded or stored.</li>
            <li><strong>USB ports</strong> — To detect device connect/disconnect events for USB Moaner mode.</li>
            <li><strong>Audio output</strong> — To play sound clips. No speaker data is captured.</li>
          </ul>
          <p className="mt-2">
            SlapWindows does <strong>not</strong> access your camera, location, contacts, files, clipboard,
            Bluetooth, or any other system resource beyond those listed above.
          </p>
        </Section>

        <Section title="6. Purchase Data">
          <p>
            When you purchase SlapWindows, your payment is processed by{" "}
            <a href="https://dodopayments.com" className="text-[#e63535] no-underline">
              Dodo Payments
            </a>. We receive your email address
            in order to send your license key. We do not store your payment card details — those are handled
            entirely by Dodo Payments. See{" "}
            <a href="https://dodopayments.com/privacy" className="text-[#e63535] no-underline">
              Dodo's privacy policy
            </a>.
          </p>
          <p className="mt-2">
            Your email address is stored in our database solely for the purpose of license key delivery and support.
            It is never sold, shared, or used for marketing.
          </p>
        </Section>

        <Section title="7. Third-Party Services">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Dodo Payments</strong> — Payment processing and license management.
            </li>
            <li>
              <strong>Resend</strong> — Used to send your license key email.
            </li>
            <li>
              <strong>MongoDB Atlas</strong> — License keys and emails are stored here.
            </li>
          </ul>
          <p className="mt-2">
            All sound clips are bundled locally in the app. There is no runtime connection to any audio service.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            SlapWindows does not knowingly collect any personal information from children under 13.
            Since the app collects no personal data beyond a purchase email, this is not generally applicable.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this policy from time to time. Changes will be reflected on this page with an
            updated date at the top. Continued use of SlapWindows after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Questions about this policy? Reach out at{" "}
            <a href="https://x.com/amitkushh" className="text-[#e63535]">
              x.com
            </a>.
          </p>
        </Section>

        <div className="border-t border-[#1a1a1a] mt-12 pt-8 text-xs text-[#444] flex justify-between flex-wrap gap-2">
          <span>© 2026 SlapWindows</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#666]">Privacy</Link>
            <Link href="/terms" className="text-[#666]">Terms</Link>
            <a href="https://x.com/amitkushh" className="text-[#666]">Support</a>
          </div>
        </div>

      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-[1.1rem] font-semibold mb-3">{title}</h2>
      <div className="text-sm text-black leading-7">
        {children}
      </div>
    </div>
  );
}