/* src/views/CourseList.vue */
<template>
  <div>
    <NavBar />
    <br />
    <h1>Course List</h1>
    <br />
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
          <tr v-for="course in courses" :key="course.id">
            <td>{{ course.name }}</td>
            <td>{{ course.department }}</td>
            <td>{{ course.number }}</td>
            <td>{{ course.level }}</td>
            <td>{{ course.hours }}</td>
            <td>
              <div class="button-container">
                <button type="button" class="update-button">UPDATE</button>
                <button type="button" class="delete-button">DELETE</button>
                <router-link :to="`/view-course/${course.id}`">
                  <button type="button" class="view-button">VIEW</button>
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="loading" class="loader">Loading courses...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import courseServices from '@/services/courseServices.js'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      courses: [],
      loading: false,
      error: null
    }
  },
  mounted() {
    this.fetchCourses()
  },
  methods: {
    async fetchCourses() {
      this.loading = true
      try {
        const response = await courseServices.getAll()
        this.courses = response.data
        console.log('Courses data:', this.courses)
      } catch (err) {
        this.error = 'Failed to load courses. Please try again later.'
        console.error('Error fetching courses:', err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
@import '@/assets/styles.css';

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.loader {
  text-align: center;
  margin-top: 20px;
  font-size: 1.2em;
}

.error {
  color: red;
  text-align: center;
  margin-top: 20px;
  font-size: 1.2em;
}
</style>