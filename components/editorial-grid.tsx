import Image from "next/image";
import Link from "next/link";

export default function EditorialGrid() {
  return (
    <section className="bg-[#f0e8d6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#9a7248] mb-8 text-center">
          The Western Quilt
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">

          {/* Row 1 — col 1: tall text tile */}
          <div className="bg-[#f9f5ee] rounded-sm p-8 flex flex-col justify-between min-h-[280px] lg:min-h-[340px]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a7248] mb-4">Our Story</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-[#2c2416] leading-tight">
                Rooted in<br />tradition.<br />Made for<br />today.
              </h2>
            </div>
            <Link
              href="/about"
              className="text-xs uppercase tracking-[0.2em] text-[#8b5e3c] hover:text-[#2c2416] transition-colors underline underline-offset-4"
            >
              Our Story
            </Link>
          </div>

          {/* Row 1 — col 2: tall image */}
          <div className="relative rounded-sm overflow-hidden min-h-[280px] lg:min-h-[340px]">
            <Image
              src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=600&q=80"
              alt="Woman in western attire on a ranch fence"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Row 1 — col 3 on desktop: two stacked images */}
          <div className="hidden lg:grid grid-rows-2 gap-4">
            <div className="relative rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1553754538-466add009c05?w=400&q=80"
                alt="Leather belt close-up"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80"
                alt="Western boots detail"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>

          {/* Row 2 — image */}
          <div className="relative rounded-sm overflow-hidden min-h-[220px]">
            <Image
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80"
              alt="Rider on horseback in a golden field"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Row 2 — quote tile */}
          <div className="bg-[#3a6080] rounded-sm p-8 flex flex-col justify-center min-h-[220px]">
            <blockquote>
              <p className="font-serif text-xl lg:text-2xl text-[#f0e8d6] leading-snug mb-4">
                &ldquo;The quality is unmatched. You can feel the difference.&rdquo;
              </p>
              <footer className="text-xs uppercase tracking-[0.2em] text-[#a9bfd3]">
                — Kaitlyn R.
              </footer>
            </blockquote>
          </div>

          {/* Row 2 — col 3: new collection tile */}
          <div className="bg-[#628a4c] rounded-sm p-8 flex flex-col justify-between min-h-[220px]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#dfe8d9] mb-2">
                New Collection
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl text-[#f9f5ee] leading-tight">
                The Frontier Edit
              </h3>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#f9f5ee] hover:text-[#dfe8d9] transition-colors"
            >
              Shop Now →
            </Link>
          </div>

          {/* Row 3 — wide fringe jacket image */}
          <div className="relative rounded-sm overflow-hidden min-h-[260px] col-span-2 lg:col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
              alt="Fringe leather jacket"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Row 3 — brand tile */}
          <div className="hidden lg:flex bg-[#8b5e3c] rounded-sm p-8 flex-col items-center justify-center text-center min-h-[260px]">
            <p className="font-serif text-2xl tracking-widest text-[#f0e8d6] uppercase mb-1">
              Prairie & Co.
            </p>
            <div className="w-10 border-t border-[#f0e8d6]/30 my-3" />
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#f0e8d6]/60">
              Est. 2021
            </p>
          </div>

          {/* Row 3 — shipping perk tile */}
          <div className="hidden lg:flex bg-[#f9f5ee] rounded-sm p-8 flex-col items-center justify-center text-center min-h-[260px]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#9a7248] mb-4">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 20 Q16 10 22 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <p className="font-serif text-xl text-[#2c2416] leading-tight mb-2">
              Free shipping on orders over $150
            </p>
            <p className="text-xs text-[#9a7248]">Always, on every order.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
