import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { curatedFavorites } from "@/lib/data";
import ProductCard from "./product-card";

export default function CuratedFavorites() {
  return (
    <section className="bg-[#f9f5ee] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9a7248] mb-2">
              — Curated Favorites
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2c2416]">
              The pieces everyone's talking about
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8b5e3c] hover:text-[#2c2416] transition-colors flex-shrink-0"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {curatedFavorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Free shipping badge */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="w-10 h-px bg-[#dfd0b4]" />
          <p className="text-xs text-[#9a7248] tracking-wider">
            Free shipping on orders over $150
          </p>
          <div className="w-10 h-px bg-[#dfd0b4]" />
        </div>
      </div>
    </section>
  );
}
