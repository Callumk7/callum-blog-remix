import { Navbar } from "@/components/navigation/navbar";
import { Outlet } from "@remix-run/react";

export default function AppLayout() {
  return (
    <main>
      <Navbar />
      <div className="flex min-h-screen mx-auto w-4/5 flex-col">
        <div className="my-28">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
