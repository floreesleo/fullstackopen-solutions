/* eslint-disable no-unused-vars */
import axios from "axios";

const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const add = (personObject) => {
  const request = axios.post(baseUrl, personObject);
  return request.then((response) => {
    // console.log("Created person: ", response.data);
    return response.data;
  });
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => {
    // console.log("Updated person: ", response.data);
    return response.data;
  });
};

const erase = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => {
    // console.log("Deleted person: ", response.data);
    return id;
  });
};

export default {
  getAll,
  add,
  update,
  erase,
};
