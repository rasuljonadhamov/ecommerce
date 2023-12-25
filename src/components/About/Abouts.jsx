import "./Abouts.scss";

const About = ({ isDarkMode }) => {
  return (
    <div className={`about-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1 className="heading">
        We love{" "}
        <span className={`comfy ${isDarkMode ? "dark-comfy" : ""}`}>comfy</span>
      </h1>

      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </div>
  );
};

export default About;
