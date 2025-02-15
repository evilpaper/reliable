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
      <div className="flex flex-col gap-8">
        <Link
          href="/policy"
          className="hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-foreground transition-colors">
          Terms of Service
        </Link>
      </div>
      <ThemeToggle />
      <Image
        src={reliableLogoBlackSvg}
        alt="The Reliable Club"
        width={110}
        height={38}
        priority
        className="block dark:hidden"
      />
      <Image
        src={reliableLogoWhiteSvg}
        alt="The Reliable Club"
        width={110}
        height={38}
        priority
        className="hidden dark:block"
      />
    </footer>
  );
}
