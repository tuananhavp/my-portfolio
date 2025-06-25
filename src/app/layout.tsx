import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Preahvihear } from "next/font/google";
import "./globals.css";
import HomePageLayout from "@/components/layout/HomePageLayout";

const preahvihear = Preahvihear({
  weight: "400",
  variable: "--font-preahvihear",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A showcase of Tuan Anh's work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${preahvihear.variable} ${plusJakartaSans.variable} antialiased`}>
        <HomePageLayout>{children}</HomePageLayout>
      </body>
    </html>
  );
}
