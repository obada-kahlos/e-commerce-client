import { SearchList } from "@/feature/saerch-list";
import React from "react";

export const metadata = {
  title: "SP.NET",
  description: "جميع انواع الاتبوبات والاكسسورات",
};

export default function SearchPage({
  params,
}: {
  params: { searchWord: string };
}) {
  return (
    <div className="container mx-auto">
      <SearchList word={decodeURIComponent(params.searchWord)} />
    </div>
  );
}
