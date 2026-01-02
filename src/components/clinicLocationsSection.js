"use client";

import Image from "next/image";

const clinics = [
  {
    name: "Bhiwandi Clinic",
    address: "Near Dhamankar Naka, Bhiwandi, Thane District",
    time: "Mon-Sat: 8AM - 8PM",
  },
  {
    name: "Vasai Clinic",
    // I assumed you might want to update the address for Vasai here
    address: "Near Station Road, Vasai West, Palghar District",
    time: "Mon-Sat: 8AM - 8PM",
  },
];

export default function ClinicLocationsSection() {
  return (
    <section className="bg-[#FFF7F6] py-16 md:py-20" id="clinic-locations">
      <div className="mx-auto max-w-[1220px] px-4 md:px-8">

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-[#4A1E3F]">Our Clinic Locations</h2>
          <p className="mt-2 text-gray-600">Quality healthcare in your neighbourhood.</p>
        </div>

        {/* MAP SECTION */}
        <div className="relative overflow-hidden rounded-[24px] shadow-md h-[300px] md:h-[350px]">
          <Image src="/map.webp" alt="Map" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#F7CFCB]/80 flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-xl md:text-2xl font-bold text-black">Serving Thane & Palghar</h3>
            <p className="mt-1 text-base text-black/80 font-medium">Bhiwandi · Vasai · Expanding Soon</p>
            <button className="mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#4A1E3F] hover:shadow-lg transition-all">
              View on Google Map →
            </button>
          </div>
        </div>

        {/* CARDS SECTION - Optimised for 2 Items */}
        {/* 1. Changed to 'grid-cols-1 md:grid-cols-2' (2 columns)
            2. Added 'max-w-5xl mx-auto' to center them and prevent them from getting too wide
        */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {clinics.map((clinic, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:border-[#F7CFCB] transition-colors"
            >
              <h4 className="text-lg font-bold text-black">{clinic.name}</h4>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {clinic.address}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-black bg-gray-50 w-fit px-3 py-1.5 rounded-md">
                <Image src="/clock.png" alt="Time" width={14} height={14} />
                {clinic.time}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}