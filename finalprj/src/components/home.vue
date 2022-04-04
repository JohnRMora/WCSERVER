<template>
  <body>
    <div class="home">
      <h1><center>Welcome to my Website!</center></h1>  
      <h3><center>This is my VueJS Routing and Navigation Website</center></h3>
      <center><img src="https://www.fg-a.com/welcome/2018-welcome-header.jpg" width="720" height="220" border="0" alt="Clipart" /></center>
    </div>
  </body>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background-color: powderblue;
}
</style>