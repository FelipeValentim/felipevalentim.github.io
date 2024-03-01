import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGraduationCap,
  faPerson,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="menu">
        <span>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span>
          <FontAwesomeIcon icon={faGraduationCap} />
        </span>
        <span>
          <FontAwesomeIcon icon={faSuitcase} />
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
