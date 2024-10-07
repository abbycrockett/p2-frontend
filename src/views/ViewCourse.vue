<script setup>
import courseServices from "../services/courseServices.js";
import Utils from "../config/utils.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
const course = ref({});
const user = Utils.getStore("user");
const message = ref("Search, Edit or Delete Tutorials");


const props = defineProps({
  id: {
    required: true,
  },
});

const editCourse = (course) => {
  router.push({ name: "EditCourse", params: { id: course.id } });
};


const retrieveCourses = () => {

    courseServices.get(props.id)
    .then((response) => {
      course.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    })
};

retrieveCourses();

function setText()
  {
    document.getElementById("name").value = course.name;
    document.getElementById("dept").value = course.department;
  }

</script>
<template>
    <div>
      <NavBar />
      <br>
      <h1>VIEW COURSE</h1>
      <div class="fill-in-container">
        <form>
          <div class="fill-in">
            <label for="name">Name: </label>
            <!-- <input type="text" id="name" name="name" value="swag" readonly /> -->
             <p>
              {{ course.name }}
             </p>
            <br>
            <label for="dept">Department:</label>
            <!-- <input type="text" id="dept" name="dept" value="CMSC" readonly /> -->
            <p>
              {{ course.department }}
             </p>
            <br>
            <label for="number">Number:</label>
            <!-- <input type="text" id="number" name="number" value="1234" readonly /> -->
             <p>
              {{ course.courseNumber }}
             </p>
            <br>
            <label for="level">Level: </label>
            <!-- <input type="text" id="level" name="level" value="01" readonly /> -->
             <p>
              {{ course.level }}
             </p>
            <br>
            <label for="hours">Hours: </label>
            <!-- <input type="text" id="hours" name="hours" value="3" readonly /> -->
            <p>
              {{ course.hours }}
             </p>
            <label for="description">Description: </label>
            <!-- <input type="text" id="description" name="description" readonly /> -->
            <p>
              {{ course.description }}
             </p>
             <br>
          </div>
          <div class="buttons">
            <router-link to="/">
              <button class="cancel-button">CANCEL</button>
            </router-link>
            <button type="button" class="edit-button" @click="editCourse(courses)">EDIT</button>
            <!-- <button type="button" class="edit-button" @click="setText">load</button> -->
          </div>
        </form>
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
  
  
  //setText();
  </script>
  
  <style scoped>
  @import '@/assets/styles.css';
  </style>  