import React, { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import TestResultItem from "../components/TestResultItem";

const TestResult = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const resultData = async () => {
      try {
        const data = await getTestResults();
        console.log(data);
        setResults(data);
      } catch (error) {
        console.error("테스트결과에러", error);
      }
    };
    resultData();
  }, []);

  TestResultItem();

  return (
    <div>
      <h1>테스트 결과 페이지</h1>
      <div>
        {results.map((result) => {
          return <div key={result.id}>테스트 결과 : {result.result}</div>;
          console.log("뀨", results);
        })}
      </div>
    </div>
  );
};

export default TestResult;
