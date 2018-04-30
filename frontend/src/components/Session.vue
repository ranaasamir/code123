<template>
<body>
<home></home>
<div>
<v2-table :data="list">
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address"></v2-table-column>
  </v2-table>
<br>
<h1 style = "color:black; ">Welcome to Session creation</h1>
<h1 style = "color:black;">Restricted to Parents</h1>
<br>
<br>
<br>
  <button><router-link to="/CreateSession">Create Session</router-link></button>
  <br>

    </div>
    <div>
      <!-- button for getting data -->
      <button v-on:click="getRequests">Show Requests</button>
      <!-- table for viewing data -->
      <table border="1">
        <th>
          <td>Name</td>
        </th>
        <tr v-for="(request,index) in requests" :key ="index"><td>{{request.studentusername}}</td></tr>
      </table>
    </div>
    <br>
    <br>
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
</style>

<script>
import Home from '@/components/Header'
import Footer from '@/components/Footer'
import axios from 'axios'
export default {
  components: {
    'home': Home,
    'foot': Footer
  },
  props: { // Add array named requests to contain the data when got it from api
    requests: Array
  },
  methods: {
    getRequests () {
      axios.get('http://localhost:3000/api/request/getrequests/ali').then( // using dummy username ali
        response => {
          this.requests = response.data.data
          // dummy data for visualisation
          this.requests = [
            {studentusername: 'name1'},
            {studentusername: 'name2'},
            {studentusername: 'name3'}
          ]
        })
    }
  }
}
</script>
