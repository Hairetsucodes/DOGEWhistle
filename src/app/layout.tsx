import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doge.hairetsu.com"),
  title: {
    default: "The DOGE Whistle | Secure Whistleblowing Platform",
    template: "%s | The DOGE Whistle | Secure Whistleblowing Platform",
  },
  description:
    "Much whistleblowing, very transparency! 🐕 A secure and anonymous platform helping good doges report misconduct and wrongdoing since 2024. Protected under whistleblower laws.",
  keywords:
    "whistleblowing, anonymous reporting, corporate transparency, workplace misconduct, ethical reporting, secure platform, whistleblower protection, anonymous tips",
  openGraph: {
    title: "The DOGE Whistle - Secure Anonymous Whistleblowing Platform",
    description:
      "A secure and anonymous platform for reporting workplace misconduct and wrongdoing. Protected by whistleblower laws and regulations. Much transparency, very justice! 🐕",
    url: "https://doge.hairetsu.com",
    siteName: "The DOGE Whistle",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://doge.hairetsu.com/og-image.avif",
        width: 1200,
        height: 630,
        alt: "The DOGE Whistle - Secure Whistleblowing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The DOGE Whistle - Secure Anonymous Whistleblowing Platform",
    description:
      "A secure and anonymous platform for reporting workplace misconduct and wrongdoing. Protected by whistleblower laws and regulations. Much transparency, very justice! 🐕",
    images: ["https://doge.hairetsu.com/og-image.avif"],
    creator: "@hairetsu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground absolute bottom-4">
            Protected under whistleblower laws and regulations · This is a
            concept demo and not affiliated with any government or regulatory
            body
          </p>
        </footer>
      </body>
    </html>
  );
}
