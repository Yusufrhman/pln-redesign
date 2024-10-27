import { useEffect } from "react";
import FOTO from "../assets/tentang-kami/struktur/direktur-utama.png";
import { Link, Outlet } from "react-router-dom";
import { Bell, CardsThree, Notepad, PencilSimple } from "@phosphor-icons/react";
import LeftNav from "../components/dashboard/LeftNav";

export default function DashboardLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-fit">
      <div className="grid grid-cols-4 gap-6 h-full w-3/5 mx-auto my-20 ">
        <LeftNav />
        <section className="col-span-3 bg-white h-full w-full">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
