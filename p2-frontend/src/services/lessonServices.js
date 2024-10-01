import apiClient from "./services.js";

export default {
  getAllCourses() {
    return apiClient.get(`/course/courses`);
  },
  getCourse(id) {
    return apiClient.get(`/course/courses/${id}`);
  },
  createCourse(data) {
    return apiClient.post(`/course/courses`, data);
  },
  updateCourse(id, data) {
    return apiClient.put(`/course/courses/${id}`, data);
  },
  deleteCourse(id) {
    return apiClient.delete(`/course/courses/${id}`);
  },
  deleteAllCourses() {
    return apiClient.delete(`/course/courses`);
  },
};
