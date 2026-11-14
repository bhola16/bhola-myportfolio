import About from "@/components/myComponents/About";
import Contact from "@/components/myComponents/Contact";
import Education from "@/components/myComponents/Education";
import Hero from "@/components/myComponents/Hero";
import Projects from "@/components/myComponents/Projects";
import Publications from "@/components/myComponents/Publications";
import Skills from "@/components/myComponents/Skills";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About/>
        <Skills />
        <Education/>
        <Publications/>
        <Projects/>
        <Contact/>
      </main>
      
    </div>
  );
}
