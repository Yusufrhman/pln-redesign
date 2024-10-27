import AnakPerusahaanCard from "./AnakPerusahaanCard";

export default function AnakPerusahaanScroller({ images }) {
  return (
    <section className="flex my-8 group">
      <section className="flex h-[12.5rem] w-fit gap-8 ml-8 animate-scroll group-hover:[animation-play-state:paused]">
        {images.map((image, index) => (
          <AnakPerusahaanCard key={index} perusahaanImg={image.image} url={image.url} />
        ))}
      </section>
      <section className="flex h-[12.5rem] w-fit gap-8 ml-8 animate-scroll group-hover:[animation-play-state:paused]">
        {images.map((image, index) => (
          <AnakPerusahaanCard key={index} perusahaanImg={image.image} url={image.url} />
        ))}
      </section>
    </section>
  );
}
