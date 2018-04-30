<template>
<body>
<home></home>

<body>
<br>
FirstName: <output name="FirstName" /><br />
<br>
LastName: <output name="LastName" /><br />
<br>
Username: <output name="username" /><br />
<br>
DateofBirth: <output name="dob" /><br />
<br>
Email: <output name="email" /><br />
<br>
Eduback: <output name="eduback" /><br />
<br>
Telephone: <output name="tel" /><br />
<br>
Address: <output name="add" /><br />
<br>
City: <output name="City" /><br />
<br>
ChildName : <output name="add" /><br />
<br>
ExperienceYears : <output name="Exp" /><br />
<br>
Biography: <output name="Bio" /><br />
<br>
Interests: <output name="Interests" /><br />
<br>
<li><a onclick="location.href = 'http://localhost:8080/#/editprofile';" class="button-1">edit profile</a></li>
<br>
<li><a onclick="location.href = 'http://localhost:8080/#/RegisterChild';" class="button-1">Register Child</a></li>
<button v-on:click="getActivities">Show My Activities</button>
      <!-- table for viewing data -->
      <table border="1">
        <th>
          <td>Activities</td>
        </th>
        <tr v-for="(activity,index) in activities" :key ="index"><td>{{activity.activityId}}</td></tr>
      </table>
</body>
<foot></foot>
</body>
</template>
<style>
body {
    background: url('../assets/blur.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 100%;
}
h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
#kareem {
  color: black;
}
</style>

<script>
import Home from '@/components/Header'
import Footer from '@/components/Footer'
import Vue from 'vue'
import axios from 'axios'
import VueSession from 'vue-session'
Vue.use(VueSession)

export default {
  components: {
    'home': Home,
    'foot': Footer
  },
  methods: {
    getActivities () {
      axios.post('http://localhost:3000/api/getActivities', {
        userId: '5ae344e05308bc2564d90302'
      }).then(response => {
        this.activities = response.data.data
      })
    },
    beforeCreate () {
      if (this.$session.exists()) {
        let currUser = this.$session.get('loggedinuser')
        alert(currUser)
      }
    }
  }
}
</script>
