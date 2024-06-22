import Project from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./GithubIcon";
import LinkToIcon from "./LinkToIcon";

const ProjectCard = ({ project, isPriority }: { project: Project; isPriority: boolean }) => {
  return (
    <div key={project.name} className="bg-[#1e1e1f] border border-[#383838] rounded-xl p-5 flex flex-col justify-between transition duration-100 hover:-translate-y-2">
      <div className="mb-6">
        <div>
          <Image priority={isPriority} className="rounded-xl w-full" src={project.img} alt="image" width={2000} height={2000} />
        </div>
        <h3 className="text-sky-100 text-center my-3 font-medium text-sm tracking-wide md:text-base lg:text-lg">{project.name}</h3>
        <p className="text-xs text-[#c1c1c1] md:text-sm">{project.description}</p>
      </div>
      <div>
        <div className="text-sm text-sky-200 font-medium">{project.skills}</div>
        <div className="flex justify-end items-end gap-2 text-white">
          <div>
            <Link href={project.github} className="hover:text-sky-200">
              <GithubIcon />
            </Link>
          </div>
          <div>
            <Link href={project.url} className="hover:text-sky-200">
              <LinkToIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
