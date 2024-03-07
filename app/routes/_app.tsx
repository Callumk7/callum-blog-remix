import { Navbar } from "@/components/navigation/navbar";
import { Outlet } from "@remix-run/react";

export default function AppLayout() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto mb-28 min-h-screen w-4/5 pt-28">
        <Outlet />
      </div>
    </main>
  );
}
