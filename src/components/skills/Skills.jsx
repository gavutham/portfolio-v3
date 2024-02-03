/* eslint-disable react/jsx-no-target-blank */
import "./Skills.scss";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const skills = [
  "React Js",
  "Express Js",
  "Node Js",
  "Mongo Db",
  "Flutter",
  "Firebase",
  "Python",
  "C++",
];

const Skills = () => {
  return (
    <motion.div className="skills">
      <motion.div className="textContainer">
        <p>
          and the list goes just
          <br />
          like this
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <div>I Do Craft Some</div>
          <h1>
            <b>MERN</b> Web Apps and
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Flutter</b> Mobile Apps
          </h1>
          <a href="https://github.com/gavutham" target="_blank">
            <button>
              Know More <FaExternalLinkAlt stroke="1" />
            </button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        {skills.map((item) => (
          <div className="wrapper" key={item}>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>{item}</h2>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
