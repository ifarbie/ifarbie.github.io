"use client";
import TypeIt from "typeit-react";

const HeroIntroduction = () => {
  return (
    <div className="text-center px-5 flex flex-col gap-4 md:text-left md:p-0">
      <h4 className="text-sky-300">Hello World! <span className="animate-fadeIn opacity-0" style={{animationDelay: "500ms"}}>I&apos;m</span></h4>
      <h2 className="opacity-0 animate-fadeInFromLeft text-4xl font-bold md:text-5xl md:w-[320px] lg:w-full" style={{ animationDelay: "1000ms" }}>Fariz Rifky Berliano</h2>
      <h3 className="text-xl font-semibold bg-gradient-to-r from-sky-200 to-sky-400 bg-clip-text text-transparent md:text-2xl">
        <TypeIt
          options={{ loop: true, startDelay: 1500 }}
          getBeforeInit={(instance) => {
            return instance.pause(750).delete().pause(750).type("Programming Enthusiast").pause(750).delete().pause(750).type("Junior Web Developer").pause(750);
          }}
        >
          Computer Science Student
        </TypeIt>
      </h3>
      <p className="animate-fadeInFromLeft opacity-0" style={{ animationDelay: "1200ms" }}>
        Welcome to My Personal Website!<span className="inline-block origin-[70%_70%] animate-wave">👋🏻</span>
      </p>
    </div>
  );
};

export default HeroIntroduction;
