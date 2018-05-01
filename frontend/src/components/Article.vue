<template>
  <div class="container">
    <div id="google_translate_element"></div>
    <a :href="'/#/Articles/'">Back</a>
    <h1>{{Article.Name}}</h1>
    <p>{{Article.Content}}</p>
    <span>Created by : {{Article.Author}}</span>
    <br>
    <span>at : {{Article.Dates}}</span>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1" id="logout">
          <div class="page-header">
            <h3 class="reviews">Leave your comment</h3>
            <input type="text" v-model="Comment" placeholder="Comment here..">
            <button class="btn btn-primary btn-sm" @click="addComment()" style="height:25px">Add Comment</button>
          </div>
          <div class="comment-tabs">
            <ul class="nav nav-tabs" role="tablist">
              <li class="active"><h4 class="reviews text-capitalize">Comments</h4></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="comments-logout">
                <ul class="media-list">
                  <li class="media" v-for="comment in Comments" :key="comment._id">
                    <div class="media-body">
                      <div class="well well-lg">
                        <h4 class="media-heading text-uppercase reviews">User Name </h4><span>{{comment.Dates}}</span>
                        <p class="media-comment">
                          {{comment.comment}}
                        </p>
                    </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="tab-pane" id="add-comment">
                <form action="#" method="post" class="form-horizontal" id="commentForm" role="form">
                  <div class="form-group">
                    <label for="email" class="col-sm-2 control-label">Comment</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" name="addComment" id="addComment" rows="5"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="uploadMedia" class="col-sm-2 control-label">Upload media</label>
                    <div class="col-sm-10">
                      <div class="input-group">
                        <div class="input-group-addon">http://</div>
                        <input type="text" class="form-control" name="uploadMedia" id="uploadMedia">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button class="btn btn-success btn-circle text-uppercase" type="submit" id="submitComment"><span class="glyphicon glyphicon-send"></span> Summit comment</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane" id="account-settings">
                <form action="#" method="post" class="form-horizontal" id="accountSetForm" role="form">
                  <div class="form-group">
                    <label for="avatar" class="col-sm-2 control-label">Avatar</label>
                    <div class="col-sm-10">
                      <div class="custom-input-file">
                        <label class="uploadPhoto">
                          Edit
                          <input type="file" class="change-avatar" name="avatar" id="avatar">
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name" class="col-sm-2 control-label">Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" name="name" id="name" placeholder="Vilma palma">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="nickName" class="col-sm-2 control-label">Nick name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" name="nickName" id="nickName" placeholder="Vilma">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" name="email" id="email" placeholder="vilma@mail.com">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="newPassword" class="col-sm-2 control-label">New password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" name="newPassword" id="newPassword">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword" class="col-sm-2 control-label">Confirm password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" name="confirmPassword" id="confirmPassword">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button class="btn btn-primary btn-circle text-uppercase" type="submit" id="submit">Save changes</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notes text-center"><small>Image credits: uifaces.com</small></div>
  </div>

</template>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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
  /*
    Image credits:
    uifaces.com (http://uifaces.com/authorized)
*/

  #login { display: none; }
  .login,
  .logout {
    position: absolute;
    top: -3px;
    right: 0;
  }
  .page-header { position: relative; }
  .reviews {
    color: #555;
    font-weight: bold;
    margin: 10px auto 20px;
  }
  .notes {
    color: #999;
    font-size: 12px;
  }
  .media .media-object { max-width: 120px; }
  .media-body { position: relative;
    display: unset !important;}
  .media-date {
    position: absolute;
    right: 25px;
    top: 25px;
  }
  .media-date li { padding: 0; }
  .media-date li:first-child:before { content: ''; }
  .media-date li:before {
    content: '.';
    margin-left: -2px;
    margin-right: 2px;
  }
  .media-comment { margin-bottom: 20px; }
  .media-replied { margin: 0 0 20px 50px; }
  .media-replied .media-heading { padding-left: 6px; }

  .btn-circle {
    font-weight: bold;
    font-size: 12px;
    padding: 6px 15px;
    border-radius: 20px;
  }
  .btn-circle span { padding-right: 6px; }
  .embed-responsive { margin-bottom: 20px; }
  .tab-content {
    padding: 50px 15px;
    border: 1px solid #ddd;
    border-top: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .custom-input-file {
    overflow: hidden;
    position: relative;
    width: 120px;
    height: 120px;
    background: #eee url('https://s3.amazonaws.com/uifaces/faces/twitter/walterstephanie/128.jpg');
    background-size: 120px;
    border-radius: 120px;
  }
  input[type="file"]{
    z-index: 999;
    line-height: 0;
    font-size: 0;
    position: absolute;
    opacity: 0;
    filter: alpha(opacity = 0);-ms-filter: "alpha(opacity=0)";
    margin: 0;
    padding:0;
    left:0;
  }
  .uploadPhoto {
    position: absolute;
    top: 25%;
    left: 25%;
    display: none;
    width: 50%;
    height: 50%;
    color: #fff;
    text-align: center;
    line-height: 60px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,.3);
    border-radius: 50px;
    cursor: pointer;
  }
  .custom-input-file:hover .uploadPhoto { display: block; }
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
