import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchUsers = async (pageNumber) => {
  try {
    const res = await axios.get(BASE_URL + `/${pageNumber}`);
    const data = res.data;
    return data;
  } catch(err) {
    console.log("Error: ", err);
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + `/${id}`);
    return res;
  } catch(err) {
    console.log("Error: ", err);
  }
};

export const likeUser = async (userId, like) => {
  try {
    const res = await axios.patch(BASE_URL + `/${userId}/${like}`);
    return res;
  } catch(err) {
    console.log("Error: ", err);
  }
};

export const editUser = async(userId, user) => {
  try {
    const res = await axios.patch(BASE_URL + `/${userId}`, user);
    const data = res.data;
    return data;
  } catch(err) {
    console.log("Error: ", err);
  }
}

export const addUser = async(user) => {
  try {
    const res = await axios.post(BASE_URL, user);
    const data = res.data;
    return data;
  } catch(err) {
    console.log("Error: ", err)
  }
}
