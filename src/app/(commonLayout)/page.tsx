import AboutSection from "@/components/pageSections/HomePage/AboutSection";
import BlogsSection from "@/components/pageSections/HomePage/BlogsSection";
import ContactSection from "@/components/pageSections/HomePage/ContactSection";
import HeroSection from "@/components/pageSections/HomePage/HeroSection";
import PortfolioSection from "@/components/pageSections/HomePage/PortfolioSection";
import ProjectSection from "@/components/pageSections/HomePage/ProjectSection";
import ReviewSection from "@/components/pageSections/HomePage/ReviewSection";
import ServiceSection from "@/components/pageSections/HomePage/ServiceSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <PortfolioSection />
      <ReviewSection />
      <ContactSection />
      <BlogsSection />
    </>
  );
};

export default Home;
