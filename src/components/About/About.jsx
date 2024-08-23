import React, { useContext, useEffect } from "react";
import "./about.css";
import { themeContext } from "../../Context";
import me from "../../img/shubham_profile.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="services"
      id="services"
      data-aos-duration="5000"
      data-aos-delay="600">
      <span
        style={{ color: darkMode ? "white" : "" }}
        className="about_me anim"
        data-aos="flip-left">
        {" "}
        All{" "}
        <span data-aos="flip-left" className="me">
          About
        </span>{" "}
        Me
      </span>
      <div className="grid_about ">
        <div className="awesome " data-aos="slide-right">
          <ul className="about_article anim">
            <li>
            Hey there! I'm Shubham Khangar, passionate about web development.
            </li>
            <br />
            <li>
            I work with React, HTML, CSS, JavaScript, Node.js, Express.js, SQL, and MongoDB. good attention to detail and the ability to
              write efficient code using MERN Stack.
            </li>
            <br />
            <li>
              My interest in web development started back last year when I was
              trying to edit things on the web, Since then, I've been expanding my skills, building web applications, and completing projects.
            </li>
            <br />
            <li>
            Always eager to learn, I'm driven by curiosity and a passion for discovery.
            </li>
            <br />
            <li>
            As I continue growing, I aim to create impactful web experiences.
            </li>
            <br />
          </ul>
        </div>
        <div className="photo">
          <img src={me} alt="me" draggable="false" className="anim" />
        </div>
        {/* <Svg1 className="svg" data-aos="slide-left" /> */}
      </div>
    </div>
  );
};

export default About;
