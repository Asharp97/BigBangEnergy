<template>
  <div class="container comp">
    <div class="textdiv">
      <h3>Şampuanlar</h3>
      <p>Vitaminler, vücudumuzun normal işlevlerini sürdürebilmesi için gerekli olan organik bileşiklerdir. Vücut, çoğu
        vitamin üretemez, bu nedenle dengeli bir diyetle vitamin alımını sağlamak hayati öneme sahiptir. Her bir vitaminin
        farklı fonksiyonları ve sağlık yararları vardır.

        Lorem ipsum dolor sit amet consectetur. Scelerisque varius et scelerisque at vel scelerisque magna. Faucibus augue
        rhoncus porttitor sagittis orci quis.
      </p>
      <p class="rev">
        Sağlıklı bir gelecek için doğru adım atın ve BigBang Energy ile sağlığınıza değer katın! Unutmayın, sağlıklı bir
        yaşam için doğru beslenme önemlidir ve doğru vitaminler, enerjinizi artırmanıza ve günlük zorluklarla başa
        çıkmanıza yardımcı olur.</p>
    </div>
    <div class="imgdiv">
      <img src="../assets/shampoo.png" alt="">
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

  .imgdiv {
    width: 55%;

    img {
      width: 100%;
    }
  }

  .textdiv {
    color: $primary;
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
      width: 80%;
      margin-inline: auto;
      position: relative;

      img {
        position: absolute;
        right: -200px;
        top: -500px;
        z-index: -12;
      }
    }
  }

  h3 {
    text-align: center
  }
}
</style>