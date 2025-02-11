import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", '600', "700"],
});

export const metadata: Metadata = {
  title: "Caio Rosa",
  description: "Caio Rosa's portfolio showcases his journey as a Full Stack Developer, highlighting his skills, latest projects, and the modern technologies he uses to build innovative and scalable solutions.",
  openGraph: {
    images: 'https://cdn.caiorosadev.com/og-image.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={`${dmSans.variable} antialiased`}>
        <Header />
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute right-0 top-0 size-[500px] animate-fade animate-delay-500 bg-blue-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 size-[550px] animate-fade animate-delay-300 bg-purple-500/10 blur-[100px]" />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
