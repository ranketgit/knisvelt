import Hero from "./components/Hero";
import ExpertSolutions from "./components/ExpertSolutions"
import ProgramsSection from "./components/ProgramsSection"
import OwnerExpertise from "./components/Onwer";
import Testimonials from "./components/Testimonials";
import Prestations from "./components/Services";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <>
    <Hero />
    <OwnerExpertise />
    <ExpertSolutions />
    <ProgramsSection />
    <Testimonials />
    <Prestations />
    <Technologies />
    
    </>
   
  );
}
