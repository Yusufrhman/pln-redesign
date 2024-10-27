import LOGO from "../../assets/shared/LOGOPLN.svg";

import APPSTOREIMG from "../../assets/footer/app-store.png";
import GOOGLEPLAYIMG from "../../assets/footer/google-play.png";

export default function Footer() {
  return (
    <footer className=" py-16 h-fit bg-gradient-to-r from-[#066C9D] via-[#2FABB5] to-[#B2D78C] w-[100vw] shadow-lg">
      <section className="w-4/5 mx-auto grid grid-cols-5 gap-16">
        <section className="flex flex-col py-10">
          <div>
            <img src={LOGO} alt="" className="w-[10rem]" />
          </div>
          <div className="my-4">
            <p className="font-bold text-white text-xl mb-2">
              PT PLN (PERSERO)
            </p>
            <p className="text-white text-basee">
              Jl. Trunojoyo Blok M-I No.135, Kebayoran Baru, Jakarta Selatan,
              DKI Jakarta 12160
            </p>
          </div>
        </section>
        <section className="flex justify-center items-start py-10">
          <div className="flex flex-col justify-center gap-4">
            <p className="font-bold text-white text-xl">Hubungi Kami</p>
            <ul className="text-white flex flex-col gap-2">
              <li>
                <p>PLN 123</p>
              </li>
              <li>
                <p>pln123@pln.co.id</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex justify-center items-start py-10">
          <div className="flex flex-col justify-center gap-4">
            <p className="font-bold text-white text-xl">Layanan Kami</p>
            <ul className="text-white flex flex-col gap-2">
              <li>
                <p>Pasang Baru</p>
              </li>
              <li>
                <p>Ubah Daya</p>
              </li>
              <li>
                <p>Sambungan Sementara</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex justify-center items-start py-10">
          <div className="flex flex-col justify-center gap-4">
            <p className="font-bold text-white text-xl">Informasi</p>
            <ul className="text-white flex flex-col gap-2">
              <li>
                <p>Promo</p>
              </li>
              <li>
                <p>Info Layanan</p>
              </li>
              <li>
                <p>Status Pemohonan</p>
              </li>
              <li>
                <p>Entri Kode Konfirmasi</p>
              </li>
              <li>
                <p>Gratis / Diskon Stimulus PSBB</p>
              </li>
              <li>
                <p>Info Tagihan</p>
              </li>
              <li>
                <p>Pembelian Token Listrik</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex justify-center items-start py-10">
          <div className="flex flex-col justify-center gap-4">
            <p className="font-bold text-white text-xl">Download PLN Mobile</p>
            <ul className="flex flex-col gap-5 w-[80%]">
              <li>
                <img src={GOOGLEPLAYIMG} alt="" />
              </li>
              <li>
                <img src={APPSTOREIMG} alt="" />
              </li>
            </ul>
          </div>
        </section>
      </section>
    </footer>
  );
}
