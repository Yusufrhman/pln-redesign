import SejarahTooltip from "./sejarah/SejarahTooltip";

import LOGOPLN from "../../assets/shared/LOGOPLN.svg";

import SEJARAH1IMG from "../../assets/tentang-kami/sejarah/sejarah-1.svg";
import SEJARAH2IMG from "../../assets/tentang-kami/sejarah/sejarah-2.jpg";
import SEJARAH3IMG from "../../assets/tentang-kami/sejarah/sejarah-3.jpg";
import SEJARAH4IMG from "../../assets/tentang-kami/sejarah/sejarah-4.jpg";
import SEJARAH5IMG from "../../assets/tentang-kami/sejarah/sejarah-5.jpg";
import SEJARAH6IMG from "../../assets/tentang-kami/sejarah/sejarah-6.jpg";
export default function TentangKami() {return (
  <div className="bg-[#E7F6F9] px-32 py-20  ">
    <div className="w-4/5 mx-auto  min-h-[25rem] bg-opacity-40 relative flex flex-col justify-between">
      <img src={LOGOPLN} alt="" className="absolute w-full h-full opacity-20" />
      <h1 className="w-fit mx-auto font-bold text-3xl text-black px-4 py-2 rounded-full mb-8 relative">
        Sejarah Singkat Kami
        <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-full h-1 rounded-full bottom-0 left-0"></span>
      </h1>
      <section className="w-full h-[1rem] bg-neutral-400 rounded-full flex items-center justify-between">
        <SejarahTooltip
          content="Berawal di akhir abad 19, bidang pabrik gula dan pabrik
                  ketenagalistrikan di Indonesia mulai ditingkatkan saat
                  beberapa perusahaan asal Belanda yang bergerak di bidang
                  pabrik gula dan pebrik teh mendirikan pembangkit tenaga lisrik
                  untuk keperluan sendiri"
          imageSrc={SEJARAH1IMG}
          number="1"
        />
        <SejarahTooltip
          content="Antara tahun 1942-1945 terjadi peralihan pengelolaan perusahaan-perusahaan Belanda tersebut oleh Jepang, setelah Belanda menyerah kepada pasukan tentara Jepang di awal Perang Dunia II"
          imageSrc={SEJARAH2IMG}
          number="2"
        />
        <SejarahTooltip
          content="Proses peralihan kekuasaan kembali terjadi di akhir Perang Dunia II pada Agustus 1945, saat Jepang menyerah kepada Sekutu. Kesempatan ini dimanfaatkan oleh para pemuda dan buruh listrik melalui delagasi Buruh/Pegawai Listrik dan Gas yang bersama-sama dengan Pemimpin KNI Pusat berinisiatif menghadap Presiden Soekarno untuk menyerahkan perusahaan-perusahaan tersebut kepada Pemerintah Republik Indonesia. Pada 27 Oktober 1945, Presiden Soekarno membentuk Jawatan Listrik dan Gas di bawah Departemen Pekerjaan Umum dan Tenaga dengan kapasitas pembangkit tenaga listrik sebesar 157,5 MW."
          imageSrc={SEJARAH3IMG}
          number="3"
        />
        <SejarahTooltip
          content="Pada tanggal 1 januari 1961, Jawatan Listrik dan Gas diubah menjadi BPU-PLN (Bada Pemimpin Umum Perusahaan Listrik Negara) yang bergerak di bidang listrik, gas dan kokas yang dibubarkan pada tanggal 1 Januari 1965. Pada saat yang sama, 2 (dua) perusahaan negara yaitu Perusahaan Listrik Negara (PLN) sebagai pengelola tenaga listrik milik negara dan Perusahaan Gas Negara (PGN) sebagai pengelola gas diresmikan."
          imageSrc={SEJARAH4IMG}
          number="4"
        />
        <SejarahTooltip
          content="Pada tahun 1972, sesuai dengan Peraturan Pemerintah No. 18, status Perusahaan Listrik Negara (PLN) ditetapkan sebagai Perusahaan Umum Listrik Negara dan sebagai Pemegang Kuasa Usaha Ketenagalistrikan (PKUK) dengan tugas menyediakan tenaga listrik bagi kepentingan umum."
          imageSrc={SEJARAH5IMG}
          number="5"
        />
        <SejarahTooltip
          content="Seiring dengan kebijakan Pemerintah yang memberikan kesempatan kepada sektor swasta untuk bergerak dalam bisnis penyediaan listrik, maka sejak tahun 1994 status PLN beralih dari Perusahaan Umum menjadi Perusahaan Perseroan (Persero) dan juga sebagai PKUK dalam menyediakan listrik bagi kepentingan umum hingga sekarang"
          imageSrc={SEJARAH6IMG}
          number="6"
        />
      </section>
    </div>
  </div>
);}