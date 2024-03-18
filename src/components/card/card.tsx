import Image from "next/image";
import React from "react";
const css = String.raw;

const Card = ({
  width,
  height,
  rounded,
  image,
  title,
  price,
}: {
  width: string;
  height: string;
  rounded: string;
  title: string;
  image: string;
  price: string;
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
        <Image alt={title} src={image} layout="fill" objectFit="contain" />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] z-10"></div>
        <div className="content">
          <h3 className="text-[#ffffff] text-[32px]"> {title} </h3>
          <p className="text-[#ffffff90] text-[24px]"> {price} </p>
        </div>
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
            padding : 20px;
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
        `}
      </style>
    </>
  );
};

export default Card;
