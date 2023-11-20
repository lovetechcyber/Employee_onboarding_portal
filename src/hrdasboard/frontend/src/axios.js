import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const getConfig = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
};

export const postApi = (route, payload, token) => {
  const response = axios.post(`${baseUrl}/${route}`, payload, getConfig(token));
  return response;
};

export const putApi = (route, payload, token) => {
  const response = axios.put(`${baseUrl}/${route}`, payload, getConfig(token));
  return response;
};

export const deleteApi = (route, token) => {
  const response = axios.delete(`${baseUrl}/${route}`, getConfig(token));
  return response;
};

export const getApi = (route, token) => {
  const response = axios.get(`${baseUrl}/${route}`, getConfig(token));
  return response;
};
