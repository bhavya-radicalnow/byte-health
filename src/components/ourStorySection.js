import Image from "next/image";

const points = [
  "Hear from employers who partnered with us",
  "See our clinics and services in action",
  "Understand our subscription-based model",
  "Meet the team behind Byte Health",
];

export default function OurStorySection() {
  return (
    <section className="bg-[#4A1E3F] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Left: Video Image */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-md xl:max-w-lg">
            <div className="overflow-hidden rounded-2xl aspect-[520/420] relative">
              <Image
                src="/our-story.webp"
                alt="Doctor consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-white">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-white/70">
              Our Story
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              See How We Are{" "}
              <span className="block text-[#EB5158]">Changing Lives</span>
            </h2>
            
            {/* FIXED LINE BELOW: we're became we&apos;re */}
            <p className="mt-5 max-w-md text-base text-white/80 leading-relaxed">
              Watch our explainer video to understand how we&apos;re making
              quality healthcare accessible and affordable for every worker
              and their family.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  {/* Tick Icon */}
                  <div className="mt-0.5 shrink-0">
                    <Image
                      src="/tick-circle.png"
                      alt="Check"
                      width={22}
                      height={22}
                    />
                  </div>

                  <span className="text-base text-white/90">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}