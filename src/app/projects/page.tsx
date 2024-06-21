import { Metadata } from "next";
import ProjectsPageHeader from "./_components/ProjectsPageHeader";
import ProjectsPageMain from "./_components/ProjectsPageMain";

export const metadata: Metadata = {
  title: "Projects | farizRifkyBerliano();",
  description: "A Portfolio made by Fariz",
};

const ProjectsPage = () => {
  return (
    <section className="text-white pt-12 max-w-7xl mx-auto pb-40">
      <ProjectsPageHeader />
      <ProjectsPageMain />
    </section>
  );
};

export default ProjectsPage;
