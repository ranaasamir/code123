<template>
<div class="row">
  <div class="col-md-12">
    <h1>Reset Your Password</h1>
       <v-button>Update Password</v-button>
      <div class="form-group">
        <label for="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          v-model="email"
          name="email"
          required>
      </div>
      <div class="form-group">
        <input type="button" class="form-control btn btn-forgot" value="Reset Password" @click="forgot()" />
      </div>
  </div>
</div>
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
body {font-family: Arial, Helvetica, sans-serif;}
.names{
  width: 30%!important;
}

* {box-sizing: border-box}
/* Full-width input fields */
input[type=text], input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;

}

.bordered{
    border: 1px solid #d66!important;
}
.city{
  width: 100%;
  }

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
}

/* Set a style for all buttons */
input[type=button] {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

button:hover {
    opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 100%;
}

/* Add padding to container elements */
.container {
    padding: 16px;
}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: #474e5d;
    padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 50%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 35px;
    top: 15px;
    font-size: 40px;
    font-weight: bold;
    color: #f1f1f1;
}

.close:hover,
.close:focus {
    color: #f44336;
    cursor: pointer;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
    .cancelbtn, .signupbtn {
       width: 100%;
    }
}
</style>
<script>
import Home from '@/components/Header'
import Footer from '@/components/Footer'
import axios from 'axios'
export default {
  name: 'Forgot',
  components: {
    'home': Home,
    'foot': Footer
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    forgot: function () {
    // posting email to send email to user.
      axios.post('http://localhost:3000/api/forgot', {
        email: this.email
      })
        .then(response => {
          alert(response.data.msg)
        })
        .catch(e => {
          alert(e)
        })
    }
  }
}
</script>
