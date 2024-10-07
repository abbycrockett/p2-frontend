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
                        <button @click="editCourse(item)">Edit</button>
                        <button @click="viewCourse(item)">View</button>
                        <button @click="deleteCourse(item)">Delete</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

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
</style>
