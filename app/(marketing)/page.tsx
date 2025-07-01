import {
  Hero,
  AboutPreview,
  CEOQuote,
  RentGuarantee,
  ServicesPreview,
} from "./_components";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <RentGuarantee />
      <CEOQuote />
    </main>
  );
}
