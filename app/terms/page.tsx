import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-170 mx-auto px-8 py-12">

        <Link href="/" className="text-[#666] text-sm">
          ← Back to home
        </Link>

        <h1 className="text-[2.5rem] font-bold tracking-[-1px] mt-8 mb-2">
          Terms of Use
        </h1>

        <p className="text-[13px] text-[#555] mb-8">
          Last updated: April 1, 2026
        </p>

        {/* TL;DR */}
        <div className="bg-[#111] border border-[#222] rounded-xl px-6 py-5 mb-10">
          <p className="text-[13px] text-[#e63535] font-semibold mb-1">
            TL;DR
          </p>
          <p className="text-sm text-[#aaa] leading-7">
            While the software itself cannot do any harm, slapping too hard can. If you break your laptop, that's on you.
            All sales are final — no refunds. If SlapWindows doesn't work on your supported device, contact us at{" "}
            <a href="https://x.com/amitkushh" className="text-[#e63535]">
              x.com/amitkushh
            </a>{" "}
            and we'll help you out.
          </p>
        </div>

        <Section title="1. Acceptance of Terms">
          <p>
            By downloading, installing, or using SlapWindows ("the Software"), you agree to be bound by these
            Terms of Use. If you do not agree to these terms, do not use the Software.
          </p>
        </Section>

        <Section title="2. Description of the Software">
          <p>
            SlapWindows is a novelty Windows application that detects physical impacts to your laptop using the
            built-in microphone and plays audio responses. The Software is provided for entertainment purposes only.
          </p>
        </Section>

        <Section title="3. Hardware Disclaimer">
          <p>
            <strong>You use SlapWindows entirely at your own risk.</strong> The Software
            encourages users to physically strike their laptop. The developer expressly disclaims any and all
            responsibility for damage to your hardware, including but not limited to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Cracked, broken, or scratched displays</li>
            <li>Damaged hinges, enclosures, or internal components</li>
            <li>Malfunctioning keyboards, trackpads, or sensors</li>
            <li>Voided manufacturer warranties</li>
            <li>Data loss resulting from physical impact</li>
            <li>Any other physical or functional damage to your device</li>
          </ul>
          <p className="mt-2">
            While the software itself cannot do any harm, slapping can. By using SlapWindows, you acknowledge
            that striking a computer is inherently risky and that you are solely responsible for any consequences.
          </p>
        </Section>

        <Section title="4. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, the developer shall not be liable for any direct,
            indirect, incidental, special, consequential, or punitive damages arising out of or in connection
            with your use of the Software.
          </p>
          <p className="mt-2">
            In no event shall the developer's total liability exceed the amount you paid for the Software.
          </p>
        </Section>

        <Section title="5. No Warranty">
          <p>
            The Software is provided "as is" and "as available" without warranties of any kind, either express
            or implied, including but not limited to implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </Section>

        <Section title="6. Assumption of Risk">
          <p>
            You expressly acknowledge and agree that the use of the Software involves the deliberate application
            of physical force to your device. You assume all risk of damage, injury, or loss.
          </p>
        </Section>

        <Section title="7. Social & Professional Disclaimer">
          <p>
            The developer shall not be held liable for any social, professional, reputational, or personal
            consequences arising from the use of the Software in any setting.
          </p>
        </Section>

        <Section title="8. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless the developer from any claims,
            liabilities, damages, losses, and expenses arising out of your use of the Software.
          </p>
        </Section>

        <Section title="9. License">
          <p>
            SlapWindows grants you a personal, non-transferable, non-exclusive, revocable license.
            You may not redistribute, reverse-engineer, or resell the Software.
          </p>
        </Section>

        <Section title="10. Payment & Refund Policy">
          <p>
            <strong>All sales are final. No refunds are provided.</strong>
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Windows 10 or Windows 11</li>
            <li>A working microphone</li>
            <li>Internet for activation</li>
          </ul>
          <p className="mt-2">
            Contact{" "}
            <a href="https://x.com/amitkushh" className="text-[#e63535]">
              x.com/amitkushh
            </a>{" "}
            if issues occur.
          </p>
        </Section>

        <Section title="11. System Requirements">
          <p>
            Requires Windows 10 or 11 with a working microphone.
          </p>
        </Section>

        <Section title="12. Privacy">
          <p>
            SlapWindows does not collect personal data beyond email for license delivery.
            See{" "}
            <Link href="/privacy" className="text-[#e63535]">
              Privacy Policy
            </Link>.
          </p>
        </Section>

        <Section title="13. Changes to Terms">
          <p>
            Terms may be updated anytime. Continued use means acceptance.
          </p>
        </Section>

        <Section title="14. Governing Law">
          <p>
            Governed by applicable laws of the developer's jurisdiction.
          </p>
        </Section>

        <Section title="15. Contact">
          <p>
            Contact us at{" "}
            <a href="https://x.com/amitkushh" className="text-[#e63535]">
              x.com/amitkushh
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
      <h2 className="text-[1.1rem] font-semibold mb-3 ">{title}</h2>
      <div className="text-sm leading-7">
        {children}
      </div>
    </div>
  );
}