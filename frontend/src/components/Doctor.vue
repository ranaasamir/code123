<template>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
  <home></home>
  <!-- Title -->
  <div id="mon">
    <div class="wrapper">
      <h2><center>Talent wins games, but teamwork and intelligence wins championships </center></h2>
    </div>
  </div>
  <!-- Style of buttons and text -->
  <div id="design">
    <div>
      <ul>
        <!-- redirect to upload vue -->
        <li class="design-1">
          <a onclick="location.href = 'http://localhost:8080/#/upload';" class="button-1">
            <a class="button-1"><center><h4>Join us</h4></center></a>
          </a>
            <p>Are you a certified phycologist? Come join us in developing and applying scientific knowledge to children.</p>

        </li>

        <li class="design-2">
          <!-- redirect to view Psychologist schedule -->
          <a onclick="location.href = 'http://localhost:8080/#/Psychologist';" class="button-1">
            <div id="point">
            <h4>View</h4>
            </div>

          </a>
            <p>View all certified phycologists</p>
        </li>

        <div class="clear"></div>
      </ul>
    </div>
  </div>
<!--Jquery cdn-->
<!--materializecss-->
 <script type=“script/javascript”
   src="https://code.jquery.com/jquery-3.2.1.min.js"
   integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
   crossorigin="anonymous"></script>
  <script type=“script/javascript” src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
</body>
</html>
</template>
<style>
body {
    background: url('../assets/blur.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #777;
    font: normal 15px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
}
#mon h2 {
    font-size: 40px;
    color: #000000;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 100px;
}
#design ul {
    margin-left: 320px;
    margin-top: 90px;
    color: #000000;
}
#design ul li {
    font-size: 20px;
    width: 290px;
    padding-top: 140px;
    float: left;
    margin-right: 10px;
    text-align: center;
    color: #000000;
}
#design ul li.design-1 {
    background: url('../assets/upload.png') no-repeat top center;
}
#design ul li.design-2 {
    background: url('../assets/search.png') no-repeat top center;
}
.button-1 {
    display: block;
    text-align: center;
    vertical-align: middle;
    background: #444;
    border-radius: 3px;
    color: #fff;
    width: 190px;
    height: 50px;
    font-size: 25px;
    line-height: 50px;
    margin: 0 auto;
    cursor: pointer;
}
.button-1:hover {
    background-color: #02b8dd;
    color: #fff;
}

img {
    border-radius: 50%;
}

 #Cv_design {
   position: fixed;
   top: 15%;
   left: 48%;
   margin-top: -10px;
   margin-left: -150px;
 }

</style>
<script>
import Home from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    'home': Home,
    'foot': Footer
  }

}

</script>
