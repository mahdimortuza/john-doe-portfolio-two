"use client";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import BlogCard from "@/components/ui/blogCard";
import { inter, openSans } from "@/components/ui/fonts";
import { blogsData } from "@/db/blogData";
import Link from "next/link";
import { useState } from "react";
import { LiaArrowRightSolid } from "react-icons/lia";

const BlogsSection = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Container className=" ">
      <ContainerInner>
        <div
          id="blogs"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[20px] "
        >
          {/* first item  */}
          <div className="relative col-span-1 lg:col-span-2 bg-themeBlue rounded-[16px] xl:rounded-[32px] py-[48px] md:py-[70px]">
            <div className="absolute mx-auto inset-0 bg-gradient-to-t  from-white/30 via-transparent to-transparent"></div>

            <div className="w-[40ch] md:w-[70ch] lg:w-[90ch] xl:w-[60ch] mx-auto">
              <h1
                className={`${openSans.className} font-openSans text-white text-[28px] md:text-[44px] font-[600] leading-[136%] capitalize`}
              >
                Exploring the Future of UI/UX
              </h1>
              <p
                className={`mt-[24px] ${inter.className} font-inter text-white text-[16px] font-[400] leading-[175%]`}
              >
                Stay updated with the latest insights, tips, and trends in
                design, branding, and digital strategy to grow your business
                effectively.
              </p>

              <Link href={"/"}>
                <button
                  className={`relative flex flex-col mt-[48px] xl:mt-[45px] py-[5px] justify-center  text-[16px] font-[500] cursor-pointer ${openSans.className} font-openSans`}
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
                    } flex gap-[10px] items-center`}
                  >
                    <span>View All Blogs</span>{" "}
                    <LiaArrowRightSolid className="h-[24px] w-[24px]" />
                  </span>
                  <span
                    className={`${
                      hovered
                        ? "translate-y-0 opacity-100 text-white"
                        : "translate-y-[20px] opacity-0 text-white"
                    } transition-all duration-300 capitalize flex gap-[10px] items-center`}
                  >
                    <span>View All Blogs</span>{" "}
                    <LiaArrowRightSolid className="h-[24px] w-[24px]" />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* blog  card item  */}
          {blogsData.slice(0, 2).map((item) => (
            <div key={item._id}>
              <BlogCard
                _id={item._id}
                image={item.image}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </ContainerInner>
    </Container>
  );
};

export default BlogsSection;
