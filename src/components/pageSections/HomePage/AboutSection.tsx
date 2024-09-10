import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";

const AboutSection = () => {
  return (
    <Container className=" ">
      <ContainerInner>
        <div
          id="about"
          className="flex justify-center items-center h-[100vh] bg-red-200"
        >
          AboutSection
        </div>
      </ContainerInner>
    </Container>
  );
};

export default AboutSection;
