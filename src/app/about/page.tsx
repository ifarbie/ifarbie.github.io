"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

const AboutPage = (props: Props) => {
  const [skills, setSkills] = useState("tech-stack");

  const handleSkillChange = (skill: string) => {
    setSkills(skill);
  };

  return (
    <>
      <article className="max-w-7xl mx-auto mb-5 md:pt-3">
        <div className="overflow-hidden text-white mx-3 p-5 overflow-x-hidden rounded-3xl bg-[#1e1e1f] border border-[#383838]">
          <header>
            <h2 className="text-2xl animate-fadeInFromUp will-change-transform">About Me</h2>
            <div className="flex justify-center mx-auto my-5 md:hidden">
              <Image className="rounded-full aspect-square w-9/12 h-auto animate-fadeInFromBot" src="/example.jpg" width={300} height={300} alt="test" />
            </div>
          </header>
          <div className="text-sm text-justify flex md:gap-8 md:items-center">
            <div className="justify-center mx-auto my-5 hidden md:flex">
              <Image className="rounded-full aspect-square w-9/12 " src="/example.jpg" width={500} height={500} alt="test" />
            </div>
            <div className="animate-fadeInFromRight md:w-7/12">
              <p className="mb-2 indent-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati voluptatibus eveniet porro culpa provident quaerat dolore nesciunt eius est, minima distinctio dignissimos sit fugiat ducimus ea. Libero asperiores delectus
                consequatur.
              </p>
              <p className="indent-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque facilis ad voluptate mollitia. Saepe, iure perferendis? Nesciunt architecto nostrum molestiae reprehenderit placeat beatae porro voluptates necessitatibus
                consequatur! Repudiandae voluptatum eius deserunt maxime illo odit quidem et accusamus recusandae laborum.
              </p>
            </div>
          </div>
        </div>
      </article>
      <section className="text-white pb-16 p-5 max-w-7xl mx-auto">
        <header className="mb-5">
          <h2 className="text-2xl font-bold">Skills</h2>
        </header>
        <ul className="flex gap-2 mb-5">
          <li>
            <button className={`${skills == "tech-stack" ? "border-white" : "border-transparent"} border px-4 py-3 rounded-lg text-sm`} onClick={() => handleSkillChange("tech-stack")}>
              Tech Stack
            </button>
          </li>
          <li>
            <button className={`${skills == "tools" ? "border-white" : "border-transparent"} border px-4 py-3 rounded-lg text-sm`} onClick={() => handleSkillChange("tools")}>
              Tools
            </button>
          </li>
        </ul>
        <div className={`${skills == "tech-stack" ? "grid" : "hidden"} grid-cols-2 gap-4 text-sm md:grid-cols-3`}>
          <div className="border border-yellow-400 rounded p-2 flex items-center gap-1">
            <div className="w-12 h-12 flex justify-center items-center">
              <Image className="w-[65%] h-[65%]" width="2000" height="2000" src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html-5" />
            </div>
            <div>HTML</div>
          </div>
          <div className="border border-yellow-400 rounded p-2 flex items-center gap-1">
            <div className="w-12 h-12 flex justify-center items-center">
              <Image className="w-[65%] h-[65%]" width="2000" height="2000" src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html-5" />
            </div>
            <div>HTML</div>
          </div>
          <div className="border border-yellow-400 rounded p-2 flex items-center gap-1">
            <div className="w-12 h-12 flex justify-center items-center">
              <Image className="w-[65%] h-[65%]" width="2000" height="2000" src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html-5" />
            </div>
            <div>HTML</div>
          </div>
        </div>
        <div className={`${skills == "tools" ? "grid" : "hidden"} grid-cols-2 gap-4 text-sm md:grid-cols-3`}>
          <div className="border border-yellow-400 rounded p-2 flex items-center gap-1">
            <div className="w-12 h-12 flex justify-center items-center">
              <Image className="w-[65%] h-[65%]" width="2000" height="2000" src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html-5" />
            </div>
            <div>CSS</div>
          </div>
          <div className="border border-yellow-400 rounded p-2 flex items-center gap-1">
            <div className="w-12 h-12 flex justify-center items-center">
              <Image className="w-[65%] h-[65%]" width="2000" height="2000" src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html-5" />
            </div>
            <div>CSS</div>
          </div>
          <div className="border border-yellow-400 rounded p-2 flex items-center gap-1">
            <div className="w-12 h-12 flex justify-center items-center">
              <Image className="w-[65%] h-[65%]" width="2000" height="2000" src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html-5" />
            </div>
            <div>CSS</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
