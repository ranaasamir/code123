<template>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" type="text/css">
  </head>
  <home></home>
  <div class="col-lg-6 col-sm-6">
      <div class="card hovercard">
          <div class="card-background">
              <img class="card-bkimg" alt="" src="../assets/edu.jpg">
          </div>
          <div class="useravatar">
              <img alt="" src="../assets/Nawwar.jpg">
          </div>
          <div class="card-info"> <span class="card-title"></span>
          </div>
      </div>
      <h3>Nawwar Admin</h3>
            </div>

    <button class="btn waves-effect waves-light" type="submit" name="action" @click="getapps()">View Psychologist Applications
      <i class="material-icons right"></i>
    </button>
    <div class="panel-body" id="apps">
                   <table class="table table-striped table-bordered table-list ">
                     <thead>
                       <tr>
                           <th><em class="fa fa-cog"></em></th>
                           <th>ID</th>
                           <th class="hidden-xs">Name</th>
                       </tr>
                     </thead>
                     <tbody>
                             <tr v-for="(p,_id) in psychos.data" :key="_id">
                               <td align="center">
                                 <a class="btn btn-default" @click="downloadpdf(p.userId)"><em class="fa fa-pencil"></em></a>
                                 <a class="btn btn-danger" @click="deleteApp(p._id)"><em class="fa fa-trash"></em></a>
                               </td>
                               <td>{{p.userId}}</td>
                               <td>{{p.name}}</td>
                             </tr>
                           </tbody>
                   </table>

                 </div>

            <foot></foot>
      </html>
</template>

<style>
body {
    background: url('../assets/blur.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 100%;
}
p {
    line-height: 20px;
    margin-bottom: 20px;
    color: #3B0101;
    font-size: 25px;
}
h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
/* USER PROFILE PAGE */
 .card {
    margin-top: 20px;
    padding: 30px;
    background-color: rgba(214, 224, 226, 0.2);
    -webkit-border-top-left-radius:5px;
    -moz-border-top-left-radius:5px;
    border-top-left-radius:5px;
    -webkit-border-top-right-radius:5px;
    -moz-border-top-right-radius:5px;
    border-top-right-radius:5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.card.hovercard {
    position: relative;
    padding-top: 0;
    overflow: hidden;
    text-align: center;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 1);
}
.card.hovercard .card-background {
    height: 130px;
}
.card-background img {
    -webkit-filter: blur(25px);
    -moz-filter: blur(25px);
    -o-filter: blur(25px);
    -ms-filter: blur(25px);
    filter: blur(25px);
    margin-left: -100px;
    margin-top: -200px;
    min-width: 130%;
}
.card.hovercard .useravatar {
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
}
.card.hovercard .useravatar img {
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.5);
}
.panel-table .panel-body{
  padding:0;
}
.panel-table .panel-body .table-bordered{
  border-style: none;
  margin:0;
}
.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {
    text-align:center;
    width: 60px;
}
.panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,
.panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {
  border-right: 0px;
}
.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,
.panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {
  border-left: 0px;
}
.panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{
  border-bottom: 0px;
}
.panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{
  border-top: 0px;
}
.panel-table .panel-footer .pagination{
  margin:0;
}
/*
used to vertically center elements, may need modification if you're not using default sizes.
*/
.panel-table .panel-footer .col{
 line-height: 34px;
 height: 34px;
}
.panel-table .panel-heading .col h3{
 line-height: 30px;
 height: 30px;
}
.panel-table .panel-body .table-bordered > tbody > tr > td{
  line-height: 34px;
}

</style>

<script>
import Home from '@/components/Header'
import Footer from '@/components/Footer'
import swal from 'sweetalert'
import Vue from 'vue'
import VueVisible from 'vue-visible'
import VueSession from 'vue-session'
import axios from 'axios'

Vue.use(VueVisible)
Vue.use(VueSession)

export default {
  components: {
    'home': Home,
    'foot': Footer
  },
  data () {
    return {
      psychos: []
    }
  },
  methods: {
    myFunction () {
      var x = document.getElementById('apps')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    },
    getapps () {
      axios.get('http://localhost:3000/api/getCV')
        .then((response) => {
          this.psychos = response.data
          console.log(response)
        })
    },
    downloadpdf (id) {
      axios({
        url: 'http://localhost:3000/api/download/' + id,
        method: 'GET',
        responseType: 'blob' // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', id + '.pdf') // or any other extension
        document.body.appendChild(link)
        link.click()
      })
    },
    deleteApp (id) {
      axios.delete('http://localhost:3000/api/deleteCV/' + id)
        .then((response) => {
          swal('Success!', JSON.stringify((response.data.msg)), 'success', {
            button: 'Ok'
          }).then(function () {
            location.reload()
          })
        })
    }
  }
}

</script>
