<template>
    <div class="fill-in-container">
      <form @submit.prevent="submitForm">
        <div class="fill-in">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" readonly />
          <span class="mandatory">*</span>
          <br /><br />
          <label for="dept">Department:</label>
          <input type="text" id="dept" v-model="formData.department" readonly/>
          <br /><br />
          <label for="number">Number:</label>
          <input type="text" id="number" v-model="formData.courseNumber" readonly/>
          <br /><br />
          <label for="level">Level:</label>
          <input type="text" id="level" v-model="formData.level" readonly/>
          <br /><br />
          <label for="hours">Hours:</label>
          <input type="text" id="hours" v-model="formData.hours" readonly />
          <br /><br />
          <label for="description">Description:</label>
          <input type="text" id="description" v-model="formData.description" readonly/>
          <br /><br />
        </div>
        <div class="buttons">
          <router-link to="/">
            <button type="button" class="cancel-button">Done Viewing</button>
          </router-link>
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
    department: "",
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
            department: course.department || "",
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
  </script>
  
  <style scoped>
  @import '@/assets/styles.css';
  </style>