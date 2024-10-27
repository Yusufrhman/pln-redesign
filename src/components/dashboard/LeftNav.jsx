import FOTO from "../../assets/tentang-kami/struktur/direktur-utama.png";
import { Link } from "react-router-dom";
import { Bell, CardsThree, Notepad, PencilSimple } from "@phosphor-icons/react";
import LeftNavLink from "./LeftNavLink";
export default function LeftNav() {
  return (
    <section className="col-span-1 bg-white h-fit w-full flex items-center justify-evenly px-4 py-8 rounded-xl shadow-xl border">
      <ul className="flex flex-col gap-5">
        <li>
          <Link to={"/dashboard/profile"} className="flex items-center gap-3">
            <section className="bg-white rounded-full border overflow-hidden">
              <img src={FOTO} alt="" className="w-20" />
            </section>
            <span>
              <p className="text-black font-bold text-sm  2xl:text-base">M Yusuf Rahman</p>
              <span className="flex items-center gap-1 text-black opacity-50 text-xs 2xl:text-sm">
                <PencilSimple className="inline" />
                <p>Edit Profile</p>
              </span>
            </span>
          </Link>
        </li>
        <li>
          <LeftNavLink href={"/dashboard/history"}>
            <Notepad size={24} color="#066c9d" weight="bold" />
            <p>Pesanan Saya</p>
          </LeftNavLink>
        </li>
        <li>
          <LeftNavLink href={"/dashboard/notification"}>
            <Bell size={24} color="#2FABB5" weight="bold" />
            <p>Notifikasi</p>
          </LeftNavLink>
        </li>
        <li>
          <LeftNavLink href={"/dashboard/my-voucher"}>
            <CardsThree size={24} color="#B2D78C" weight="bold" />
            <p>Kupon Saya</p>
          </LeftNavLink>
        </li>
      </ul>
    </section>
  );
}
