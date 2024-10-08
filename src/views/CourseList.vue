<template>
  <div>
      <NavBar />
      <br>
      <h1>Course List</h1>
      <br>
      <div class="table-container">
          <table class="course-table">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Number</th>
                      <th>Level</th>
                      <th>Hours</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(item, index) in courses" :key="item.id">
                      <td>{{ item.name }}</td>
                      <td>{{ item.department }}</td>
                      <td>{{ item.courseNumber }}</td>
                      <td>{{ item.level }}</td>
                      <td>{{ item.hours }}</td>
                      <td>
                          <div class="button-container">
                              <button class="action-button" @click="editCourse(item)">Edit</button>
                              <button class="action-button" @click="viewCourse(item)">View</button>
                              <button class="action-button" @click="deleteCourse(item)">Delete</button>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script setup>
import courseServices from "../services/courseServices.js";
import Utils from "../config/utils.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
const user = Utils.getStore("user");
const message = ref("Search, Edit or Delete Tutorials");

const editCourse = (course) => {
  router.push({ name: "edit", params: { id: course.id } });
};

const viewCourse = (course) => {
  router.push({ name: "view", params: { id: course.id } });
};

const deleteCourse = (course) => {
  courseServices.delete(course.id)
    .then(() => {
      retrieveCourses();
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const retrieveCourses = () => {
  courseServices.getAll()
    .then((response) => {
      courses.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveCourses();

</script>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
      NavBar,
  },
};
</script>

<style scoped>
@import '@/assets/styles.css';

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 4px; /* Add some space between buttons */
}

.action-button {
  background-color: #118ACB;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #0e70a0;
}
</style>