<template>
    <body>
        <div class="blog">
            <h1><center>Welcome to the Blog!</center></h1>
            <center><div class="container">
                <h2>What is Nodejs?</h2>
                <p>Nodejs is a runtime environment for JavaScript that runs on the server. It is open source, cross-platform, 
                    and since its introduction in 2009, it got hugely popular and now plays a significant role in the web development scene.</p>
                    
            </div></center> <br />
            <center><div class="container">
                <h2>What is Vuejs?</h2>
                <p>Vue is a progressive framework for building user interfaces. Progressive framework is a framework that you can insert 
                    into your project as you feel the need for it</p>
            </div></center> <br />
             <center><div class="container">
                <h2>What is Express?</h2>
                <p>Express.js is a web framework which is based on the core Node.js http module. 
                    It is a big strength of Node.js that makes the development significantly easier and much faster.
                    It is an abstraction layer that stays on the top of the Node's built-in HTTP server.</p>
            </div></center>
        </div>
    </body>
</template>

<script>
    export default{
        name: 'blog',
        data() {
            return {
                title: 'Blog'
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
.container {
  background-color: white;
  padding: 10px;
  margin: 0px 120px 0px 100px;
  width: 500px;
  border: black;
  border-width: 5px;
  border-style: solid;
  text-align: center;
}
</style>