"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ChevronDown, ChevronLeft } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import ProductCard from "@/components/product-card";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: Props) {
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? "");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? "");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    dispatch({
      type: "ADD_ITEM",
      item: { product, quantity: 1, size: selectedSize, color: selectedColor },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="pt-16 lg:pt-20 bg-[#f9f5ee] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-[#9a7248] hover:text-[#2c2416] transition-colors"
        >
          <ChevronLeft size={14} />
          Back to Shop
        </Link>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-[#f0e8d6] overflow-hidden rounded-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#2c2416] text-[#f0e8d6] text-[9px] uppercase tracking-[0.15em] px-3 py-1.5">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a7248] mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl lg:text-4xl text-[#2c2416] mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-sans text-2xl text-[#2c2416]">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-sans text-lg text-[#9a7248] line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[#7d5630] leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Color selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.15em] text-[#9a7248] mb-3">
                  Color: <span className="text-[#2c2416]">{selectedColor}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`text-xs px-4 py-2 border transition-colors ${
                        selectedColor === color
                          ? "border-[#2c2416] bg-[#2c2416] text-[#f0e8d6]"
                          : "border-[#dfd0b4] text-[#9a7248] hover:border-[#9a7248]"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.15em] text-[#9a7248] mb-3">
                  Size: <span className="text-[#2c2416]">{selectedSize}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-10 text-xs border transition-colors ${
                        selectedSize === size
                          ? "border-[#2c2416] bg-[#2c2416] text-[#f0e8d6]"
                          : "border-[#dfd0b4] text-[#9a7248] hover:border-[#9a7248]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 py-4 text-xs uppercase tracking-[0.2em] transition-colors mb-4 ${
                added
                  ? "bg-[#628a4c] text-white"
                  : "bg-[#2c2416] text-[#f0e8d6] hover:bg-[#8b5e3c]"
              }`}
            >
              <ShoppingBag size={16} />
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>

            {/* Shipping note */}
            <p className="text-xs text-[#9a7248] text-center mb-8">
              Free shipping on orders over $150. Easy 30-day returns.
            </p>

            {/* Product details accordion */}
            {product.details && product.details.length > 0 && (
              <div className="border-t border-[#dfd0b4]">
                <button
                  onClick={() => setDetailsOpen(!detailsOpen)}
                  className="w-full flex items-center justify-between py-4 text-xs uppercase tracking-[0.2em] text-[#2c2416] hover:text-[#8b5e3c] transition-colors"
                  aria-expanded={detailsOpen}
                >
                  <span>Product Details</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${detailsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {detailsOpen && (
                  <ul className="pb-4 space-y-2">
                    {product.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-[#7d5630]"
                      >
                        <span className="text-[#cdb890] mt-1">·</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#dfd0b4]">
            <h2 className="font-serif text-2xl lg:text-3xl text-[#2c2416] mb-8">
              You may also like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
