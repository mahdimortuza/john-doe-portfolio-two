"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { dmSans, inter, openSans } from "@/components/ui/fonts";
import { Share2 } from "lucide-react";
import Image from "next/image";

type TBlogProps = {
  _id: string;
  image: string;
  date: string;
  title: string;
  description: string;
};

const BlogCard = ({ image, date, title, description }: TBlogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer col-span-1 h-[430px] px-[32px] pt-[32px] pb-[56px] bg-white rounded-[16px] xl:rounded-[32px] mx-auto">
          <Image src={image} alt="blog image" className=" rounded-[24px]" />

          {/* date and share btn  */}
          <div className="flex justify-between mt-[24px]">
            <span
              className={`${dmSans.className} font-dmSans text-[14px] text-[#707380] font-[400] leading-[142%]`}
            >
              {date}
            </span>
            <Share2 className="text-[#707380] w-[20px] h-[20px]" />
          </div>

          <h2
            className={`${openSans.className} font-openSans mt-[8px] text-[#17171A] text-[24px] font-[600] leading-[140%] capitalize`}
          >
            {title}
          </h2>
          <p
            className={`${inter.className} font-inter mt-[12px] text-[#40424D] text-[16px] font-[400] leading-[162%] w-[300px] truncate`}
          >
            {description}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[600px] lg:max-w-[800px] h-[500px] overflow-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            <Image
              src={image}
              alt={title}
              className="w-[50%] h-auto rounded-md mt-[30px] mx-auto"
            />
            <div
              className={`${inter.className} font-vietnam mt-[16px] text-themeGray text-[15px] leading-[24px] text-left`}
            >
              {description}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BlogCard;
