import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/shared/LOGOPLN.svg";
import MainButton from "../buttons/MainButton";
import NavLink from "./navigation/NavLink";

import FOTO from "../../assets/tentang-kami/struktur/direktur-utama.png";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHistory = currentPath === "/history";

  return (
    <header className="h-fit bg-gradient-to-r from-[#066C9D] via-[#2FABB5] to-[#B2D78C] w-[100dvw] shadow-lg  z-50 sticky top-0">
      <section className="flex justify-between items-center w-4/5 mx-auto">
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[4rem] px-8 py-4" />
        </Link>
        <ul className="flex items-center justify-center gap-6">
          <li>
            <ul className="flex items-center justify-evenly gap-8 text-white font-bold text-sm">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/tentang-kami">Tentang Kami</NavLink>
              </li>
              <li>
                <NavLink href="/layanan-pelanggan">Layanan Pelanggan</NavLink>
              </li>
              <li>
                <NavLink href="/media">Media</NavLink>
              </li>
              <li>
                <NavLink href="/karir">Karir</NavLink>
              </li>
              <li>
                <NavLink href="/spklu">SPKLU</NavLink>
              </li>
            </ul>
          </li>
          <li>
            {isHistory ? (
              <Link to={"/history"} className="flex items-center gap-1">
                <section className="bg-white rounded-full overflow-hidden">
                  <img src={FOTO} alt="" className="w-8" />
                </section>
                <p className="text-white font-normal text-sm">M Yusuf Rahman</p>
              </Link>
            ) : (
              <Link to="/login">
                <MainButton
                  className={"bg-gradient-to-l from-[#2FABB5] to-[#045e87]"}
                  borderClassName={
                    "bg-gradient-to-r  from-[#066C9D] to-[#2FABB5]"
                  }
                >
                  Login
                </MainButton>
              </Link>
            )}
          </li>
        </ul>
      </section>
    </header>
  );
}
