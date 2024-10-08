import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert("회원가입에 성공했습니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          회원가입
        </h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
      </div>
    </div>
  );
};

export default Signup;
