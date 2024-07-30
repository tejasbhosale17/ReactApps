import { useContext } from "react";
import { MyProject } from "../store/my-projects-store";
import Project from "./Project";

const ProjectList = () => {
  const { projectList } = useContext(MyProject);
  let num = 0;
  let pnum = 100;
  let pkey = 0;
  return (
    <>
      {projectList.map((project) => (
        <div
          className="project-List"
          key={pkey++}
          style={{ marginTop: "58px" }}
        >
          <div className="album py-5 bg-body-tertiary" key={num++}>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 g-2">
                <Project key={pnum++} project={project} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectList;
