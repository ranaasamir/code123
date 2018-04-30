<!-- A page for the admin for adding activities -->

<template>
  <html>
  <body>
    <h1>Activities</h1>
      <div class="wrapper">
        <article>
          <h3>Add an Activity</h3>
          <p><strong>Title: </strong><input v-model="act.title" placeholder="Title"></p>
          <p><strong>Description: </strong><input v-model="act.description" placeholder="Description"></p>
          <a @click= "addToAPI" class="button-1">Add</a>
        </article>
      </div>
      <div v-if="data1">
        <p> {{ act.title }} </p>
        <p> {{ act.description }} </p>
      </div>
  </body>
  </html>
</template>

// The script for adding activities

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
      act: {
        title: '',
        description: ''
      },
      submitted: false,
      add: false,
      data1: false
    }
  },
  methods: {
    addToAPI () {
      let newAct = {
        title: this.act.title,
        description: this.act.description
      }
      console.log(newAct)
      axios.post('http://localhost:3000/api/createAddAct', newAct)
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
    this.$http.get('http://localhost:3000/api/getActivity').then((response) => {
      console.log(response.data)
      this.rev = response.data
    })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
