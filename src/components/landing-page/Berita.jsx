import NewsCard from "./berita/BeritaCard";

import BERITAIMG from "../../assets/landing/berita.svg";
import HUBINVESTORIMG from "../../assets/landing/hubungan-investor.svg";
import BERKEMBANGIMG from "../../assets/landing/kami-terus-berkembang.svg";
import LAYANANIMG from "../../assets/shared/LOGOPLN.svg";

export default function Berita() {
  return (
    <div className="bg-white h-fit pt-12 pb-24 px-24 flex flex-col items-center justify-center">
      <h2 className="w-fit mx-auto font-bold text-3xl  text-teal-950 px-4 py-2 rounded-full mb-8 relative">
        Berita
        <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-full h-1 rounded-full bottom-0 left-0"></span>
      </h2>
      <section className="grid grid-cols-2 justify-items-center gap-12 w-4/5 ">
        <NewsCard
          imageSrc={BERITAIMG}
          topLabel="Berita Terkini"
          title="Kemeriahan Upacara Pembukaan PON XX Papua, Warga: Terima Kasih PLN"
          buttonText="Read more..."
          onButtonClick={() => {}}
        />
        <NewsCard
          imageSrc={HUBINVESTORIMG}
          topLabel="Hubungan Investor"
          title="LAPORAN TAHUNAN Bagian ini menyajikan Laporan Tahunan dan Laporan Keberlanjutan Perusahaan."
          buttonText="Read more..."
          onButtonClick={() => {}}
        />
        <NewsCard
          imageSrc={BERKEMBANGIMG}
          topLabel="Kami Terus Berkembang"
          title="PLN Groundbreaking Pembangunan SUTET 500 kV PLTU Indramayu-Cibatu (Deltamas)"
          buttonText="Read more..."
          onButtonClick={() => {}}
        />
        <NewsCard
          imageSrc={LAYANANIMG}
          topLabel="Layanan Informasi Publik"
          title="akses cepat dan transparan kepada masyarakat terkait layanan pelanggan."
          buttonText="Read more..."
          onButtonClick={() => {}}
        />
      </section>
    </div>
  );
}
