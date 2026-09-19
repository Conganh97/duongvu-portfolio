import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Growth from "@/components/Growth";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Process />
        <Skills />
        <Growth />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
