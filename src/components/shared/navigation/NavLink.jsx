import { motion } from "framer-motion";
import PETIR from "../../../assets/shared/petir.svg";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({ href, children }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSelected =
    currentPath === href || (currentPath === "/" && href === "/");



  return (
    <div className="relative">
      {isSelected && (
        <motion.img
          className="absolute -left-5 w-5"
          layoutId="nav-indicator"
          style={{ originY: "0px" }}
          src={PETIR}
        ></motion.img>
      )}
      <Link to={href}>{children}</Link>
    </div>
  );
}
