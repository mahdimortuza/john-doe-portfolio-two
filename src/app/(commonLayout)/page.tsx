import AboutSection from "@/components/pageSections/HomePage/AboutSection";
import BlogsSection from "@/components/pageSections/HomePage/BlogsSection";
import CallToActionSection from "@/components/pageSections/HomePage/CallToActionSection";
import ContactSection from "@/components/pageSections/HomePage/ContactSection";
import HeroSection from "@/components/pageSections/HomePage/HeroSection";
import ProjectSection from "@/components/pageSections/HomePage/ProjectSection";
import ServiceSection from "@/components/pageSections/HomePage/ServiceSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <CallToActionSection />
      {/* <ReviewSection /> */}
      <ContactSection />
      <BlogsSection />
    </>
  );
};

export default Home;
