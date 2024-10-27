import { motion } from "framer-motion";
export default function HistoryFilter({ status, isActive, onClick }) {
  return (
    <div className="relative hover:cursor-pointer" onClick={onClick}>
      <p
        className={` text-black   font-bold ${
          isActive
            ? " bg-clip-text text-transparent bg-gradient-to-r from-[#066C9D] to-[#2FABB5] "
            : ""
        }`}
      >
        {status}
      </p>
      {isActive && (
        <motion.span
          layoutId="status-filter-indicator"
          className="w-full h-1 bg-gradient-to-l  from-[#066C9D] to-[#2FABB5] rounded-full absolute"
        ></motion.span>
      )}
    </div>
  );
}
