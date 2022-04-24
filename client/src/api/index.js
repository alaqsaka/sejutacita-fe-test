import axios from "axios";

// Base URL: https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories
const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchCategory = () => API.get(`/`);
export const fetchCategoryById = (id, page) =>
  API.get(`/category/${id}&page=${page}`);
