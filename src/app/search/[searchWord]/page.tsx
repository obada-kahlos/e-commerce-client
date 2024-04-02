import { SearchList } from "@/feature/saerch-list";
import React from "react";

export const metadata = {
  title: "SCPNET",
  description :  "مرحبا في SCPNET, يوجد جميع انواع الابوتوبات و االاكسسوارات"

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
