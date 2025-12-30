import Image from "next/image";

const clinics = [
  {
    name: "Bhiwandi Clinic",
    address: "Near Dhamankar Naka, Bhiwandi, Thane District",
    time: "Mon-Sat: 8AM - 8PM",
  },
  {
    name: "Vasai Clinic",
    address: "Near Dhamankar Naka, Bhiwandi, Thane District",
    time: "Mon-Sat: 8AM - 8PM",
  },
  {
    name: "Bhiwandi Clinic",
    address: "Near Dhamankar Naka, Bhiwandi, Thane District",
    time: "Mon-Sat: 8AM - 8PM",
  },
];

export default function ClinicLocationsSection() {
  return (
    <section className="bg-[#FFF7F6] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#4A1E3F]">
            Our Clinic Locations
          </h2>
          <p className="mt-4 text-base text-gray-700">
            Quality healthcare in your neighbourhood. No more traveling hours
            for basic medical care.
          </p>
        </div>

        {/* MAP CARD */}
        <div className="relative mt-14 overflow-hidden rounded-[32px]">
          {/* Map Image */}
          <Image
            src="/map.webp"
            alt="Clinic locations map"
            width={1200}
            height={480}
            className="h-[320px] w-full object-cover md:h-[380px]"
            priority
          />

          {/* Pink Overlay */}
          <div className="absolute inset-0 bg-[#F7CFCB]/80" />

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h3 className="text-2xl font-semibold text-black">
              Serving Thane & Palghar Districts
            </h3>
            <p className="mt-2 text-lg text-black">
              Bhiwandi · Vasai · Expanding Soon
            </p>

            <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#4A1E3F] shadow-sm transition hover:shadow-md">
              View on Google Map <span>→</span>
            </button>
          </div>
        </div>

        {/* CLINIC CARDS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h4 className="text-lg font-semibold text-black">
                {clinic.name}
              </h4>

              <p className="mt-2 text-sm text-gray-600">
                {clinic.address}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-black">
                <Image
                  src="/clock.png"
                  alt="Timing"
                  width={18}
                  height={18}
                />
                {clinic.time}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
