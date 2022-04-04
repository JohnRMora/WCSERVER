<template>
    <body>
        <div class="contact">
            <h1>Contact</h1>
            <p>Send a message</p>
            <div >
                <input type="text" id="username" name="username" placeholder="Name"  required/>
            </div>
            <br />
            <div>
                <input type="email" id="email" name="email" placeholder="Email"  required/>
            </div>
            <br />
            <div>
                <textarea id="message" name="message" rows="5" width="400" height="500" placeholder="Message" required></textarea>
            </div>
            <br />
            <input type="submit" name="submit" value="Submit" id="submit">
        </div>
    </body>
</template>

<script>
    export default{
        name: 'contact',
        data() {
            return {
                title: 'Contact'
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
p {
    font-family: verdana;
    font-weight: bold;
}
body {
  background-color: powderblue;
}
.contact {
    text-align: center;
}
.submit {
    width: 100px;
}
#username, #email {
    width: 300px;
}
#message {
    width: 300px;
    height: 15%;
}
</style>