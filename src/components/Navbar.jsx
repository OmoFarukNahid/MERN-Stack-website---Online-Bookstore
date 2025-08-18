import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement; // fix: ensure element is defined

  // Handle theme switching
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element]);

  const location = useLocation();
  const isHome = location.pathname === "/"; // true only on Home page

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle hide/show navbar on scroll (only on Home page)
  useEffect(() => {
    if (!isHome) return; // disable scroll behavior on non-Home pages

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // hide when scrolling down
      } else {
        setIsVisible(true); // show when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHome]);

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li> {/* Changed from <a> to <Link> */}
      <li><Link to="/Course">Course</Link></li> {/* Changed from <a> to <Link> */}
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 shadow-sm rounded-none bg-emerald-300/80 backdrop-blur-sm transition-transform duration-300
        ${isHome ? (isVisible ? "translate-y-0" : "-translate-y-full") : "translate-y-0"}
      `}
    >
      {/* Logo */}
      <div className="navbar-start">
        <a className="text-2xl font-bold cursor-pointer">Bookstrap</a>
      </div>

      {/* Right side */}
      <div className="navbar-end space-x-4">
        {/* Menu items */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block border-1 border-gray-300 rounded-md">
          <label className="input border-0 bg-transparent focus-within:outline-none focus-within:ring-0 cursor-pointer">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow focus:outline-none focus:ring-0"
              placeholder="Search"
            />
          </label>
        </div>

        {/* Dark Theme Toggle */}
        <div>
          <label className="toggle toggle-sm text-base-content">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              className="theme-controller"
            />
            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>

        {/* Login Button */}
        <div>
          <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-700 duration-300 cursor-pointer"
          onClick={() => document.getElementById('my_modal_45').showModal()}>
            Login
          </a>
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;