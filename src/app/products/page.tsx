import { AllProductPage } from "@/feature/all-products-list";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.5, // Change this value to adjust the zoom level
  maximumScale: 1,
  userScalable: true,
};


export const metadata = {
  title: "Space Net For Laptop",
  description: "سبيس نت فو لابتوب, جميع انواع الابتوبات المكتبية و الغيمنغ لابتوب و الاكسسوارات",
};

export default function Products() {
  return (
    <div className="container mx-auto">
      <AllProductPage productType="Laptop" title="لابتوبات" />
    </div>
  );
}
