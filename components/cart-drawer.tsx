"use client";

import { useEffect } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { isOpen, items, totalItems, totalPrice, dispatch } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={() => dispatch({ type: "CLOSE_CART" })}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#f9f5ee] z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#ede3d0]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#8b5e3c]" />
            <h2 className="font-serif text-lg text-[#2c2416]">
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm font-sans text-[#9a7248]">
                  ({totalItems})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            aria-label="Close cart"
            className="p-2 text-[#9a7248] hover:text-[#2c2416] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-[#dfd0b4]" />
              <p className="font-serif text-xl text-[#2c2416]">Your cart is empty</p>
              <p className="text-sm text-[#9a7248]">
                Find something you love and add it here.
              </p>
              <button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="mt-2 text-xs uppercase tracking-[0.15em] underline underline-offset-4 text-[#8b5e3c] hover:text-[#2c2416] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[#ede3d0]">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.size}-${item.color}`} className="py-5 flex gap-4">
                  <div className="relative w-20 h-24 flex-shrink-0 rounded overflow-hidden bg-[#f0e8d6]">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm text-[#2c2416] leading-snug">
                      {item.product.name}
                    </h3>
                    {(item.size || item.color) && (
                      <p className="text-xs text-[#9a7248] mt-1">
                        {[item.color, item.size && `Size ${item.size}`].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    <p className="text-sm font-sans font-medium text-[#2c2416] mt-1">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QTY",
                            productId: item.product.id,
                            quantity: item.quantity - 1,
                          })
                        }
                        aria-label="Decrease quantity"
                        className="w-7 h-7 flex items-center justify-center border border-[#dfd0b4] rounded text-[#9a7248] hover:border-[#8b5e3c] hover:text-[#8b5e3c] transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-4 text-center text-[#2c2416]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QTY",
                            productId: item.product.id,
                            quantity: item.quantity + 1,
                          })
                        }
                        aria-label="Increase quantity"
                        className="w-7 h-7 flex items-center justify-center border border-[#dfd0b4] rounded text-[#9a7248] hover:border-[#8b5e3c] hover:text-[#8b5e3c] transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_ITEM", productId: item.product.id })
                        }
                        className="ml-auto text-xs text-[#9a7248] hover:text-[#2c2416] underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-[#ede3d0] bg-[#f9f5ee]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs uppercase tracking-[0.15em] text-[#9a7248]">Subtotal</span>
              <span className="font-serif text-lg text-[#2c2416]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-[#9a7248] mb-5">
              Shipping & taxes calculated at checkout.
            </p>
            <Link
              href="/checkout"
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="block w-full bg-[#2c2416] text-[#f0e8d6] text-xs uppercase tracking-[0.2em] text-center py-4 hover:bg-[#8b5e3c] transition-colors"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="block w-full text-center text-xs uppercase tracking-[0.15em] text-[#9a7248] mt-3 hover:text-[#2c2416] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
