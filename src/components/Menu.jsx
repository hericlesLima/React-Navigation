import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/param/1">Param #01</Link>
        </li>
        <li>
          <Link to="/param/hericles">Param #02</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/notFound">Not Found</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu; 
