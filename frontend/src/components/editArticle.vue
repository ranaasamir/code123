<template>
  <div class="container">
    <h3>Edit Article</h3>
    <input type="hidden" v-model="Article._id">
    Article Name: <input type="text" v-model="Article.Name" placeholder="Enter name of article..">
    <br>
    Article Date: <input type="text" v-model="Article.Dates" placeholder="Enter date of article..">
    <br>
    Article Author: <input type="text" v-model="Article.Author" placeholder="Enter name of Author..">
    <br>
    <vue-editor v-model="Article.Content"></vue-editor>
    <br>
    <br>
    <button class="btn btn-primary btn-sm" @click="saveArticle()" style="height:50px">Save</button>
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
</style>

<script>
import axios from 'axios'
import {VueEditor} from 'vue2-editor'

export default{
  components: {
    VueEditor
  },

  data () {
    return {
      Article: []
    }
  },
  beforeMount () {
    this.init()
  },
  methods: {
    saveArticle () {
      axios.post('http://localhost:3000/api/article/saveArticle',
        {
          _id: this.Article._id,
          Name: this.Article.Name,
          Dates: this.Article.Dates,
          Content: this.Article.Content,
          Author: this.Article.Author
        })
        .then(response => {
          this.$router.push('../Articles')
        })
        .catch(e => {
        })
    },
    init () {
      axios.get('http://localhost:3000/api/article/getArticle/' + this.$route.params._id)
        .then((response) => {
          this.Article = response.data.article[0]
        })
        .catch((error) => {
          console.log(error)
        }
        )
    }
  }

}
</script>
