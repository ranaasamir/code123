<template>
<body>
<home></home>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<h2><strong>Your Account Is Now Verified</strong><br/>
Welcome To Nawwar</h2>
<a onclick="location.href = 'http://localhost:8080/#/Profile';" class="button-1">Explore</a>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
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
import Home from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    'home': Home,
    'foot': Footer
  }

}

</script>
