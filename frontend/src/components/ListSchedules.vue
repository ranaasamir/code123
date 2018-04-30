<template>
<body>
<home></home>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<div class="container">
  <h2>List of Available Schedules</h2>
  <table class="table table-hover">
    <thead>
      <tr>
        <th width="20%" class="center">Schedule Creator</th>
        <th width="10%" class="center">Created At</th>
        <th width="15%" class="center">Time of the Session</th>
        <th width="20%" class="center">Day and Session/Activity</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="(schedule_details, teacherName) in ListSchedules.data" :key="teacherName" >
          <td> {{schedule_details.teacherName}} </td>
          <td> {{schedule_details.createdAt}} </td>
          <td> {{schedule_details.slot}} </td>         
          
           <td>
           <table id="teacherSchedule">
              <tr>
                <td> Saturday: </td>
                <td> {{schedule_details.sat}} </td> 
              </tr>
              <tr>
                <td> Sunday: </td>
                <td> {{schedule_details.sun}} </td>
              </tr>
              <tr>
                <td> Monday: </td>
                <td> {{schedule_details.mon}} </td>
                </tr>
              <tr>
               <td> Tuesday: </td>
               <td> {{schedule_details.tue}} </td>
              </tr>
              <tr>
               <td> Wednesday: </td>
               <td> {{schedule_details.wed}} </td>
             </tr>
              <tr>
                <td> Thursday: </td>
                <td> {{schedule_details.thu}} </td>
              </tr>
            </table>
          </td>
        </tr>
    </tbody>
  </table>
  <button type="submit" v-on:click="mounted()" class="btn btn-primary">Update List</button>
</div>
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
  .tSelect span{
  cursor: pointer;
  }
  table.invisibleCell {
    empty-cells: show;
}
</style>

<script>
import Home from '@/components/Header'
import Footer from '@/components/Footer'
import axios from 'axios'

export default{
  components: {
    'home': Home,
    'foot': Footer
  },
  list: 'ListSchedules',
  data () {
    return {
      ListSchedules: [],
      notHide: false,
      hasData: false
    }
  },
  create () {
    // creating a mounted method to return data from API
    this.mounted()
  },
  methods: {
    // method to get the required data from the schedules and display in the table
    mounted () {
      axios.get('http://localhost:3000/api/ListSchedules/getSchedList')
        .then((response) => {
          console.log(response.data)
          this.ListSchedules = response.data
        })
        .catch((error) => {
          console.log(error)
        }
        )
    },
    showSchedule() {
    var sched = document.getElementById("teacherSchedule");
    if (sched.style.display === "block") {
        sched.style.display = "none";
    } else {
        sched.style.display = "block";
      }
  }
  }
}
</script>
