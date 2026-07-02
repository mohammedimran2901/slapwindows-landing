import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SlapWindows — Slap your laptop. It screams back.",
  description:
    "A tiny Windows app that plays sounds when you slap your laptop. 7 sound packs, USB Moaner mode, system tray.",
  keywords: [
    "SlapWindows",
    "slap laptop",
    "Windows app",
    "funny Windows app",
    "SlapMac Windows",
    "laptop sounds",
    "system tray app",
    "mic detection",
    "novelty app",
    "one time payment",
    "slapwindows app",
    "slap windows",
    "slap windows laptop",
    "slapwindows.site",

    // Core Feature Keywords
    "slap laptop",
    "laptop screams back",
    "laptop scream app",
    "laptop prank app",
    "laptop sound reaction",
    "laptop moan app",
    "slap your laptop",
    "laptop with feelings",

    // Competitor / Inspired Keywords (High Traffic)
    "slapmac for windows",
    "slapmac windows version",
    "slapmac alternative",
    "slapmac windows",

    // Feature Specific
    "usb moaner windows",
    "usb plug sound effect",
    "mic detection laptop sound",
    "windows system tray app",
    "laptop voice packs",
    "funny sound packs windows",

    // Platform Keywords
    "windows 10 prank app",
    "windows 11 prank app",
    "funny windows app 2026",
    "windows novelty app",
    "windows funny software",
    "best windows apps 2026",

    // Long Tail Keywords
    "app that makes laptop scream when slapped",
    "windows app that screams when you slap it",
    "how to make laptop scream windows",
    "laptop prank software for windows",
    "funny app for windows laptop",
    "windows app usb moaner mode",

    // Viral / Social Keywords
    "laptop prank",
    "office prank app",
    "tech humor app",
    "funny tech app",
    "viral laptop app",
    "indie app 2026",

    "slap windows",
    "Slap windows download",
    "Slap Mac for Windows",
    "Slap windows free",
    "Slap windows tiktok",
    "Slap Mac license key",
  ],
  authors: [{ name: "amitkushh", url: "https://x.com/amitkushh" }],
  creator: "amitkushh",
  metadataBase: new URL("https://slapwindows.site"),
  openGraph: {
    title: "SlapWindows — Slap your laptop. It screams back.",
    description:
      "Slap your Windows laptop. It screams back. 7 sound packs, USB Moaner mode.",
    url: "https://slapwindows.site",
    siteName: "SlapWindows",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SlapWindows — Slap your laptop. It screams back.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlapWindows — Slap your laptop. It screams back.",
    description:
      "Slap your Windows laptop. It screams back. 7 sound packs, USB Moaner.",
    creator: "@amitkushh",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V2DWTF80JW"
        />
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V2DWTF80JW');`}
        </script>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
