import React, { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const fetchProfile = async () => {
    try {
      const data = await getUserProfile(user.accessToken);
      setNickname(data.nickname);
      setUser((prevUser) => ({
        ...prevUser,
        nickname: data.nickname,
      }));
    } catch (error) {
      console.error("프로필 수정 패치 실패", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  const handleSubmit = async (formData) => {
    try {
      await updateProfile(formData, user.accessToken);

      alert("프로필 업데이트 완료.");
    } catch (error) {
      console.error("프로필 업데이트 실패", error);
      alert("프로필 업데이트에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          프로필 수정
        </h1>
        <p className="text-3 font-bold text-primary-color mb-6 text-center">
          현재 닉네임: {nickname}
        </p>
        <label className="text-3 font-bold text-primary-color mb-6 text-center">
          변경할 닉네임 :{" "}
        </label>
        <AuthForm
          className="text-3 font-bold text-primary-color mb-6 text-center"
          mode="profile"
          onSubmit={handleSubmit}
        >
          <div>
            <input onChange={handleNicknameChange} />
          </div>
        </AuthForm>
      </div>
    </div>
  );
};

export default Profile;
