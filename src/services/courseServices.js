import apiClient from "./services.js";

export default {
  getAll() {
    return apiClient.get("/courses");
  },
  get(id) {
    return apiClient.get(`/courses/${id}`);
  },
  create(course) {
    return apiClient.post("/courses", course);
  },
  update(id, course) {
    return apiClient.put(`/courses/${id}`, course);
  },
  delete(id) {
    return apiClient.delete(`/courses/${id}`);
  },
  deleteAll() {
    return apiClient.delete(`/courses`);
  },
};

/*
export default {
  getCourses() {
    return apiClient.get("/courses");
  },
  getCourse(id) {
    return apiClient.get("/courses/" + id);
  },
  addCourse(course) {
    return apiClient.post("/courses", course);
  },
  updateCourse(courseId, course) {
    return apiClient.put("/courses/" + courseId, course);
  },
  deleteCourse(id) {
    return apiClient.delete("/courses/" + id);
  },
};
*/