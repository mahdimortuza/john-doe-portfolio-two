import assets from "@/assets";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <Container className=" ">
      <ContainerInner className="bg-[#fff]">
        <div
          id="portfolio"
          className="max-w-[1530px] py-[48px] xl:py-[100px] px-[10px] mx-auto"
        >
          {/* left side container holder */}
          <div>
            <Image src={assets.projects.project1} alt="project image" />
            <h1>apps design</h1>
            <p>john doe creative designer </p>
          </div>

          {/* right side container holder */}
          <div></div>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default ProjectSection;
