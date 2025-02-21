import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/common/components/theme-toggle";
import reliableLogoBlackSvg from "../../../public/reliable-logo-black.svg";
import reliableLogoWhiteSvg from "../../../public/reliable-logo-white.svg";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="container flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4  p-4 py-12">
      <p className="text-sm">{`© ${currentYear} The Reliable Club`}</p>
      <Link href="/policy" className="hover:text-foreground transition-colors">
        Privacy Policy
      </Link>
      <Link href="/terms" className="hover:text-foreground transition-colors">
        Terms of Service
      </Link>
      <ThemeToggle />
    </footer>
  );
}
