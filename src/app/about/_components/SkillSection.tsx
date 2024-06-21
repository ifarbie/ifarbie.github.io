"use client";
import { databaseSkillDatas, frameworkOrLibrarySkillDatas, languageSkillDatas, toolSkillDatas } from "@/datas/skillsData";
import { useState } from "react";
import SkillCard from "./SkillCard";
import SkillSectionHeader from "./SkillSectionHeader";

const skillLists = [
  {
    name: "Languages",
    skillDatas: languageSkillDatas,
  },
  {
    name: "Frameworks/Libraries",
    skillDatas: frameworkOrLibrarySkillDatas,
  },
  {
    name: "Tools",
    skillDatas: toolSkillDatas,
  },
  {
    name: "Databases",
    skillDatas: databaseSkillDatas,
  },
];

const SkillSection = () => {
  const [skills, setSkills] = useState<string>(skillLists[0].name);

  const handleSkillChange = (skill: string) => {
    setSkills(skill);
  };

  return (
    <section className="pb-48 pt-5 px-8 max-w-7xl mx-auto md:px-12 md:pt-10 lg:px-16">
      <SkillSectionHeader />
      <ul className="gap-1 mb-5 grid grid-cols-2 md:flex md:gap-2">
        {skillLists.map(({ name }, i) => (
          <li key={i}>
            <button className={`${skills == name ? "bg-blue-300 text-[#7BC9FF]" : "text-gray-400"} bg-opacity-10 transition duration-300 px-4 py-3 rounded-lg text-sm hover:text-white`} onClick={() => handleSkillChange(name)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
      {skillLists.map(({name, skillDatas}) => (
        <div key={name} className={`${skills == name ? "grid" : "hidden"} grid-cols-2 gap-4 text-sm md:grid-cols-3 lg:gap-7 xl:grid-cols-4 xl:gap-10`}>
          {skillDatas.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default SkillSection;
