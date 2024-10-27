export default function StrukturCard({ jabatan, foto, nama, className }) {
  return (
    <section
      className={`aspect-[3/4] bg-white w-11/12 mx-auto border shadow-xl rounded-xl relative overflow-clip group ${className} `}
    >
      <div className="absolute w-full h-fit py-1 top-0 bg-gradient-to-r from-[#066C9D] to-[#2FABB5] flex items-center justify-center">
        <h3 className="font-bold text-white drop-shadow-xl text-xs lg:text-sm text-center">
          {jabatan}
        </h3>
      </div>
      <div className="mt-20 absolute bottom-0">
        <img
          src={foto}
          alt=""
          className="group-hover:scale-125 transition duration-300"
        />
      </div>
      <div className="absolute w-full h-fit px-3 py-2 bottom-0 bg-black bg-opacity-60 flex items-center justify-center group-hover:transform group-hover:translate-y-full transition duration-500">
        <p className="font-bold text-white drop-shadow-xl text-xs lg:text-sm text-center">
          {nama}
        </p>
      </div>
    </section>
  );
}
