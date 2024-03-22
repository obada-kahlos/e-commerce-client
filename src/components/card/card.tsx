import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoEyeOutline, IoCartOutline } from "react-icons/io5";
const css = String.raw;

const Card = ({
  width,
  height,
  rounded,
  image,
  title,
  price,
  description,
  icons,
  id,
}: {
  width: string;
  height: string;
  rounded: string;
  title: string;
  image: string;
  price: string;
  description?: string;
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

          <p className="text-[#ffffff] text-[18px]">
            {description?.slice(0, 30)}
          </p>
        </div>
        {icons ? (
          <div className="card-icons w-full bg-[#dbdbdb] opacity-45 z-40 h-[70px] flex items-center justify-center gap-x-4">
            <Link href={`products/${id}`}>
              <span className="w-[40px] h-[40px] rounded-full transition-all hover:bg-[rgba(0,0,0,0.1)] flex items-center justify-center text-[20px] text-[#191919]">
                <IoEyeOutline />
              </span>
            </Link>
            <Link href={"products"}>
              <span className="w-[40px] h-[40px] rounded-full transition-all hover:bg-[rgba(0,0,0,0.1)] flex items-center justify-center text-[20px] text-[#191919]">
                <IoCartOutline />
              </span>
            </Link>
          </div>
        ) : null}
      </div>
      <style>
        {css`
          div.card {
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }
          div.content {
            position: absolute;
            padding: 20px;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            opacity: 0;
            z-index: 20;
            transition: 0.4s;
          }
          div.card:hover div.content {
            opacity: 1;
          }
          div.card-icons {
            position: absolute;
            bottom: -50%;
            left: 0;
            transition: 0.4s;
          }
          div.card:hover div.card-icons {
            bottom: 0;
          }
          div img.card-image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            object-fit: contain;
            width: 50%;
            object-position: center;
          }
        `}
      </style>
    </>
  );
};

export default Card;
