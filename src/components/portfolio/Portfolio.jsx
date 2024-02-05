/* eslint-disable react/jsx-no-target-blank */
import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "ShopHub",
    img: "shophub.png",
    desc: "A Fully functional E-Commerce website developed using the MERN Stack.",
    link: "https://shophub-ecom.netlify.app/",
  },
  {
    id: 2,
    title: "PeoplePedia",
    img: "peoplepedia.png",
    desc: "Here is a exact clone of Facebook app in web application. It even consist real-time chat feature.",
    link: "https://peoplepedia.netlify.app/",
  },
  {
    id: 3,
    title: "Blog App",
    img: "blog.png",
    desc: "A full fledged blog application where you can read blogs or be yourself an author and publish your own blogs.",
    link: "https://react-node-blog-site.netlify.app/",
  },
  {
    id: 4,
    title: "Quiz App",
    img: "crorepati.png",
    desc: "The application might be small but never fails to entertain you, give it a try you may win some money.",
    link: "https://crorepati-by-creatorsneo.netlify.app/",
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
            <a
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button>
                <span>Visit Site</span>
                <FaExternalLinkAlt />
              </button>
            </a>
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
