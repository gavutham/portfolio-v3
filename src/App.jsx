import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section id="What I Can Do">Parallax</section>
      <section>Services</section>
      <section id="What I Did">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Reach Me">Contact</section>
    </div>
  );
};

export default App;
