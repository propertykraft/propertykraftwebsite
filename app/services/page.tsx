import { Cta, Hero, ServicesGrid, Stats } from "./_components";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Hero />
      <Stats />
      <ServicesGrid />
      <Cta />
    </main>
  );
}
