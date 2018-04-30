<template>
  <body>
  <home></home>
<h1>Contacts:</h1>
<h2>Email:</h2>
<p>info@nawwar.co</p>
<h2>Facebook</h2>
<p><a href="https://www.facebook.com/Project.Nawwar/">www.facebook.com/Project.Nawwar</a></p>
<h2>Youtube</h2>
<p><a href="https://www.youtube.com/user/ProjectNawwar">www.youtube.com/ProjectNawwar</a></p>

<foot></foot>
</body>
</template>

<style>
body {
    background: url('../assets/blur.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 100%;
}
p {
    line-height: 20px;
    margin-bottom: 20px;
    color: #3B0101;
    font-size: 40px;
}
h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
h2 {
    font-weight: 300;
    color: #070707;
    font-size: 45px;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 20px;
}

a {
    text-decoration: none;
    color: #3B0101;
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
