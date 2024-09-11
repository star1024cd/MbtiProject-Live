import { useState } from "react";
const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "id") {
      setFormData((prev) => ({
        ...prev,
        id: e.target.value,
      }));
    } else if (e.target.name === "password") {
      setFormData((prev) => ({
        ...prev,
        password: e.target.value,
      }));
    } else if (e.target.name === "nickname") {
      setFormData((prev) => ({
        ...prev,
        nickname: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-3">
        {(mode === "login" || mode === "signup") && (
          <>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="아이디"
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </>
        )}

        {(mode === "signup" || mode === "profile") && (
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            required
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
        )}
        <button type="submit" className="submitBtnCustom">
          {mode === "login"
            ? "로그인"
            : mode === "signup"
            ? "회원가입"
            : mode === "profile"
            ? "닉네임수정"
            : null}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
