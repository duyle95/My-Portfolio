import React from "react";
import Link from "gatsby-link";
import {Helmet} from "react-helmet";

import styles from "./index.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

const ListLink = props => (
  <li className={styles["list-item"]}>
    <Link
      style={{ textShadow: "none", backgroundImage: "none", color: "#000" }}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
);
export default ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Duy Le's Portfolio</title>
      <link rel="shortcut icon" type="image/png" href={require('./favicon.ico')} />
    </Helmet>
    <header className={styles.header}>
      <Link to="/" className={styles[`logo-link`]}>
        <h2 className={styles["highlight-name"]}>DUY LE</h2>
      </Link>
      <input type="checkbox" id="drop" className={styles.drop} />
      <label htmlFor="drop" className={styles["menu-icon"]}>
        <FontAwesomeIcon icon="bars" />
      </label>
      <ul className={styles.menu}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children()}
    {/* <footer className={styles.footer}>Duy Le &copy; 2018</footer> */}
  </div>
);
