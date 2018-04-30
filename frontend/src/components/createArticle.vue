<template>
  <body>
  <div id="app">
    <div id="google_translate_element"></div>

    <br>
    Article Name: <input type="text" v-model="aa.Name" placeholder="Enter name of article..">
    Article Date: <input type="text" v-model="aa.Dates" placeholder="Enter date of article..">
    Article Author:  <input type="text" v-model="aa.Author" placeholder="Enter name of Author..">
    <vue-editor v-model="aa.Content"></vue-editor>
    <br>
    <br>
    <button class="btn btn-primary btn-sm" @click="Article()" style="height:50px">Create Article</button>
  </div>

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
import {VueEditor} from 'vue2-editor'
import Home from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    VueEditor,
    'home': Home,
    'foot': Footer
  },
  created () {
  },

  mounted: function () {
  },
  data () {
    return {
      aa: {
        content: '<h1>Some initial content</h1>',
        Name: '',
        Dates: '',
        Content: '',
        Author: ''
      },
      bb: {
        aname: '',
        Comments: '',
        Dates: ''
      },
      p: [],
      r: []
    }
  },
  methods: {
    Article () {
      axios.post('http://localhost:3000/api/article/createArticle',
        {
          Name: this.aa.Name,
          Dates: this.aa.Dates,
          Content: this.aa.Content,
          Author: this.aa.Author
        })
        .then(response => {
          this.$router.push('../Articles')
        })
        .catch(e => {
        })
    }
  }

}

</script>
