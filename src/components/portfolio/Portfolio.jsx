import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "ShopHub",
    img: "https://images.pexels.com/photos/4767578/pexels-photo-4767578.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "what to do is what not to do",
  },
  {
    id: 2,
    title: "PeoplePedia",
    img: "https://images.pexels.com/photos/4767578/pexels-photo-4767578.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "what to do is what not to do",
  },
  {
    id: 3,
    title: "Blog App",
    img: "https://images.pexels.com/photos/4767578/pexels-photo-4767578.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "what to do is what not to do",
  },
  {
    id: 4,
    title: "Quiz App",
    img: "https://images.pexels.com/photos/4767578/pexels-photo-4767578.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "what to do is what not to do",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <span>Visit Site</span>
              <FaExternalLinkAlt />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
