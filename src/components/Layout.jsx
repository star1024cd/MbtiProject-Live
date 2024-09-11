import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children, user, setUser }) => {
  const navigate = useNavigate();

  //TODO : 로그인 하지 않은 사용자를 login으로 보내주기
  useEffect(() => {}, []);

  const handleLogout = () => {
    alert("로그아웃이 완료되었습니다. 메인화면으로 이동합니다!");
    localStorage.removeItem("myToken");
    setUser(null);

    navigate("/");
  };

  return (
    <div>
      <header>
        <nav>
          <div className="space-x-3  w-full flex justify-end p-4">
            {user ? (
              <>
                <button
                  className="layoutBtn"
                  onClick={() => navigate("/profile")}
                >
                  프로필
                </button>
                <button className="layoutBtn" onClick={() => navigate("/test")}>
                  테스트
                </button>
                <button
                  className="layoutBtn"
                  onClick={() => navigate("/resultMine")}
                >
                  내결과
                </button>
                <button
                  className="layoutBtn"
                  onClick={() => navigate("/results")}
                >
                  모든결과
                </button>
                <button className="layoutBtn" onClick={handleLogout}>
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <button className="layoutBtn" onClick={() => navigate("/")}>
                  홈
                </button>
                <button
                  className="layoutBtn"
                  onClick={() => navigate("/login")}
                >
                  로그인
                </button>
                <button
                  className="layoutBtn"
                  onClick={() => navigate("/signup")}
                >
                  회원가입
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
