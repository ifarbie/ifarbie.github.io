import Image from "next/image";

const AboutMeSection = () => {
  return (
    <article className="max-w-7xl px-3 mx-auto mb-5">
      <div className="p-5 overflow-hidden rounded-3xl bg-[#1e1e1f] border border-[#383838] md:p-9 lg:px-12 lg:pt-10">
        <header className="flex flex-col mb-7">
          <div className="flex items-center animate-fadeInFromUp will-change-transform gap-3">
            <h2 className="text-2xl font-bold">About Me</h2>
            <div className="h-[1px] w-32 bg-[#98c1d9] rounded-full md:w-64 lg:w-96"></div>
          </div>
        </header>
        <section className="flex-col text-justify flex justify-center items-center md:flex-row lg:gap-2">
          <div className="flex justify-center mb-7">
            <Image className="rounded-full aspect-square w-9/12 h-auto animate-fadeInFromBot_1 opacity-0" src="/img/foto-semi_formal.jpeg" width={500} height={500} alt="test" />
          </div>
          <div className="flex flex-col gap-3 mb-4 text-sm md:text-base md:w-11/12 lg:gap-7 lg:w-9/12 lg:text-lg xl:text-xl">
            <p className="indent-8 animate-fadeInFromRight opacity-0">
            Hello Everyone! My name is Fariz Rifky Berliano, and I currently reside in Bekasi. For the past year, I have been immersed in web development, working with front-end, back-end, and full-stack technologies. I am passionate about programming because of the excitement of solving problems and creating impactful solutions.
            </p>
            <p className="indent-8 animate-fadeInFromRight_1 opacity-0">
            My goal is to share my skills with others, helping them learn and grow in web development. I aim to create websites that provide valuable and seamless user experiences, ensuring they are functional and user-friendly.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default AboutMeSection;
