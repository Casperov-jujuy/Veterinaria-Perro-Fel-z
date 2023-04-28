<script setup>
let position = 1;
setInterval(function(){
    document.getElementById('radio'+position).checked = true;
    position++;
    if(position>3){
      position=1
    }

},4000);
</script>

<template>
  

  <div class="slider mx-auto">
    <div class="slides">
      <!-- Botoncitos -->
      <input type="radio" name="radio-btn" id="radio1">
      <input type="radio" name="radio-btn" id="radio2">
      <input type="radio" name="radio-btn" id="radio3">
      <!-- Imagenes -->
      <div class="slide first">
        <img src="@/assets/img/a1.jpg" alt="">
      </div>
      <div class="slide">
        <img src="@/assets/img/a2.jpg" alt="">
      </div>
      <div class="slide">
        <img src="@/assets/img/a3.jpg" alt="">
      </div>

      <!-- Nvegacion automatica -->
      <div class="navigation-auto ">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
      </div>
    </div>

    <div class="navigation-manual space-x-9">
      <label for="radio1" class="manual-btn"></label>
      <label for="radio2" class="manual-btn"></label>
      <label for="radio3" class="manual-btn"></label>
    </div>
  </div>
</template>

<style scoped>
.slider{
  height: 700px;
  width:80rem;
  border-radius: 4px;
  overflow: hidden;
}
.slides{
  height: 500px;
  width: 500%;
  display: flex;
}
.slides input{
  display: none;
}
.slide{
  width: 20%;
  transition: 3s;
}
.slide img{
  width: 80rem;
  height: 700px;
  object-fit: cover;
}
/* Navegación manual */
.navigation-manual{
  position: absolute;
  width: 80rem;
  margin-top: 120px;
  display: flex;
  justify-content: center;
}
.manual-btn{
  height: 20px;
  width: 20px;
  border: 3px solid #f3f3f3;
  margin-right:4px;
  border-radius: 10px;
  cursor: pointer;
  transition:1s;
}
.manual-btn:hover{
  background-color: aliceblue;
}
#radio1:checked ~ .first{
  margin-left: 0;
}
#radio2:checked ~ .first{
  margin-left: -20%;
}
#radio3:checked ~ .first{
  margin-left: -40%;
}
/* Navegación automatica */
.navigation-auto{
  position:absolute;
  display: flex;
  width:80rem;
  justify-content: center;
  margin-top: 620px;
}
.navigation-auto div{
  height: 20px;
  width: 20px;
  border: 3px solid #f3f3f3;
  padding: 5px;
  border-radius: 10px;
  transition: 3s;
}
.navigation-auto div:not(:last-child){
  margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1{
  background-color: #f3f3f3;
}

#radio2:checked ~ .navigation-auto .auto-btn2{
  background-color: #f3f3f3;
}

#radio3:checked ~ .navigation-auto .auto-btn3{
  background-color: #f3f3f3;
}
</style>