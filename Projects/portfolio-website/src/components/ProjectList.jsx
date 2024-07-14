import { useContext } from "react";
import { MyProject } from "../store/my-projects-store";
import Project from "./Project";

const ProjectList = () => {
  const { projectList } = useContext(MyProject);
  return (
    <>
      {projectList.map((project) => (
        <section key={Date.now()} className="row" style={{ display: "flex" }}>
          <Project key={project.id} project={project} />
        </section>
      ))}
    </>
  );
};

export default ProjectList;
