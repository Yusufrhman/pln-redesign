import { Eye, EyeSlash } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";
const FormInput = ({
  id,
  label,
  type = "text",
  placeholder,
  isError,
  errorMessage,
}) => {
  const isPassword = type === "password";
  const [isHidden, setIsHidden] = useState(true);
  return (
    <motion.div
      animate={isError ? { y: [0, -5, 5, -5, 5, 0] } : { y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
          isError && "text-red-700"
        }`}
      >
        {label}
      </label>
      <div className="w-full h-full relative">
        {isPassword &&
          (!isHidden ? (
            <EyeSlash
              size={24}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setIsHidden(true)}
            />
          ) : (
            <Eye
              size={24}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setIsHidden(false)}
            />
          ))}
        <input
          type={!isPassword ? type : isHidden ? type : "text"}
          name={id}
          id={id}
          placeholder={placeholder}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            isError && "text-red-700 border-red-700"
          }`}
        />
      </div>
      {isError && <p className="text-xs text-red-700 p-1">{errorMessage}</p>}
    </motion.div>
  );
};

export default FormInput;
