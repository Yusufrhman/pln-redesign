import Struktur from "../components/tentang-kami/Struktur";

import TentangKami from "../components/tentang-kami/TentangKami";
import VisiMisi from "../components/tentang-kami/VisiMisi";


import Dewan from "../components/tentang-kami/Dewan";
import AnakPerusahaan from "../components/tentang-kami/AnakPerusahaan";
import { useEffect } from "react";


export default function TentangKamiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <TentangKami />
      <VisiMisi />
      <Struktur />
      <Dewan />
      <AnakPerusahaan />
    </div>
  );
}
