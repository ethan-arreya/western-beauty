"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      item: { product, quantity: 1 },
    });
  }

  return (
    <Link href={`/products/${product.id}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f0e8d6] mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#2c2416] text-[#f0e8d6] text-[9px] uppercase tracking-[0.15em] px-2.5 py-1">
            {product.badge}
          </span>
        )}
        {product.originalPrice && !product.badge && (
          <span className="absolute top-3 left-3 bg-[#8b5e3c] text-[#f0e8d6] text-[9px] uppercase tracking-[0.15em] px-2.5 py-1">
            Sale
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleQuickAdd}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 left-3 right-3 bg-[#2c2416]/90 text-[#f0e8d6] text-[10px] uppercase tracking-[0.2em] py-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingBag size={12} />
          Quick Add
        </button>
      </div>

      {/* Info */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a7248] mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-base lg:text-lg text-[#2c2416] leading-snug group-hover:text-[#8b5e3c] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-sm font-sans text-[#2c2416]">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm font-sans text-[#9a7248] line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
