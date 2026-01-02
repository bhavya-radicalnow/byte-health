"use client"

import { useState } from "react";

export default function PlansSection() {
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
      setFormData({ email: "", name: "", phone: "" });
      setOpen(false);
      setShowHelpModal(false);
    }, 1000);
  };
  return (
    <section className="bg-white py-16 lg:py-24" id="health-plans">
      <div className="mx-auto max-w-[1220px] px-4 md:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A1E3F]">
            Plans That Fit Your Needs
          </h2>

          <p className="mt-4 text-base text-gray-700">
            Affordable healthcare subscriptions for individuals, families,
            and organizations. No hidden costs, no surprises.
          </p>
        </div>

        {/* PLANS GRID 
            - Added 'max-w-5xl mx-auto' to constrain width so cards aren't too wide.
        */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">

          {/* PLAN 1 */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h3 className="text-2xl font-bold text-[#2F2F2F]">
              Byte Health Suraksha
            </h3>

            <ul className="mt-6 space-y-4 flex-1">
              {[
                "Unlimited OPD consultations",
                "Basic health screenings",
                "Discounted lab tests",
                "Teleconsultation access",
                "Health education sessions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {/* Red Check Icon */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EB5158] text-white text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <button onClick={() => setShowHelpModal(true)} className="w-full rounded-full bg-[#4A1E3F] py-3.5 text-sm font-bold text-white hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </div>
          </div>

          {/* PLAN 2 */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h3 className="text-2xl font-bold text-[#2F2F2F]">
              Byte Health Sampurna
            </h3>

            <ul className="mt-6 space-y-4 flex-1">
              {[
                "Everything in Family Care",
                "On-site health camps",
                "Dedicated health coordinator",
                "Health analytics dashboard",
                "Insurance integration",
                "24/7 emergency support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EB5158] text-white text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <button onClick={() => setShowHelpModal(true)} className="w-full rounded-full bg-[#4A1E3F] py-3.5 text-sm font-bold text-white hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
      {/* Modal Code (Kept same functionality, shortened for brevity in display) */}
      {showHelpModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowHelpModal(false)} />
          <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* ... Form Content ... */}
            <button onClick={() => setShowHelpModal(false)} className="absolute right-4 top-4 text-gray-400 hover:text-black">✕</button>
            <h2 className="text-2xl font-bold text-[#4A1E3F] mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Name" required className="w-full rounded-lg border border-gray-300 px-4 py-3" onChange={handleChange} value={formData.name} />
              <input type="email" name="email" placeholder="Email" required className="w-full rounded-lg border border-gray-300 px-4 py-3" onChange={handleChange} value={formData.email} />
              <input type="tel" name="phone" placeholder="Phone" required className="w-full rounded-lg border border-gray-300 px-4 py-3" onChange={handleChange} value={formData.phone} />
              <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-[#4A1E3F] py-3 text-white font-bold hover:bg-[#2d1226]">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}