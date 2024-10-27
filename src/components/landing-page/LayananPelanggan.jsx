import LayananCard from "./layanan-pelanggan/LayananCard";

import ICONPASANGBARU from "../../assets/landing/icon-pasang-baru.svg";
import ICONUBAHDAYA from "../../assets/landing/icon-ubah-daya.svg";
import ICONSAMBUNG from "../../assets/landing/icon-sambung-sementara.svg";

export default function LayananPelanggan() {
  return (
    <div className="bg-[#E7F6F9] h-fit pt-10 pb-20">
      <h2 className="w-fit mx-auto font-bold text-3xl  text-teal-950 px-4 py-2 rounded-full mb-8 relative">
        Layanan Pelanggan
        <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-full h-1 rounded-full bottom-0 left-0"></span>
      </h2>
      <ul className="flex items-stretch justify-center gap-16 h-fit">
        <li className="min-w-[17rem] w-[15%] max-w-[30rem]">
          <LayananCard icon={ICONPASANGBARU}>
            <h3 className="font-bold text-xl">Pasang Baru</h3>
            <p>Layanan permohonan penyambungan baru listrik</p>
          </LayananCard>
        </li>
        <li className="min-w-[17rem] w-[15%] max-w-[30rem]">
          <LayananCard icon={ICONUBAHDAYA}>
            <h3 className="font-bold text-xl">Ubah Daya</h3>
            <p>Layanan permohonan perubahan daya listrik</p>
          </LayananCard>
        </li>
        <li className="min-w-[17rem] w-[15%] max-w-[30rem]">
          <LayananCard icon={ICONSAMBUNG}>
            <h3 className="font-bold text-xl">Sambung Sementara</h3>
            <p>Layanan permohonan penyambungan listrik sementara</p>
          </LayananCard>
        </li>
      </ul>
    </div>
  );
}
