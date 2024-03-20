import React from "react";

export default function ProductsId({
  params,
}: {
  params: { productId: string };
}) {
  return <div>ProductsId {params.productId} </div>;
}
