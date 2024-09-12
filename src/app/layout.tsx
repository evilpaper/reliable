import type { Metadata } from "next";

import "./globals.css";
import Nav from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
