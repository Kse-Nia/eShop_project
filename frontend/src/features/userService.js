const API = "http://localhost:3000/api/v1/users";

const register = async (user) => {
  const response = await axios.post(`${API}/register`, user);
  return response.data;
};

const login = async (user) => {
  const response = await axios.post(`${API}/login`, user);
  return response.data;
};
