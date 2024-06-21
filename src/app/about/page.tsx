import AboutMeSection from "@/app/about/_components/AboutMeSection";
import SkillSection from "@/app/about/_components/SkillSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | farizRifkyBerliano();",
  description: "A Portfolio made by Fariz",
};

const AboutPage = () => {
  return (
    <section className="md:pt-3">
      <AboutMeSection />
      <SkillSection />
    </section>
  );
};

export default AboutPage;
