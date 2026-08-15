import Link from "next/link";

const footerLinks = {
  Shop: ["Boots", "Denim", "Leather", "Home", "Accessories"],
  Company: ["Our Story", "Journal", "Stockists", "Press"],
  Help: ["Sizing Guide", "Shipping & Returns", "Care Instructions", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-[#2c2416] text-[#f0e8d6]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <p className="font-serif text-2xl tracking-widest uppercase text-[#f0e8d6]">
                Prairie & Co.
              </p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#cdb890] mt-1">
                Est. 2021
              </p>
            </div>
            <p className="text-sm text-[#bfa070] leading-relaxed max-w-xs">
              Rooted in tradition. Made for today. Western pieces crafted to last
              a lifetime and worn every day.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#cdb890] mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-[#bfa070] hover:text-[#f0e8d6] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3e2810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#7d5630]">
            © 2026 Prairie & Co. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-[#7d5630] hover:text-[#bfa070] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
