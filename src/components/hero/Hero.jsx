import { motion } from "framer-motion";
import "./Hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-150%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <motion.h2 variants={textVariants}>GAVUTHAM K</motion.h2>
          <motion.h1 variants={textVariants}>
            Web and Mobile Application Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a
              href="#What I Did"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>
            <a
              href="#Reach Me"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <motion.button
                variants={textVariants}
                style={{ backgroundColor: "white", color: "black" }}
                whileHover={{ backgroundColor: "transparent", color: "white" }}
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      {/* <motion.div
        className="slidingTextContainer"
        initial="initial"
        animate="animate"
        variants={sliderVariants}
      >
        Web Developer
      </motion.div> */}

      <div className="imageContainer">
        <img src="/profile.png" alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
