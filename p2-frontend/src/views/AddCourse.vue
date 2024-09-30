<template>
    <div>
      <NavBar />
      <br>
      <h1>ADD COURSE</h1>
      <CourseForm />
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import CourseForm from "@/components/CourseForm.vue";
  
  export default {
    components: {
      NavBar,
      CourseForm,
    }
  };
  </script>
  
  <style scoped>
  @import '@/assets/styles.css';
  </style>  