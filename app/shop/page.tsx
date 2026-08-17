import { Suspense } from "react";
import ShopClient from "./shop-client";

export const metadata = {
  title: "Shop — Southern & Spur",
  description: "Browse our full collection of western boots, denim, leather goods, and accessories.",
};

export default function ShopPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Banner */}
      <div className="bg-[#2c2416] py-16 lg:py-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#cdb890] mb-3">
          Southern & Spur
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl text-[#f0e8d6]">
          The Collection
        </h1>
      </div>

      <Suspense>
        <ShopClient />
      </Suspense>
    </div>
  );
}
