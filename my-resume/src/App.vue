<template>
  <div id="app">
    <h1><center>{{ msg }}</center></h1>
    <div class="box">
      <img src="./image/mora.jpg" alt="Mora Photo" class="photo">
      <div class="about">
        <p>Profile:</p>
        <p><span class="indent"></span><b>Name: </b>John Rubin Mora</p>
        <p><span class="indent"></span><b>Objective: </b>To help and contribute into the development <span class="indent"></span>of the company.</p>
        <p><span class="indent"></span><b>Course: </b>Information Technology </p>
        <p><span class="indent"></span><b>Specialization: </b>Web Development </p>
        <p><span class="indent"></span><b>Year Level: </b>2nd Year </p>
      </div>
    </div>
    <education></education>
    <skills></skills>
  </div>
</template>

<script>
import Education from "./components/Education"
import Skills from "./components/Skills"
export default {
  name: 'app',
  components: {
    Education,
    Skills
  },
  data () {
    return {
      msg: 'My Resume'
    }
  }
}
</script>

<style>
.box{
    width: 40%;
    height: 250px;
    background-color: #f1f1f1;
    border-radius: 20px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    margin: 1% auto 20px auto;
    border-style: solid;
    flex-wrap: nowrap;
}
.about{
    width: 400px;
    line-height: 16px;
    margin: 2% 100px 10px 1px;
}
.about p:nth-child(1){
    color: #403e3e;
    font-family: calibri;
    font-weight: bold;
    font-size:  25px;
    line-height: 0px;
    margin: 0px auto 6% auto;
}
.indent {
    display: inline-block;
    margin-left: 40px;
}
img {
    margin: 1% auto 20px auto;
}
</style>
