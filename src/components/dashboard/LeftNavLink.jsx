import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function LeftNavLink({ children, className, href }) {
      const location = useLocation();
      const currentPath = location.pathname;
      const isSelected =
        currentPath === href || (currentPath === "/" && href === "/");
    return (
      <Link to={href}>
        <span className=" font-bold text-sm relative">
          {isSelected && (
            <motion.span layoutId="left-nav-indicator" className="bg-[#E7F6F9] w-full h-full absolute rounded-full"></motion.span>
          )}
          <span className="relative z-10 flex items-center gap-2 px-4 py-2 border rounded-full">
            {children}
          </span>
        </span>
      </Link>
    );
}
