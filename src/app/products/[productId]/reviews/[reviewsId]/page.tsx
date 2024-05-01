import React from "react";

export const metadata = {
  title: "Space Net For Laptop",
  description: "سبيس نت فو لابتوب, جميع انواع الابتوبات المكتبية و الغيمنغ لابتوب و الاكسسوارات",
}

export default function page({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
  return (
    <div>
      productId : {params.productId} reviewsId : {[params.reviewsId]}
    </div>
  );
}
