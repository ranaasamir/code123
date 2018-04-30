<template>
<body>
<heds></heds>
<div class= "wrapper">
      <div>
        <h1>Login<span class="color">.</span></h1>
      </div>
      <body>
      <div class="form-group">
        <label for= "Username">Username</label>
        <input type= "Username" name="Username" v-model="login_user" value="" placeholder="Enter Username" autofocus= "autofocus" class="form-control"/>
      </div>
      <div class="form-group">
        <label for= "Pasword">Password</label>
        <input type= "Password" name="Password" v-model="login_pass" value="" placeholder="Enter Password" autofocus= "autofocus" class="form-control"/>
      </div>
      <div class="form-group">
       <input id="checkbox1" type="checkbox" name="remember">
       <label for="checkbox1">Remember Me</label>
      </div>
      <div class="col-xs-6 form-group pull-right">
        <input type="button" class="form-control btn btn-login" value="Login" @click="login()" />
      </div>
    <nav>
    <ul>
      <li><a onclick="location.href = 'http://localhost:8080/#/Forgot';">Forgot Password</a></li>
    </ul>
    </nav>
    </body>
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
</style>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueSession from 'vue-session'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
Vue.use(VueSession)

export default {
  components: {
    'heds': Header,
    'foot': Footer
  },
  data () {
    return {
      login_user: '',
      login_pass: ''
    }
  },
  beforeCreate: function () {
    if (this.$session.exists()) {
      alert('Already logged in!')
      this.$router.push('/')
    }
  },
  methods: {
    login: function () {
      axios.post('http://localhost:3000/api/login', {
        username: this.login_user,
        password: this.login_pass
      })
        .then(response => {
          this.$session.start()
          this.$session.set('loggedinuser', this.login_user)
          this.$session.set('usertype', response.data.usertype)
          window.location.href = 'http://localhost:8080/#/Profile'
        })
        .catch(e => {
          if (e.response.data.msg === 'Invalid username or password') {
            alert('Error singing in please write your username and password')
          } else {
            alert(e.response.data.msg)
          }
        })
    }
  }
}
</script>
