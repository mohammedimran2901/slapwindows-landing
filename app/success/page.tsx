"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    // Dodo payment_id query param 
    const paymentId = searchParams.get("payment_id");
    if (paymentId) {
      setStatus("done");
    } else {
      setStatus("done"); // webhook already handled
    }
  }, [searchParams]);

  const downloadUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL || "#";

  return (
   <main className="min-h-screen flex items-center justify-center text-center px-8">
  <div>

    {status === "loading" && (
      <p className="text-[#888]">
        Processing your order...
      </p>
    )}

    {status === "done" && (
      <div>
        <div className="text-[64px] mb-4">🎉</div>

        <h1 className="text-[2.5rem] font-bold tracking-[-1px] mb-2">
          Payment Successful!
        </h1>

        <p className="text-[#888] text-base mb-8">
          Check your email – the license has been sent. Check your spam folder as well.
        </p>

        <div className="bg-[#111] border border-[#333] rounded-xl px-8 py-6 mb-8 max-w-100 mx-auto">
          <p className="text-[13px] text-[#666] mb-2">Next steps:</p>

          <ol className="text-left text-[#bbb] text-sm leading-8 pl-5 list-decimal">
            <li>Find the license in your email.</li>
            <li>SlapWindows.exe download it</li>
            <li>Open it → enter the key</li>
            <li>slap your laptop 👋</li>
          </ol>
        </div>

        <a
          href={downloadUrl}
          className="inline-block bg-[#e63535] text-white px-8 py-3.5 rounded-xl text-base font-medium no-underline hover:opacity-90 transition"
        >
          Download SlapWindows.exe
        </a>

        <p className="text-xs text-[#555] mt-6">
          Problem?{" "}
          <a href="https://x.com/amitkushh" className="text-[#888]">
            x.com/amitkushh
          </a>
        </p>
      </div>
    )}

    {status === "error" && (
      <div>
        <div className="text-[48px] mb-4">😕</div>

        <h1 className="text-2xl font-bold mb-2">
          Kuch problem aayi
        </h1>

        <p className="text-[#888]">
          support@slapwindows.com pe email karo — hum fix kar denge.
        </p>
      </div>
    )}

  </div>
</main>
  );
}