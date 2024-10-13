import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Footer() {
  return (
    <footer className="container flex justify-between items-center p-4">
      <p className="text-sm">© Reliable</p>
      <ThemeToggle />
    </footer>
  );
}
