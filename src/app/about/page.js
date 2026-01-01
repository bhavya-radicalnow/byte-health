import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen font-sans text-slate-900">

        {/* 1. Hero Section */}
        <section className="relative lg:left-10 overflow-hidden px-6 pt-10 md:pt-16 lg:px-20 lg:pt-0">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:min-h-[550px]">
              
              {/* TEXT SIDE */}
              <div className="z-10 py-12 text-center lg:text-left">
                
                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center justify-center gap-2 text-sm lg:justify-start">
                  <Link 
                    href="/" 
                    className="font-medium text-slate-500 transition-colors hover:text-rose-500"
                  >
                    Home
                  </Link>
                  <span className="text-slate-400">/</span>
                  <span className="font-bold text-[#4A1E3F]">About Us</span>
                </nav>

                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500 md:text-sm">
                  About Byte Health
                </p>
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  We <span className="text-[#EB5158]">build accessible, coordinated and compassionate health systems</span> for communities
                </h1>
                <p className="mt-6 text-base text-slate-600 md:text-lg lg:max-w-xl">
                  Partnering with employers, clinics, and communities to make quality healthcare simpler, affordable, and closer to home.
                </p>
                <button className="mt-8 w-full rounded-full bg-[#EB5158] px-8 py-4 text-white transition-all hover:bg-rose-600 hover:shadow-lg active:scale-95 sm:w-auto">
                  Book a Consultation →
                </button>
              </div>

              {/* IMAGE SIDE */}
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
        <section className="bg-[#43234F] left-10 px-6 pt-16 text-white md:pt-20 lg:px-20 lg:pt-24">
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
                  <p>Byte Health&apos;s mission is to strengthen communities by helping build health systems that are accessible, coordinated, and compassionate.</p>
                  <p>We partner with organizations that share our commitment to improving care delivery and ensuring that every person can live a healthier, more supported life.</p>
                  <p>Byte Health strengthens communities by building accessible, coordinated, and compassionate health systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Vision Section */}
        <section className="px-6 left-10 py-16 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium text-rose-500">Our Vision</p>
                <h2 className="text-3xl font-bold md:text-4xl">Healthcare for <span className="text-[#EB5158]">Everyone</span></h2>
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
        <section className="bg-slate-50 left-10 px-6 py-16 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative h-[250px] w-full overflow-hidden rounded-3xl sm:h-[350px] md:h-[400px]">
                <Image src="/values-doctor.webp" alt="Value Pillars" fill className="object-cover" />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-rose-500">Value Pillars</p>
                <h2 className="text-3xl font-bold md:text-4xl">Building <span className="text-[#EB5158]">Stronger Healthcare</span> Systems</h2>
                <p className="mt-4 text-slate-600">Byte Health partners across sectors to design and scale coordinated, affordable health systems that help communities thrive.</p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Building stronger, more responsive health systems.",
                    "Improving access, coordination, and quality of care.",
                    "Collaborating with governments, insurers, and care providers."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-medium text-slate-700">
                      <CheckCircle2 className="mt-1 flex-shrink-0 text-[#EB5158]" size={20} />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Story */}
        <section className="px-6 left-10 py-16 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center lg:text-left">
              <p className="text-sm font-medium text-rose-500">Our Story</p>
              <h2 className="text-3xl font-bold md:text-4xl">Building <span className="text-[#EB5158]">Stronger Healthcare</span> Systems</h2>
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

        {/* 6. Meet Our Team (Updated to match Screenshot) */}
        <section className="bg-[#FFF9F5] px-6 py-16 md:py-24 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            
            {/* Header: Title Left, Text Right */}
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="text-4xl font-bold text-[#EB5158] md:text-5xl">
                Meet Our Team
              </h2>
              <p className="max-w-lg text-lg text-slate-700 md:text-right">
                We work at the intersection of public health and systems design to improve access, coordination, and quality of care.
              </p>
            </div>

            {/* Team Grid - 5 Columns */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
              {[
                { 
                  name: "Santosh", 
                  role: "Chief Executive Officer & CoFounder", 
                  image: "/santosh.png" 
                },
                { 
                  name: "Abhiroop", 
                  role: "Chief Business Officer & CoFounder", 
                  image: "/abhiroop.png" 
                },
                { 
                  name: "Vivek", 
                  role: "Chief of Institutional Business & CoFounder", 
                  image: "/vivek.png" 
                },
                { 
                  name: "Sounak", 
                  role: "Chief of Product, Technology & CoFounder", 
                  image: "/sounak.png" 
                },
                { 
                  name: "Navin", 
                  role: "Chief Risk Officer & CoFounder", 
                  image: "/navin.png" 
                },
              ].map((member) => (
                <div key={member.name} className="flex flex-col group">
                  {/* Peach Card Background */}
                  <div className="relative h-[220px] w-full overflow-hidden rounded-2xl bg-[#FFD4A6] transition-transform duration-300 group-hover:-translate-y-1 sm:h-[260px] md:h-[300px]">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover object-top" 
                    />
                  </div>
                  
                  {/* Name & Role Below Card */}
                  <div className="mt-5">
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="mt-1 text-xs font-bold leading-relaxed text-slate-500 uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Bottom Gallery */}
        <section className="px-6 py-16 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Building <span className="text-[#EB5158]">Stronger Healthcare</span> Systems</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-600 md:text-base">We work at the intersection of public health, systems design, and implementation support.</p>

            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-32 overflow-hidden rounded-xl shadow-sm sm:h-48 lg:h-64">
                  <Image src={`/gallery-${i}.png`} alt="Gallery" fill className="object-cover" />
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