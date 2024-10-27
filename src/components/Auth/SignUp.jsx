import { useState } from "react";
import FormInput from "../form/FormInput";
import FormSection from "../form/FormSection";
import TermsCheckbox from "../form/TermsCheckBox";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredData = Object.fromEntries(formData.entries());
    if (enteredData.email === "bb@bb.com") {
      setErrorMessage({
        email: "Akun sudah terdaftar",
        password: errorMessage.password,
        confirm: errorMessage.confirm,
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
        confirm: errorMessage.confirm,
      });
    } else if (enteredData["confirm-password"].length < 6) {
      setErrorMessage({
        email: errorMessage.email,
        password: errorMessage.password,
        confirm: "Password minimal 6 karakter",
      });
    } else if (enteredData.password !== enteredData["confirm-password"]) {
      setErrorMessage({
        email: errorMessage.email,
        password: "Password tidak sama",
        confirm: "Password tidak sama",
      });
    } else {
      setErrorMessage({ email: "", password: "" });
      navigate("/dashboard/history");
    }
  }
  return (
    <FormSection title="Sign Up">
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
        <FormInput
          id="confirm-password"
          label="Confirm password"
          type="password"
          placeholder="••••••••"
          isError={errorMessage.confirm !== ""}
          errorMessage={errorMessage.confirm}
        />
        <TermsCheckbox />
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
