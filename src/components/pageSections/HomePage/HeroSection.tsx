import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container className=" ">
      <ContainerInner>
        <div className="flex justify-center items-center h-[100vh] ">
          Hello
          <Link href="/">
            <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full animate-bg-slide">
              <span className="relative z-10">Swipe</span>
            </button>
          </Link>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default HeroSection;
