import VISIMISIIMG from "../../assets/tentang-kami/sejarah/sejarah-6.jpg";

export default function VisiMisi() {
  return (
    <div className="bg-white px-32 py-20 ">
      <div className="w-4/5 mx-auto  min-h-[25rem] bg-opacity-40 flex items-center justify-center gap-16">
        <section>
          <section>
            <h2 className="w-fit font-bold text-3xl text-left text-teal-950 rounded-full mb-8 relative">
              Visi
              <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-[8rem] h-1 rounded-full -bottom-2 left-0"></span>
            </h2>
            <p className="text-lg font-light">
              Menjadi Perusahaan Listrik Terkemuka se-Asia Tenggara dan #1
              Pilihan Pelanggan untuk Solusi Energi.
            </p>
          </section>
          <section>
            <h2 className="w-full font-bold text-3xl text-right text-teal-950 rounded-full mb-8 relative">
              Misi
              <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-[8rem] h-1 rounded-full -bottom-2 right-0"></span>
            </h2>
            <ul className="text-lg font-light list-disc flex flex-col gap-2">
              <li>
                Menjalankan bisnis kelistrikan dan bidang lain yang terkait,
                berorientasi pada kepuasan pelanggan, anggota perusahaan dan
                pemegang saham.
              </li>
              <li>
                Menjadikan tenaga listrik sebagai media untuk meningkatkan
                kualitas kehidupan masyarakat.
              </li>
              <li>
                Mengupayakan agar tenaga listrik menjadi pendorong kegiatan
                ekonomi.
              </li>
              <li>Menjalankan kegiatan usaha yang berwawasan lingkungan.</li>
            </ul>
          </section>
        </section>
        <section className="w-fit h-fit relative">
          <img src={VISIMISIIMG} alt="" className="rounded-2xl relative z-10" />
          <div className="absolute -top-6 -right-6 h-full w-full bg-neutral-500 rounded-2xl blur-sm"></div>
        </section>
      </div>
    </div>
  );
}
