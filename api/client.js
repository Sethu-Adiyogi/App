// external Libraries
import { create } from "apisauce";

const domain = "https://adpostman.com";
const apiKey = "893c8fe9-6e6d-47c5-8e9b-df26490c3dfd";

const apiRequestTimeOut = 40000; // 40 secs

//  Do not change anything after this line if you're not sure about what you're doing.
const api = create({
  baseURL: domain + "/wp-json/rtcl/v1",
  headers: {
    Accept: "application/json",
    "X-API-KEY": apiKey,
  },
  timeout: apiRequestTimeOut,
});
const setAuthToken = (token) =>
  api.setHeader("Authorization", "Bearer " + token);
const removeAuthToken = () => api.deleteHeader("Authorization");
const setMultipartHeader = () =>
  api.setHeader("Content-Type", "multipart/form-data");
const removeMultipartHeader = () => api.deleteHeader("Content-Type");

export default api;
export {
  setAuthToken,
  removeAuthToken,
  setMultipartHeader,
  removeMultipartHeader,
};
