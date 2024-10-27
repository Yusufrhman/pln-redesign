import { useState } from "react";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import IMG from "../assets/login/image.png";

import { motion } from "framer-motion";



export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    
    
  return (
    <div className="h-[93dvh] flex items-center justify-center">
      <div className="h-fit w-fit bg-white rounded-2xl shadow-2xl grid grid-cols-2 px-10 py-10 items-center justify-around gap-24 overflow-clip relative">
        <section className="absolute top-4 rounded-full left-1/2 -translate-x-1/2  w-1/3 h-[3rem] z-20 bg-[#E7F6F9] shadow-xl flex items-center">
          <section
            className="relative w-[50%] h-full flex items-center justify-center hover:cursor-pointer"
            onClick={() => setIsLogin(false)}
          >
            {!isLogin && (
              <motion.span
                layoutId="login-signup-indicator"
                className="absolute bg-gradient-to-r from-[#066C9D] to-[#2FABB5] w-[80%] h-[80%] rounded-full"
              ></motion.span>
            )}
            <p
              className={`font-bold relative z-10 ${
                !isLogin ? "text-white" : "text-black"
              }`}
            >
              Sign Up
            </p>
          </section>
          <section
            className="relative w-[50%] h-full flex items-center justify-center hover:cursor-pointer"
            onClick={() => setIsLogin(true)}
          >
            {isLogin && (
              <motion.span
                layoutId="login-signup-indicator"
                className="absolute bg-gradient-to-r from-[#066C9D] to-[#2FABB5] w-[80%] h-[80%] rounded-full"
              ></motion.span>
            )}
            <p
              className={`font-bold relative z-10 ${
                isLogin ? "text-white" : "text-black"
              }`}
            >
              Log in
            </p>
          </section>
        </section>
        <SignUp />
        <Login />
        <motion.section
          animate={{ left: isLogin ? 0 : "50%" }}
          className={`absolute bg-white w-1/2 h-full z-10`}
        >
          <img
            src={IMG}
            alt=""
            className="object-cover object-left w-full h-full"
          />
        </motion.section>
      </div>
    </div>
  );
}
