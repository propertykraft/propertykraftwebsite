import { ContactForm, Hero, ContactMethods } from "./_components";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Hero />
      <ContactMethods />
      <ContactForm />
    </main>
  );
}
