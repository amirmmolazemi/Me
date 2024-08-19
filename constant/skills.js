import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";

const skills = {
  title: "My Skills",
  description:
    "This skills make my life happier and easier and i try to develop myself to become professional in these skills ",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "Javascript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNode />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
  ],
};

export default skills;
