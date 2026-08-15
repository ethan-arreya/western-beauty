"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/data";
import ProductCard from "@/components/product-card";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");

  const filtered = products.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-[#f9f5ee] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#dfd0b4]">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
                activeCategory === "all"
                  ? "bg-[#2c2416] border-[#2c2416] text-[#f0e8d6]"
                  : "border-[#dfd0b4] text-[#9a7248] hover:border-[#9a7248]"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-[#2c2416] border-[#2c2416] text-[#f0e8d6]"
                    : "border-[#dfd0b4] text-[#9a7248] hover:border-[#9a7248]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.15em] text-[#9a7248]">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs uppercase tracking-[0.1em] bg-transparent border border-[#dfd0b4] text-[#2c2416] px-3 py-2 focus:outline-none focus:border-[#9a7248]"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product count */}
        <p className="text-xs text-[#9a7248] uppercase tracking-wider mb-8">
          {sorted.length} {sorted.length === 1 ? "product" : "products"}
        </p>

        {/* Grid */}
        {sorted.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-[#2c2416] mb-2">
              Nothing here yet
            </p>
            <p className="text-sm text-[#9a7248]">
              Try a different category or check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
