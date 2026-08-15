import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";

export default function CategoryRow() {
  return (
    <section className="bg-[#f9f5ee] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider with label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 border-t border-[#dfd0b4]" />
          <div className="flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#9a7248]">
              <path d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z" fill="currentColor" opacity="0.5" />
            </svg>
            <span className="text-xs uppercase tracking-[0.3em] text-[#9a7248]">
              Shop by Category
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#9a7248]">
              <path d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
          <div className="flex-1 border-t border-[#dfd0b4]" />
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              className="group flex flex-col items-center gap-4"
            >
              {/* Image circle */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden bg-[#ede3d0]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
                />
                <div className="absolute inset-0 bg-[#2c2416]/10 group-hover:bg-[#2c2416]/0 transition-colors" />
              </div>

              {/* Label */}
              <div className="text-center">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#9a7248] mb-1">Shop</p>
                <p className="font-serif text-xl lg:text-2xl text-[#2c2416] group-hover:text-[#8b5e3c] transition-colors">
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
