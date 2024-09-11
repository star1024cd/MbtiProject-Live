import axios from "axios";

const API_URL = "https://mbti-project-live-new.vercel.app/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  await axios.post(API_URL, resultData);
};

export const deleteTestResult = async (id) => {
  axios.delete(`https://mbti-project-live-new.vercel.app/testResults/${id}`);
};

export const updateTestResultVisibility = async (id, visibility) => {
  axios.patch(`https://mbti-project-live-new.vercel.app/testResults/${id}`, { visibility });
};
