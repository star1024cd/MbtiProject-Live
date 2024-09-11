import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  await axios.post(API_URL, resultData);
};

export const deleteTestResult = async (id) => {
  axios.delete(`http://localhost:5000/testResults/${id}`);
};

export const updateTestResultVisibility = async (id, visibility) => {
  axios.patch(`http://localhost:5000/testResults/${id}`, { visibility });
};
