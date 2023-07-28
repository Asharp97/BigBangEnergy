<template>
  <div class="container comp">
    <div class="textdiv">
      <h3>Üretim Portföyümüz</h3>
      <p>BigBang Energy olarak, gururla sunmakta olduğumuz geniş üretim portföyümüz ile müşterilerimize çeşitlilik ve
        kaliteyi bir arada sunuyoruz. Müşteri memnuniyetini temel ilke olarak benimseyen firmamız, farklı sektörlerden ve
        ihtiyaçlardan müşterilerimize hitap eden ürünlerimizle her zaman yanınızdadır.
      </p>
      <div class="stepComp">

        <img src="../assets\before.png" style="width:25px;" alt="" class="before">
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
    <div class="imgdiv">
      <img src="../assets/prodport.png" alt="">
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

  justify-content: space-between;

  .imgdiv {
    width: 43%;

    img {
      width: 100%;
    }
  }

  .textdiv {
    color: #084f9e;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }

  .stepComp {
    display: flex;
    gap: 10px;

    .steps {
      display: flex;
      flex-direction: column;
      gap: 12px;
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
      width: 80%;
      margin-inline: auto;
    }
  }

  h3 {
    text-align: center
  }

  .before {
    display: none;
  }
}
</style>