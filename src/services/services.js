// src/services/services.js
import axios from "axios";
import Utils from "../config/utils.js";
import Router from "../router/index.js";

var baseurl = "";
if (import.meta.env.DEV) {
  baseurl = "http://localhost:3015/course-t5/";
} else {
  baseurl = "/course-t5/";
}

const apiClient = axios.create({
  
  baseURL: baseURL,
  headers: headers,

  transformRequest: (data, headers) => {
    let user = Utils.getStore("user");
    if (user != null) {
      let token = user.token;
      let authHeader = "";
      if (token != null && token != "") authHeader = "Bearer " + token;
      headers["Authorization"] = authHeader;
    }
    return JSON.stringify(data);
  },
  transformResponse: function (data) {
    data = JSON.parse(data);
    if (data.message !== undefined && data.message.includes("Unauthorized")) {
      AuthServices.logoutUser(Utils.getStore("user"))
        .then((response) => {
          console.log(response);
          Utils.removeItem("user");
          Router.push({ name: "login" });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
    return data;
  },
});

export default apiClient;