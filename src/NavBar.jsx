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

// eslint-disable-next-line react/prop-types
const NavBar = ({ page, setPage, isMobile }) => {
  return (
    <div className={isMobile ? "nav-bar mobile" : "nav-bar"}>
      <div className="menu">
        <span onClick={() => setPage(1)}>
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span onClick={() => setPage(2)}>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span onClick={() => setPage(3)}>
          <FontAwesomeIcon icon={faGraduationCap} />
        </span>
        <span onClick={() => setPage(4)}>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      </div>

      <div className="previous-next">
        <span
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <span
          onClick={() => {
            if (page < 4) setPage(page + 1);
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
