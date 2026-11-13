
import ThemeProvider from "@/components/myComponents/ThemeProvider";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bholanath Bala | AI Engineer & Software Developer",
    template: "%s | Bholanath Bala",
  },
  description:
    "Portfolio of Bholanath Bala, an AI and Machine Learning researcher and software developer.",
  keywords: [
    "Bholanath Bala",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Software Developer",
  ],
  authors: [{ name: "Bholanath Bala" }],
  creator: "Bholanath Bala",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
