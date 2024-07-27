import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../assets/banner_elvis.png";
import InputWithLabel from "../components/InputWithLabel";
import Logo from "../components/Logo";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.email === "john@gmail.com" && formData.password == "abc1")
      navigate(`/dashboard`);
    else {
      setError("Incorrect username and password")
    }
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] position absolute -z-10">
        <img
          src={Banner}
          alt="Background Image"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="w-[50%] h-[100vh] flex justify-center items-center">
        <div className="w-[33rem] mb-20 p-4 pb-16 bg-white rounded-md px-20">
          <div className="flex flex-col text-center justify-center mt-8 mb-4">
            <Logo className="text-2xl" />
            <h2 className="mt-14 text-2xl font-[500]">Log In</h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 mb-4"
          >
            <InputWithLabel
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputWithLabel
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <input
              type="submit"
              value="Log In"
              className="bg-primary-500 text-white py-3 w-full rounded-sm text-center hover:bg-primary-600 transition"
            />
          </form>
          <p className="text-center">
            Don't have an account?
            <span className="text-primary-500">
              <a href="/register"> Register Here</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
