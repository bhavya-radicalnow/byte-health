import Image from "next/image";

const services = [
  { title: "Doctor Consultations", desc: "Full-time physicians & visiting specialists.", icon: "/service-doctor.webp" },
  { title: "Medicines & Pharmacy", desc: "Affordable medicines delivered to doorstep.", icon: "/service-medicine.webp" },
  { title: "Lab Tests & Diagnostics", desc: "Comprehensive testing with quick results.", icon: "/service-lab.webp" },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#FBF4F7] py-16 md:py-20">
      <div className="mx-auto max-w-[1220px] px-4 md:px-8">
        
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E5635B] mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A1E3F]">
            Complete Healthcare, <span className="text-[#E5635B]">One Platform</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="group flex items-center rounded-2xl bg-white p-2 shadow-sm hover:shadow-md transition-all">
              <div className="relative w-20 h-20 shrink-0 bg-gray-50 rounded-xl">
                <Image src={service.icon} alt={service.title} fill className="object-contain p-3" />
              </div>
              <div className="pl-4 pr-2">
                <h3 className="text-base font-bold text-[#2F2F2F] group-hover:text-[#E5635B] transition-colors">{service.title}</h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl shadow-lg aspect-[21/9] md:aspect-[21/7]">
          <Image src="/clinic.webp" alt="Clinic" fill className="object-cover" />
        </div>

      </div>
    </section>
  );
}