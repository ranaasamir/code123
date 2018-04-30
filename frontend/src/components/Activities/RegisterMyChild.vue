<!-- A page viewed to the parent to register his/her child in an activity -->

<template>
  <html>
  <body>
    <h1>Activities</h1>
    <form v-on:submit.prevent="newActReg">
      <div class="wrapper">
          <article>

            <!-- Here are all the required fields
            and at the end the parent will be redirected to another page -->

              <h3>Registeration</h3>
              <p><strong>Child ID: {{ childId }}</strong><input v-model="actReg.childId" placeholder="Child ID"></p>
              <p><strong>Child Name: {{ childName }}</strong><input v-model="actReg.childName" placeholder="Child Name"></p>
              <p><strong>Parent Name: {{ parentName }}</strong><input v-model="actReg.parentName" placeholder="Parent Name"></p>
              <p><strong>Age: {{ age }}</strong><input v-model="actReg.age" placeholder="Age"></p>
              <p><strong>Class: {{ childClass }}</strong><input v-model="actReg.childClass" placeholder="Class"></p>
              <p><strong>Mobile: {{ mobile }}</strong><input v-model="actReg.mobile" placeholder="Mobile"></p>
              <a onclick="location.href = 'http://localhost:8080/#/Activities/Registered';" class="button-1">Register</a>
          </article>
        </div>
      </form>
    </body>
    </html>
  </template>

<!-- The script for registering a child in an activity -->

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
      actReg: {
        childId: '',
        childName: '',
        parentName: '',
        age: '',
        childClass: '',
        mobile: ''
      },
      submitted: false,
      add: false
    }
  },
  methods: {
    addToAPI () {
      let newActReg = {
        childId: this.actReg.childId,
        childName: this.actReg.childName,
        parentName: this.actReg.parentName,
        age: this.actReg.age,
        childClass: this.actReg.childClass,
        mobile: this.actReg.mobile
      }
      console.log(newActReg)
      axios.post('http://localhost:3000/api/createActReg', newActReg)
        .then((response) => {
          console.log(response)
          this.submitted = true
          this.add = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
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
    this.$http.get('http://localhost:3000/api/getActReg').then((response) => {
      console.log(response.data)
      this.actReg = response.data
    })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
