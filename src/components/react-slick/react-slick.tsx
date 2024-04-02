"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface ProductList {
  // description?: string;
  // discount?: string;
  // id?: string;
  image?: string;
  title?: string;
  // price?: string;
  // type?: string;
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#ccc",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#ccc",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function MultipleItems({ ProductList }: { ProductList: ProductList[] }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {ProductList?.map((productItem, key) => {
          return (
            <div key={key} className="relative bg-[rgba(0,0,0,0.1)]">
              <div className="cursor-pointer w-full  flex items-center justify-center relative transition hover:bg-[rgba(0,0,0,0.3)]">
                <img
                  alt={productItem.title ? productItem.title : ""}
                  src={productItem.image ? productItem.image : ""}
                  className="w-[400px]"
                />
                {/* <Image
                  alt={productItem.name ? productItem.name : ""}
                  src={productItem.images ? productItem.images : ""}
                  layout="fill"
                  objectFit="contain"
                /> */}
                {/* {productItem.description}
                {productItem.discount}
                {productItem.id}
                {productItem.price}
                {productItem.type} */}
                <p className="absolute top-4 right-4 md:text-[34px] text-[20px]">
                  {productItem.title}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MultipleItems;
