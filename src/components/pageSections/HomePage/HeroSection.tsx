"use client";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <Container className=" ">
      <ContainerInner>
        <div id="home" className="flex justify-center items-center h-[100vh] ">
          <Link
            to="/"
            smooth={true}
            activeClass="active"
            spy={true}
            className="bg-white text-black border hover:bg-red-200"
          >
            <span>HELLO HELLO</span>
          </Link>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default HeroSection;
