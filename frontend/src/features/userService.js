import axios from "axios";
const API = "http://localhost:8000/api";

const login = async (userData) => {
  const response = await axios.post(API + "/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  } else {
    console.log("Error from the server: ", response.data);
  }
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
