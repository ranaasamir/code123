<template>
  <body>
  <home></home>
  <div id="app">

    <div class="container">

      <h3>Articles</h3>
      <a :href="'/#/createArticle/'">Create new article</a>
      <table class="table table-striped table-borders">
        <thead>
        <tr>
          <th class="center">
            Name
          </th>
          <th class="center">
            Dates
          </th>
          <th class="center">
            Content
          </th>
          <th class="center">
            Author
          </th>
          <th class="center">
            View
          </th>
          <th class="center">
            Edit
          </th>
          <th class="center">
            Delete
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="article_details in ShowTable" :key="article_details._id">
          <td>{{article_details.Name}}</td>
          <td>{{article_details.Dates}}</td>
          <td>{{article_details.Content}}</td>
          <td>{{article_details.Author}}</td>
          <td><a :href="'/#/Article/' + article_details._id">View</a></td>
          <td><a :href="'/#/editArticle/' + article_details._id">Edit</a></td>
          <td><button type="submit" v-on:click="Delete(article_details._id)">Delete</button></td>
        </tr>
        </tbody>
      </table>
    </div>
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
import {VueEditor} from 'vue2-editor'
import Home from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    VueEditor,
    'home': Home,
    'foot': Footer
  },
  beforeMount () {
    this.mounted()
  },
  data () {
    return {
      ShowTable: []
    }
  },
  methods: {
    mounted () {
      axios.get('http://localhost:3000/api/article/getArticles')
        .then((response) => {
          this.ShowTable = response.data.article
        })
        .catch((error) => {
          console.log(error)
        }
        )
    },
    Delete (articleId) {
      console.log(articleId)
      axios.post('http://localhost:3000/api/article/deleteArticle', {articleId: articleId})
        .then((response) => {
          location.reload()
        })
        .catch((error) => {
          console.log(error)
        }
        )
    }
  }
}
</script>
