<template>
    <div>
      <NavBar />
      <br>
      <h1>VIEW COURSE</h1>
      <div class="fill-in-container">
        <form>
          <div class="fill-in">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="Programming I" readonly />
            <span class="mandatory">*</span>
            <br><br>
            <label for="dept">Department:</label>
            <input type="text" id="dept" name="dept" value="CMSC" readonly />
            <br><br>
            <label for="number">Number:</label>
            <input type="text" id="number" name="number" value="1234" readonly />
            <br><br>
            <label for="level">Level:</label>
            <input type="text" id="level" name="level" value="01" readonly />
            <br><br>
            <label for="hours">Hours:</label>
            <input type="text" id="hours" name="hours" value="3" readonly />
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" readonly />
          </div>
          <div class="buttons">
            <router-link to="/">
              <button type="button" class="cancel-button">CANCEL</button>
            </router-link>
            <router-link to="/edit-course">
              <button type="button" class="edit-button">EDIT</button>
            </router-link>
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
  </script>
  
  <style scoped>
  @import '@/assets/styles.css';
  </style>  