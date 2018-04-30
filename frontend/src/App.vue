<template>
  <div id="app">
   <router-view>
   <router-link :to="{ name: 'Register' }">Navigate to Register</router-link>
   </router-view>
  </div>
</template>

<script>
export default {
  beforeMount () {
    let translateScript = document.createElement('script')
    translateScript.type = 'text/javascript'
    translateScript.setAttribute('src', 'http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
    document.head.appendChild(translateScript)
  }
}
</script>
