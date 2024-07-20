import { useContext } from "react";
import { MyProject } from "../store/my-projects-store";
import Project from "./Project";

const ProjectList = () => {
  const { projectList } = useContext(MyProject);
  let num = 0;
  let pnum = 100;
  return (
    <>
      {/* {projectList.map((project) => ( */}
      <div className="album py-5 bg-body-tertiary" key={num++}>
        {/* <Project key={pnum++} project={project} /> */}
        <Project />
      </div>
      // ))}
    </>
  );
};

export default ProjectList;
