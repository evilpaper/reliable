import type { Metadata } from "next";

import "./globals.css";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Reliable",
  description: "The best way to learn work skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
