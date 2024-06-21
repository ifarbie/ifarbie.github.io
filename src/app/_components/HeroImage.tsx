import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="opacity-0 max-w-[400px] flex justify-center animate-fadeInFromRight mx-3 mb-5 group cursor-pointer rounded-full md:m-0" style={{ animationDelay: "1000ms" }}>
      <Image className="w-full pict rounded-full aspect-square border-4 border-sky-500 transition duration-300" src="/img/foto-semi_formal.jpeg" width={2000} height={2000} alt="Fariz" />
    </div>
  );
};

export default HeroImage;
