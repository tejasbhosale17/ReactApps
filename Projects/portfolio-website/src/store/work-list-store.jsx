/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  workList: [],
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
    body: "Hi Friends i am coming to pune for treking",
    skills: ["HTML", "SEO", "CSS"],
    duration: "Jan 2021 - May 2021",
  },
  {
    id: "2",
    title: "Core Java Developer",
    companey: "Sunbeam Infotech Pune",
    body: "Hi Friends i am coming to pune for treking",
    skills: ["Java", "MySQL", "GitHub"],
    duration: "June 2023 - July 2023",
  },
];

export default MyWorkProvider;
