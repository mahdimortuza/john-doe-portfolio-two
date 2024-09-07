"use client";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import { useState } from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Container className=" ">
      <ContainerInner>
        <div className="flex justify-center items-center h-[100vh] ">
          <ul className="cursor-pointer">
            <Link to="/">
              <li className=" relative flex items-center justify-center mx-auto">
                <span
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                  className={`${
                    isHovered
                      ? "text-theme-blue -translate-y-3 opacity-0"
                      : "translate-y-0 opacity-100"
                  } absolute duration-300 h-[30px] w-[50px] flex justify-center items-center`}
                >
                  Hello
                </span>
                <span
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                  className={`${
                    isHovered
                      ? " text-themeBlue  translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  } absolute  duration-300 h-[30px] w-[50px] flex justify-center items-center`}
                >
                  Hello
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default HeroSection;
