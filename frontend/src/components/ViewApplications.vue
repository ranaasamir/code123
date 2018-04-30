<template>
<body>
<home></home>
<h1>Applications Submitted</h1>
<table class="table table-striped table-bordered" style="background-color:#E6E6FA"> <!--table which will view all of the psychologists from the database in the backend-->
  <thead>
   <tr style="background-color:gold">
     <th width="10%">First Name</th>
     <th width="10%">Last Name</th>
     <th width="5%">Gender</th>
     <th width="20%">Phone number</th>
     <th width="45%">Adress</th>
     <th width="10%"></th>
   </tr>
 </thead>
 <tbody><!--table data that will contain the data from the backend of the psychologists(will be updated when backend for creating psychologists is complete)-->
   <tr>
     <td>Ali</td>
     <td>Hamed</td>
     <td>M</td>
     <td>01229502674</td>
     <td>1st settelment, Banafseg 6</td>
   </tr>
 </tbody>

</table>
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
  data () {
    return {
      application: [],
      errors: []
    }
  },

  applicationsSubmitted () {
    axios.get('localhost:3000/api/application/getApplication')
      .then(response => {
        this.application = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }}

</script>
