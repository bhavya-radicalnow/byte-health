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
      <div className="min-h-screen font-sans text-slate-900 bg-white">

        {/* 1. Hero Section */}
        <section className="overflow-hidden pt-2 md:pt-3 lg:pt-4">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">

              {/* TEXT SIDE */}
              <div className="z-10 text-center lg:text-left">

                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center justify-center gap-2 text-sm lg:justify-start">
                  <Link href="/" className="font-medium text-slate-500 hover:text-[#EB5158] transition-colors">
                    Home
                  </Link>
                  <span className="text-slate-300">/</span>
                  <span className="font-bold text-[#4A1E3F]">About Us</span>
                </nav>

                <p className="mb-3 text-2xl font-bold text-black">
                  About Byte Health
                </p>
                <h1 className="text-3xl font-bold leading-[1.15] text-[#4A1E3F] sm:text-4xl md:text-5xl">
                  We <span className="text-[#EB5158]">build accessible</span> coordinated and compassionate <span className="text-[#EB5158]">health systems.</span>
                </h1>
                <p className="mt-5 text-base text-slate-600 md:text-lg leading-relaxed lg:max-w-lg">
                  Partnering with employers, clinics, and communities to make quality healthcare simple, affordable, and closer to home.
                </p>
              </div>

              {/* IMAGE SIDE */}
              <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
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
        <section className="bg-gradient-to-b from-[#4A1E3F] to-[#5C2D50] pt-16 pb-16 lg:pt-24 lg:pb-0 text-white overflow-hidden">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid items-end gap-12 lg:grid-cols-2">
              <div className="order-2 flex justify-center lg:order-1 hidden lg:block">
                <div className="relative h-[350px] w-full max-w-md overflow-hidden rounded-t-2xl md:h-[450px] lg:h-[500px]">
                  <Image
                    src="/mission-staff.webp"
                    alt="Byte Health Mission Staff"
                    fill
                    className="object-cover object-bottom scale-x-[-1]"
                  />
                </div>
              </div>

              <div className="order-1 pb-16 lg:order-2 lg:pb-32">
                <p className="mb-2 text-sm font-medium text-[#EB5158]">Our Mission</p>
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Strengthening the Health Care Systems</h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200 md:text-base">
                  <p>Byte Health&apos;s mission is to strengthen communities by building healthcare systems that are accessible, coordinated, and compassionate.</p>
                  <p>We partner with employers, clinics, and community organisations to improve care delivery—ensuring people can navigate healthcare more easily and live healthier, more supported lives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* 3. Our Vision Section */}
