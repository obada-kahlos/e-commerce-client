import React from "react";

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
