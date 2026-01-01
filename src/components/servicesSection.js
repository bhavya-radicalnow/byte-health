import Image from "next/image";

const services = [
  {
    title: "Doctor Consultations",
    desc: "Full-time physicians and visiting specialists at local clinics",
    icon: "/service-doctor.webp",
  },
  {
    title: "Medicines & Pharmacy",
    desc: "Affordable medicines delivered right to your doorstep",
    icon: "/service-medicine.webp",
  },
  {
    title: "Lab Tests & Diagnostics",
    desc: "Comprehensive testing with quick and accurate results",
    icon: "/service-lab.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#FBF4F7] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-wide text-[#E5635B]">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#4A1E3F]">
            Complete Healthcare,{" "}
            <span className="text-[#E5635B]">One Platform</span>
          </h2>

          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            From preventive screenings to specialised care, we offer a complete
            range of healthcare services under one affordable subscription.
          </p>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="
                group
                flex 
                items-center 
                /* Removed padding from here so image touches edge */
                rounded-2xl 
                bg-white 
                shadow-sm 
                hover:shadow-md 
                transition-all
                duration-300
                overflow-hidden 
              "
            >
              {/* IMAGE CONTAINER - Left Side (No padding) */}
              {/* Added bg-gray-50 just to visualize the area, remove if needed */}
              <div className="relative w-28 h-28 shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain p-2" // p-2 here keeps the icon slightly inside its own box, remove if you want full bleed
                  sizes="(max-width: 768px) 112px, 112px"
                />
              </div>

              {/* TEXT CONTAINER - Right Side (Has padding) */}
              <div className="flex flex-col justify-center p-4">
                <h3 className="text-lg font-bold text-[#2F2F2F] group-hover:text-[#E5635B] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= VIDEO SECTION ================= */}
        <div className="relative mt-16 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/clinic.webp"
            alt="Clinic Interior"
            width={1200}
            height={600}
            className="
              h-[260px]
              sm:h-[320px]
              md:h-[420px]
              w-full
              object-cover
            "
          />
        </div>

      </div>
    </section>
  );
}