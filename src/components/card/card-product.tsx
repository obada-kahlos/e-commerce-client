import Link from "next/link";
import React from "react";
import { Parser } from "html-to-react";
import { unescape } from "lodash";

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
  age,
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
  age?: string;
}) => {
  console.log({ age });

  return (
    <>
      <Link href={`products/${id}`}>
        <div className="card-product max-w-sm rounded overflow-hidden shadow-lg">
          <div className="h-[300px] flex items-center justify-center">
            <img className="w-[80%]" alt={title} src={image} />
          </div>
          <div className="px-6 py-4 border-t border-[#cccccc] flex items-center justify-center flex-col">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="font-bold text-xl mb">{price}S.P</p>
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
      </Link>
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
