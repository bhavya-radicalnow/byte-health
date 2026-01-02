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
  ArrowRight
} from 'lucide-react'; 
import ClinicLocationsSection from "@/components/clinicLocationsSection";

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

  const images = [
    "/service-consult-1.jpg", 
    "/service-consult-2.jpg",
    "/service-consult-3.jpg",
  ];

  const insuranceCards = [
    {
      title: "General Consultation",
      description: "Essential protection for your peace of mind at an affordable price.",
      icon: <Stethoscope className="h-8 w-8 text-white" />,
    },
    {
      title: "Health Screenings",
      description: "Essential protection for your peace of mind at an affordable price.",
      icon: <TestTube2 className="h-8 w-8 text-white" />,
    },
    {
      title: "Insurance Plans",
      description: "Essential protection for your peace of mind at an affordable price.",
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
    },
    {
      title: "Corporate Wellness",
      description: "Essential protection for your peace of mind at an affordable price.",
      icon: <ClipboardList className="h-8 w-8 text-white" />,
    },
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
                  <span className="font-medium">Digital Healthcare</span> <br />
                  <span className="font-bold text-[#EB5158]">Services</span>
                </h1>
                <p className="mt-6 text-base text-slate-600 md:text-lg lg:max-w-md leading-relaxed">
                  Transform employee wellness with subscription-based healthcare that fits every budget.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <button className="rounded-full bg-[#EB5158] px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-rose-600 hover:shadow-lg active:scale-95">
                    Book a Consultation &rarr;
                  </button>
                </div>
              </div>

              {/* IMAGE SIDE */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[480px] lg:h-[550px]">
                  <Image
                    src="/service-hero-temp.png"
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

        {/* --- PURPLE INFO SECTION --- */}
        <section className="bg-[#43234F] py-16 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#EB5158]">
                  Consultations
                </p>
                <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                  Bridging the <br className="hidden lg:block" /> Healthcare Gap
                </h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-white/90 md:text-lg">
                  We pinpointed the four key barriers blocking workers and families from
                  seamless consultations: distance, availability, affordability, and
                  coordination. Byte&apos;s platform delivers instant virtual and in-clinic
                  consults, connecting patients to doctors 24/7 without the hassle.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative h-64 w-full overflow-hidden rounded-2xl md:h-72"
                >
                  <Image
                    src={src}
                    alt={`Consultation scene ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MEDICINES & PHARMACY SUPPORT SECTION --- */}
        <section className="bg-white pt-16 lg:pt-16">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            {/* items-end ensures image sits on bottom */}
            <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-20">
              
              {/* Left Column: Image */}
              <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start -mb-1">
                <div className="relative h-[400px] w-full max-w-[450px] lg:h-[550px]">
                  <Image 
                    src="/pharmacy-hero.png" 
                    alt="Pharmacist"
                    fill
                    className="object-contain object-bottom" 
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              {/* Added pb-16 lg:pb-24 because section has no bottom padding */}
              <div className="order-1 lg:order-2 pb-8 lg:pb-24">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#EB5158]">
                  Medicines & Pharmacy Support
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                  Bridging the <br /> Healthcare Gap
                </h2>
                <p className="mb-8 text-base text-slate-600 md:text-lg leading-relaxed">
                  Get reliable access to prescribed medicines with refill reminders, 
                  pharmacist guidance, and convenient delivery options.
                </p>

                <div className="space-y-4">
                  {[
                    "Home delivery options",
                    "Pharmacist support and counseling",
                    "Prescription refills and renewals"
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-4 rounded-xl bg-[#43234F] p-4 text-white shadow-md transition-transform hover:scale-[1.02]"
                    >
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-white" />
                      <span className="text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- LAB TESTS & DIAGNOSTICS --- */}
        <section className="bg-[#FFF9F5] py-16 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Left Column: Text Content */}
              <div className="order-1 flex flex-col justify-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#EB5158]">
                  Lab Tests & Diagnostics
                </p>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                  See How We Are <br />
                  <span className="text-[#EB5158]">Changing Lives</span>
                </h2>
                <p className="mb-8 text-base text-slate-600 md:text-lg leading-relaxed">
                  From preventive screenings to specialised care, we offer a complete 
                  range of healthcare services under one affordable subscription.
                </p>

                <ul className="space-y-5">
                  {[
                    "Blood tests and imaging services",
                    "Home sample collection",
                    "Digital test reports and insights"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-slate-900">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="h-3.5 w-3.5 text-slate-900"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold text-slate-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Image */}
              <div className="order-2 flex justify-center lg:justify-end">
                <div className="relative h-[300px] w-full overflow-hidden rounded-[2.5rem] md:h-[400px] lg:h-[450px]">
                  <Image 
                    src="/lab-test-hero.png" 
                    alt="Doctor taking blood sample"
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CLINIC LOCATIONS COMPONENT --- */}
        <ClinicLocationsSection />

        {/* --- INSURANCE SUPPORT --- */}
        <section className="bg-[#FFF9F5] py-16 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#43234F] md:text-4xl lg:text-5xl">
                Insurance Support
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
                Navigate health insurance with confidence through coverage checks, claims
                guidance, and financial support.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {insuranceCards.map((card, index) => (
                <div 
                  key={index}
                  className="group flex flex-col items-center rounded-[2rem] bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Gradient Icon Circle */}
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-rose-400 shadow-inner">
                    {card.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {card.title}
                  </h3>
                  
                  <p className="mb-8 text-sm leading-relaxed text-slate-500">
                    {card.description}
                  </p>

                  <Link 
                    href="#" 
                    className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors group-hover:text-[#EB5158]"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}