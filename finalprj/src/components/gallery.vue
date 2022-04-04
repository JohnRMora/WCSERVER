<template>
    <body>
        <div class="gallery">
            <h1><center>{{title}}</center></h1>
            <img src='../assets/1.jpg' alt="flower 1" width="300" height="400">
            <img src='../assets/2.jpg' alt="flower 2" width="300" height="400">
            <img src='../assets/3.jpg' alt="flower 3" width="300" height="400">
            <img src='../assets/4.jpg' alt="flower 4" width="300" height="400">
            <img src='../assets/5.jpg' alt="flower 5" width="300" height="400">
            <img src='../assets/6.jpg' alt="flower 6" width="300" height="400">
            <img src='../assets/7.jpeg' alt="flower 7" width="300" height="400">
            <img src='../assets/8.jpg' alt="sky" width="300" height="400">
        </div>
    </body>
</template>


<script>
    export default{
        name: 'gallery',
        data() {
            return {
                title: 'Gallery'
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
img {
    margin: 40px 0px 0px 6.5%;
}
</style>