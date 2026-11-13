import About from "@/components/myComponents/About";
import Education from "@/components/myComponents/Education";
import Hero from "@/components/myComponents/Hero";
import Navbar from "@/components/myComponents/Navbar";
import Publications from "@/components/myComponents/Publications";
import Skills from "@/components/myComponents/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About/>
        <Skills />
        <Education/>
        <Publications/>
      </main>
    </div>
  );
}
