<template>
<body>
<home></home>
<form>
<input class="MyButton" type="button" value="View Applications" onclick="window.location.href='http://localhost:8080/#/ViewApplications'" />
</form>
<p>

                                                    </p>
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
