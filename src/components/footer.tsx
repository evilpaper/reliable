import { ThemeToggle } from "@/components/theme/theme-toggle";
import Image from "next/image";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="container flex justify-between items-center p-4 py-12">
      <p className="text-sm">{`© ${currentYear} The Reliable Club`}</p>
      <Image
        src="/reliable-logo.svg"
        alt="The Reliable Club"
        width={110}
        height={38}
        priority
      />
      <ThemeToggle />
    </footer>
  );
}
