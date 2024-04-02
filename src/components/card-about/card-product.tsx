import Link from "next/link";
import React from "react";
import { IoEyeOutline, IoArrowBack } from "react-icons/io5";
const css = String.raw;

const CardProduct = ({
  width,
  height,
  rounded,
  image,
  title,
  price,
  description,
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
  description?: string;
  icons?: boolean;
  id?: string;
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" alt={title} src={image} />
      <div className="px-6 py-4 border-t border-[#cccccc]">
        <div className="font-bold text-xl mb-2">
          {" "}
          {title} {price ? `- ${price}` : ""}
        </div>
        <p className="text-gray-700 text-base">{description?.slice(0, 40)}</p>
      </div>
      <div className="pt-4 pb-2">
        <Link href={`products/${id}`}>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
             معلومات المنتج
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
