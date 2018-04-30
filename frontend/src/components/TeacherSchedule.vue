
<template>

<body>
<home></home>

<h1 style="font-family:verdana;">Teacher's personal schedule:</h1>
<div class="container">
<div class="tab tab-1">
<label for="pwd">Teacher's name:</label>
  <input type="text" class="form-control" id="pwd" v-model="list.teacherName">
  <label for="pwd">Created at:</label>
    <input type="text" class="form-control" id="pwd" v-model="list.createdAt">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <div class="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
      <button type="button" @click="listData"  class="btn btn-primary">Create</button>

    </div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<table id="customers"  borders="4">
<tr>
<td> </td>
<th rowspan="2">Slot</th>
<th rowspan="2">Saturday</th>
<th rowspan="2">Sunday</th>
<th rowspan="2">Monday</th>
<th rowspan="2">Tuesday</th>
<th rowspan="2">Wednesday</th>
<th rowspan="2">Thursday</th>
</tr>
<tbody align="center">
<tr class="Active" v-for="(row, index) in mschedule.data" :key="index">
<td></td>
<td>{{ row.slot }}</td>
<td>{{ row.sat }}</td>
<td>{{ row.sun }}</td>
<td>{{ row.mon }}</td>
<td>{{ row.tue }}</td>
<td>{{ row.wed }}</td>
<td>{{ row.thu }}</td>
<td><button type="button" class="btn btn-success" @click="removing(row._id)">Delete Slot</button></td>
</tr>
</tbody>
</table>
<div><button type="button" class="btn btn-success" @click="remove(id)">Delete Schedule</button></div>
<h4> Note: the first slot begins at 8 oclock in the morning and the duration of the slot is two hours</h4>

</div>
<div style="font-family:verdana;" class="tab tab-2">
<label for="usr">Add slot:</label>
  <input type="text" class="form-control" id="usr" v-model="slot">
<button type="button" @click="createSchedule" class="btn btn-primary">ADD</button>

</div>

<div style="font-family:verdana;" class="tab tab-2">
<label for="usr">Saturday:</label>
  <input type="text" class="form-control" id="usr" v-model="sat">
<label for="usr">Sunday:</label>
    <input type="text" class="form-control" id="usr" v-model="sun">
<label for="usr">Monday:</label>
      <input type="text" class="form-control" id="usr" v-model="mon">
<label for="usr">Tuesday:</label>
        <input type="text" class="form-control" id="usr" v-model="tue">
<label for="usr">Wednesday:</label>
        <input type="text" class="form-control" id="usr" v-model="wed">
<label for="usr">Thursday:</label>
        <input type="text" class="form-control" id="usr" v-model="thu">
</div>
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
.container{overflow: hidden}
.tab{float: left;}
.tab-2{margin-left: 50px}
.tab-2 input{display: block;}
tr{
height: 50px;
}

#customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    width: 100%;
    border: 1px solid black;
    color: #fd79a8;
}
#customers td, #customers th {
    border: 1px solid black;
    padding: 15px;
    color: white;
    background-color: #0984e3;
}
#customers tr:nth-child(even){background-color: #f2f2f2;}
#customers tr:hover {background-color: #ddd;}
#customers th {
    padding-top: 12px;
    padding-bottom: 15px;
    text-align: left;
    background-color: #00418A;
    color: white;
}
</style>

<script>
/* eslint-disable */
import axios from 'axios'
import Home from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    'home': Home,
    'foot': Footer
  },
  name: 'user',
  data () {
    return {
      mschedule: [],
      slot: '',
      sat: '',
      sun: '',
      mon: '',
      tue: '',
      wed: '',
      thu: '',
      sched: false,
      list : {
        teacherName: '',
        createdAt: ''
      }
    }
  },
  created () {
    this.myschedule()
  },
  methods: {
    myschedule () { //method responsible to view the schedule
      axios.get('http://localhost:3000/api/schedule/getSchedules')
        .then((response) => {
          this.mschedule = response.data
          console.log(response)
        })
    },
    createSchedule () { //method responsible to create the schedule
      let Schedule = {
        slot: this.slot,
        sat: this.sat,
        sun: this.sun,
        mon: this.mon,
        tue: this.tue,
        wed: this.wed,
        thu: this.thu
      }
      console.log(Schedule)
      axios.post('http://localhost:3000/api/Schedule/createSchedule', Schedule)
        .then((response) => {
          this.mschedule = response.data
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
    remove (id) { //method responsible to delete the whole schedule
      axios.delete('http://localhost:3000/api/schedule/deleteSchedule/' + id)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
    removing (id) { //method responsible to delete a chosen slot
      axios.delete('http://localhost:3000/api/schedule/deleteSlot/' + id)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
    show () { //method responsible to show the scedule
      if (this.sched === false){
        this.sched = true
      } else {
        this.sched = false
      }
    },
    listData () { //method to save teacher's data and schedule in API
      let newList = {
        teacherName: this.list.teacherName,
        createdAt: this.list.createdAt,
        slot: this.slot,
        sun: this.sun,
        mon: this.mon,
        tue: this.tue,
        wed: this.wed,
        thu: this.thu,
        sat: this.sat
      }
      console.log(newList)
      axios.post('http://localhost:3000/api/ListSchedules/addTeacherSched', newList)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

</script>
