<template>
  <div class="container comp">
    <div class="textdiv">
      <h3>Vitaminler</h3>
      <p>Vitaminler, vücudumuzun normal işlevlerini sürdürebilmesi için gerekli olan organik bileşiklerdir. Vücut, çoğu
        vitamin üretemez, bu nedenle dengeli bir diyetle vitamin alımını sağlamak hayati öneme sahiptir. Her bir vitaminin
        farklı fonksiyonları ve sağlık yararları vardır.
      </p>
      <p class=" rev">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur sint natus doloremque
        hic quidem
        praesentium totam debitis, aperiam ad perspiciatis dicta mollitia unde provident quibusdam sed excepturi quasi
        dolor.</p>
      <img src="../assets\plant2.png" class="plant2" alt="">
    </div>
    <div class="imgDiv">
      <img src="../assets/vitamins.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabls.scss";

.comp {
  display: flex;
  justify-content: space-evenly;

  .imgDiv {
    width: 50%;

    img {
      width: 100%;
    }
  }


  .textdiv {
    color: #084f9e;
    width: 36%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    gap: 40px;

    .plant2 {
      position: absolute;
      top: 38px;
      left: -177px;
      width: 60%;
      z-index: -100;
    }

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
      padding-inline: 12px;
    }
  }
}
</style>