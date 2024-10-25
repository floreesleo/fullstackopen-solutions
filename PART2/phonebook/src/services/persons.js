import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const add = (personObject) => {
  const request = axios.post(baseUrl, personObject);
  return request.then((response) => {
    console.log("Created person: ", response.data);
    return response.data;
  });
};

const erase = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => {
    console.log("Deleted person: ", response.data);
    return id;
  });
};

export default {
  getAll,
  add,
  erase,
};
