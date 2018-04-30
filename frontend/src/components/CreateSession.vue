<template>
  <div>
  <div v-if="addtoapi">
        <div class="col-md-12">
                <h1 align="center"> Session Page </h1>
                <form>
                  Name:<br>
                  <input type="text" v-model="session.name"><br>
                  Participants:<br>
                  <input type="text"  v-model="session.participants">
                  <br>
                  Duration:<br>
                  <input type="Integer"  v-model="session.duration">
                  <br>
                  Date:<br>
                  <input type="text" v-model="session.date">
                  <br>
                  SessionName:<br>
                  <input type="String" v-model="session.sessionName">
                  <br>
                  Email:<br>
                  <input type="String"  v-model="session.email">
                </form>
</div>

    <button @click="addToAPI" >Create Session</button>
    <button><router-link to="InvitePeople">Invite People</router-link></button>

<div id="preview">
<p> {{session.name}}</P>
<p> {{session.participants}} </p>
<p> {{session.sessionName}}</P>
<p> {{session.date}} </p>
<p> {{session.Duration}}</P>
<p> {{session.email}} </p>
</div>
</div>       <!-- <b-table striped hover :items="sessions"></b-table> -->
       <div v-if="created">
         <h2> Session was Created successfully </h2>
       </div>
      </div>
  </template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      session: {
        name: '',
        participants: '',
        sessionName: '',
        date: '',
        duration: '',
        email: ''
      },
      created: false,
      addtoapi: true
    }
  },
  methods: {
    addToAPI () {
      let newSession = {
        name: this.session.name,
        participants: this.session.participants,
        sessionName: this.session.sessionName,
        date: this.session.date,
        duration: this.session.duration,
        email: this.session.email
      }
      console.log(newSession)
      axios.post('http://localhost:3000/api/Session', newSession)
        .then((response) => {
          console.log(response)
          this.created = true
          this.addtoapi = false
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
  <style>
  </style>
