<template>
  <div id="education">
    <h1><center>{{ msg }}</center></h1>
    <div class="box2">
        <div class="info">
            <p>Education</p>
            <p><span class="indent"></span><b>2018 Apr</b><span class="indent"></span> Hillcrest Baptist Academy <br />
                <span class="indent"></span><b>2020 Apr</b><span class="indent"></span> Holy Angel University <br />
                </p>
                        
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education'
}
</script>

<style>
.box2{
    background-color: #f1f1f1;
    width: 40%;
    height: 150px;
    margin: 10px 20% auto 30%;
    line-height: 15px;
    font-size: 20px;
    border-style: solid;
    border-radius: 20px;
    display: flex;
}
.info{
    margin: 20px 10px;
}
.indent {
    display: inline-block;
    margin-left: 40px;
}
.info p:nth-child(1){
    color: #403e3e;
    font-family: calibri;
    font-weight: bold;
    font-size:  25px;
    line-height: 0px;
    margin: 0px auto 6% auto;
}
.info p:nth-child(2){
    font-size:16px;
    font-family: calibri;
    line-height: 25px;
}
</style>
