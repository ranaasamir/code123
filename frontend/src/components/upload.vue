<template>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" >
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
  <!-- Top image -->
  <div >
    <img class="one" src="../assets/edu.jpg">
  </div>

  <div id="text" class="text-block">
    <!-- redirect to previous page -->
    <button  onclick="location.href = 'http://localhost:8080/#/doctor';" class="button" style="vertical-align:middle"><span>Back </span></button>
    <!-- title -->
    <h2>
      <article>
        <center> <b>JOIN US</b> <p></p>
          Build a simple, elegant, world-class tools that assist Children in finding the help they need.
        </center>
      </article>
    </h2>
  </div>

  <div id="utext">
      <h1>Upload your CV</h1>
  </div>
  <!-- Style and functionality of upload and submit -->
  <div id="app">
    <form enctype="multipart/form-data">
      <div id="file" class="file-field input-field">
        <div class="btn grey">
          <span><i class="fa fa-folder-open-o" style="font-size:24px"></i>Choose File</span>
          <input type="file" name="document" v-on:change="fileChange($event.target.files)" />
        </div>
      </div>
      <!-- upload button to submit form -->
      <div id="bt">
        <button type="button" v-on:click=" addToModel();" class="btn btn-outline-success">Upload</button>
      </div>
    </form>
  </div>
</body>
</html>
</template>

<style>
body {
    background: url('../assets/blur.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 100%;
}

swal {
    text: "You clicked the button!";
    icon: "success";
}
img.one {
  height: 600px;
   width: 100%;
   border-radius: 0px;
}
#text{
  position: absolute;
  font-size: 10px;
  bottom: 250px;
  right: 70px;
  /* background-color: black; */
  color: black;
  padding-left: 20px;
  padding-right: 20px;
}
#utext {
  position: absolute;
  font-size: 18px;
  bottom: -20%;
  right: 34%;
  /* background-color: black; */
  color: black;
  padding-left: 20px;
  padding-right: 20px;
}
#app {
  height: 600px;
  right: 300px;
}
#file{
  position: absolute;
    left: 400px;
    top: 900px;
}
#bt {
  position: absolute;
    left: 800px;
    top: 920px;
}
#back {
  left:50px;
  top: 100%;
}
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #B22222;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 80px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 35px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
<script>
import axios from 'axios'
import swal from 'sweetalert'
import Vue from 'vue'
import VueVisible from 'vue-visible'
import VueSession from 'vue-session'

Vue.use(VueVisible)
Vue.use(VueSession)

export default {
  name: 'app',
  data () {
    return {
      files: new FormData()
    }
  },
  methods: {
    fileChange (fileList) {
      this.files.append('document', fileList[0], fileList[0].name)
    },
    addToModel () {
      // checking whether the user is signed in to be eligible to upload
      if (!(this.$session.exists())) {
        swal('Oops', 'Not Logged In', 'error', {
          button: 'OK'
        }).then(function () { window.location.href = 'http://localhost:8080/#/login' })
      } else {
        this.upload()
      }
      axios.post('http://localhost:3000/api/createCV', { // adding the user to the database after uploading their files
        userId: this.$session.get('loggedinuserid'),
        name: this.$session.get('loggedinuser')
      })
    },
    // Post PDF files
    upload: function () {
      axios({ method: 'POST', 'url': 'http://localhost:3000/api/upload', 'data': this.files }).then(function (response) {
        // document.getElementById("hi").innerHTML = JSON.stringify((response.data))
        console.log(response.data)
        // if true/false return backend message
        // Swal for alert shape and style
        if (response.data === 'Success ! your cv was upload successfully') {
          swal('Success!', JSON.stringify((response.data)), 'success', {
            button: 'Ok'
          }).then(function () {
            location.reload()
          })
        } else {
          swal('Oops', JSON.stringify((response.data)), 'error', {
            button: 'Ok'
          }).then(function () {
            location.reload()
          })
        }
      })
    }
  }
}
</script>
