import BRIGHTIMG from "../../assets/tentang-kami/anak-perusahaan/bright.png";
import HALEYORAIMG from "../../assets/tentang-kami/anak-perusahaan/haleyora.png";
import ICONIMG from "../../assets/tentang-kami/anak-perusahaan/icon+.png";
import INDONESIA_POWERIMG from "../../assets/tentang-kami/anak-perusahaan/indonesia-power.png";
import MAJAPAHITIMG from "../../assets/tentang-kami/anak-perusahaan/majapahit.png";
import PELAYARANIMG from "../../assets/tentang-kami/anak-perusahaan/pelayaran.png";
import PJBIMG from "../../assets/tentang-kami/anak-perusahaan/pjb.png";
import PLN_BATUBARAIMG from "../../assets/tentang-kami/anak-perusahaan/pln-batubara.png";
import PLN_ENJINIRINGIMG from "../../assets/tentang-kami/anak-perusahaan/pln-enjiniring.png";
import PLN_GEOTHERMALIMG from "../../assets/tentang-kami/anak-perusahaan/pln-geothermal.png";
import PLN_TARAKANIMG from "../../assets/tentang-kami/anak-perusahaan/pln-tarakan.png";
import AnakPerusahaanScroller from "./anak-perusahaan/AnakPerusahaanScroller";

const images = [
  {
    image: INDONESIA_POWERIMG,
    url: "https://www.plnindonesiapower.co.id/id/Default.aspx",
  },
  { image: PJBIMG, url: "https://ecc.co.id/company/site/view/1356" },
  { image: BRIGHTIMG, url: "https://www.plnbatam.com/" },
  { image: ICONIMG, url: "https://plniconplus.co.id/" },
  { image: PLN_TARAKANIMG, url: "https://plnnusadaya.co.id/" },
  { image: PLN_BATUBARAIMG, url: "https://plnbatubaraniaga.id/id" },
  {
    image: PLN_GEOTHERMALIMG,
    url: "https://plnindonesiapowerrenewables.co.id/",
  },
  { image: PLN_ENJINIRINGIMG, url: "https://plne.co.id/website/" },
  { image: MAJAPAHITIMG, url: "https://plne.co.id/website/" },
  { image: HALEYORAIMG, url: "https://www.haleyorapower.co.id/" },
  { image: PELAYARANIMG, url: "https://plnbag.co.id/" },
];

export default function AnakPerusahaan() {
  return (
    <div className="bg-[#E7F6F9] py-20 overflow-hidden">
      <div className="bg-opacity-40 flex flex-col gap-4">
        <h2 className="w-fit font-bold text-3xl text-left text-teal-950 rounded-full mb-8 relative mx-auto">
          Anak Perusahaan
          <span className="absolute bg-gradient-to-l from-[#066C9D] via-[#2FABB5] to-transparent w-full h-1 rounded-full -bottom-2 left-0"></span>
        </h2>
              <AnakPerusahaanScroller images={images}></AnakPerusahaanScroller>
              
      </div>
    </div>
  );
}
