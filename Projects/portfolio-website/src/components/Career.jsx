import { useContext } from "react";
import Work from "./Work";
import { MyWork } from "../store/work-list-store";

const Career = () => {
  const { workList } = useContext(MyWork);
  return (
    <>
      {workList.map((work) => (
        <Work key={work.id} work={work} />
      ))}
    </>
  );
};
export default Career;
