<template>
  <div class="container comp">
    <div class="textdiv">
      <h3>Vitaminler</h3>
      <p>Vitaminler, vücudumuzun normal işlevlerini sürdürebilmesi için gerekli olan organik bileşiklerdir. Vücut, çoğu
        vitamin üretemez, bu nedenle dengeli bir diyetle vitamin alımını sağlamak hayati öneme sahiptir. Her bir vitaminin
        farklı fonksiyonları ve sağlık yararları vardır.
      </p>
      <p class=" rev">Biz, sağlığınıza değer katmak için en iyisini sunmaya kararlıyız. Tüm vitaminlerimiz, doğal
        kaynaklardan elde edilerek üretilir ve en yüksek kalite standartlarına uygun bir şekilde formüle edilir. Sizin
        için en iyisini sunabilmek adına, vitaminlerimiz uzman ekibimiz tarafından titizlikle incelenir ve onaylanır.</p>
      <img src="../assets\plant2.png" class="plant2" alt="">
    </div>
    <div class="imgdiv">
      <img src="../assets/vitamins.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.comp {
  display: flex;
  justify-content: space-evenly;

  .imgdiv {
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

@media only screen and (max-width: 480px) {

  .section,
  .comp {
    flex-direction: column;
    width: 100%;

    .textdiv {
      width: 100%;
      text-align: center;
    }

    .imgdiv {
      width: 100%;
    }
  }
}
</style>