"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dispatch, totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f5ee]/90 backdrop-blur-sm border-b border-[#ede3d0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#2c2416]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop Nav — left */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-sans uppercase tracking-[0.15em] text-[#2c2416] hover:text-[#8b5e3c] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo — center */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center leading-none">
              <span className="font-serif text-xl lg:text-2xl tracking-widest text-[#2c2416] uppercase">
                Prairie & Co.
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#9a7248] mt-0.5">
                Est. 2021
              </span>
            </div>
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="hidden lg:flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-[#2c2416] hover:text-[#8b5e3c] transition-colors"
            >
              <Search size={16} />
              <span>Search</span>
            </button>
            <button
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
              aria-label="Open cart"
              className="relative flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-[#2c2416] hover:text-[#8b5e3c] transition-colors"
            >
              <ShoppingBag size={20} />
              <span className="hidden lg:inline">Cart ({totalItems})</span>
              {totalItems > 0 && (
                <span className="lg:hidden absolute -top-1 -right-1 bg-[#8b5e3c] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f9f5ee] border-t border-[#ede3d0] px-6 py-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-sans uppercase tracking-[0.15em] text-[#2c2416] hover:text-[#8b5e3c] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
