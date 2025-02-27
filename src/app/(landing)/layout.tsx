import { Nav } from "@/common/components/nav";
import { Footer } from "@/common/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-lvh">
      <Nav />
      <main className="mt-16">{children}</main>
      <Footer />
    </div>
  );
}
