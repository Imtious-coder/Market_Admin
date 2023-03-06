import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <div
      className="py-5 d-flex align-items-center"
      style={{ background: "#ffd333", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Forgot Password</h3>
        <p className="text-center">
          Please enter your registered email to get OTP.
        </p>
        <form>
          <CustomInput type="text" label="Email Address" id="email" />
          <Link
            to="/reset-password"
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Send OTP
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
