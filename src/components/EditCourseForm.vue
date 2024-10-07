<template>
    <div class="fill-in-container">
      <form @submit.prevent="submitForm">
        <div class="fill-in">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="formData.name"
            required
          />
          <span class="mandatory">*</span>
          <br /><br />
          <label for="dept">Department:</label>
          <input
            type="text"
            id="dept"
            name="dept"
            v-model="formData.department"
          />
          <br /><br />
          <label for="number">Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            v-model="formData.courseNumber"
          />
          <br /><br />
          <label for="level">Level:</label>
          <input
            type="text"
            id="level"
            name="level"
            v-model="formData.level"
          />
          <br /><br />
          <label for="hours">Hours:</label>
          <input
            type="text"
            id="hours"
            name="hours"
            v-model="formData.hours"
          />
          <br /><br />
          <label for="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            v-model="formData.description"
          />
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
  
  <script>
  export default {
    props: {
      course: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        formData: {
          name: this.course.name || '',
          department: this.course.department || '',
          number: this.course.number || '',
          level: this.course.level || '',
          hours: this.course.hours || '',
          description: this.course.description || '',
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic, such as saving the edit
        console.log('Form data submitted:', this.formData);
      },
    },
  };
  </script>
  
  <style scoped>
  @import '@/assets/styles.css';
  </style>
  