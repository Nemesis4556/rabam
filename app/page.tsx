import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import WhyRabam from "@/components/sections/WhyRabam";
import Cta from "@/components/sections/Cta";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyRabam />
      <Cta />
      <Contact />
    </div>
  );
}
