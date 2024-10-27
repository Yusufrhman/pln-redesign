const SPKLUBenefit = ({ icon, title, value, subtitle }) => {
  return (
    <li>
      <div className="w-fit h-fit mx-auto p-4 rounded-full bg-gradient-to-l from-[#066C9D] to-[#2FABB5] flex items-center justify-center">
        <img src={icon} alt="" className="w-10 h-10" />
      </div>
      <ul className="text-black text-center my-4">
        <li>{title}</li>
        <li>{value}</li>
        <li>{subtitle}</li>
      </ul>
    </li>
  );
};

export default SPKLUBenefit;
