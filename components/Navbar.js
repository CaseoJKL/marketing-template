import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // This is the Navbar, a component of the layout

  return (
    // <nav>
    //   <div className="logo">
    //     <h1>Brand</h1>
    //     {/* <Image alt="" src="/example" />  You can put the brand logo here*/}
    //   </div>
    //   <div className="nav-bar">
    //     <Link href="/">
    //       <a>Home</a>
    //     </Link>
    //     <Link href="/contact">
    //       <a>Contact</a>
    //     </Link>
    //     <Link href="/about">
    //       <a>About</a>
    //     </Link>
    //   </div>

    //   <button className="button-hero">
    //     <span>Press Me!</span>
    //   </button>
    // </nav>
    <header className="header">
      <a href="#" className="logo">
        Rosstown
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
