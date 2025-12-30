import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen font-sans text-slate-900">

        {/* 1. Hero Section */}
        <section className="relative overflow-hidden px-6 pt-10 md:pt-16 lg:px-20 lg:pt-0">
          {/* lg:pt-0 allows the image to define the height on desktop */}
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:min-h-[550px]">
              {/* lg:min-h ensures the section has enough height for the big image */}

              {/* TEXT SIDE: Stays centered because of 'items-center' */}
              <div className="z-10 py-12 text-center lg:text-left">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500 md:text-sm">About Byte Health</p>
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  We <span className="text-rose-500">build accessible, coordinated and compassionate health systems</span> for communities
                </h1>
                <p className="mt-6 text-base text-slate-600 md:text-lg lg:max-w-xl">
                  Partnering with employers, clinics, and communities to make quality healthcare simpler, affordable, and closer to home.
                </p>
                <button className="mt-8 w-full rounded-full bg-rose-500 px-8 py-4 text-white transition-all hover:bg-rose-600 hover:shadow-lg active:scale-95 sm:w-auto">
                  Book a Consultation →
                </button>
              </div>

              {/* IMAGE SIDE: Big and sticking to bottom */}
              <div className="relative flex justify-center lg:h-full lg:items-end lg:justify-end">
                <div className="relative h-[350px] w-[320px] sm:h-[450px] sm:w-[400px] md:h-[550px] md:w-[500px] lg:h-[600px] lg:w-[550px]">
                  <Image
                    src="/doctors-hero.webp"
                    alt="Byte Health Doctors"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Mission Section */}
        <section className="bg-[#43234F] px-6 pt-16 text-white md:pt-20 lg:px-20 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-end gap-12 lg:grid-cols-2">
              <div className="order-2 flex justify-center lg:order-1">
                <div className="relative h-[350px] w-full max-w-md overflow-hidden rounded-t-2xl md:h-[450px] lg:h-[500px]">
                  <Image
                    src="/mission-staff.webp"
                    alt="Mission"
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>

              <div className="order-1 pb-16 lg:order-2 lg:pb-32">
                <p className="mb-2 text-sm font-medium text-rose-300">Our Mission</p>
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Strengthening the Health Care Systems</h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200 md:text-base">
                  {/* FIXED LINE BELOW: Health's became Health&apos;s */}
                  <p>Byte Health&apos;s mission is to strengthen communities by helping build health systems that are accessible, coordinated, and compassionate.</p>
                  <p>We partner with organizations that share our commitment to improving care delivery and ensuring that every person can live a healthier, more supported life.</p>
                  <p>Byte Health strengthens communities by building accessible, coordinated, and compassionate health systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Vision Section */}
        <section className="px-6 py-16 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium text-rose-500">Our Vision</p>
                <h2 className="text-3xl font-bold md:text-4xl">Healthcare for <span className="text-rose-500">Everyone</span></h2>
                <p className="mt-6 text-slate-600">
                  Our vision is a future where communities thrive because healthcare is inclusive, equitable, and centered around people.
                </p>
                <p className="mt-4 text-slate-600">
                  We see a world where institutions, caregivers, and individuals work together seamlessly to make good health a shared reality for all.
                </p>
              </div>
              <div className="relative h-[250px] w-full overflow-hidden rounded-3xl sm:h-[350px] md:h-[400px]">
                <Image src="/vision-family.jpg" alt="Happy Family" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Value Pillars (Checklist) */}
        <section className="bg-slate-50 px-6 py-16 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative h-[250px] w-full overflow-hidden rounded-3xl sm:h-[350px] md:h-[400px]">
                <Image src="/values-doctor.webp" alt="Value Pillars" fill className="object-cover" />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-rose-500">Value Pillars</p>
                <h2 className="text-3xl font-bold md:text-4xl">Building <span className="text-rose-500">Stronger Healthcare</span> Systems</h2>
                <p className="mt-4 text-slate-600">Byte Health partners across sectors to design and scale coordinated, affordable health systems that help communities thrive.</p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Building stronger, more responsive health systems.",
                    "Improving access, coordination, and quality of care.",
                    "Collaborating with governments, insurers, and care providers."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-medium text-slate-700">
                      <CheckCircle2 className="mt-1 flex-shrink-0 text-rose-500" size={20} />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Story */}
        <section className="px-6 py-16 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center lg:text-left">
              <p className="text-sm font-medium text-rose-500">Our Story</p>
              <h2 className="text-3xl font-bold md:text-4xl">Building <span className="text-rose-500">Stronger Healthcare</span> Systems</h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="relative h-[250px] overflow-hidden rounded-3xl shadow-lg sm:h-[350px]">
                <Image src="/story-founder.jpg" alt="Story" fill className="object-cover" />
              </div>
              <div className="space-y-6 text-sm leading-relaxed text-slate-600 md:text-base">
                <p>We work at the intersection of public health, systems design, and implementation support. Collaborating across sectors, we design solutions that improve access, coordination, and quality of care.</p>
                <p>When health systems work better for communities, everyone thrives. We work at the intersection of public health, systems design, and implementation support.</p>
                <p>Collaborating across sectors, we design solutions that improve access, coordination, and quality of care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Meet Our Team */}
        <section className="bg-rose-50/40 px-6 py-16 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="text-3xl font-bold text-rose-500 md:text-4xl">Meet Our Team</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">We work at the intersection of public health, systems design, and implementation support.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl bg-rose-100 sm:h-72">
                    <Image src={`/team-1.png`} alt="Team Member" fill className="object-cover" />
                  </div>
                  <div className="pb-2 text-center">
                    <h3 className="text-lg font-bold text-slate-900">Rajesh Sharma</h3>
                    <p className="text-sm font-medium text-slate-400">CEO</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Bottom Gallery */}
        <section className="px-6 py-16 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Building <span className="text-rose-500">Stronger Healthcare</span> Systems</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-600 md:text-base">We work at the intersection of public health, systems design, and implementation support.</p>

            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-32 overflow-hidden rounded-xl shadow-sm sm:h-48 lg:h-64">
                  <Image src={`/gallery-1.png`} alt="Gallery" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default AboutPage;