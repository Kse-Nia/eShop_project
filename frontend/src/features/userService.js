import axios from "axios";
const API = "http://localhost:8000/api";

const login = async (user) => {
  const response = await axios.post(`${API}/login`, user);
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const userService = {
  login,
  logout,
};

export default userService;
