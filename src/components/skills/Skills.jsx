/* eslint-disable react/jsx-no-target-blank */
import "./Skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          and the list goes just
          <br />
          like this
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <div>I Do Craft Some</div>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>MERN</motion.b> Web Apps
            and
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Flutter</motion.b> Mobile
            Apps
          </h1>
          <a href="https://github.com/gavutham" target="_blank">
            <button>
              Know More <FaExternalLinkAlt stroke="1" />
            </button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
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
