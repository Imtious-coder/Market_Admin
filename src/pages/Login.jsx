import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <div
      className="py-5 d-flex align-items-center"
      style={{ background: "#ffd333", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <form>
          <CustomInput type="text" label="Email Address" id="email" />
          <CustomInput type="text" label="Password" id="pass" />
          <div className="text-end mb-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <Link
            to="/admin"
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
