import Skill from "@/types/Skill";
import Image from "next/image";
import React from "react";

type Props = {
  skill: Skill;
};

const SkillCard = ({ skill }: Props) => {
  return (
    <div key={skill.name} className="group cursor-pointer border border-sky-400 rounded p-2 flex items-center gap-2 hover:bg-opacity-10 hover:bg-blue-300 ">
      <div className="w-12 h-12 flex justify-center items-center transition ease-linear group-hover:scale-110 lg:h-16 lg:w-16">
        <Image className="w-[65%]" width="2000" height="2000" src={skill.icon} alt={skill.name} placeholder="blur" />
      </div>
      <div className="font-medium text-sm md:text-base lg:text-lg">{skill.name}</div>
    </div>
  );
};

export default SkillCard;
