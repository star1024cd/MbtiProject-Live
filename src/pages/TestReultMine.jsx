import React, { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import { mbtiDescriptions } from "../components/TestResultItem";
import TestResultList from "../components/TestResultList";
import { useNavigate } from "react-router-dom";

const TestResultMine = ({ user }) => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const fetchResults = async () => {
    try {
      const data = await getTestResults();

      setResults(data);
    } catch (error) {
      console.error("테스트결과에러", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    alert("삭제");
    fetchResults();
  };

  const filteredResult = results.filter(
    (result) => result.userId === user.userId
  );

  const description =
    mbtiDescriptions[results.result] || "MBTI 유형 설명을 찾을 수 없습니다.";

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          나의 테스트 결과
        </h1>
        <TestResultList
          results={filteredResult}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {filteredResult.map((result) => {
          return <div key={result.id}>{result.description}</div>;
        })}
      </div>
      {/* <button
        onClick={() => {
          navigate("/results");
        }}
      >
        모두의 결과 페이지로 이동
      </button> */}
    </div>
  );
};

export default TestResultMine;
