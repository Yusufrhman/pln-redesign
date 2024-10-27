const NewsCard = ({ imageSrc, topLabel, title, buttonText, onButtonClick }) => {
  return (
    <article className="overflow-clip rounded-xl relative h-full w-full group shadow-lg">
      <img
        src={imageSrc}
        alt="..."
        className="group-hover:scale-110 transition w-full h-full bg-white"
      />
      <span className="absolute left-0 top-0 px-5 py-2 bg-gradient-to-r from-[#066C9D] via-[#2FABB5] to-[#B2D78C] rounded-br-2xl rounded-tr-lg shadow-lg">
        <h3 className="text-white font-semibold">{topLabel}</h3>
      </span>
      <span className="absolute w-full bottom-0 px-5 py-2 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <p className="text-black font-bold">{title}</p>
        <button
          className="text-black tracking-widest text-sm"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </span>
    </article>
  );
};

export default NewsCard;
