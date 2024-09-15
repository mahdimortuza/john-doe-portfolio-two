"use client";
import assets from "@/assets";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import { dmSans, inter, openSans } from "@/components/ui/fonts";
import { Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogsSection = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Container className=" ">
      <ContainerInner>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[20px]">
          {/* first item  */}
          <div className="relative col-span-1 lg:col-span-2 bg-themeBlue rounded-[32px]  py-[48px] md:py-[80px]">
            <div className="absolute mx-auto inset-0 bg-gradient-to-t  from-white/30 via-transparent to-transparent"></div>

            <div className="w-[40ch] md:w-[70ch] lg:w-[90ch] xl:w-[60ch] mx-auto">
              <h1
                className={`${openSans.className} font-openSans text-white text-[28px] md:text-[44px] font-[600] leading-[136%] capitalize`}
              >
                Exploring the Future of UI/UX
              </h1>
              <p
                className={`mt-[24px] ${inter.className} font-inter text-white text-[16px] font-[600] leading-[175%]`}
              >
                Stay updated with the latest insights, tips, and trends in
                design, branding, and digital strategy to grow your business
                effectively.
              </p>

              <Link href={"/"}>
                <button
                  className={`relative flex flex-col mt-[48px] xl:mt-[78px] py-[5px] justify-center  text-[16px] font-[500] cursor-pointer ${openSans.className} font-openSans`}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <span
                    className={`absolute ${
                      hovered
                        ? "translate-y-[-20px] opacity-0"
                        : "translate-y-0 opacity-100"
                    } transition-all duration-300 capitalize ${
                      hovered ? "text-white" : "text-white"
                    }`}
                  >
                    Explore Projects
                  </span>
                  <span
                    className={`${
                      hovered
                        ? "translate-y-0 opacity-100 text-white"
                        : "translate-y-[20px] opacity-0 text-white"
                    } transition-all duration-300 capitalize`}
                  >
                    Explore Projects
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* second item  */}
          <div className=" col-span-1 px-[32px] pt-[32px] pb-[56px] bg-white rounded-[32px] mx-auto">
            <Image
              src={assets.blogImage.blog1}
              alt="blog image"
              className=" rounded-[24px]"
            />

            {/* date and share btn  */}
            <div className="flex justify-between mt-[24px]">
              <span
                className={`${dmSans.className} font-dmSans text-[14px] text-[#707380] font-[400] leading-[142%]`}
              >
                05/08/2024
              </span>
              <Share2 className="text-[#707380] w-[20px] h-[20px]" />
            </div>

            <h2
              className={`${openSans.className} font-openSans mt-[8px] text-[#17171A] text-[24px] font-[600] leading-[140%] capitalize`}
            >
              5 Proven Ways to Boost Your Digital Presence
            </h2>
            <p
              className={`${inter.className} font-inter mt-[12px] text-[#40424D] text-[16px] font-[400] leading-[162%]`}
            >
              In today’s competitive online landscape, having a strong digital
              presence is essential for bs success.
            </p>
          </div>

          {/* third item  */}
          <div className=" col-span-1 px-[32px] pt-[32px] pb-[56px] bg-white rounded-[32px] mx-auto">
            <Image
              src={assets.blogImage.blog2}
              alt="blog image"
              className=" rounded-[24px]"
            />

            {/* date and share btn  */}
            <div className="flex justify-between mt-[24px]">
              <span
                className={`${dmSans.className} font-dmSans text-[14px] text-[#707380] font-[400] leading-[142%]`}
              >
                05/08/2024
              </span>
              <Share2 className="text-[#707380] w-[20px] h-[20px]" />
            </div>

            <h2
              className={`${openSans.className} font-openSans mt-[8px] text-[#17171A] text-[24px] font-[600] leading-[140%] capitalize`}
            >
              5 Proven Ways to Boost Your Digital Presence
            </h2>
            <p
              className={`${inter.className} font-inter mt-[12px] text-[#40424D] text-[16px] font-[400] leading-[162%]`}
            >
              In today’s competitive online landscape, having a strong digital
              presence is essential for bs success.
            </p>
          </div>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default BlogsSection;
