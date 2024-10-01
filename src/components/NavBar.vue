<template>
    <div class="nav-bar">
      <div class="logo">
        <img src="@/assets/courseCraft.png" alt="Course Craft logo" />
      </div>
      <div class="nav-links">
        <router-link to="/">LIST</router-link>
        <router-link to="/add-course">ADD COURSE</router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .nav-bar {
    background-color: #7B1329;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    display: flex;
    height: 88px;
  }
  
  .nav-links a {
    color: white;
    font-size: 24px;
    text-decoration: none;
    margin: 0 10px;
    line-height: 29.05px;
  }
  
  .nav-bar .logo img {
    height: 105px;
  }
  </style>  
  