"use client";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/sub/StarBackground";
import LoadingScreen from "@/components/ui/LoadingScreen";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Otgonbaatar Portfolio",
//   description: "This is my portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <LoadingScreen />
        <StarsCanvas style={{ zIndex: -1 }} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
