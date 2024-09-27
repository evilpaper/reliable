import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

import "@/styles/globals.css";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "Reliable",
  description:
    "Learn work place compliance skills fast. Get certificate on completion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col items-center justify-between min-h-lvh">
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
