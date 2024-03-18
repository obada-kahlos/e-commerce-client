"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="cursor-pointer h-[300px] relative transition hover:bg-[rgba(0,0,0,0.1)]">
            <Image
              alt={"laptop"}
              src={"/product1.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <div className="cursor-pointer h-[300px] relative transition hover:bg-[rgba(0,0,0,0.1)]">
            <Image
              alt={"laptop"}
              src={"/product6.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <div className="cursor-pointer h-[300px] relative transition hover:bg-[rgba(0,0,0,0.1)]">
            <Image
              alt={"laptop"}
              src={"/product1.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <div className="cursor-pointer h-[300px] relative transition hover:bg-[rgba(0,0,0,0.1)]">
            <Image
              alt={"laptop"}
              src={"/product6.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <div className="cursor-pointer h-[300px] relative transition hover:bg-[rgba(0,0,0,0.1)]">
            <Image
              alt={"laptop"}
              src={"/product1.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
