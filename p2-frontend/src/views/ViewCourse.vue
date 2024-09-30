<template>
    <div>
      <NavBar />
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

  var id;

  function urlParam(name) {
      var results = new RegExp("[\?&]" + name + "=([^&#]*)").exec(
        window.location.href
      );
      if (results == null) {
        return null;
      } else {
        return results[1] || 0;
      }
    }

  document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var response = JSON.parse(this.responseText);
            id = response.list.id;
            document.getElementById("name").value = response.list.name;
            document.getElementById("dept").value = response.list.dept;
            document.getElementById("number").value = response.list.number;
            document.getElementById("level").value = response.list.level;
            document.getElementById("hours").value = response.list.hours;
            document.getElementById("description").value = response.list.description;
          }
        };
        //unknown path
        xmlhttp.open("GET", "/todoapi/lists/" + urlParam("id"));
        xmlhttp.send();
      }
    };
  </script>
  
  <style scoped>
  @import '@/assets/styles.css';
  </style>  