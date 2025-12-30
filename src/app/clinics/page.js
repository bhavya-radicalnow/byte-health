import ComingSoon from "@/components/commingSoon";
import Navbar from "@/components/navbar";

export default function Home() {
  const isMaintenanceMode = true; // You can toggle this

  if (isMaintenanceMode) {
    return (
      <main>
        <Navbar />
        <ComingSoon />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <ComingSoon />
      {/* Other sections */}
    </main>
  );
}