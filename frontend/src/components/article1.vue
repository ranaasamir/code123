<template>
  <body>
  <home></home>
  <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


  <div class="container">
  	<div class="span8">
          <h1>Article name first</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum ex eget porttitor sollicitudin. Morbi cursus tempor placerat. Pellentesque suscipit tortor in orci pretium, ac facilisis ex pretium. Fusce hendrerit orci diam, vitae tristique quam porttitor eu. Donec ligula orci, ultricies in sagittis non, porta sed lorem. Aenean interdum posuere mattis. Curabitur dignissim dictum quam, vitae malesuada velit tristique a. </p>
          <div>
              <div class="tags">
                  <span class="btn-info"><a href="#">View</a></span><span class="btn-info"><a href="#">Edit</a></span><span class="btn-info"><a href="#">Delete</a></span>
              </div>
          </div>
          <div class="clear"></div>
          <hr>
          <h1>Article name second</h1>
          <p>Sed interdum massa ac pretium faucibus. Integer semper euismod lorem faucibus molestie. Aenean luctus ut metus eget dignissim. Sed tincidunt augue non elementum pharetra. Suspendisse non feugiat urna. Etiam egestas neque euismod neque sollicitudin consectetur. Fusce facilisis augue a velit porta scelerisque. Sed mattis justo sapien. Sed ultrices lectus diam, id vestibulum ante finibus a. </p>
          <div>
              <div class="more label"><a href="#">Read more</a></div>
              <div class="tags">
                  <span class="btn-info"><a href="#"></a>energy</a></span><span class="btn-info"><a href="#">reality</a></span><span class="btn-info"><a href="#">world</a></span>
              </div>
          </div>
          <hr>
      </div>
  </div>
<foot></foot>

</body>

</template>
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
