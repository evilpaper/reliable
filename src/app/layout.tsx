import type { Metadata } from "next";
import { Providers } from "@/app/providers";

import "@/common/styles/globals.css";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
