import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mobileData } from "../../helper/dataSkill";

const MobileNav = () => {
  const [active, setActive] = useState("");

  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <nav className="row fixed-bottom bg-dark text-secondary d-lg-none d-md-flex align-items-center pt-3 px-5">
      <ul className="d-flex justify-content-between p-0">
        {mobileData.map((item) => (
          <Link
            key={item.id}
            onClick={() => handleClick(item.title)}
            className={`nav-link nav-mobile-hover  ${
              active === item.title ? "text-light fw-bold" : ""
            }`}
            to={item.path}
          >
            <div className="d-flex fs-4 ">{item.icon}</div>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
