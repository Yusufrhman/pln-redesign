import StrukturCard from "./struktur/StrukturCard";

import DIRUTIMG from "../../assets/tentang-kami/struktur/direktur-utama.png";
import WADIRUTIMG from "../../assets/tentang-kami/struktur/wakil-direktur-utama.png";
import DIREKTURPERENCANAANKORPORATIMG from "../../assets/tentang-kami/struktur/direktur-perencanaan-korporat.png";
import DIREKTURKEUANGANIMG from "../../assets/tentang-kami/struktur/direktur-keuangan.png"

export default function Struktur() {
  return (
    <div className="h-fit bg-[#E7F6F9] px-4 py-20 flex flex-col gap-4">
      <h2 className="w-fit font-bold text-3xl text-left text-teal-950 rounded-full mb-8 relative mx-auto">
        Struktur Organisasi
        <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-full h-1 rounded-full -bottom-2 left-0"></span>
      </h2>
      <div className="2xl:w-3/5 xl:w-4/5  h-full grid grid-rows-8 grid-cols-10 mx-auto">
        <div className="col-start-5 row-span-10 row-start-3 border-r-4 border-black"></div>
        <div className="col-start-5 row-start-4 border-t-4 border-black"></div>
        <div className="col-start-1 row-start-5 w-4/5 mx-auto h-full col-span-10 flex items-center justify-center border-black relative">
          <section className="h-1 w-full my-auto bg-black absolute"></section>
          <section className="h-full top-[50%] w-1 my-auto bg-black absolute right-0"></section>
          <section className="h-[100%] top-[50%] w-1 my-auto bg-black absolute left-0 "></section>
          <section className="h-full top-[50%] w-1 my-auto bg-black absolute right-1/4"></section>
          <section className="h-[100%] top-[50%] w-1 my-auto bg-black absolute right-3/4 "></section>
        </div>
        <div className="col-start-1 row-start-8 w-4/5 mx-auto h-full col-span-10 flex items-center justify-center border-black relative">
          <section className="h-1 w-full my-auto bg-black absolute"></section>
          <section className="h-full top-[50%] w-1 my-auto bg-black absolute right-0"></section>
          <section className="h-[100%] top-[50%] w-1 my-auto bg-black absolute left-0 "></section>
          <section className="h-full top-[50%] w-1 my-auto bg-black absolute right-1/4"></section>
          <section className="h-[100%] top-[50%] w-1 my-auto bg-black absolute right-3/4 "></section>
        </div>
        <StrukturCard
          foto={DIRUTIMG}
          jabatan={"Direktur Utama"}
          nama={"Zulkifli Zaini"}
          className={"col-start-5 col-span-2 row-span-2 row-start-1"}
        />
        <StrukturCard
          foto={WADIRUTIMG}
          jabatan={"Wakil Direktur Utama"}
          nama={"Darmawan Prasodjo"}
          className={"col-start-3 col-span-2 row-span-2 row-start-3 "}
        />
        <StrukturCard
          foto={DIREKTURPERENCANAANKORPORATIMG}
          jabatan={"Direktur Perencanaan Korporat"}
          nama={"Evy Haryadi"}
          className={"col-start-1 col-span-2 row-span-2 row-start-6"}
        />
        <StrukturCard
          foto={DIREKTURKEUANGANIMG}
          jabatan={"Direktur Keuangan dan Manajemen Resiko"}
          nama={"Sinthya Roesly"}
          className={"col-start-3 col-span-2 row-span-2 row-start-6"}
        />
        <StrukturCard
          foto={DIRUTIMG}
          jabatan={"Direktur Mega Proyek & Energi Terbarukan"}
          nama={"Zulkifli Zaini"}
          className={"col-start-7 col-span-2 row-span-2 row-start-6"}
        />
        <StrukturCard
          foto={DIRUTIMG}
          jabatan={"Direktur Energi Primer"}
          nama={"Zulkifli Zaini"}
          className={"col-start-9 col-span-2 row-span-2 row-start-6"}
        />
        <StrukturCard
          foto={DIRUTIMG}
          jabatan={"Direktur Manajemen Sumber Daya Manusia"}
          nama={"Zulkifli Zaini"}
          className={"col-start-1 col-span-2 row-span-2 row-start-9"}
        />
        <StrukturCard
          foto={DIRUTIMG}
          jabatan={"Direktur Niaga & Manajemen Pelanggan"}
          nama={"Zulkifli Zaini"}
          className={"col-start-3 col-span-2 row-span-2 row-start-9"}
        />{" "}
        <StrukturCard
          foto={DIRUTIMG}
          jabatan={"Direktur Bisnis Regional Sumatra & Kalimantan"}
          nama={"Zulkifli Zaini"}
          className={"col-start-5 col-span-2 row-span-2 row-start-9"}
        />{" "}
        <StrukturCard
          foto={DIRUTIMG}
          jabatan={"Direktur Bisnis Regional Jawa Madura & Bali"}
          nama={"Zulkifli Zaini"}
          className={"col-start-7 col-span-2 row-span-2 row-start-9"}
        />{" "}
        <StrukturCard
          foto={DIRUTIMG}
          jabatan={"Direktur Bisnis Regional Sulawesi"}
          nama={"Zulkifli Zaini"}
          className={"col-start-9 col-span-2 row-span-2 row-start-9"}
        />
      </div>
    </div>
  );
}
