import React from "react";
import { Link } from "react-router-dom";
const Narbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about_me">About</Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
    </div>
  );
};

export default Narbar;
