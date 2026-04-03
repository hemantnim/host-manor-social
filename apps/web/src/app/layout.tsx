import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Host Manor | The Social Event Network",
  description: "The premium social hosting ecosystem for schools, colleges, and companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="bottom-right" toastOptions={{
          style: { 
            background: 'white', 
            borderRadius: '1.5rem', 
            border: '1px solid #e2e8f0',
            padding: '1.5rem',
            fontFamily: 'var(--font-geist-sans)',
            fontWeight: 'bold'
          },
        }} />
        <Header />
        {children}
      </body>
    </html>
  );
}
