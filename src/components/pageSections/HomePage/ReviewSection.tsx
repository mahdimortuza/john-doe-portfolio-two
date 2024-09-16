"use client";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import { inter, openSans } from "@/components/ui/fonts";
import SliderItem from "@/components/ui/sliderItem";
import { testimonials } from "@/db/testimonialData";
import "@smastrom/react-rating/style.css";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const ReviewSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <Container className=" ">
      <ContainerInner className="">
        <div className="flex flex-col lg:flex-row gap-[8px] lg:gap-[20px] overflow-hidden rounded-[16px] xl:rounded-[32px]">
          {/* left side 1st content  */}
          <div className="bg-white lg:w-[700px] w-full rounded-[16px] xl:rounded-[32px]">
            <div className="py-[40px] xl:py-[80px] px-[24px] flex flex-col justify-center">
              {/* text contents here  */}
              <div className="w-full">
                <h1
                  className={`${openSans.className} font-openSans text-[#09090A] text-[32px] lg:text-[44px] font-[600] leading-[136%] capitalize`}
                >
                  Client Experiences and Feedback
                </h1>
                <p
                  className={`mt-[20px] ${inter.className} font-inter text-[#40424D] text-[14px] lg:text-[16px] font-[400] leading-[175%]`}
                >
                  Discover what my clients have to say about my work, from
                  successful collaborations to impactful.
                </p>
              </div>
              <div className=" hidden mt-[32px] lg:mt-[60px] lg:flex flex-col items-center justify-center mx-auto">
                {/* button for controlling the scroll */}
                <div className="flex space-x-4">
                  <button
                    className="embla__prev h-10 w-10 bg-white hover:bg-themeBlue text-[#292D32] hover:text-[#fff] border border-[#292D32] hover:border-white rounded-[8px] flex justify-center items-center transition duration-200"
                    onClick={scrollPrev}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    className="embla__next h-10 w-10 bg-white hover:bg-themeBlue text-[#292D32] hover:text-[#fff] border border-[#292D32] hover:border-white rounded-[8px] flex justify-center items-center transition duration-200"
                    onClick={scrollNext}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* scroll bullet dots */}
                <div className="embla__dots flex justify-center space-x-[16px] mt-[35px]">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      className={`${
                        index === selectedIndex
                          ? "text-themeGray border-[3px] border-themeGray p-[5px] rounded-full"
                          : "text-themeGray"
                      }`}
                      onClick={() => scrollTo(index)}
                    >
                      <div
                        className={`${
                          index === selectedIndex
                            ? "w-[8px] h-[8px] bg-themeGray"
                            : "w-[8px] h-[8px] bg-themeGray"
                        } rounded-full transition-all duration-300 ease-in-out`}
                      >
                        <Dot className="w-full h-full" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* slide second content */}
          <div
            className="embla lg:w-full w-full rounded-l-[16px] xl:rounded-l-[32px]"
            ref={emblaRef}
          >
            <div className="embla__container">
              {testimonials.map((item) => (
                <div className="embla__slide" key={item._id}>
                  <SliderItem
                    _id={item._id}
                    rating={item.ratting}
                    description={item.description}
                    image={item.image}
                    name={item.name}
                    designation={item.designation}
                    logo={item.logo}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* scroll bullet dots for mobile */}
          <div className="embla__dots flex justify-center space-x-[16px] mt-[0px] lg:hidden bg-white py-[48px] rounded-t-[16px] xl:rounded-t-[32px]">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`${
                  index === selectedIndex
                    ? "text-themeGray border-[3px] border-themeGray p-[5px] rounded-full"
                    : "text-themeGray"
                }`}
                onClick={() => scrollTo(index)}
              >
                <div
                  className={`${
                    index === selectedIndex
                      ? "w-[8px] h-[8px] bg-themeGray"
                      : "w-[8px] h-[8px] bg-themeGray"
                  } rounded-full transition-all duration-300 ease-in-out`}
                >
                  <Dot className="w-full h-full" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default ReviewSection;
