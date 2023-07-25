<template>
  <div class="container comp">
    <div class="textdiv">
      <h3>Üretim Portföyümüz</h3>
      <p>BigBang Energy olarak, gururla sunmakta olduğumuz geniş üretim portföyümüz ile müşterilerimize çeşitlilik ve
        kaliteyi bir arada sunuyoruz. Müşteri memnuniyetini temel ilke olarak benimseyen firmamız, farklı sektörlerden ve
        ihtiyaçlardan müşterilerimize hitap eden ürünlerimizle her zaman yanınızdadır.
      </p>
      <div class="stepComp">

        <img src="../assets\before.png" style="width:25px;" alt="">
        <div class="steps">
          <div class="step">Gıda güvenliği ve lezzeti bir araya getiren ürünlerimizle, damak zevkinizi tatmin etmeyi
            hedefliyoruz.
          </div>
          <div class="step">Doğal ve taze içerikler kullanarak, özenle hazırladığımız gıda ve içecek ürünlerimizle
            sofralarınıza lezzet katıyoruz.
          </div>
        </div>
      </div>
    </div>
    <div class="imgDiv">
      <img src="../assets/prodport.png" alt="">
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

  justify-content: space-between;

  .imgDiv {
    width: 43%;

    img {
      width: 100%;
    }
  }

  .textdiv {
    color: $primary;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }
  .stepComp{
    display: flex;
    gap: 10px;
    .steps{
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>