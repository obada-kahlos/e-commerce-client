import { AllProductPage } from "@/feature/all-products-list";

export const metadata = {
  title: "SCPNET",
  description :  "مرحبا في SCPNET, يوجد جميع انواع الابوتوبات و االاكسسوارات"

};

export default function Products() {
  return (
    <div className="container mx-auto">
      <AllProductPage />
    </div>
  );
}
