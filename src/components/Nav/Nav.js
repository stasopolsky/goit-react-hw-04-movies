import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => (
  <header className={styles.hdr}>
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            exact
            className={styles.hdrItem}
            activeStyle={{
              fontWeight: "bold",
              color: "palevioletred",
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={styles.hdrItem}
            activeStyle={{
              fontWeight: "bold",
              color: "palevioletred",
            }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
