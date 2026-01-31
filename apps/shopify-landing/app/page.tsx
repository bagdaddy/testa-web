import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Customers } from "./components/Customers";
import { Plans } from "./components/Plans";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f8ff]">
        <Hero />
        <Features />
        <Benefits />
        <Customers />
        <Plans />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
