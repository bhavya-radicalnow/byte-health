import ComingSoon from "@/components/commingSoon";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  CheckCircle2,
  Stethoscope,
  TestTube2,
  ShieldCheck,
  ClipboardList,
  ArrowRight,
  PlayCircle // Added PlayCircle for the video button
} from 'lucide-react';
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

  // Data for the features grid
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
      <div className="min-h-screen font-sans text-slate-900">

        {/* --- HERO SECTION --- */}
        <section className="relative w-full bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center lg:min-h-[600px]">

              {/* TEXT SIDE */}
              <div className="flex flex-col justify-center py-12 lg:py-0 z-10">
                <h1 className="text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="font-medium">Healthcare that works for</span> <br />
                  <span className="font-bold text-[#EB5158]">your workforce</span>
                </h1>
                <p className="mt-6 text-base text-slate-600 md:text-xl lg:max-w-md">
                  Byte Health helps employers provide reliable, affordable healthcare access to employees and their families — improving productivity, compliance, and retention.
                </p>
                <div className="mt-8">
                  <button className="w-full rounded-full bg-[#EB5158] px-8 py-4 text-base font-medium text-white transition-all hover:bg-rose-600 hover:shadow-lg active:scale-95 sm:w-auto">
                    Book a Consultation &rarr;
                  </button>
                </div>
              </div>

              {/* IMAGE SIDE */}
              <div className="relative flex items-end justify-center lg:justify-end w-full h-full">
                <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5]">
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
        <section className="bg-[#43234F] pt-12 md:pt-16 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">

              {/* Left Column: Image */}
              <div className="hidden lg:flex relative order-2 lg:order-1 justify-center lg:justify-start">
                <div className="relative h-[400px] w-full lg:h-[600px] xl:h-[700px]">
                  <Image
                    src="/doctor-crossed-arms-temp.png"
                    alt="Doctor smiling with arms crossed"
                    fill
                    priority
                    className="object-contain object-bottom lg:object-left-bottom"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="order-1 lg:order-2 pb-12 md:pb-16 flex flex-col justify-center h-full">
                <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                  Built for <span className="text-[#EB5158]">real <br /> workplaces,</span> not <br /> just boardrooms
                </h2>
                <p className="mb-8 text-base leading-relaxed text-white/90 md:text-lg">
                  Most employee health benefits focus only on insurance. Byte
                  Health focuses on health — ensuring employees get timely care,
                  stay productive, and avoid financial stress from medical expenses.
                </p>

                {/* 2x2 Feature Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {workplaceFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-start rounded-2xl bg-white p-5 shadow-md transition-transform hover:scale-[1.02]"
                    >
                      <h3 className="mb-2 text-lg font-bold text-slate-900">
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
        <section className="bg-white pt-12 md:pt-16 pb-12 lg:pb-0 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">

              {/* Left Column: Content */}
              <div className="flex flex-col justify-center lg:pb-16">
                <span className="mb-2 text-sm font-bold text-[#EB5158]">
                  Government Compliance Coverage
                </span>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                  Support for statutory <br /> health compliance
                </h2>
                <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">
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

                <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                  Note: <br />
                  Compliance requirements vary by industry and region. Byte Health works with
                  employers to design suitable coverage.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="hidden lg:flex relative justify-center lg:justify-end">
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
        {/* --- EMPLOYEE WELL-BEING BENEFITS --- */}
        <section className="bg-[#FFF5F2] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

              {/* Left Column: Header Text (Takes up ~4/12 columns) */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <span className="mb-4 block text-sm font-bold uppercase tracking-wide text-[#EB5158]">
                  Employee Well-Being Benefits
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                  A healthier workforce is a <span className="text-[#EB5158]">stronger workforce</span>
                </h2>
                <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                  When employees can access care early and affordably,
                  businesses see fewer sick days, higher morale, and
                  better long-term retention.
                </p>
              </div>

              {/* Right Column: Cards (Takes up ~8/12 columns) */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                  {/* Card 1: Employers */}
                  <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm md:p-8">
                    <div>
                      <h3 className="mb-4 text-xl font-bold text-slate-900">For Employers</h3>
                      <ul className="space-y-3 mb-8">
                        {[
                          "Reduced absenteeism",
                          "Improved productivity",
                          "Lower workforce churn",
                          "Healthier, more engaged teams"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-medium text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Green Impact Box */}
                    <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                      <p className="text-xs font-bold uppercase text-slate-500">Key Impact</p>
                      <p className="text-lg font-bold text-slate-900">40% reduction in sick leaves</p>
                    </div>
                  </div>

                  {/* Card 2: Employees */}
                  <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm md:p-8">
                    <div>
                      <h3 className="mb-4 text-xl font-bold text-slate-900">For Employees</h3>
                      <ul className="space-y-3 mb-8">
                        {[
                          "Easy access to doctors (clinic + teleconsult)",
                          "Affordable medicines and lab tests",
                          "Preventive screenings and health education",
                          "Family coverage options"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-medium text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Green Impact Box */}
                    <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                      <p className="text-xs font-bold uppercase text-slate-500">Key Impact</p>
                      <p className="text-lg font-bold text-slate-900">40% reduction in sick leaves</p>
                    </div>
                  </div>

                </div>

                {/* Bottom Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center justify-center rounded-full bg-[#EB5158] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-rose-600"
                  >
                    How It Works &rarr;
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50">
                    Watch Video <PlayCircle className="h-5 w-5 text-[#EB5158]" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>
        {/* --- NEW SECTION: COST-SAVING OPPORTUNITIES --- */}
        {/* --- NEW SECTION: COST-SAVING OPPORTUNITIES --- */}
        <section className="bg-white py-3 md:py-6 overflow-hidden relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left Column: Text Content */}
              <div className="flex flex-col justify-center order-2 lg:order-1 relative z-10">
                <span className="text-[#EB5158] font-bold text-lg mb-2 tracking-wide">
                  Cost-Saving Opportunities
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Care Without <br className="hidden lg:block" />
                  <span className="text-[#EB5158]">Compromise</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg">
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
                      className="flex items-center bg-[#3D1E36] text-white px-6 py-4 rounded-xl shadow-md transition-transform hover:scale-[1.02] duration-300"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-medium text-base sm:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Image */}
              {/* FIX: 
                  1. Added lg:h-[700px] to make the box tall.
                  2. Added scale-110 (mobile) and lg:scale-125 (desktop) to zoom image.
                  3. Added origin-bottom-right to anchor the zoom.
                  4. Removed padding/margins that might clip it.
              */}
              <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-end h-[400px] lg:h-[700px] lg:-mb-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/mission-staff.webp"
                    alt="Medical professional"
                    fill
                    className="object-contain object-bottom lg:object-right-bottom scale-110 lg:scale-125 origin-bottom"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
        <StoriesOfHopeSection />
        <section className="bg-white py-16 md:py-24 overflow-hidden border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
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
                  <button className="rounded-full bg-[#EB5158] px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl active:scale-95">
                    Become a Partner &rarr;
                  </button>
                  <button className="rounded-full bg-white px-8 py-4 text-base font-medium text-slate-900 border border-slate-200 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
                    Request a Demo
                  </button>
                </div>

                {/* Note */}
                <div className="text-sm text-slate-500 max-w-sm">
                  <span className="font-bold text-slate-900 block mb-1">Note:</span>
                  Need help choosing the right plan? <br />
                  Our team is here to guide you.
                </div>
              </div>

              {/* Right Column: Image with Play Button */}
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                {/* Image Placeholder */}
                {/* Make sure to add a clinic image to public/clinic-interior.jpg or similar */}
                <Image 
                  src="/clinic-render.jpg" // Replace with your actual image path
                  alt="Modern Clinic Interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient (Optional for better text visibility if needed) */}
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />

                {/* Play Button */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center h-20 w-20 bg-[#3D1E36]/80 rounded-full backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 shadow-lg">
                     <Play className="w-8 h-8 text-[#EB5158] fill-[#EB5158] ml-1" />
                  </div>
                </div> */}
              </div>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}