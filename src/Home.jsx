import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import me from "/me.jpg";
import "./Home.css";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faFacebook);

const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <span className="presentation madimi-one-regular">Olá, meu nome é</span>
        <span className="name">Felipe Valentim</span>
        <span className="profession">Desenvolvedor Full-Stack</span>
        <div className="personal-info">
          <span className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            felipevalentimdasilva@gmail.com
          </span>
          <span className="cellphone">
            <FontAwesomeIcon icon={faPhone} />
            +55 (21) 99785-6492
          </span>
          <span className="address">
            <FontAwesomeIcon icon={faLocationDot} /> Rio de Janeiro, RJ, Brasil
          </span>
        </div>

        <div className="social-media">
          <span>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </span>
          <span>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </span>
        </div>
      </div>
      <div className="photo-container">
        <img src={me} />
      </div>
    </div>
  );
};

export default Home;
