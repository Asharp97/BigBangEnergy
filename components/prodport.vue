<template>
  <div class="container comp">
    <div class="textdiv">
      <h3>Üretim Portföyümüz</h3>
      <p>Günümüzde sağlıklı beslenme ve aktif yaşam tarzı, sağlığımızı koruma ve zindeliğimizi sürdürme konusunda büyük
        önem taşımaktadır. Dengeli bir diyetin yanı sıra vücudumuzun ihtiyaç duyduğu vitamin ve mineralleri almak da yaşam
        kalitemizi yükseltir. İşte bu noktada, vitaminli içecekler, vücudumuza doğal bir enerji kaynağı sağlamak için
        harika bir seçenek olarak ön plana çıkar.

      </p>
      <p>
        Sağlıklı bir gelecek için doğru adım atın ve BigBang Energy ile sağlığınıza değer katın! Unutmayın, sağlıklı bir
        yaşam için doğru beslenme önemlidir ve doğru vitaminler, enerjinizi artırmanıza ve günlük zorluklarla başa
        çıkmanıza yardımcı olur.</p>
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
    justify-content: space-evenly;

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }
}</style>