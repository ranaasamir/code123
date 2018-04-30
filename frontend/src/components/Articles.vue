<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<template>
  <body>
  <home></home>
  <div id="app">

    <div class="container">
      <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
      <h3>Articles</h3>
      <a :href="'/#/createArticle/'">Create new article</a>
      <div class="span8" v-for="article_details in ShowTable" :key="article_details._id">
        <h1>{{article_details.Name}}</h1>
        <p>{{article_details.Content}}</p>
        <div>
          <div class="tags">
            <span class="btn-info"><a :href="'/#/Article/' + article_details._id">View</a></span>
            <span class="btn-info"><a :href="'/#/editArticle/' + article_details._id">Edit</a></span>
            <span class="btn-info" v-on:click="Delete(article_details._id)">Delete</span>
          </div>
        </div>
        <div class="clear"></div>
        <hr>
      </div>
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
<style>
  .clear {
    clear:both;
  }
  .btn-info {
    margin-right:15px;
    text-transform:uppercase;
    padding:10px;
    display:block;
    float:left;
  }
  .btn-info a {
    display:block;
    text-decoration:none;
    width:100%;
    height:100%;
    color:#fff;
  }
  .more.label {
    float:right;
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
