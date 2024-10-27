import DewanProfile from "./dewan/DewanProfile";
import AMIENIMG from "../../assets/tentang-kami/dewan/amien.png";
import IKHSANIMG from "../../assets/tentang-kami/dewan/ikhsan.png";
import SUAHASILIMG from "../../assets/tentang-kami/dewan/suahasil.png";

export default function Dewan() {
    return (
      <div className="bg-white px-32 py-20 ">
        <div className="w-4/5 mx-auto  min-h-[25rem] bg-opacity-40 flex flex-col items-center justify-center gap-8">
          <section>
            <h2 className="w-fit font-bold text-3xl text-left text-teal-950 rounded-full mb-8 relative mx-auto">
              Dewan Komisaris
              <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-full h-1 rounded-full -bottom-2 left-0"></span>
            </h2>
            <p className="text-center font-light text-lg">
              Dewan Komisaris merupakan majelis dan setiap anggota Dewan
              Komisaris tidak dapat bertindak sendiri-sendiri melainkan
              berdasarkan keputusan Dewan Komisaris. Dewan Komisaris diangkat
              dan diberhentikan oleh RUPS. Susunan, persyaratan, nominasi, dan
              pengangkatan Anggota Dewan Komisaris ditetapkan oleh RUPS sesuai
              ketentuan Anggaran Dasar dan peraturan perundang-undangan yang
              berlaku.
            </p>
          </section>
          <section className="flex justify-center gap-10 w-fit mx-auto">
            <DewanProfile
              imageProfile={AMIENIMG}
              name={"Amien Sunaryadi"}
              description={"Komisaris Utama & Komisaris Independen"}
            />
            <DewanProfile
              imageProfile={SUAHASILIMG}
              name={"Suahasil Nazara"}
              description={"Wakil Komisaris Utama"}
            />
            <DewanProfile
              imageProfile={IKHSANIMG}
              name={"Mohamad Ikhsan"}
              description={"Komisaris"}
            />
          </section>
        </div>
      </div>
    );
}