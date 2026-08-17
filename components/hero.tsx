import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#2c2416]">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-60"
        >
          <source src="/Mother_and_child_walking_prairie_202608142307.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay — darkens the left side for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c2416]/80 via-[#2c2416]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2416]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.3em] text-[#cdb890] mb-6">
            Rooted in Tradition · Made for Today
          </p>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#f0e8d6] leading-[1.05] mb-6">
            Western
            <br />
            Reimagined
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg text-[#dfd0b4] leading-relaxed mb-10 max-w-sm">
            Timeless pieces for modern women. Crafted to wear every day and
            outlast every season.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#8b5e3c] text-[#f0e8d6] text-xs uppercase tracking-[0.2em] px-7 py-4 hover:bg-[#7d5630] transition-colors"
            >
              Shop the Collection
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-[#f0e8d6]/50 text-[#f0e8d6] text-xs uppercase tracking-[0.2em] px-7 py-4 hover:border-[#f0e8d6] transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Logo badge */}
        <div className="hidden lg:flex absolute right-8 bottom-0 translate-y-1/2 w-32 h-32 rounded-full border border-[#cdb890]/40 bg-[#2c2416]/70 backdrop-blur-sm items-center justify-center flex-col">
          <span className="font-serif text-[10px] tracking-[0.3em] text-[#cdb890] uppercase">S&amp;S</span>
          <div className="w-8 border-t border-[#cdb890]/40 my-1.5" />
          <span className="text-[8px] tracking-[0.2em] text-[#9a7248] uppercase">Est. 2021</span>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="#f9f5ee" />
        </svg>
      </div>
    </section>
  );
}
