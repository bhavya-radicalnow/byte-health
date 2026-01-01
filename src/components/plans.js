export default function PlansSection() {
  return (
    <section className="bg-white py-24" id="health-plans">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-[#4A1E3F]">
            Plans That Fit Your Needs
          </h2>

          <p className="mt-4 text-base text-gray-700">
            Affordable healthcare subscriptions for individuals, families,
            and organizations. No hidden costs, no surprises.
          </p>
        </div>

        {/* PLANS */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* PLAN 1 */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#2F2F2F]">
              Byte Health Suraksha
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Unlimited OPD consultations",
                "Basic health screenings",
                "Discounted lab tests",
                "Teleconsultation access",
                "Health education sessions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E5635B] text-white text-xs">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              {/* <p className="text-lg font-medium text-[#2F2F2F]">
                Rs 599/month
              </p> */}

              <button className="mt-6 w-full rounded-full bg-[#4A1E3F] py-3 text-sm font-medium text-white hover:opacity-90">
                Select Plan
              </button>
            </div>
          </div>

          {/* PLAN 2 */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#2F2F2F]">
              Byte Health Sampurna
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Everything in Family Care",
                "On-site health camps",
                "Dedicated health coordinator",
                "Health analytics dashboard",
                "Insurance integration",
                "24/7 emergency support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E5635B] text-white text-xs">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              {/* <p className="text-lg font-medium text-[#2F2F2F]">
                Rs 899/month
              </p> */}

              <button className="mt-6 w-full rounded-full bg-[#4A1E3F] py-3 text-sm font-medium text-white hover:opacity-90">
                Select Plan
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
