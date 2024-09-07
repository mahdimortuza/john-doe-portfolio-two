"use client";
import assets from "@/assets";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { openSans } from "../ui/fonts";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = ["home", "about", "services", "portfolio", "blogs"];

  const handleNav = () => {
    setNav(!nav);
  };

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  // animateScroll.scrollToTop(options);
  // Function to handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed bg-white top-0 left-0 w-full py-[20px] z-50 ${
        shadow ? "shadow" : "shadow-none"
      }`}
    >
      <div className="max-w-[1525px] mx-auto px-[15px] md:px-[0px] flex justify-between items-center">
        <a href="/">
          <Image
            className="cursor-pointer"
            src={assets.logos.mainLogo}
            alt="logo"
          />
        </a>
        <ul className="hidden md:flex gap-x-[30px] cursor-pointer ">
          {menuItems.map((item, index) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              activeClass="active"
              spy={true}
            >
              <li
                className={`flex flex-col px-[10px] py-[5px] justify-center mx-auto text-[16px] font-[500] text-themeGray  cursor-pointer ${openSans.className}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={`${
                    hoveredIndex === index
                      ? " text-themeBlue -translate-y-3 opacity-0"
                      : "translate-y-0 opacity-100"
                  }  duration-300 capitalize absolute`}
                >
                  {item}
                </span>
                <span
                  className={`${
                    hoveredIndex === index
                      ? " text-themeBlue translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }  duration-300 capitalize `}
                >
                  {item}
                </span>
              </li>
            </Link>
          ))}
        </ul>

        <Link to="contact" smooth={true}>
          <button
            className={`${openSans.className} hidden md:block text-white relative bg-themeBlack  text-[16px] font-[600] leading-[150%] rounded-[12px] px-[22px] py-[10px] transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-themeBlue before:rounded-[12px] before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full animate-bg-slide`}
          >
            <span className="relative z-10">Contact Me</span>
          </button>
        </Link>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          <AlignJustify />
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={
          nav
            ? "fixed md:hidden left-0 top-0 pl-[0px] w-[100%] bg-white h-[100vh] ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        <div
          onClick={handleNav}
          className="flex justify-end items-center py-[16px] pr-[24px] bg-themeBlue"
        >
          <X className="text-white" />
        </div>

        <Separator />

        <ul className="mt-5">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              activeClass="mobile-active"
              spy={true}
            >
              <li
                onClick={handleNav}
                className={`${openSans.className} text-[16px] font-[500] leading-[150%] text-themeGray py-[12px] px-[16px] hover:text-black pb-[8px] cursor-pointer capitalize`}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
