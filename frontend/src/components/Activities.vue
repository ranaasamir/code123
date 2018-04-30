<template>
  <html>
  <div v-if="act">
  <h1>Activities</h1>

  <!-- A button so that the admin can add activities -->

  <article>
    <a onclick="location.href = 'http://localhost:8080/#/Activities/AddActivity';" class="button-1">Add an Activity</a>
  </article>
  <p>We have the following activities:</p>

  <!-- listing all the activities, so that parents can register their child -->

  <div class="wrapper">
    <article>
      <h3>Swimming Activity</h3>
      <p>This is the first activity. It will be held next Friday from 10 am to 12 pm on our private swimming pool. The first 2 lessons are free and then there will be a monthly payment.</p>
      <p onclick="location.href = 'http://localhost:8080/#/Activities/RegisterMyChild';" class="button-1">Register my child</p>
      <p onclick="location.href = 'http://localhost:8080/#/Activities/AddReview';" class="button-1">Add Review</p>
      Show Interest <input type="checkbox" id="checkbox" v-model="checked">
      <button v-on:click="addToProfile">Add to my profile</button>
    </article>
    <article>
      <h3>Dancing Activity</h3>
      <p>This is the second activity. It will be held next Friday from 12:30 pm to 2:30 pm on our private stage. The first 2 lessons are free and then there will be a monthly payment.</p>
      <p onclick="location.href = 'http://localhost:8080/#/Activities/RegisterMyChild';" class="button-1">Register my child</p>
      <p onclick="location.href = 'http://localhost:8080/#/Activities/AddReview';" class="button-1">Add Review</p>
      Show Interest <input type="checkbox" id="checkbox" v-model="checked">
      <button v-on:click="addToProfile">Add to my profile</button>
    </article>
    <article>
      <h3>Musical Activity</h3>
      <p>This is the third activity. It will be held next Friday from 3 pm to 5 pm in the Music Class. The first 2 lessons are free and then there will be a monthly payment.</p>
      <p onclick="location.href = 'http://localhost:8080/#/Activities/RegisterMyChild';" class="button-1">Register my child</p>
      <p onclick="location.href = 'http://localhost:8080/#/Activities/AddReview';" class="button-1">Add Review</p>
      Show Interest <input type="checkbox" id="checkbox" v-model="checked">
      <button v-on:click="addToProfile">Add to my profile</button>
    </article>
  </div>
  </div>
  </html>
</template>

// The script of showing interest in an activity

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
      int: {
        interest: ''
      },
      submitted: false,
      add: false
    }
  },
  methods: {
    addToAPI () {
      let newInt = {
        interest: this.int.interest
      }
      console.log(newInt)
      axios.post('http://localhost:3000/api/createInterest', newInt)
        .then((response) => {
          console.log(response)
          this.submitted = true
          this.add = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // this method add the activity to the child profile.
    addToProfile () {
      let body = {
        userId: '5ae344e05308bc2564d90302',
        activityId: '5ae344e05308bc2564d90302'
      }
      axios.post('http://localhost:3000/api/addActivty', body)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // This method shows the form of create a new plan
    showAdd () {
      if (this.add === false) {
        this.add = true
        this.submitted = true
      } else {
        this.add = false
        this.submitted = false
      }
    }
  },
  created () {
    this.$http.get('http://localhost:3000/api/getInterest').then((response) => {
      console.log(response.data)
      this.rev = response.data
    })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
label {
color : blue;
display: block;
width: 100%;
padding: 8px;
}
#p {
  margin-left: 300px;
  width: 600px;
}
input[type="text"], textarea {
display: block;
padding: 8px;
}
textarea {
width: 200%;
height: 160px;
}
#preview {
padding: 10px 20px;
border: 1px dotted #ccc;
margin: 30px 0;
}
#plans-dis {
  margin-left: 300px;
}
h3 {
margin-left: 10px;
margin-top: 10px;
forecolor: green;
}
article {
  color: black;
  width: 600px;
}
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
#sub-button {
padding:8px;
}
</style>
