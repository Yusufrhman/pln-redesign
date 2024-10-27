export default function SejarahTooltip({ content, imageSrc, number }) {
  return (
    <div className="group">
      <article
        className=" invisible opacity-0 translate-y-8 
      group-hover:visible group-hover:translate-y-4 transition-all duration-300 ease-in-out 
      flex items-center justify-between text-justify rounded-2xl bg-white h-[12rem] w-fit
      absolute top-[30%] -left-0 group-hover:delay-0 group-hover:duration-300 group-hover:ease-in-out 
      group-focus-within:translate-y-4 group-hover:transition-all group-hover:opacity-100 overflow-hidden shadow-lg"
      >
        <p className="text-black font-thin text-sm tracking-wider px-8">
          {content}
        </p>

        <img src={imageSrc} alt="" className="h-full w-fit" />
      </article>
      <div className="w-10 h-10 rounded-full bg-[#ffc109] flex items-center justify-center  relative">
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-[#2FABB5]">
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
}
