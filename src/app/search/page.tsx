import type { Viewport } from "next";

export const metadata = {
  title: "SCPNET",
  description: "مرحبا في SCPNET, يوجد جميع انواع الابوتوبات و االاكسسوارات",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.5, // Change this value to adjust the zoom level
  maximumScale: 1,
  userScalable: false,
};

export default function Products() {
  return <div className="container mx-auto"> Search </div>;
}
