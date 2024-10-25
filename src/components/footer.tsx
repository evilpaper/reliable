import { ThemeToggle } from "@/components/theme/theme-toggle";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="container flex justify-between items-center p-4">
      <p className="text-sm">{`© Reliable ${currentYear}`}</p>
      <ThemeToggle />
    </footer>
  );
}
