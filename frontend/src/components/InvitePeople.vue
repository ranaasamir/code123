<template>
<body>
<home></home>
        <div class="col-md-12">
                <h1 align="center"> Invite </h1>
                <form>
                  Name:<br>
                  <input type="text" name="name"><br>
                  <br>
                  ID:<br>
                  <input input type="text" id="id"><br>
                  </form>
                  <br>
                  <br>
                  <br>
                  <button v-on:click="onClick" >Invite</button>

                  </div>
                  <br>
                  <br>
                  <foot></foot>
                  </body>
              </template>
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
