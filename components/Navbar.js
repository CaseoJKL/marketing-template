import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  // This is the Navbar, a component of the layout

  return (
    <header className={"header " + styles["header"]}>
      <a href="#" className="logo">
        Cafe
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link href="/">
            <a
              onClick={() =>
                (document.getElementById("menu-btn").checked = false)
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              onClick={() =>
                (document.getElementById("menu-btn").checked = false)
              }
            >
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              onClick={() =>
                (document.getElementById("menu-btn").checked = false)
              }
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sponsors">
            <a
              onClick={() =>
                (document.getElementById("menu-btn").checked = false)
              }
            >
              Sponsors
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
