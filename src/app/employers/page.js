import ComingSoon from "@/components/commingSoon";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { PlayCircle } from 'lucide-react';
import StoriesOfHopeSection from "@/components/stories";

export default function Home() {
  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return (
      <main>
        <Navbar />
        <ComingSoon />
      </main>
    );
  }

  const workplaceFeatures = [
    {
      title: "Health-first approach",
      description: "Primary care, preventive screenings, and early intervention — not just hospitalization coverage."
    },
    {
      title: "Hyperlocal access",
      description: "Clinics located near workplaces and residential areas, reducing time off work."
    },
    {
      title: "Simple, predictable costs",
      description: "Subscription-based pricing with no surprise expenses."
    },
    {
      title: "One integrated platform",
      description: "Clinics, diagnostics, medicines, and insurance support — all connected."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-sans text-slate-900 bg-white">

        {/* --- HERO SECTION --- */}
        <section className="relative w-full overflow-hidden pt-8 md:pt-12 lg:pt-16">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

              {/* TEXT SIDE */}
              <div className="flex flex-col justify-center z-10 text-center lg:text-left">
                <h1 className="text-4xl leading-[1.15] text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="font-medium">Healthcare that works for</span> <br />
                  <span className="font-bold text-[#EB5158]">your workforce</span>
                </h1>
                <p className="mt-6 text-base text-slate-600 md:text-lg lg:max-w-md leading-relaxed">
                  Byte Health helps employers provide reliable, affordable healthcare access to employees and their families — improving productivity, compliance, and retention.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <button className="rounded-full bg-[#EB5158] px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-rose-600 hover:shadow-lg active:scale-95">
                    Book a Consultation &rarr;
                  </button>
                </div>
              </div>

              {/* IMAGE SIDE */}
              <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
                <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[480px] lg:h-[550px]">
                  <Image
                    src="/employers-hero-temp.png"
                    alt="Byte Health Doctor"
                    fill
                    className="object-contain object-bottom"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- BUILT FOR REAL WORKPLACES --- */}
        <section className="bg-[#43234F] pt-16 lg:pt-24 overflow-hidden">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            {/* items-end to anchor content to bottom */}
            <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Left Column: Image */}
              <div className="hidden lg:flex relative order-2 lg:order-1 justify-center lg:justify-start -mb-1">
                <div className="relative h-[400px] w-full lg:h-[600px] xl:h-[650px]">
                  <Image
                    src="/doctor-crossed-arms-temp.png"
                    alt="Doctor smiling"
                    fill
                    priority
                    className="object-contain object-bottom lg:object-left-bottom"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              {/* Added padding-bottom to separate from section edge */}
              <div className="order-1 lg:order-2 pb-4 lg:pb-8 flex flex-col justify-center h-full">
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                  Built for <span className="text-[#EB5158]">real <br /> workplaces,</span> not <br /> just boardrooms
                </h2>
                <p className="mb-10 text-base leading-relaxed text-white/90 md:text-lg">
                  Most employee health benefits focus only on insurance. Byte
                  Health focuses on health — ensuring employees get timely care,
                  stay productive, and avoid financial stress.
                </p>

                {/* 2x2 Feature Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {workplaceFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-start rounded-xl bg-white p-5 shadow-md transition-transform hover:scale-[1.02]"
                    >
                      <h3 className="mb-2 text-base font-bold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- COMPLIANCE SECTION --- */}
        <section className="bg-white pt-16 lg:pt-24 pb-12 lg:pb-0 overflow-hidden">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">

            {/* FIX 1: Changed items-end to items-stretch. 
                This makes the text column the same height as the image column. */}
            <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Left Column: Content */}
              {/* FIX 2: justify-center now vertically centers content in the full-height column.
                  Removed lg:pb-24 so it is mathematically centered. */}
              <div className="flex flex-col justify-center">
                <span className="mb-2 text-sm font-bold text-[#EB5158] uppercase tracking-wide">
                  Government Compliance Coverage
                </span>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                  Support for statutory <br /> health compliance
                </h2>
                <p className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg">
                  Byte Health helps employers meet health-related compliance requirements
                  while offering meaningful care benefits to employees.
                </p>

                {/* Checkmark List */}
                <ul className="mb-8 space-y-3">
                  {[
                    "Employee health check-ups and screenings",
                    "Medical records and reporting support",
                    "Workplace health programs and camps",
                    "Supported with applicable health norms",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-base font-semibold text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-500 leading-relaxed max-w-md bg-slate-50 p-4 rounded-lg">
                  <span className="font-bold text-slate-700">Note:</span> Compliance requirements vary by industry and region. Byte Health works with
                  employers to design suitable coverage.
                </p>
              </div>

              {/* Right Column: Image */}
              {/* FIX 3: Added items-end to this container. 
                  Since the parent is 'items-stretch', this column is full height. 
                  'items-end' ensures the image sits at the bottom. */}
              <div className="hidden lg:flex relative justify-center lg:justify-end items-end -mb-1">
                <div className="relative h-[500px] w-full max-w-md lg:h-[600px]">
                  <Image
                    src="/service-hero-temp.png"
                    alt="Doctor holding a clipboard"
                    fill
                    className="object-contain object-bottom lg:object-right-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- COST-SAVING OPPORTUNITIES --- */}
        <section className="bg-white py-16 lg:py-0 overflow-hidden relative">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:min-h-[600px]">

              {/* Left Column: Image (Moved to Top/Left) */}
              {/* Aligned to bottom LEFT now */}
              <div className="relative order-1 flex justify-center lg:justify-start items-end h-[350px] lg:h-[700px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/girl-image.png"
                    alt="Nurse with thumbs up"
                    fill
                    // Changed anchors to LEFT: object-left-bottom, origin-bottom-left
                    className="object-contain object-bottom lg:object-left-bottom lg:scale-110 lg:origin-bottom-left"
                  />
                </div>
              </div>

              {/* Right Column: Text Content (Moved to Bottom/Right) */}
              {/* Added lg:pl-12 to prevent text hitting the image too closely */}
              <div className="flex flex-col justify-center order-2 relative z-10 py-12 lg:py-0 lg:pl-12">
                <span className="text-[#EB5158] font-bold text-sm uppercase tracking-wide mb-3">
                  Cost-Saving Opportunities
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Care Without <br className="hidden lg:block" />
                  <span className="text-[#EB5158]">Compromise</span>
                </h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-lg">
                  Byte Health&apos;s preventive, primary-care-led model helps businesses avoid high downstream costs caused by late treatment and medical emergencies.
                </p>

                {/* Benefits List */}
                <div className="space-y-4">
                  {[
                    "Less productivity loss due to illness",
                    "Reduced emergency hospitalizations",
                    "Predictable monthly or annual pricing",
                    "Flexible plans based on workforce size",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-[#3D1E36] text-white px-6 py-4 rounded-2xl shadow-md transition-transform hover:scale-[1.02] cursor-default"
                    >
                      <div className="flex-shrink-0 mr-4">
                        {/* Circle Check Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
                          <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="font-bold text-base sm:text-lg tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* <StoriesOfHopeSection /> */}

        {/* --- CTA SECTION --- */}
        <section className="bg-white py-16 lg:py-24 overflow-hidden border-t border-slate-100">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left Column: CTA Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#3D1E36] mb-6">
                  Bring better <span className="text-[#EB5158]">healthcare to <br /> your workplace</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                  Partner with Byte Health to support your employees&apos;
                  health while strengthening your business.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <button className="rounded-full bg-[#EB5158] px-8 py-3.5 text-base font-medium text-white shadow-lg transition-all hover:bg-rose-600 active:scale-95">
                    Become a Partner &rarr;
                  </button>
                  <button className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-slate-900 border border-slate-200 shadow-sm transition-all hover:bg-slate-50">
                    Request a Demo
                  </button>
                </div>

                <div className="text-sm text-slate-500 max-w-sm border-l-2 border-[#EB5158] pl-4">
                  <span className="font-bold text-slate-900 block mb-1">Need help choosing?</span>
                  Our team is here to guide you to the right plan.
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <Image
                  src="/clinic-render.jpg" // Ensure this image exists
                  alt="Modern Clinic Interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              </div>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}