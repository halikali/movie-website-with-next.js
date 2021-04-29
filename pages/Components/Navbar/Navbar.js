import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import {
  faAnchor,
  faCoffee,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <img src="http://streamlab.gentechtree.com/red-demo/wp-content/uploads/sites/2/2021/02/Logo-2.png" />
      </div>
      <div className="nav-wrapper">
        <nav className="nav-links">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/movies">
                <a>Movies</a>
              </Link>
            </li>
            <li>
              <Link href="tvshows">
                <a>Tv Shows</a>
              </Link>
            </li>
            <li>
              <Link href="video">
                <a>Video</a>
              </Link>
            </li>
            <li>
              <Link href="/pages">
                <a>Pages</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="subscribe-wrapper">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
