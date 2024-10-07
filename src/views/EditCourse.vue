<!-- src/views/EditCourse.vue -->
<template>
  <div>
    <NavBar />
    <h1>EDIT COURSE</h1>
    <div v-if="course">
      <CourseForm :course="course" />
    </div>
    <div v-else>
      <p>Loading course details...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import courseServices from '../services/courseServices.js';
import NavBar from "@/components/NavBar.vue";
import CourseForm from "@/components/EditCourseForm.vue";

export default {
  components: {
    NavBar,
    CourseForm,
  },
  setup() {
    const route = useRoute();
    const course = ref(null);

    const getCourse = async (id) => {
      try {
        const response = await courseServices.get(id);
        course.value = response.data;
      } catch (error) {
        console.error('Failed to retrieve course data:', error.message);
      }
    };

    onMounted(() => {
      const courseId = route.params.id;
      if (courseId) {
        getCourse(courseId);
      } else {
        console.error('No course ID provided in route');
      }
    });

    return {
      course,
    };
  }
};
</script>

<style scoped>
@import '@/assets/styles.css';
</style>
