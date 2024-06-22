import projectsData from "@/datas/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsPageMain = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-8 animate-zoomIn md:grid-cols-2 lg:grid-cols-3 md:px-10">
      {projectsData.map((project, i) => (
        <ProjectCard key={i} project={project} isPriority={i < 3}></ProjectCard>
      ))}
    </div>
  );
};

export default ProjectsPageMain;
