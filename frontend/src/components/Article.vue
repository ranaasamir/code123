<template>
  <div class="container">
    <div id="google_translate_element"></div>
    <a :href="'/#/Articles/'">Back</a>
    <h1>{{Article.Name}}</h1>
    <p>{{Article.Content}}</p>
    <span>Created by : {{Article.Author}}</span>
    <br>
    <span>at : {{Article.Dates}}</span>
    <h2>Comments</h2>
    <input type="text" v-model="Comment" placeholder="Comment here..">
    <button class="btn btn-primary btn-sm" @click="addComment()" style="height:25px">Comment</button>
    <div v-for="comment in Comments" :key="comment._id">
      {{comment.comment}}
      {{comment.Dates}}
  </div>
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
export default{
  data () {
    return {
      Article: [],
      Comments: [],
      Comment: ''
    }
  },
  mounted () {
    if (typeof google !== 'undefined') {
      var newScript = document.createElement('script')
      var inlineScript = document.createTextNode("google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'ar,de,en,it'}, 'google_translate_element')")
      newScript.appendChild(inlineScript)
      document.head.appendChild(newScript)
    }
  },
  beforeMount () {
    this.init()
    document.onreadystatechange = function () {
      if (document.readyState === 'complete') {
        var newScript = document.createElement('script')
        var inlineScript = document.createTextNode("google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'ar,de,en,it'}, 'google_translate_element')")
        newScript.appendChild(inlineScript)
        document.head.appendChild(newScript)
      }
    }
  },
  methods: {
    addComment () {
      axios.post('http://localhost:3000/api/article/addComment',
        {
          articleId: this.Article._id,
          comment: this.Comment
        })
        .then(response => {
          location.reload()
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
      axios.get('http://localhost:3000/api/article/getComments/' + this.$route.params._id)
        .then((response) => {
          this.Comments = response.data.comments
        })
        .catch((error) => {
          console.log(error)
        }
        )
    }
  }
}
</script>
