import { LinkPreview } from "../../ui/link-preview";

export default function AnakPerusahaanCard({ perusahaanImg, url }) {
  return (
    <LinkPreview url={url} className="font-bold">
      <div className="w-[20rem] h-full aspect-square bg-white shadow-xl border rounded-3xl px-10 py-4 flex items-center justify-center">
        <img src={perusahaanImg} alt="" className="" />
      </div>
    </LinkPreview>
  );
}
