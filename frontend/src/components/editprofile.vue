<template>
<body>
<home></home>

<br>
<br>
<form class="modal-content">
  <div class="container">
    <h1>Edit Your profile</h1>
    <p>Please fill in this form to update an account.</p>
    <hr>
    <label for="username"><b>Username</b></label>
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
      <option value="184">Al Beheira</option>
      <option value="182">Al Daqahliya</option>
      <option value="185">Al Fayoum</option>
      <option value="186">Al Gharbia</option>
      <option value="191">Al Meniya</option>
      <option value="190">Al Monufia</option>
      <option value="196">Al Sharqia</option>
      <option value="187">Alexandria</option>
      <option value="199">Aswan</option>
      <option value="200">Asyut</option>
      <option value="201">Bani Souaif</option>
      <option
        value="192"
        selected="selected">Cairo</option>
      <option value="203">Damietta</option>
      <option value="189">Giza</option>
      <option value="188">Ismailia</option>
      <option value="206">Kafr El-Sheikh</option>
      <option value="194">Luxor</option>
      <option value="207">Marsa Matrooh</option>
      <option value="195">New Valley</option>
      <option value="202">Port Said</option>
      <option value="193">Qalyubia</option>
      <option value="208">Qena</option>
      <option value="183">Red Sea</option>
      <option value="210">Sohag</option>
      <option value="198">Suez</option>
    </select>
    <br><br>
    <label for="phone"><b>Phone</b></label>
    <input
      type="Number"
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
      <input type="button" class="signupbtn" value="Update" @click="signup()" />
    </div>
  </div>
</form>
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
  methods: {
    update () {
      axios.post('http://localhost:3000/api/updateUser', {
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
    }
  }
}
</script>
