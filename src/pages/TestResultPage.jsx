import React, { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import TestResultItem, { mbtiDescriptions } from "../components/TestResultItem";
import TestResultList from "../components/TestResultList";

const TestResult = ({ user }) => {
  const [results, setResults] = useState([]);

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

  const description =
    mbtiDescriptions[results.result] || "MBTI 유형 설명을 찾을 수 없습니다.";

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList
          results={results}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        {results.map((result) => {
          return <div key={result.id}>{result.description}</div>;
        })}
      </div>
      {/* <button
        onClick={() => {
          Navigator = "/test";
        }}
      >
        결과 페이지로 이동하기
      </button> */}
    </div>
  );
};

export default TestResult;
