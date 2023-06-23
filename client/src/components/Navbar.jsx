import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-16 w-full z-50 ${
        isScrolled || isNavOpen
          ? "fixed top-0 bg-white text-black border-b-2 border-slate-950"
          : "text-white "
      } transition-all`}
    >
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full py-4 text-2xl">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between "
          aria-label="Global"
        >
          <div className="flex items-center justify-between ">
            <Link className="flex-none text-4xl font-semibold " to="/">
              Travelopia
            </Link>
            <div className="sm:hidden ">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm"
                onClick={toggleNav}
                aria-label="Toggle navigation"
              >
                <svg
                  className={`hs-collapse-open ${
                    isNavOpen ? "hidden" : "block"
                  } w-4 h-4`}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className={`hs-collapse-open ${
                    isNavOpen ? "block" : "hidden"
                  } w-4 h-4`}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-with-collapse"
            className={`basis-full grow sm:block ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
            <div
              className={`flex flex-col gap-10 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 ${
                isNavOpen
                  ? "fixed top-[2.5rem] left-0 w-[100%] bg-white text-black"
                  : ""
              }
      `}
            >
              <Link
                to="/"
                className="text-base hover:text-gray-400 "
                aria-current="page"
              >
                Home
              </Link>
              <a
                className="text-base  hover:text-gray-400 "
                href="https://www.travelopia.com/about-us/"
              >
                About Us
              </a>
              <a
                className="text-base  hover:text-gray-400 "
                href="https://www.travelopia.com/our-brands/"
              >
                Our Brands
              </a>
              <a
                className="text-base  hover:text-gray-400 "
                href="https://www.travelopia.com/sustainability/"
              >
                Sustainability
              </a>
              <a
                className="text-base  hover:text-gray-400 "
                href="https://www.travelopia.com/work-with-us/"
              >
                Work with us
              </a>
              <Link to="/admin/login">
                <button
                  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  type="button"
                >
                  Admin
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
