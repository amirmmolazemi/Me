// Importing images
import blogApp from "../public/assets/images/blogApp.png";
import storeProject from "../public/assets/images/storeProject.png";
import cryptoApp from "../public/assets/images/cryptoApp.png";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Blog-App",
    description:
      "in this project I developed a blog app using MUI and also Hygraph backend.",
    stack: [{ name: "MUI" }, { name: "React" }, { name: "GraphQL" }],
    image: blogApp,
    github: "https://github.com/amirmmolazemi/Blog-App",
  },
  {
    num: "02",
    category: "frontend",
    title: "Store-Project",
    description:
      "in this project I developed a shop app using Redux Toolkit and also API from Fake Store API.",
    stack: [{ name: "React" }, { name: "Redux Toolkit" }],
    image: storeProject,
    github: "https://github.com/amirmmolazemi/Store-Project",
  },
  {
    num: "03",
    category: "frontend",
    title: "Crypto-App",
    description:
      "in this project I developed a Crypto app using charts and CoinGecko API.",
    stack: [{ name: "React" }, { name: "Recharts" }],
    image: cryptoApp,
    github: "https://github.com/amirmmolazemi/Crypto-App",
  },
  {
    num: "04",
    category: "frontend",
    title: "Divar",
    description:
      "in this project I tried to develop Divar app using a lot of libraries.",
    stack: [{ name: "React" }, { name: "React-Query" }, { name: "JWT" }],
    image: storeProject,
    github: "https://github.com/amirmmolazemi/Divar",
  },
  {
    num: "05",
    category: "frontend",
    title: "Food-Ordering",
    description:
      "in this project you can find some recipes with detail and also filter the data.",
    stack: [{ name: "Next" }, { name: "React" }, { name: "json-server" }],
    image: storeProject,
    github: "https://github.com/amirmmolazemi/Food-Order-Project",
  },
];

export default projects;
