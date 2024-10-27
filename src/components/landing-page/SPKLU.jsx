import CHARGERICON from "../../assets/landing/charger-icon.svg";
import PEOPLEICON from "../../assets/landing/people-icon.svg";
import THUNDERICON from "../../assets/landing/thunder-icon.svg";
import PHONEICON from "../../assets/landing/phone-icon.svg";
import SPKLUIMG from "../../assets/landing/spklu.svg";
import SPKLUBenefit from "./SPKLU/SPKLUBenefit";
import MainButton from "../buttons/MainButton";
export default function SPKLU() {
  return (
    <div className="bg-[#E7F6F9] h-fit pt-10 pb-20">
      <h2 className="w-fit mx-auto font-bold text-3xl  text-teal-950 px-4 py-2 rounded-full mb-8 relative">
        Partnership SPKLU
        <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-full h-1 rounded-full bottom-0 left-0"></span>
      </h2>
      <section className="flex gap-16 items-center justify-center w-4/5 mx-auto">
        <div className="flex flex-col gap-4">
          <h3 className=" font-bold text-black text-xl">
            Mengapa Menjadi Partner Penyedia Layanan SPKLU ?
          </h3>
          <ul className="flex gap-6 justify-between w-fit">
            <SPKLUBenefit
              icon={CHARGERICON}
              title="Konsumsi Energi SPKLU"
              value="+60K kWh"
              subtitle="Energi Terjual"
            />
            <SPKLUBenefit
              icon={PEOPLEICON}
              title="Jumlah SPKLU"
              value="+2000"
              subtitle="Di Indonesia"
            />
            <SPKLUBenefit
              icon={THUNDERICON}
              title="Jumlah Pengguna"
              value="+4000"
              subtitle="Pengguna Charger.IN"
            />
            <SPKLUBenefit
              icon={PHONEICON}
              title="Jumlah Transaksi SPKLU"
              value="+3600"
              subtitle="Transaksi Sukses"
            />
          </ul>
          <p className="font-bold text-base w-fit">
            Jadilah bagian dalam transformasi kendaraan listrik di Indonesia
            melalui partnership penyediaan Stasiun Pengisian Kendaraan Listrik
            Umum (SPKLU)
          </p>
          <MainButton classes="">Register</MainButton>
        </div>
        <div className="relative">
          <img src={SPKLUIMG} alt="" className="w-[40rem] relative z-10" />
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-[80%] h-[150%] bg-gradient-to-r from-[#066C9D] to-[#2FABB5] rounded-l-full"></div>
        </div>
      </section>
    </div>
  );
}
