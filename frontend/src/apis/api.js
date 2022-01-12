import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchUsers = async (pageNumber) => {
  const res = await axios.get(BASE_URL + `/${pageNumber}`);
  const data = res.data;
  return data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(BASE_URL + `/${id}`);
  return res;
};

export const likeUser = async (userId, like) => {
  const res = await axios.patch(BASE_URL + `/${userId}/${like}`);
  return res;
};

export const editUser = async(userId, user) => {
  const res = await axios.patch(BASE_URL + `/${userId}`, user);
  const data = res.data;
  return data;
}

export const addUser = async(user) => {
  const res = await axios.post(BASE_URL, user);
  const data = res.data;
  console.log(data);
  return data;
}
