"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Health Plans", href: "/health-plans" },
  { name: "Clinics & Location", href: "/clinics" },
  { name: "For Employers", href: "/employers" },
  { name: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-90">
          <Image
            src="/byte-logo.png"
            alt="Byte Health Home"
            width={130}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#4A1E3F] hover:text-[#4A1E3F]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <button className="rounded-full bg-[#624059] px-5 py-2 text-sm font-medium text-white hover:opacity-90">
            Dashboard Login
          </button>
          <button className="rounded-full border border-[#624059] px-5 py-2 text-sm font-medium text-[#4A1E3F] hover:bg-[#4A1E3F] hover:text-white">
            Need Help
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-[#4B2E39]" />
            <span className="block h-0.5 w-6 bg-[#4B2E39]" />
            <span className="block h-0.5 w-6 bg-[#4B2E39]" />
          </div>
        </button>
      </div>

      {/* Mobile / iPad Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* Glass Menu */}
          <div className="relative mx-auto mt-24 w-[90%] max-w-sm rounded-2xl border border-white/30 bg-white/20 px-8 py-10 text-center shadow-xl backdrop-blur-xl animate-[fadeIn_0.3s_ease-out]">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/30 text-[#4A1E3F] backdrop-blur-md transition hover:bg-white/50"
            >
              ✕
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[16px] font-semibold text-[#4A1E3F] hover:opacity-80"
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-8 flex flex-col gap-4">
                <button className="rounded-full bg-[#624059] px-6 py-3 text-sm font-medium text-white">
                  Dashboard Login
                </button>
                <button className="rounded-full border border-[#624059] px-6 py-3 text-sm font-medium text-[#4A1E3F]">
                  Need Help
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
