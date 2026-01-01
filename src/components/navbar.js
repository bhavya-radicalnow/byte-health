"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Health Plans", href: "/#health-plans" },
  { name: "Clinics & Location", href: "/#clinic-locations" },
  { name: "For Employers", href: "/employers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // Mobile menu state
  const [showHelpModal, setShowHelpModal] = useState(false); // Help Popup state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // REPLACE THIS WITH YOUR ACTUAL URL
    const API_URL = "/api/lead"; 

    try {
      const response =fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setIsSubmitting(false);
      setFormData({email: "", name: "", phone: ""})
      setOpen(false)
      setShowHelpModal(false)
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="w-full bg-white relative z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/byte-logo.png"
              alt="Byte Health Home"
              width={120}
              height={54}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#4A1E3F] hover:opacity-80"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <button 
              onClick={() => setShowHelpModal(true)}
              className="rounded-full border border-[#624059] px-5 py-2 text-sm font-medium text-[#4A1E3F] hover:bg-[#4A1E3F] hover:text-white transition-colors"
            >
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
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            <div className="relative mx-auto mt-20 w-[90%] max-w-sm rounded-2xl bg-white/80 px-8 py-8 text-center shadow-xl backdrop-blur-xl">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 h-8 w-8 rounded-full bg-white/50 text-[#4A1E3F] font-bold"
              >
                ✕
              </button>

              <nav className="flex flex-col gap-6 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[16px] font-semibold text-[#4A1E3F]"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Need Help Button */}
              <button 
                onClick={() => {
                  setOpen(false);
                  setShowHelpModal(true);
                }}
                className="w-full rounded-full bg-[#4A1E3F] py-3 text-white font-medium hover:opacity-90"
              >
                Need Help
              </button>
            </div>
          </div>
        )}
      </header>

      {/* --- NEED HELP POP-UP MODAL --- */}
      {showHelpModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowHelpModal(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowHelpModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#4A1E3F]">Get in Touch</h2>
              <p className="text-gray-600 mt-2 text-sm">
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-[#4A1E3F] focus:border-[#4A1E3F] focus:outline-none focus:ring-1 focus:ring-[#4A1E3F]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-[#4A1E3F] focus:border-[#4A1E3F] focus:outline-none focus:ring-1 focus:ring-[#4A1E3F]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-[#4A1E3F] focus:border-[#4A1E3F] focus:outline-none focus:ring-1 focus:ring-[#4A1E3F]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 rounded-full bg-[#4A1E3F] py-3 text-white font-semibold hover:bg-[#624059] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}