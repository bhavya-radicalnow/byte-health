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
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/our-story.webp"
                alt="Doctor consultation"
                width={520}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Play Button (IMAGE) */}
            <button
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition hover:scale-105"
            >
              <Image
                src="/play.png"
                alt="Play video"
                width={64}
                height={64}
              />
            </button>
          </div>

          {/* Right: Content */}
          <div className="text-white">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
              Our Story
            </p>

            <p className="text-xl font-bold leading-tight sm:text-4xl">
              See How We Are{" "}
            </p>

            <p className="text-3xl font-bold leading-tight sm:text-4xl text-[#EB5158]">
              Changing Lives
            </p>
            <p className="mt-5 max-w-md text-base text-white/80">
              Watch our explainer video to understand how we're making
              quality healthcare accessible and affordable for every worker
              and their family.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  
                  {/* Tick Icon (IMAGE) */}
                  <Image
                    src="/tick-circle.png"
                    alt="Check"
                    width={24}
                    height={24}
                    className="shrink-0"
                  />

                  <span className="text-sm text-white/90">
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
