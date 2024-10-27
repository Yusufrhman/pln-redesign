import { useState } from "react";
import FormInput from "../form/FormInput";
import FormSection from "../form/FormSection";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredData = Object.fromEntries(formData.entries());
    if (enteredData.email === "aa@aa.com") {
      setErrorMessage({
        email: "Akun belum terdaftar",
        password: errorMessage.password,
      });
    } else if (enteredData.email.length < 1) {
      setErrorMessage({
        email: "Email Wajib diisi",
        password: errorMessage.password,
        confirm: errorMessage.confirm,
      });
    } else if (enteredData.password.length < 6) {
      setErrorMessage({
        email: errorMessage.email,
        password: "Password minimal 6 karakter",
      });
    } else {
      setErrorMessage({ email: "", password: "" });
      navigate("/dashboard/history");
    }
  }
  return (
    <FormSection title="Log in">
      <form className="space-y-4 md:space-y-6" onSubmit={submit}>
        <FormInput
          id="email"
          label="Your email"
          type="email"
          placeholder="name@company.com"
          isError={errorMessage.email !== ""}
          errorMessage={errorMessage.email}
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          isError={errorMessage.password !== ""}
          errorMessage={errorMessage.password}
        />
        <div
          className={`w-full h-fit rounded-full p-[0.175rem] bg-gradient-to-l  from-[#066C9D] to-[#2FABB5] relative group`}
        >
          <button
            type="submit"
            className={`font-bold text-white px-4 py-1 rounded-full  bg-gradient-to-r from-[#066C9D] to-[#2FABB5] w-full relative z-10 `}
          >
            Log in
          </button>
          <div className="absolute top-0 right-0 w-full h-full rounded-full bg-[#2FABB5] invisible group-hover:blur-sm  group-hover:visible  transition"></div>
        </div>
      </form>
    </FormSection>
  );
}
