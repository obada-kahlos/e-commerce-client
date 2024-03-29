import { AllProductPage } from "@/feature/all-products-list";

export const metadata = {
  title: "Products page",
  description: "جميع انواع الاتبوبات والاكسسورات",
};

export default function Products() {
  return (
    <div className="container mx-auto">
      <AllProductPage />
    </div>
  );
}
