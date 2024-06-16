"use client";
import Image from "next/image";
import TypeIt from "typeit-react";

const HomePage = () => {
  return (
    <div className="text-white max-w-7xl mx-auto pb-16 pt-10 overflow-x-hidden md:min-h-[82vh] md:flex md:items-center md:justify-center">
      <div className="flex flex-col justify-center items-center md:flex-row-reverse md:px-8 md:gap-10">
        <div className={`mx-9 animate-fadeInFromRight mb-5 relative transform transition duration-1000 ease-out md:mb-0 md:mx-0`}>
          <div className="absolute -inset-0.5 bg-pink-600 rounded-full blur-xl opacity-50 transition duration-500 animate-tilt -z-50 group-hover:opacity-100 group-hover:duration-200"></div>
          <Image className="relative rounded-full aspect-square border-4" src="/example.jpg" width={400} height={400} alt="test" />
        </div>
        <div className="text-center flex flex-col gap-3 md:text-left">
          <h4>Hello World! I&apos;m</h4>
          <h1 className={`animate-fadeInFromUp text-4xl font-bold px-6 md:p-0 md:text-5xl`}>Fariz Rifky Berliano</h1>
          <h2>
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                return instance.pause(750).delete().pause(750).type("Programming Enthusiast").pause(750).delete().type("Junior Web Developer");
              }}
            >
              Computer Science Student
            </TypeIt>
          </h2>

          <p className="animate-fadeInFromBot">
            Welcome to My Personal Website!<span className="inline-block origin-[70%_70%] animate-wave">👋🏻</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
