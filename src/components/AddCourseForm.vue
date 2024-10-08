/* src/components/AddCourseForm.vue */
<template>
  <div class="fill-in-container">
    <form @submit.prevent="submitForm">
      <div class="fill-in">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="course.name" placeholder="Programming I" required />
        <span class="mandatory">*</span>
        <br><br>
        <label for="dept">Department:</label>
        <input type="text" id="dept" v-model="course.dept" placeholder="CMSC" />
        <br><br>
        <label for="number">Number:</label>
        <input type="text" id="number" v-model="course.number" placeholder="1234" />
        <br><br>
        <label for="level">Level:</label>
        <input type="text" id="level" v-model="course.level" placeholder="01" />
        <br><br>
        <label for="hours">Hours:</label>
        <input type="text" id="hours" v-model="course.hours" placeholder="3" />
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
export default {
  data() {
    return {
      course: {
        name: '',
        dept: '',
        number: '',
        level: '',
        hours: '',
        description: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Logic to handle form submission
      console.log("Form Submitted", this.course);
      // Reset the form after submission
      this.course = {
        name: '',
        dept: '',
        number: '',
        level: '',
        hours: '',
        description: ''
      };
    }
  }
};
</script>

<style scoped>
@import '@/assets/styles.css';
</style>