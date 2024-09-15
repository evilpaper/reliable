import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Footer() {
  return (
    <footer className="container flex justify-between p-8 items-center ">
      <p className="text-sm">© Reliable</p>
      <ThemeToggle />
    </footer>
  );
}
