import { useEffect } from "react";
import CaraouselBanner from "../components/landing-page/CaraouselBanner";
import { CarBattery, CloudLightning, Coins, Lightning, Plus, TipJar } from "@phosphor-icons/react";

export default function LayananPelangganPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CaraouselBanner />
      <section className="h-fit my-40">
        <div className="w-4/5 mx-auto h-fit bg-[#E7F6F9] drop-shadow-2xl rounded-2xl relative overflow-clip">
          <span className="absolute left-0 top-0 px-8 py-2 bg-gradient-to-r from-[#066C9D] via-[#2FABB5] to-[#B2D78C] rounded-br-2xl rounded-tr-lg shadow-lg ">
            <h3 className="text-white font-semibold text-2xl">Layanan Kami</h3>
          </span>
          <section className="flex items-center justify-center w-full h-full gap-8 px-10 py-5">
            <div className="w-full aspect-square flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl mt-16 mb-4 gap-8">
              <Coins size={96} />
              <p className="font-bold text-xl">PLN PRABAYAR</p>
            </div>
            <div className="w-full aspect-square flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl mt-16 mb-4 gap-8">
              <TipJar size={96} />
              <p className="font-bold text-xl">PLN PASCABAYAR</p>
            </div>{" "}
            <div className="w-full aspect-square flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl mt-16 mb-4 gap-8">
              <Lightning size={96} />
              <p className="font-bold text-xl">PASANG BARU</p>
            </div>{" "}
            <div className="w-full aspect-square flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl mt-16 mb-4 gap-8">
              <CloudLightning size={96} />
              <p className="font-bold text-xl">TAMBAH DAYA</p>
            </div>
            <div className="w-full aspect-square flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl mt-16 mb-4 gap-8">
              <CarBattery size={96} />
              <p className="font-bold text-xl text-center">SAMBUNGAN SEMENTARA</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
