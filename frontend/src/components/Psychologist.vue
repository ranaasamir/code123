<template>
    <html>
    <home></home>
    <body>
      <div class="container" id="thiscont">
        <div>
            <label style="color:blue;"><font size="8"><span class="label label-default">View Psychologists</span></font></label>
        </div>
        <h4>Click the table head to sort</h4>
        <label class="form_label" for="example" style="">Search:</label>
        <input id='myInput' v-on:keyup='searchTable()' type='text'>
        <br>
        <div>
          <table id="myTable2">
            <thead>
              <tr>
              <th @click="sortTable(0)">FIRSTNAME</th>
              <th @click="sortTable(1)">GENDER</th>
              <th @click="sortTable(2)">PHONENUMBER</th>
              <th @click="sortTable(3)">ADDRESS</th>
              <th @click="sortTable(4)">CITY</th>
              <th></th>
            </tr>
            </thead>
            <tbody v-for="(psycho,index) in Psychologists.data" :key="index"><!-- loop on the data retreived -->
              <tr v-if="psycho.usertype=='Psychologist'"><!-- put psychologists only on the table -->
                <td>{{psycho.firstname}}</td>
                <td>{{psycho.gender}}</td>
                <td>{{psycho.phone}}</td>
                <td>{{psycho.address}}</td>
                <td>{{psycho.city}}</td>
                <td><button id="button1" onclick="location.href = 'http://localhost:8080/#/Profile/';">BOOK</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </body>
    <foot></foot>
    </html>
</template>
<style>
table tr td:first-letter{
 text-transform:capitalize;
}
label {
    color: #5c5c5c;
}
#thiscont{
    width: 100%;
    background: white;
    border-radius: 15px;
    margin: 0 auto;
    position:relative
}
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
body {
  background: url('../assets/blur.jpg') no-repeat center center fixed;
background-size: cover;
height: 100%;
color: #777;
font: normal 15px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
}
p {
    line-height: 20px;
    margin-bottom: 20px;
    color: #000000;
}
h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
header {
    height: 120px;
}
header h1 {
    float: left;
    margin-top: 32px;
}
header h1 .color {
    color: #02b8dd;
}
header nav {
    float: right;
}
header nav ul li {
    float: left;
    display: inline-block;
    margin-top: 50px;
}
header nav ul li a {
    color: #444;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin-right: 20px;
}
table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
}

th, td {
    text-align: left;
    padding: 16px;
}

tr:nth-child(even) {
    background-color: #f2f2f2
}
#button1 {
  background-color: blue;
  color: white;
  font-family: 'Crete Round', serif;
  font-weight: bold;
  width: 100%;
}
#myTable2 {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    height: 100%;
}

#myTable2 td, #myTable2 th {
    border: 1px solid #ddd;
    padding: 8px;
}

#myTable2 tr:nth-child(even){background-color: #f2f2f2;}

#myTable2 tr:hover {background-color: #ddd;}

#myTable2 th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: blue;
    color: white;
}
#myinput {
    width: 100%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
}
</style>
<script>
import Vue from 'vue'
import Home from '@/components/Header'
import Footer from '@/components/Footer'
import VueSession from 'vue-session'
import axios from 'axios'
import VueRouter from 'vue-router' // importing router to use backend
// import routes from '../router/index' // calling route from index

Vue.use(VueRouter)
Vue.use(VueSession)
// const router = new VueRouter({
//   routes, // short for routes: routes
//   linkActiveClass: 'active'
// })

export default {
  name: 'Psychologist',
  data () {
    return {
      Psychologists: []
    }
  },
  created () {
    this.view()
  },
  methods: {
    view () {
      axios.get('http://localhost:3000/api/PsychoController/getPsycho/Parent') // getting method for users to be produced in the table
      // if condition to check if error = null
        .then((response) => {
          this.Psychologists = response.data
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    sortTable (n) {
      var table, rows, switching, i, x, y, shouldSwitch, dir
      var switchcount = 0
      table = document.getElementById('myTable2')
      switching = true
      dir = 'asc'
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[n]
          y = rows[i + 1].getElementsByTagName('TD')[n]
          if (dir === 'asc') {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true
              break
            }
          } else if (dir === 'desc') {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true
              break
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
          switching = true
          switchcount = switchcount + 1
        } else {
          if (switchcount === 0 && dir === 'asc') {
            dir = 'desc'
            switching = true
          }
        }
      }
    },
    searchTable () {
      var input, filter, found, table, tr, td, i, j
      input = document.getElementById('myInput')
      filter = input.value.toUpperCase()
      table = document.getElementById('myTable2')
      tr = table.getElementsByTagName('tr')
      for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')
        for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
            found = true
          }
        }
        if (found) {
          tr[i].style.display = ''
          found = false
        } else {
          tr[i].style.display = 'none'
        }
      }
    }
  },
  components: {
    'home': Home,
    'foot': Footer
  }
}
</script>
