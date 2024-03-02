import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import programming from "/programming.svg";
import "./About.css";

import { faDownload } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faFacebook);

const About = () => {
  return (
    <div className="about">
      <div className="programming-image">
        <img src={programming} />
      </div>
      <div className="skills">
        <h1>Sobre mim</h1>
        <p>
          Olá, sou um desenvolvedor Full-Stack. Tenho experiência com tanto com
          desenvolvimento backend, quanto em frontend. Sou bom em
        </p>
        <ul className="competences">
          <li>html</li>
          <li>css</li>
          <li>.net</li>
          <li>javascript</li>
          <li>react</li>
          <li>jquery</li>
          <li>c-sharp</li>
          <li>typescript</li>
        </ul>
        <div className="download-cv">
          Baixar Currículo &nbsp;&nbsp;
          <FontAwesomeIcon icon={faDownload} />
        </div>
      </div>
    </div>
  );
};

export default About;
