import axios from "axios";
import Utils from "../config/utils.js";
import Router from "../router/index.js";

var baseurl = "";
if (import.meta.env.DEV) {
  baseurl = "http://localhost:3015/course-t5";
} else {
  baseurl = "/course-t5/";
}

const apiClient = axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    crossDomain: true,
  },
});

export default apiClient;