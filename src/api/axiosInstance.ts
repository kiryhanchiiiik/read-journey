import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});
