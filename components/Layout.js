import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  // Here you can change the layout applying to all pages.
  // It includes but is not limited to: the navbar and the footer

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
