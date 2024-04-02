import Link from "next/link";
import React from "react";
import { IoEyeOutline, IoArrowBack } from "react-icons/io5";
const css = String.raw;

const CardAbout = ({
  width,
  height,
  rounded,
  image,
  title,
  price,
  // description,
  icons,
  id,
}: {
  width: string;
  height: string;
  rounded: string;
  title: string;
  image: string;
  price: string;
  // description?: string;
  icons?: boolean;
  id?: string;
}) => {
  return (
    <>
      <div
        className={"card"}
        style={{
          width: width,
          height: height,
          borderRadius: rounded,
        }}
      >
        <img alt={title} src={image} className="card-image" />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] z-10"></div>
        <div className="content">
          <div>
            <h3 className="text-[#ffffff] text-[24px]">
              {title} {price ? `- ${price}` : ""}
            </h3>
          </div>

          {/* <p className="text-[#ffffff] text-[18px]">
            {description?.slice(0, 30)}
          </p> */}
        </div>
        {icons ? (
          <div className="card-icons w-full bg-[#dbdbdb] opacity-45 z-40 h-[70px] flex items-center justify-start px-4 gap-x-4">
            <Link href={`products/${id}`}>
              <div className="flex items-center justify-center gap-2 border-[2px] rounded p-2 border-main_color">
                 معلومات المنتج
                <IoArrowBack className="mt-[4px]"/>
              </div>
            </Link>
            {/* <Link href={"products"}>
              <span className="w-[40px] h-[40px] rounded-full transition-all hover:bg-[rgba(0,0,0,0.1)] flex items-center justify-center text-[20px] text-[#191919]">
                <IoCartOutline />
              </span>
            </Link> */}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CardAbout;
