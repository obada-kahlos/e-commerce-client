import Link from "next/link";
import React from "react";
import { Parser } from "html-to-react";
import { unescape } from "lodash";
import { getImage } from "@/util/get-image-url";
import Image from "next/image";

const CardProduct = ({
  width,
  height,
  rounded,
  image,
  title,
  price,
  dollarPrice,
  description,
  // description,
  icons,
  id,
  age,
}: {
  width: string;
  height: string;
  rounded: string;
  title: string;
  image: string;
  price: string;
  dollarPrice: number;
  // description?: string;
  description?: string;
  icons?: boolean;
  id?: string;
  age?: string;
}) => {



  return (
    <>
      <a href={`/products/${id}`}>
        <div className="card-product max-w-sm rounded overflow-hidden shadow-lg">
          <div className="h-[350px] flex items-center justify-center overflow-hidden">
            <img className="w-[100%]" alt={title} src={getImage(image, 3072)} />
            {/* <Image
              alt={title}
              src={getImage(image)}
              layout="fill"
              objectFit="contain"
            /> */}
          </div>
          <div className="px-6 py-4 border-t border-[#cccccc] flex items-center justify-center flex-col">
            <p className="font-bold text-[1rem] mb-2">{title}</p>
            {
              price ? <>
                <p className="font-bold text-[1rem] mb">{Number(price) * dollarPrice}S.P</p>
                <p className="font-bold text-[1rem] mb">{price}$</p>
              </> : null
            }

            {/* <div className="react-quill">
            {Parser().parse(unescape(description?.slice(0, 40)))}
          </div> */}
          </div>
          <div className="pt-4 pb-2">
            <Link href={`products/${id}`}>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                معلومات المنتج
              </span>
            </Link>
            {age === "جديد" ? (
              <span className="inline-block bg-main_color rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                جديد
              </span>
            ) : age === "مستعمل" ? (
              <span className="inline-block bg-[#23af23] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                مستعمل
              </span>
            ) : (
              <span className="inline-block bg-[#2b2bd8] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                اوبن بوكس
              </span>
            )}
          </div>
        </div>
      </a>
      <style>
        {`
          div.react-quill{
            padding : 0px 0px
            }
            div.react-quill p,h1,h2,h3,h4,h5,h6,pre{
            word-break: break-word;
            white-space: pre-line;
          }
            div.react-quill ul {
              list-style: disc;
              margin-left : 15px
          }
            div.react-quill ol {
              list-style: decimal;	
              margin-left : 15px	
            }

          `}
      </style>
    </>
  );
};

export default CardProduct;
