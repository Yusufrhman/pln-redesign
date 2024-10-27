import { Carousel } from "flowbite-react";
import banner1 from "../../assets/banner/1.svg"
import banner2 from "../../assets/banner/2.svg";
import banner3 from "../../assets/banner/3.svg";
import banner4 from "../../assets/banner/4.svg";
import banner5 from "../../assets/banner/5.svg";


export default function CaraouselBanner() {
  return (
    <div className="w-11/12 mx-auto my-8 aspect-[3.45] rounded-xl shadow-xl">
      <Carousel slideInterval={5000} pauseOnHover>
        <img src={banner1} alt="..." cla />
        <img src={banner2} alt="..." />
        <img src={banner3} alt="..." />
        <img src={banner4} alt="..." />
        <img src={banner5} alt="..." />
      </Carousel>
    </div>
  );
}
