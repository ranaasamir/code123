<template>
  <body>
    <home />
    <div>

      <form class="modal-content">
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr>
          <label for="username"><b>Username</b></label>
          <br>
          <!-- adding the hyperlink of check availability -->
          <a id="myLink" title="Click to do something"
 href="#" @click="checkavailibilty();return false;">Check Availibility</a>

          <input
            type="text"
            placeholder="Username"
            :class="{bordered: userNotOK}"
            v-model="username"
            name="username"
            required>

          <label for="firstname"><b>Name</b></label>
          <br>
          <input
            type="text"
            placeholder="First Name"
            v-model="firstname"
            class="names"
            name="firstname"
            required>
          <input
            type="text"
            placeholder="Middle Name"
            v-model="middlename"
            class="names"
            name="middlename"
            required>
          <input
            type="text"
            placeholder="Last Name"
            v-model="lastname"
            class="names"
            name="lastname"
            required>
          <br>
          <label for="gender"><b>Gender</b></label><br><br>
          <input type="radio" v-model="gender" name="gender" value="M"> Male
          <input type="radio" v-model="gender" name="gender" value="F"> Female<br><br>
          <label for="bdate"><b>Birthdate</b></label>
          <input type="text" v-model="bdate" name="bdate" placeholder="YYYY/MM/DD">
          <label for="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email"
            v-model="email"
            name="email"
            required>

          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            v-model="password"
            :class="{bordered: passwordNotOK}"
            maxlength="20"
            name="psw"
            required>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input
            type="password"
            placeholder="Repeat Password"
            v-model="confirmPassword"
            :class="{bordered: confirmPasswordNotOK}"
            maxlength="20"
            name="psw-repeat"
            required>

          <label for="address"><b>Address</b></label>
          <input
            type="text"
            placeholder="Address"
            v-model="address"
            name="address"
            required>

          <label for="city"><b>City</b></label>
          <select
            name="city"
            v-model="city"
            class="city">
            <option value="Al Beheira">Al Beheira</option>
            <option value="Al Daqahliya">Al Daqahliya</option>
            <option value="Al Fayoum">Al Fayoum</option>
            <option value="Al Gharbia">Al Gharbia</option>
            <option value="Al Meniya">Al Meniya</option>
            <option value="Al Monufia">Al Monufia</option>
            <option value="Al Sharqia">Al Sharqia</option>
            <option value="Alexandria">Alexandria</option>
            <option value="Aswan">Aswan</option>
            <option value="Asyut">Asyut</option>
            <option value="Bani Souaif">Bani Souaif</option>
            <option value="Cairo" selected="selected">Cairo</option>
            <option value="Damietta">Damietta</option>
            <option value="Giza">Giza</option>
            <option value="Ismailia">Ismailia</option>
            <option value="Kafr El-Sheikh">Kafr El-Sheikh</option>
            <option value="Luxor">Luxor</option>
            <option value="Marsa Matrooh">Marsa Matrooh</option>
            <option value="New Valley">New Valley</option>
            <option value="Port Said">Port Said</option>
            <option value="Qalyubia">Qalyubia</option>
            <option value="Qena">Qena</option>
            <option value="Red Sea">Red Sea</option>
            <option value="Sohag">Sohag</option>
            <option value="Suez">Suez</option>
          </select>
          <br><br>
          <label for="phone"><b>Phone</b></label>
          <input
            type="text"
            placeholder="Phone"
            v-model="phone"
            name="phone"
            required>

          <label for="intrests"><b>Intrests</b></label>
          <input
            type="text"
            placeholder="Intrests"
            v-model="intrests"
            name="intrests"
            required>

            <label for="eduback"><b>Educational Background</b></label>
            <input
              type="text"
              placeholder="Educational Background"
              v-model="eduback"
              name="eduback"
              required>

          <label for="biography"><b>Biography</b></label>
          <br>
          <textarea
            rows="4"
            cols="50"
            name="biography"
            v-model="biography" />

          <p>By creating an account you agree to our <a
            href="#"
            style="color:dodgerblue">Terms & Privacy</a>.</p>

          <div class="clearfix">
            <input type="button" class="signupbtn" value="Sign Up" @click="signup()" />
          </div>
        </div>
      </form>
    </div>
    <foot />
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
document.title = 'Nawwar Signup' // setting page title

export default {
  name: 'Signup',
  components: {
    'home': Home,
    'foot': Footer
  },
  data () {
    return {
      confirmPasswordNotOK: false,
      passwordNotOK: false,
      userNotOK: false,
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      city: '',
      firstname: '',
      middlename: '',
      lastname: '',
      gender: '',
      phone: '',
      intrests: '',
      biography: '',
      bdate: '',
      eduback: ''
    }
  },
  // monitoring user input for updates
  watch: {
    username () {
      if (this.username.length < 6 || this.username.length > 20) {
        this.userNotOK = true
      } else {
        this.userNotOK = false
      }
    },
    password () {
      if (this.password.length < 6 || this.password.length > 20) {
        this.passwordNotOK = true
      } else {
        this.passwordNotOK = false
      }
    },
    confirmPassword () {
      if (this.confirmPassword !== '' && this.password !== this.confirmPassword) {
        this.confirmPasswordNotOK = true
      } else {
        this.confirmPasswordNotOK = false
      }
    }
  },
  methods: {
  // POSTing singup form to backend
    signup () {
      axios.post('http://localhost:3000/api/signup', {
        username: this.username,
        email: this.email,
        password: this.password,
        address: this.address,
        city: this.city,
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        phone: this.phone,
        interests: this.intrests,
        biography: this.biography,
        gender: this.gender,
        birthdate: this.bdate,
        eduback: this.eduback
      })
        .then(response => {
          alert(response.data.msg)
        })
        .catch(e => {
        // in case of an unknown error a predefined error is alerted
          if (e.response.data.msg === '500 Internal Server Error') {
            alert('Error signing you up, please recheck availibility and retry signing up again')
          } else {
            alert(e.response.data.msg)
          }
        })
    },
    // Posting username and email to check availabiltiy
    checkavailibilty () {
      axios.post('http://localhost:3000/api/checkavailibilty', {
        username: this.username,
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
