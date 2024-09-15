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
    <div className=" bg-[#fff] rounded-[32px] w-[800px] h-[500px]  px-[69px] flex flex-col justify-center gap-[26px]">
      <Rating
        style={{ maxWidth: 140 }}
        value={rating}
        itemStyles={includedShapesStyles}
        spaceBetween="small"
        readOnly
      />
      <div className="flex flex-col gap-[36px]">
        <Image
          src={assets.reviewImage.dash}
          alt="feedback"
          className="h-[5px]"
        />

        <p
          className={`${inter.className} font-inter text-[#40424D] text-[20px] font-[400] leading-[170%] capitalize`}
        >
          <i>{description}</i>
        </p>

        <Image src={assets.reviewImage.dash} alt="dash" className="h-[5px]" />
      </div>
      {/* client information */}
      <div className="flex justify-between items-center">
        <div className="flex gap-[16px] items-center">
          <Image
            src={image}
            alt="client"
            className="w-[56px] h-[56px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-[2px]">
            <h3
              className={`${openSans.className} font-openSans text-[#000] text-[20px] font-[600] leading-[140%] capitalize`}
            >
              {name}
            </h3>
            <p
              className={`${inter.className} font-inter text-[#40424D] text-[18px] font-[400] leading-[155%] capitalize`}
            >
              {designation}
            </p>
          </div>
        </div>
        <Image src={logo} alt="company logo" className="w-[100px] h-[30]" />
      </div>
    </div>
  );
};

export default SliderItem;
