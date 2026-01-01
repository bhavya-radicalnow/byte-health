import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#212328] text-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* ================= TOP HEADER ================= */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between mb-12">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            {/* Replace with your actual logo file */}
             <div className="flex items-center gap-2">
                {/* Placeholder for logo matching screenshot */}
                <Image
                    src="/light-logo.png" 
                    alt="Byte Health Logo"
                    width={150}
                    height={50}
                    className="object-contain"
                />
             </div>
          </div>

          {/* CONTACT PILLS */}
          <div className="flex flex-wrap gap-4">
            {/* Location */}
            <div className="flex items-center gap-3 rounded-md bg-[#2F3238] px-5 py-3 text-sm font-medium border border-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>HSR Bangalore</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 rounded-md bg-[#2F3238] px-5 py-3 text-sm font-medium border border-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 98765 43210</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 rounded-md bg-[#2F3238] px-5 py-3 text-sm font-medium border border-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>hello@bytehealth.in</span>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* LEFT COLUMN: Description & Legal (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="max-w-md text-base leading-relaxed text-[#9CA3AF]">
                Making quality healthcare accessible and affordable for
                every worker and their family. <br />
                Healthcare for All.
              </p>

              {/* <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#9CA3AF] underline decoration-gray-600 underline-offset-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div> */}
            </div>

            <div className="mt-8 lg:mt-auto">
              <p className="text-sm text-[#6B7280]">
                © 2025 Byte Swasth Health Technologies Private Limited. All rights reserved. | CIN U86909MH2025PTC445047.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMNS: Links (Spans 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* COMPANY */}
            {/* <div>
              <h4 className="mb-6 text-lg font-bold text-white">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Our Mission', 'Careers', 'Press'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors cursor-pointer group">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF] group-hover:bg-white transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* SERVICES */}
            {/* <div>
              <h4 className="mb-6 text-lg font-bold text-white">Services</h4>
              <ul className="space-y-4">
                {['General Consultation', 'Health Screenings', 'Insurance Plans', 'Corporate Wellness'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors cursor-pointer group">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF] group-hover:bg-white transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* SUPPORT */}
            {/* <div>
              <h4 className="mb-6 text-lg font-bold text-white">Support</h4>
              <ul className="space-y-4">
                {['Contact Us', 'FAQs', 'Book Appointment', 'Emergency'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors cursor-pointer group">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF] group-hover:bg-white transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}

          </div>
        </div>
      </div>
    </footer>
  );
}