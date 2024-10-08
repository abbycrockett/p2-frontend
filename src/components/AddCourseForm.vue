<template>
  <div class="fill-in-container">
    <form @submit.prevent="submitForm">
      <div class="fill-in">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="course.name" placeholder="Programming I" required />
        <span class="mandatory">*</span>
        <br><br>
        <label for="dept">Department:</label>
        <input type="text" id="dept" v-model="course.department" placeholder="CMSC" required />
        <br><br>
        <label for="number">Number:</label>
        <input type="text" id="number" v-model="course.courseNumber" placeholder="1234" required />
        <br><br>
        <label for="level">Level:</label>
        <input type="text" id="level" v-model="course.level" placeholder="01" required />
        <br><br>
        <label for="hours">Hours:</label>
        <input type="text" id="hours" v-model="course.hours" placeholder="3" required />
        <br><br>
        <label for="description">Description:</label>
        <input type="text" id="description" v-model="course.description" placeholder="Type here" />
        <br><br>
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

<script>
import courseServices from '@/services/courseServices';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const course = ref({
      name: '',
      department: '',
      courseNumber: '',
      level: '',
      hours: '',
      description: ''
    });

    const submitForm = () => {
      if (
        !course.value.name ||
        !course.value.department ||
        !course.value.courseNumber ||
        !course.value.level ||
        !course.value.hours
      ) {
        alert("Please input all required fields");
        return;
      }

      console.log("Submitting course:", course.value); // Debugging line to check data

      courseServices.create(course.value)
        .then(() => {
          console.log("Course created successfully");
          router.push({ name: "CourseList" });
        })
        .catch((error) => {
          console.error("Error creating course:", error);
          alert("Failed to create course. Please try again.");
        });
    };

    return {
      course,
      submitForm
    }
  }
};
</script>

<style scoped>
@import '@/assets/styles.css';
</style>
