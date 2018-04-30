<template>
  <div class="navbar">
  <h1 id="logo"><a href="/"><img src="../assets/Nawwar.jpg" alt="Avatar" style="display: inline;">Nawwar<span class="color">.</span></a></h1>
    <div class="dropdown">
      <button class="dropbtn">Facilities
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content" id="drop1">
      <a onclick="location.href = 'http://localhost:8080/#/Courses';">Courses</a>
      <a onclick="location.href = 'http://localhost:8080/#/Activities';">Activities</a>
      <a onclick="location.href = 'http://localhost:8080/#/Articles';">Articles</a>
      </div>
    </div>
    <div class="dropdown" id="drop2">
      <button class="dropbtn">Apply For
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
      <a onclick="location.href = 'http://localhost:8080/#/Courses';">Courses</a>
      <a onclick="location.href = 'http://localhost:8080/#/Activities';">Activities</a>
      <a onclick="location.href = 'http://localhost:8080/#/Articles';">Teachers</a>
      <a onclick="location.href = 'http://localhost:8080/#/Doctor';">Psychologists</a>
      </div>
    </div>
    <div class="dropdown" id="drop3">
      <button class="dropbtn">Book
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
      <a onclick="location.href = 'http://localhost:8080/#/';">Teachers</a>
      <a onclick="location.href = 'http://localhost:8080/#/Psychologist';">Pshycologists</a>
      </div>
    </div>
    <div class="logoutPosition">
   <a v-on:click="handleLogout()"><button class="logoutButton position" style="vertical-align:middle"><span>Sign Out</span></button></a>
   </div>
   <div class="Profile1">
  <a><button onclick="location.href = 'http://localhost:8080/#/Profile';" class="Profile" style="vertical-align:middle"><span>Profile</span></button></a>
  </div>
  </div>
</template>

<style>
/* Navbar container */
.navbar {
  overflow: hidden;
  background-color: transparent;
  font-family: Arial;
}
/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 35px;
  color: Black;
  text-align: center;
  padding: 14px 60px;
  text-decoration: none;
}
/* The dropdown container */
.dropdown {
  float: center;
  overflow: hidden;
  border-radius: 8px;
}
#drop2 {
  float: center;
  margin-top: -62px;
  margin-left: 500px;
}
#drop3 {
  float: center;
  margin-top: -62px;
  margin-left: 650px;
}
/* Dropdown button */
.dropdown .dropbtn {
  font-size: 20px;
  border: none;
  outline: none;
  color: black;
  padding: 20px 16px;
  background-color: inherit;
  border-radius: 8px;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin-right: 20px; /* Important for vertical align on mobile phones */
  margin-left: 80px;
}
/* Add a red background color to navbar links on hover */
.navbar a:hover, {
  color: #02b8dd;
}
.dropdown:hover .dropbtn {
  opacity: 0.5;
  background-color: blue;
}
/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  margin-left: 82px;
  position: absolute;
  border-radius: 8px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  font-size: 16px;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
#logo img {
  border-radius: 50%;
  float: left;
  margin-right: 10px;
  margin-top: -33px;
  width: 100px;
  height: 100px;
  background: #555;
}
.logoutButton {
  display: inline-block;
  border-radius: 3px;
  background-color: brown;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  font-family: serif;
  padding: 8px;
  width: 115px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  margin-top: -130px;
}
.logoutButton span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.logoutButton span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.logoutButton:hover span {
  padding-right: 25px;
}
.logoutButton:hover span:after {
  opacity: 1;
  right: 0;
}
.logoutPosition {
  float: right;
  right: 20px;
  top: 100px;
}
.Profile {
  display: inline-block;
  border-radius: 3px;
  background-color: #001FFF;
  border: none;
  color: Black;
  text-align: center;
  font-size: 20px;
  font-family: serif;
  padding: 8px;
  width: 105px;
  height: 35px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.Profile span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.Profile span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.Profile:hover span {
  padding-right: 25px;
}
.Profile:hover span:after {
  opacity: 1;
  right: 0;
}
.Profile1 {
  float: right;
  right: 20px;
  top: 100px;
  margin-top: -67px;
  margin-right: -80px;
}
</style>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueVisible from 'vue-visible'
import VueSession from 'vue-session'
Vue.use(VueVisible)
Vue.use(VueSession)
export default {
  data () {
    return {
      isUserLoggedIn: true
    }
  },
  ready: function () {
    if (this.$session.exists()) {
      this.isUserLoggedIn = true
    } else {
      this.isUserLoggedIn = false
    }
  },
  methods: {
    handleLogout () {
      axios.get('http://localhost:3000/api/logout')
      console.log('User logged out!')
      this.$session.destroy()
      this.isUserLoggedIn = false
      this.$router.push({name: 'Login'})
    }
  }
}
</script>
