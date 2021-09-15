import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // This is the Navbar, a component of the layout

  return (
    <nav>
      <div className="logo">
        <h1>Brand</h1>
        {/* <Image alt="" src="/example" />  You can put the brand logo here*/}
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
