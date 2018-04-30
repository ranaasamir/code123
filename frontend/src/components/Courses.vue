<template>
  <body>
  <home></home>
<button @click="show"> show schedule </button>
<div v-if="sched">
<table id="myTable">
<thead>
<tr>
<th>Saturday</th>
<th>Sunday</th>
<th>Monday</th>
<th>Tuesday</th>
<th>Wednesday</th>
<th>Thursday</th>
<th>Friday</th>
</tr>
</thead>
<tbody>
<tr>
<td><input type="text" id="1" value="Activity1"><br></td>
<td><input type="text" id="2" value="Activity1"><br></td>
<td><input type="text" id="3" value="Activity1"><br></td>
<td><input type="text" id="4" value="Activity1"><br></td>
<td><input type="text" id="5" value="Activity1"><br></td>
<td><input type="text" id="6" value="Activity1"><br></td>
<td><input type="text" id="7" value="Activity1"><br></td>
</tr>
<tr>
<td><input type="text" id="8" value="Activity2"><br></td>
<td><input type="text" id="9" value="Activity2"><br></td>
<td><input type="text" id="10" value="Activity2"><br></td>
<td><input type="text" id="11" value="Activity2"><br></td>
<td><input type="text" id="12" value="Activity2"><br></td>
<td><input type="text" id="13" value="Activity2"><br></td>
<td><input type="text" id="14" value="Activity2"><br></td>
</tr>
<tr>
<td><input type="text" id="15" value="Activity3"><br></td>
<td><input type="text" id="16" value="Activity3"><br></td>
<td><input type="text" id="17" value="Activity3"><br></td>
<td><input type="text" id="18" value="Activity3"><br></td>
<td><input type="text" id="19" value="Activity3"><br></td>
<td><input type="text" id="20" value="Activity3"><br></td>
<td><input type="text" id="21" value="Activity3"><br></td>
</tr>
<tr>
<td><input type="text" id="22" value="Activity4"><br></td>
<td><input type="text" id="23" value="Activity4"><br></td>
<td><input type="text" id="24" value="Activity4"><br></td>
<td><input type="text" id="25" value="Activity4"><br></td>
<td><input type="text" id="26" value="Activity4"><br></td>
<td><input type="text" id="27" value="Activity4"><br></td>
<td><input type="text" id="28" value="Activity4"><br></td>
</tr>
<tr>
<td><input type="text" id="29" value="Activity5"><br></td>
<td><input type="text" id="30" value="Activity5"><br></td>
<td><input type="text" id="31" value="Activity5"><br></td>
<td><input type="text" id="32" value="Activity5"><br></td>
<td><input type="text" id="33" value="Activity5"><br></td>
<td><input type="text" id="34" value="Activity5"><br></td>
<td><input type="text" id="35" value="Activity5"><br></td>
</tr>
</tbody>
</table>
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
table, th, td {
    width: 100%;
    border: 1px solid black;
    color: #fd79a8;
}
tr:nth-of-type(even) {
  background: #0984e3;
}
tr:nth-of-type(odd) {
  background: #0984e3;
}
th {
  background: #3498db;
  color: white;
  font-weight: bold;
} /* Font */
th, td {
    padding: 15px;
    text-align: left;
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

export default {
  components: {
    'home': Home,
    'foot': Footer
  },
  data () {
    return {
      sched: false
    }
  },
  methods: {
    show () {
      if (this.sched === false) {
        this.sched = true
      } else {
        this.sched = false
      }
    }
  }
}
</script>
