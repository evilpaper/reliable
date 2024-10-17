import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-between min-h-lvh">
      <Nav />
      {children}
      <Footer />
    </section>
  );
}
