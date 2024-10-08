<template>
    <div class="fill-in-container">
      <form>
        <div class="fill-in">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Programming I" required />
          <span class="mandatory">*</span>
          <br><br>
          <label for="dept">Department:</label>
          <input type="text" id="dept" name="dept" placeholder="CMSC" />
          <br><br>
          <label for="number">Number:</label>
          <input type="text" id="number" name="number" placeholder="1234" />
          <br><br>
          <label for="level">Level:</label>
          <input type="text" id="level" name="level" placeholder="01" />
          <br><br>
          <label for="hours">Hours:</label>
          <input type="text" id="hours" name="hours" placeholder="3" />
          <label for="description">Description:</label>
          <input type="text" id="description" name="description" placeholder="Type here" />
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
  export default function getInfo(){
    const courseinfo = {
      name : document.getElementById("name").value,
      courseNumber : document.getElementById("number").value,
      level : document.getElementById("level").value,
      department : document.getElementById("dept").value,
      description : document.getElementById("description").value,
      hours : document.getElementById("hours").value
    }
    return courseinfo;
  }
  </script>
  
  <style scoped>
  @import '@/assets/styles.css';
  </style>  