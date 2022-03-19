<template>
  <div id="profile">
    <h1><center>{{ msg }}</center></h1>
    <div class="box">
      <img src="./image/mora.jpg" alt="Mora Photo" class="photo">
      <div class="about">
        <p>Profile:</p>
        <p><b>Name: </b>John Rubin Mora</p>
        <p><b>Objective: </b>To help and contribute into the development of the company.</p>
        <p><b>Course: </b>Information Technology </p>
        <p><b>Specialization: </b>Web Development </p>
        <p><b>Year Level: </b>2nd Year </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile'
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
    margin: 1% 100px 10px 1px;
}
img {
    margin: 1% auto 20px auto;
}
</style>
