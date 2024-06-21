import HeroImage from "@/app/_components/HeroImage";
import HeroIntroduction from "@/app/_components/HeroIntroduction";

const HomePage = () => {
  return (
    <section className="relative flex flex-col justify-center items-center pb-20 pt-12 md:min-h-[80vh] md:flex-row-reverse md:gap-7 md:px-8 md:py-0">
      <HeroImage />
      <HeroIntroduction />
    </section>
  );
};

export default HomePage;
