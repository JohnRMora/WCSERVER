<template>
  <div id="skills">
    <h1><center>{{ msg }}</center></h1>
    <div class="box3">
      <div class="skill">
          <p>Skills</p>
          <ul>
            <li>Java Coding Skill</li>
            <li>Nodejs Coding Skill</li>
            <li>PHP Coding Skill</li>
            <li>Python Coding Skill</li>
          </ul>         
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills'
}
</script>

<style>
.box3{
    background-color: #f1f1f1;
    width: 40%;
    height: 200px;
    margin: 10px 20% auto 30%;
    line-height: 15px;
    font-size: 20px;
    border-style: solid;
    border-radius: 20px;
    display: flex;
}
.skill{
    margin: 20px 10px;
}
.skill p:nth-child(1){
    color: #403e3e;
    font-family: calibri;
    font-weight: bold;
    font-size:  25px;
    line-height: 0px;
    margin: 0px auto 6% auto;
}
.skill li {
    font-size:16px;
    font-family: calibri;
    line-height: 25px;
    margin: 0px auto 0px 20px;
}
</style>
