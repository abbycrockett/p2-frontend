<template>
  <div class="fill-in-container">
    <form @submit.prevent="submitForm">
      <div class="fill-in">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
        <span class="mandatory">*</span>
        <br /><br />
        <label for="dept">Department:</label>
        <input type="text" id="dept" v-model="formData.dept" />
        <br /><br />
        <label for="number">Number:</label>
        <input type="text" id="number" v-model="formData.courseNumber" />
        <br /><br />
        <label for="level">Level:</label>
        <input type="text" id="level" v-model="formData.level" />
        <br /><br />
        <label for="hours">Hours:</label>
        <input type="text" id="hours" v-model="formData.hours" />
        <br /><br />
        <label for="description">Description:</label>
        <input type="text" id="description" v-model="formData.description" />
        <br /><br />
      </div>
      <div class="buttons">
        <router-link to="/">
          <button type="button" class="cancel-button">CANCEL</button>
        </router-link>
        <button type="submit" class="save-button">SAVE</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import courseServices from '@/services/courseServices';

const router = useRouter();
const route = useRoute();

const formData = ref({
  dept: "",
  courseNumber: "",
  level: "",
  hours: "",
  name: "",
  description: "",
});

onMounted(async () => {
  const courseId = parseInt(route.params.id, 10);
  if (!isNaN(courseId)) {
    try {
      const response = await courseServices.get(courseId);
      const course = response.data;
      if (course) {
        formData.value = {
          dept: course.dept || "",
          courseNumber: course.courseNumber || "",
          level: course.level || "",
          hours: course.hours || "",
          name: course.name || "",
          description: course.description || "",
        };
      }
    } catch (error) {
      console.error("Error fetching course:", error);
      alert("Error fetching course data. Please try again later.");
    }
  }
});

const submitForm = () => {
  const courseId = parseInt(route.params.id, 10);

  if (
    !formData.value.dept ||
    !formData.value.courseNumber ||
    !formData.value.level ||
    !formData.value.hours ||
    !formData.value.name
  ) {
    alert("Please input all required fields");
    return;
  }

  if (!isNaN(courseId)) {
    courseServices
      .update(courseId, formData.value)
      .then(() => {
        console.log("Course updated successfully");
        router.push({ name: "CourseList" });
      })
      .catch((error) => {
        console.error("Error updating course:", error);
        alert("Failed to update course. Please try again.");
      });
  }
};
</script>

<style scoped>
@import '@/assets/styles.css';
</style>
