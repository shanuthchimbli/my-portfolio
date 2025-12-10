import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { CoverLetter } from "@/components/sections/CoverLetter";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <ThemeToggle />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CoverLetter />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
