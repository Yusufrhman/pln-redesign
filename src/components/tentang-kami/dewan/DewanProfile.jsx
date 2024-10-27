export default function DewanProfile({ imageProfile, name, description }) {
  return (
    <section className="text-center flex flex-col items-center justify-center gap-2 w-60">
      <section className="rounded-full w-60 h-60 bg-white shadow-lg aspect-square px-12 overflow-clip relative border">
        <img src={imageProfile} alt="" className="w-60 left-0 absolute" />
      </section>
      <div>
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="font-light text-base"> {description}</p>
      </div>
    </section>
  );
}
