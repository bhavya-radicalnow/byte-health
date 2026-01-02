"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  // { name: "Services", href: "/services" },
  { name: "Health Plans", href: "/#health-plans" },
  { name: "Clinics", href: "/#clinic-locations" }, // Shortened name for conciseness
  // { name: "For Employers", href: "/employers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation
    setTimeout(() => {
        setIsSubmitting(false);
        setFormData({email: "", name: "", phone: ""});
        setOpen(false);
        setShowHelpModal(false);
    }, 1000);
  };

  return (
    <>
      <header className="w-full bg-white relative z-40">
        {/* CONCISE WIDTH: max-w-[1220px] */}
        <div className="mx-auto flex max-w-[1220px] items-center justify-between px-4 md:px-8 py-4">
          
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/byte-logo.png" alt="Byte Health" width={110} height={48} priority />
          </Link>

          {/* Desktop Menu - Adjusted gap */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[15px] font-medium text-[#4A1E3F] hover:text-[#E5635B] transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center">
            <button onClick={() => setShowHelpModal(true)} className="rounded-full bg-[#4A1E3F] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#624059] transition-colors">
              Need Help
            </button>
          </div>

          <button className="xl:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-[#4B2E39] transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-[#4B2E39] transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-[#4B2E39] transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white p-6 shadow-2xl">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="text-lg font-medium text-[#4A1E3F]">
                    {link.name}
                  </Link>
                ))}
                <button onClick={() => { setOpen(false); setShowHelpModal(true); }} className="w-full mt-4 rounded-full bg-[#4A1E3F] py-3 text-white font-medium">
                  Need Help
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Modal Code (Kept same functionality, shortened for brevity in display) */}
      {showHelpModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowHelpModal(false)} />
          <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
             {/* ... Form Content ... */}
             <button onClick={() => setShowHelpModal(false)} className="absolute right-4 top-4 text-gray-400 hover:text-black">✕</button>
             <h2 className="text-2xl font-bold text-[#4A1E3F] mb-6">Get in Touch</h2>
             <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Name" required className="w-full rounded-lg border border-gray-300 px-4 py-3" onChange={handleChange} value={formData.name}/>
                <input type="email" name="email" placeholder="Email" required className="w-full rounded-lg border border-gray-300 px-4 py-3" onChange={handleChange} value={formData.email}/>
                <input type="tel" name="phone" placeholder="Phone" required className="w-full rounded-lg border border-gray-300 px-4 py-3" onChange={handleChange} value={formData.phone}/>
                <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-[#4A1E3F] py-3 text-white font-bold hover:bg-[#2d1226]">Submit</button>
             </form>
          </div>
        </div>
      )}
    </>
  );
}