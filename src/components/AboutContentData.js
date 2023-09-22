import myself1 from "../assets/myself1.jpg";
import myself2 from "../assets/myself2.webp";
import edu1 from "../assets/edu1.jpg";
import edu2 from "../assets/edu2.jpg";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import skill4 from "../assets/skill4.jpg";
import skill5 from "../assets/skill5.jpg";
import exp1 from "../assets/exp1.jpg";
import exp2 from "../assets/exp2.jpg";

const AboutData = [
  {
    def: "About Myself",
    msg: "Hi, I'm Nithin Kumar, a passionate aspiring React developer with a love for creating interactive and user-friendly web applications",

    imgab: myself1,
    imgab1: myself2,
  },

  {
    def: "My Skills",
    msg: (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>SQL</li>
        <li>REACT</li>
      </ul>
    ),
    imgab: skill4,
    imgab1: skill5,
  },

  {
    def: "About Education",
    msg: (
      <ul>
        <li>I have completed B.tech (ECE)</li>
        <li>2019 passed out</li>
        <li>CGPA 6.5</li>
      </ul>
    ),
    imgab: edu1,
    imgab1: edu2,
  },

  {
    def: "Work Experience",
    msg: (
      <ul>
        <li>I have worked as Software Test Engineer from past two years</li>
        <li>May 2021- June 2023</li>
      </ul>
    ),
    imgab: exp1,
    imgab1: exp2,
  },

  {
    def: "About Projects",
    msg: (
      <ul>
        <li>Portfolio using React.Js</li>
        <li>FoodFire App</li>
      </ul>
    ),

    imgab: pro1,
    imgab1: pro2,
  },

];

export default AboutData;
