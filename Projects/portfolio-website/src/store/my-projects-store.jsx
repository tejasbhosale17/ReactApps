import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  projectList: [],
};

export const MyProject = createContext(DEFAULT_CONTEXT);

const myProjectReducer = (currMyProject, action) => {
  return currMyProject;
};

const MyProjectProvider = ({ children }) => {
  const [projectList, dispachMyProjects] = useReducer(
    myProjectReducer,
    DEFAULT_PROJECT_LIST
  );

  return (
    <MyProject.Provider value={{ projectList }}>{children}</MyProject.Provider>
  );
};

const DEFAULT_PROJECT_LIST = [
  {
    id: "1",
    title: "Portfolio",
    body: "Hi Friends i am coming to pune for treking",
    skills: ["sahydri", "pune", "treking"],
    link: "https://tejasbhosale17.github.io/tejasportfolio.github.io/",
  },
  {
    id: "2",
    title: "LinkedIn",
    body: "Hi Friends i am coming to pune for treking",
    skills: ["sahydri", "pune", "treking"],
    link: "https://www.linkedin.com/in/tejas-bhosale-195871159/",
  },
];

export default MyProjectProvider;
