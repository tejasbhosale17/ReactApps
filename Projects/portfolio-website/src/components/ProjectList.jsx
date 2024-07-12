import { useContext } from "react";
import { MyProject } from "../store/my-projects-store";
import Project from "./Project";

const ProjectList = () => {
  const { projectList } = useContext(MyProject);
  return (
    <>
      {projectList.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
};

export default ProjectList;
