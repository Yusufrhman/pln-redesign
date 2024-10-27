import { Carousel } from "flowbite-react";

export default function CaraouselBanner() {
  return (
    <div className="w-11/12 mx-auto my-8 aspect-[3.45] rounded-xl shadow-xl">
      <Carousel slideInterval={5000} pauseOnHover>
        <img src={"/banner/1.svg"} alt="..." cla />
        <img src={"/banner/2.svg"} alt="..." />
        <img src={"/banner/3.svg"} alt="..." />
        <img src={"/banner/4.svg"} alt="..." />
        <img src={"/banner/5.svg"} alt="..." />
      </Carousel>
    </div>
  );
}
