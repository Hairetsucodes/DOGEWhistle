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
    default: "The DOGE Whistle | Government Accountability Platform",
    template: "%s | The DOGE Whistle | Government Accountability Platform",
  },
  description:
    "Much accountability, very transparency! 🐕 A secure and anonymous platform for reporting government waste, fraud, and misuse of taxpayer funds. Protected under federal whistleblower laws.",
  keywords:
    "government whistleblowing, taxpayer funds, public sector accountability, government waste, fraud reporting, government transparency, whistleblower protection, anonymous reporting",
  openGraph: {
    title: "The DOGE Whistle - Government Accountability Platform",
    description:
      "A secure and anonymous platform for reporting government waste, fraud, and misuse of taxpayer funds. Protected by federal whistleblower laws. Much accountability, very justice! 🐕",
    url: "https://doge.hairetsu.com",
    siteName: "The DOGE Whistle",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://doge.hairetsu.com/doge.jpg",
        width: 1200,
        height: 630,
        alt: "The DOGE Whistle - Government Accountability Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The DOGE Whistle - Government Accountability Platform",
    description:
      "A secure and anonymous platform for reporting government waste, fraud, and misuse of taxpayer funds. Protected by federal whistleblower laws. Much accountability, very justice! 🐕",
    images: ["https://doge.hairetsu.com/doge.jpg"],
    creator: "@doge",
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
            Protected under federal whistleblower laws · This is a
            concept demo and not affiliated with any government agency
          </p>
        </footer>
      </body>
    </html>
  );
}
