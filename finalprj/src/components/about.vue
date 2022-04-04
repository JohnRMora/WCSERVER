<template>
    <body>
        <div class="about">
            <h1><center>About Me!</center></h1>
            <center><img src="../assets/mora.jpg" alt="Mora" width="300" height="300"></center>
            <center><p>I am John Rubin Mora <br /> 
            A 2nd Year Student in Holy Angel University <br /> 
            My current course is Information Technology Specialized in Web Development <br />
            I am 20 years old</p></center>
        </div>
    </body>
</template>

<script>
    export default{
        name: 'about',
        data() {
            return {
                title: 'About'
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
p {
    font-family: verdana;
    font-weight: bold;
}
</style>