import axios from "axios";
const API = "http://localhost:8000/api";

const login = async (userData) => {
  axios
    .post("http://localhost:8000/api/login", userData)
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        console.log("Error from the server: ", response.data);
      }
      return response.data;
    })
    .catch((error) => {
      console.error("Error server: ", error);
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const userService = {
  login,
  logout,
};

export default userService;
