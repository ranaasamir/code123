<!-- A page for adding a review to an activity -->

<template>
  <html>
  <body>
    <h1>Activities</h1>
      <div class="wrapper">
          <article>
              <h3>Add a Review</h3>
              <p><strong>Review: {{ review }}</strong><input v-model="review" placeholder="Review"></p>
              <a onclick="location.href = 'http://localhost:8080/#/Activities/ReviewAdded', myFunction();" class="button-1">Add the Review</a>
          </article>
        </div>
    </body>
    </html>
  </template>

<!-- The script for adding the review -->

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
      rev: {
        review: ''
      },
      submitted: false,
      add: false
    }
  },
  methods: {
    addToAPI () {
      let newRev = {
        review: this.rev.review
      }
      console.log(newRev)
      axios.post('http://localhost:3000/api/createReview', newRev)
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
    this.$http.get('http://localhost:3000/api/getReview').then((response) => {
      console.log(response.data)
      this.rev = response.data
    })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
