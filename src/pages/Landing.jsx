
import CaraouselBanner from "../components/landing-page/CaraouselBanner";
import LayananPelanggan from "../components/landing-page/LayananPelanggan";
import Berita from "../components/landing-page/Berita";
import SPKLU from "../components/landing-page/SPKLU";
import { useEffect } from "react";

export default function LandingPage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <CaraouselBanner />
      <LayananPelanggan></LayananPelanggan>
      <Berita />
      <SPKLU />
    </>
  );
}
