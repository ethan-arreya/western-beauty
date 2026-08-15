"use client";

import { useState } from "react";
import Image from "next/image";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-[#2c2416] py-20 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Prairie landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#cdb890] mb-4">
          Join the Journey
        </p>

        <h2 className="font-serif text-3xl lg:text-4xl text-[#f0e8d6] mb-4 text-balance">
          Be the first to know
        </h2>
        <p className="text-sm text-[#bfa070] mb-10 leading-relaxed">
          New arrivals, exclusive offers, and stories from the West — delivered
          straight to your inbox. No clutter, just the good stuff.
        </p>

        {submitted ? (
          <div className="bg-[#3e2810]/60 border border-[#cdb890]/30 px-8 py-6 inline-block">
            <p className="font-serif text-xl text-[#f0e8d6]">You're on the list.</p>
            <p className="text-sm text-[#bfa070] mt-1">We'll be in touch soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border border-[#cdb890]/40 border-r-0 text-[#f0e8d6] placeholder:text-[#9a7248] text-sm px-5 py-4 focus:outline-none focus:border-[#cdb890] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#8b5e3c] text-[#f0e8d6] text-xs uppercase tracking-[0.2em] px-6 py-4 hover:bg-[#7d5630] transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[10px] text-[#7d5630] mt-4 uppercase tracking-wider">
          No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