<section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-bold text-[#EB5158] tracking-wide">Our Vision</p>
                <h2 className="text-3xl font-bold text-[#4A1E3F] md:text-4xl">Healthcare for <br/> <span className="text-[#EB5158]">Everyone</span></h2>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  We envision a future where communities thrive because healthcare is inclusive, equitable, and centred around people.
                </p>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  In this future, institutions, caregivers, and individuals work together seamlessly—making good health a shared reality for all.
                </p>
              </div>
              
              {/* Updated Container: Added lg:aspect-square and lg:h-auto */}
              <div className="relative h-[450px] w-full overflow-hidden rounded-2xl sm:h-[350px] lg:h-auto lg:aspect-square">
                <Image src="/vision-family.jpg" alt="Happy Family Receiving Healthcare" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Value Pillars */}
        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1 relative h-[250px] w-full overflow-hidden rounded-2xl sm:h-[350px] lg:h-auto lg:aspect-square">
                <Image src="/values-doctor.webp" alt="Byte Health Value Pillars Doctor" fill className="object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="mb-2 text-sm font-bold text-[#EB5158] tracking-wide">Value Pillars</p>
                <h2 className="text-3xl font-bold text-[#4A1E3F] md:text-4xl"><span className="text-[#EB5158]">Strengthening</span> The <br/> <span className="text-[#EB5158]">Health Care</span> Systems</h2>
                <p className="mt-4 text-slate-600">Byte Health's mission is to strengthen communities by building healthcare systems that are accessible, coordinated, and compassionate.</p>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  We partner with employers, clinics, and community organisations to improve care delivery—ensuring people can navigate healthcare more easily and live healthier, more supported lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Story */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1 space-y-4 text-slate-600 leading-relaxed">
                <div>
                  <p className="mb-2 text-sm font-bold text-[#EB5158] tracking-wide">Our Story</p>
                  <h2 className="text-3xl font-bold text-[#4A1E3F] md:text-4xl mb-4">Small Moments <br/> <span className="text-[#EB5158]">A Bigger Idea</span></h2>
                </div>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  Byte Health was born on a long night filled with conversation, food, and countless cups of tea.
                </p>    
                <p className="mt-5 text-slate-600 leading-relaxed">
                  A few friends—each from different corners of finance and insurance—had come together with a shared discomfort. They had built careers around managing risk and value, yet kept seeing the same truth: for too many people, healthcare arrived late, fragmented, or not at all.
                </p> 
                <p className="mt-5 text-slate-600 leading-relaxed">
                  As dawn broke in a small Kolkata apartment, one idea became clear—healthcare doesn't need to be overwhelming. It needs to arrive in small, meaningful moments. A consultation. A test. A follow-up. A byte at a time.
                </p> 
                <p className="mt-5 text-slate-600 leading-relaxed">
                  That word stayed.
                </p> 
                <p className="mt-5 text-slate-600 leading-relaxed">
                  The months that followed tested everything. The world shut down. Safe careers tempted them back. But the idea refused to fade. Choosing belief over certainty, the founders committed fully, later joined by a technologist who helped turn empathy into a platform.                
                </p>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  Today, Byte Health brings doctors, diagnostics, prevention, and protection together—so healthcare feels less intimidating, and more like it should have always been: personal, continuous, and kind.               
                </p>
              </div>
              <div className="order-1 lg:order-2 relative h-[250px] overflow-hidden rounded-2xl shadow-lg sm:h-[350px] lg:h-auto lg:aspect-square">
                <Image src="/team-new.png" alt="Byte Health Founders Story" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Meet Our Team */}
        <section className="bg-[#FFF9F5] py-16 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 md:px-8">

            {/* Header */}
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold text-[#EB5158]">Meet Our Team</h2>
              </div>
              <p className="max-w-lg text-base text-slate-600 md:text-right font-medium">
                We work at the intersection of public health and systems design to improve access, coordination, and quality of care.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {[
                { 
                  name: "Santosh", 
                  role: "Chief Executive Officer & Co-Founder",
                  image: "/santosh.png",
                  linkedin: "https://www.linkedin.com/in/santosh-singh-62a45712"
                },
                { 
                  name: "Abhiroop", 
                  role: "Chief Business Officer & Co-Founder", 
                  image: "/abhiroop.png",
                  linkedin: "https://www.linkedin.com/in/abhiroopchatterjee" 
                },
                { 
                  name: "Vivek", 
                  role: "Chief of Institutional Business & Co-Founder", 
                  image: "/vivek.png",
                  linkedin: "https://www.linkedin.com/in/vivekshah27" 
                },
                { 
                  name: "Sounak", 
                  role: "Chief of Product, Technology & Co-Founder", 
                  image: "/sounak.png",
                  linkedin: "https://www.linkedin.com/in/sounak-bhattacharya" 
                },
                { 
                  name: "Navin", 
                  role: "Chief Risk Officer & Co-Founder", 
                  image: "/navin.png",
                  linkedin: "https://www.linkedin.com/in/navin-jain-65633315" 
                },
              ].map((member) => (
                <div key={member.name} className="group">
                  
                  {/* Image Container with Peach Background */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#FFD4A6] transition-all duration-300 group-hover:-translate-y-1">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      className="object-cover object-top"
                    />
                    
                    {/* LinkedIn Icon - Absolute Position Bottom Right */}
                    <Link 
                      href={member.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 z-10 transition-transform hover:scale-110"
                    >
                      {/* SVG for LinkedIn Logo */}
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="#0077B5"/>
                        <path d="M18.5 18.5H15.5V13.8C15.5 12.67 15.48 11.23 13.94 11.23C12.38 11.23 12.14 12.45 12.14 13.71V18.5H9.14V8.99999H12.02V10.32H12.06C12.46 9.55999 13.44 8.75999 15.18 8.75999C18.52 8.75999 19.14 10.96 19.14 13.78V18.5H18.5ZM5.97 7.67999C5.01 7.67999 4.23 6.89999 4.23 5.93999C4.23 4.97999 5.01 4.19999 5.97 4.19999C6.93 4.19999 7.71 4.97999 7.71 5.93999C7.71 6.89999 6.93 7.67999 5.97 7.67999ZM7.47 18.5H4.47V8.99999H7.47V18.5Z" fill="white"/>
                      </svg>
                    </Link>
                  </div>

                  {/* Name & Role */}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{member.name}</h3>
                    <p className="mt-1 text-xs font-medium text-slate-600 leading-snug">
                      {member.role}
                    </p>
                  </div>
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
