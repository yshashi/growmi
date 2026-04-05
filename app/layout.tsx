import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Growmi — AI WhatsApp Assistant for Business | Auto-Book Appointments 24/7",
  description:
    "Growmi is an AI-powered WhatsApp assistant that handles appointment booking, customer queries, reminders & follow-ups automatically. For clinics, salons, hospitals & more. Start free.",
  keywords: [
    "AI WhatsApp assistant",
    "appointment booking",
    "WhatsApp chatbot",
    "clinic booking",
    "salon booking",
    "AI receptionist",
    "Growmi",
  ],
  openGraph: {
    title: "Growmi — AI WhatsApp Assistant for Business",
    description:
      "Automate appointment booking, customer queries & follow-ups on WhatsApp. 24/7, in 50+ languages.",
    url: "https://getgrowmi.com",
    siteName: "Growmi",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growmi — AI WhatsApp Assistant for Business",
    description:
      "Automate appointment booking, customer queries & follow-ups on WhatsApp. 24/7, in 50+ languages.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
