import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    try {
      const loginData = await login(formData);
      //TODO localStorage.setItem("myToken", loginData.accessToken);
      setUser(loginData);
      alert("로그인에 성공했습니다. 축하해욥.");
      navigate("/");
    } catch (error) {
      console.error("로그인 에러", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          로그인
        </h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        {/* <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
