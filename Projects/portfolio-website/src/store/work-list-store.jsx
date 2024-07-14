/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpeg";

const DEFAULT_CONTEXT = {
  workList: [],
};

const workDescriptions = {
  codeGurukul:
    "• Increased Google ranking of the website by 87% using SEO and Requirements Analysis and working collaboratively with backend and frontend teams. • Developed login page of the website and execute Operations assigned. • Technology: Search Engine Optimization (SEO), HTML, CSS3, Bootstrap, JavaScript.",
  sunbeamInfotech:
    "• My Task involves the Development of an application for the Vehicle Servicing Center using Java JDBC. • The Purpose of this application is to store customers, vehicles, services data and also keep track of available parts, and generate the bill amount according to the respective.",
};

export const MyWork = createContext(DEFAULT_CONTEXT);

const myWorkReducer = (currMyWork, action) => {
  return currMyWork;
};

const MyWorkProvider = ({ children }) => {
  const [workList, dispachMyWork] = useReducer(
    myWorkReducer,
    DEFAULT_WORK_LIST
  );

  return <MyWork.Provider value={{ workList }}>{children}</MyWork.Provider>;
};

const DEFAULT_WORK_LIST = [
  {
    id: "1",
    title: "UI Developer",
    companey: "CodeGurukul",
    body: workDescriptions.codeGurukul,
    skills: ["HTML", "SEO", "CSS"],
    duration: "Jan 2021 - May 2021",
    imglink: work1,
  },
  {
    id: "2",
    title: "Core Java Developer",
    companey: "Sunbeam Infotech Pune",
    body: workDescriptions.sunbeamInfotech,
    skills: ["Java", "MySQL", "GitHub"],
    duration: "June 2023 - July 2023",
    imglink: work2,
  },
];

export default MyWorkProvider;
