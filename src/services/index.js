import axios from "axios";

const url = "http://localhost:5000/users";

export const getList = () =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const postList = (data) =>
  axios
    .post(url, data)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const deleteList = (id) => axios.delete(url + "/" + id);

export const patchList = (id, data) => axios.patch(url + "/" + id, data);
