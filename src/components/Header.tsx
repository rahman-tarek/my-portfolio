import { FaRocket } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handlestartproject = () => {
    navigate("/startproject");
  };

  // Function to handle navigation to different sections
  const goTo = (section: string) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="header h-20 w-full max-w-7xl inset-x-0 mx-auto bg-transparent fixed z-[5000] flex justify-between items-center py-4 px-8">
      <div className="logo">
        <Link className="text-xl font-bold px-1 rounded-full cursor-pointer" to="/">
          <span className="text-blue-800 text-sm">{"</> "}</span>tarek.dev
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="nav hidden lg:block border border-gray-300 px-3 py-2 rounded-full backdrop-blur-md">
        <ul className="flex gap-2 text-gray-500 text-sm">
          {["Home", "About", "Projects", "Blog", "Contact", "More"].map((item, i) => (
            <li key={i}>
              <button
                onClick={() => goTo(item)}
                className="cursor-pointer focus:border rounded-full border-gray-300 px-4 py-1"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      {isOpen && <MobileNav />}

      {/* Start Project Button */}
      <div
        className="start-project text-xs md:text-sm hidden md:flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full cursor-pointer"
        onClick={handlestartproject}
      >
        <FaRocket /> Start Project
      </div>

      {/* Hamburger */}
      <FaBarsStaggered
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Mobile Menu"
      />
    </div>
  );
};

export default Header;
