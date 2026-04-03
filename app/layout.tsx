import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
