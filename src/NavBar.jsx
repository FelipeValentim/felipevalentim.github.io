import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGraduationCap,
  faHome,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="menu">
        <span>
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span>
          <FontAwesomeIcon icon={faGraduationCap} />
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      </div>

      <div className="previous-next">
        <span>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
