"use client";
import assets from "@/assets";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { openSans } from "../ui/fonts";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
      className={`fixed top-0 left-0 w-full py-[20px] bg-white z-50 ${
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
        <ul className={`hidden md:flex gap-[40px] `}>
          <Link to="home" smooth={true} activeClass="active" spy={true}>
            <li
              className={`text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black cursor-pointer ${openSans.className}`}
            >
              Home
            </li>
          </Link>

          <Link to="about" smooth={true} activeClass="active" spy={true}>
            <li
              className={`text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black cursor-pointer ${openSans.className}`}
            >
              About
            </li>
          </Link>

          <Link to="services" smooth={true} activeClass="active" spy={true}>
            <li
              className={`text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black cursor-pointer ${openSans.className}`}
            >
              Services
            </li>
          </Link>

          <Link to="projects" smooth={true} activeClass="active" spy={true}>
            <li
              className={`text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black cursor-pointer ${openSans.className}`}
            >
              Projects
            </li>
          </Link>

          <Link to="blogs" smooth={true} activeClass="active" spy={true}>
            <li
              className={`text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black cursor-pointer ${openSans.className}`}
            >
              Blogs
            </li>
          </Link>
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
          {nav ? <X /> : <AlignJustify />}
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={
          nav
            ? "fixed md:hidden left-0 top-0 pl-[10px] w-[60%] bg-white h-[100vh] ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        <Image
          className="cursor-pointer my-[24px] "
          onClick={scrollToTop}
          src={assets.logos.mainLogo}
          alt="logo"
        />

        <Separator />

        <ul className="mt-5">
          <Link to="home" smooth={true} activeClass="active" spy={true}>
            <li
              onClick={handleNav}
              className={`${openSans.className} text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer`}
            >
              Home
            </li>
          </Link>

          <Link to="about" smooth={true} activeClass="active" spy={true}>
            <li
              onClick={handleNav}
              className={`${openSans.className} text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer`}
            >
              About
            </li>
          </Link>

          <Link to="services" smooth={true} activeClass="active" spy={true}>
            <li
              onClick={handleNav}
              className={`${openSans.className} text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer`}
            >
              Services
            </li>
          </Link>

          <Link to="projects" smooth={true} activeClass="active" spy={true}>
            <li
              onClick={handleNav}
              className={`${openSans.className} text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer`}
            >
              Projects
            </li>
          </Link>

          <Link
            onClick={handleNav}
            to="blogs"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            <li
              className={`${openSans.className} text-[16px] font-[500] leading-[150%] text-themeGray hover:text-black pb-[8px] cursor-pointer`}
            >
              Blogs
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
