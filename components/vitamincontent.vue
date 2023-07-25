<template>
  <div class="container comp">
    <div class="textdiv">
      <h3>Vitaminli İçecekler</h3>
      <p>Günümüzde sağlıklı beslenme ve aktif yaşam tarzı, sağlığımızı koruma ve zindeliğimizi sürdürme konusunda büyük
        önem taşımaktadır. Dengeli bir diyetin yanı sıra vücudumuzun ihtiyaç duyduğu vitamin ve mineralleri almak da yaşam
        kalitemizi yükseltir. İşte bu noktada, vitaminli içecekler, vücudumuza doğal bir enerji kaynağı sağlamak için
        harika bir seçenek olarak ön plana çıkar.
      </p>
      <p>
        Vitaminli içecekler, içerdikleri vitamin ve minerallerle vücudumuzun ihtiyaç duyduğu besinleri kolayca
        alabilmemizi sağlar. Doğal meyve suları, sebze içecekleri ve vitamin takviyeli içecekler, günlük yaşantımızın
        hızlı temposunda beslenme ihtiyacımızı karşılamak için pratik ve etkili bir çözümdür.
      </p>
      <div class="button">Vitaminli İçecekleri Keşfet</div>
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
  height: 573px;
  justify-content: center;

  .textdiv {
    color: $primary;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }

    div {
      align-self: flex-start;

    }
  }
}
</style>