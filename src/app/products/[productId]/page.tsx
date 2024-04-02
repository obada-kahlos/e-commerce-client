import React from "react";
import ProductById from "./product-by-id";

export const metadata = {
  title: "SCPNET",
  description :  "مرحبا في SCPNET, يوجد جميع انواع الابوتوبات و االاكسسوارات"

};

export default function ProductsId({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div className="sm:container sm:w-full w-[90%] mx-auto md:my-36 my-8">
      {" "}
      <ProductById id={params.productId} />{" "}
    </div>
  );
}
