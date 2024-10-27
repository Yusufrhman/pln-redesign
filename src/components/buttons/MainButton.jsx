export default function MainButton({ className, children, borderClassName }) {
  return (
    <div className={`w-fit h-fit rounded-full p-[0.175rem] bg-gradient-to-l  from-[#066C9D] to-[#2FABB5] relative group ${borderClassName}`}>
      <button className={`font-bold text-white px-4 py-1 rounded-full  bg-gradient-to-r from-[#066C9D] to-[#2FABB5] w-fit relative z-10 ${className}`}>
        {children}
      </button>
      <div className="absolute top-0 right-0 w-full h-full rounded-full bg-[#2FABB5] invisible group-hover:blur-sm  group-hover:visible  transition"></div>
    </div>
  );
}
