import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../assets/banner_elvis.png";
import InputWithLabel from "../components/InputWithLabel";
import Logo from "../components/Logo";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/dashboard/`);
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
            <h2 className="mt-14 text-2xl font-[500]">Register</h2>
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
            <div className="flex flex-row justify-between">
              <div className="w-[48%]">
                <InputWithLabel
                  label="First Name"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-[48%]">
                <InputWithLabel
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <InputWithLabel
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Register"
              className="bg-primary-500 text-white py-3 w-full rounded-sm text-center hover:bg-primary-600 transition"
            />
          </form>
          <p className="text-center">
            Already have an account?
            <span className="text-primary-500">
              <a href="/login"> Log In</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
