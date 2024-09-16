import assets from "@/assets";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { inter, openSans } from "./fonts";

type TTestimonial = {
  _id: string;
  rating: number;
  description: string;
  image: string;
  name: string;
  designation: string;
  logo: string;
};

const includedShapesStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#F6C15B",
  inactiveFillColor: "#ffe2c0",
  style: { marginRight: "20px" },
};
const SliderItem = ({
  rating,
  description,
  image,
  name,
  designation,
  logo,
}: TTestimonial) => {
  return (
    <div className=" bg-[#fff] py-[48px] xl:py-0 rounded-[16px] xl:rounded-[32px] w-full xl:w-[800px] h-full xl:h-[500px] px-[16px] xl:px-[69px] flex flex-col justify-center gap-[20px] lg:gap-[26px]">
      <Rating
        style={{ maxWidth: 140 }}
        value={rating}
        itemStyles={includedShapesStyles}
        spaceBetween="small"
        readOnly
      />
      <div className="flex flex-col gap-[28px] lg:gap-[36px]">
        <Image
          src={assets.reviewImage.dash}
          alt="feedback"
          className="h-[2px] w-full"
        />

        <p
          className={`${inter.className} font-inter text-[#40424D] text-[16px] xl:text-[20px] font-[400] leading-[170%] capitalize`}
        >
          <i>{description}</i>
        </p>

        <Image
          src={assets.reviewImage.dash}
          alt="dash"
          className="h-[2px] w-full"
        />
      </div>
      {/* client information */}
      <div className="flex justify-between items-center">
        <div className="flex gap-[16px] items-center">
          <Image
            src={image}
            alt="client"
            className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-[2px]">
            <h3
              className={`${openSans.className} font-openSans text-[#000] text-[16px] md:text-[20px] font-[600] leading-[140%] capitalize`}
            >
              {name}
            </h3>
            <p
              className={`${inter.className} font-inter text-[#40424D] text-[14px] md:text-[18px] font-[400] leading-[155%] capitalize`}
            >
              {designation}
            </p>
          </div>
        </div>

        {/* company logo here  */}
        <Image
          src={logo}
          alt="company logo"
          className="w-[85px] h-[20] lg:w-[100px] lg:h-[30]"
        />
      </div>
    </div>
  );
};

export default SliderItem;
