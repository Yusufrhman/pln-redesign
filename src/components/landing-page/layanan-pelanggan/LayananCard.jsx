export default function LayananCard({ icon, children }) {
  return (
    <div className="h-full  p-2 bg-gradient-to-r from-[#066C9D] via-[#2FABB5] to-[#B2D78C] rounded-2xl  shadow-2xl hover:scale-105 transition-all hover:cursor-pointer">
      <div className="h-full  bg-white flex flex-col items-center gap-4 justify-center text-center px-5 py-8 rounded-xl ">
        <img src={icon} alt="" className="h-24" />
        {children}
      </div>
    </div>
  );
}
