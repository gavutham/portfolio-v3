import "./Navbar.scss";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>{"<Gavutham/>"}</span>
        <div className="social">
          <a target="_blank" href="https://github.com/gavutham">
            <FaGithub color="inherit" size={24} />
          </a>
          <a target="_blank" href="https://twitter.com/GavuthamK">
            <FaTwitter color="inherit" size={24} />
          </a>
          <a target="_blank" href="https://www.instagram.com/gavutxm">
            <FaInstagram color="inherit" size={24} />
          </a>
          <a target="_blank" href="mailto:kgavutham2005@gmail.com">
            <MdEmail color="inherit" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
