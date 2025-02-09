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
  title: "The DOGE Whistle",
  description:
    "Much whistleblowing, very transparency! 🐕 Helping good doges report bad behavior since 2024.",
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
