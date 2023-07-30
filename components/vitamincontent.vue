<template>
  <div class="container comp">
    <img src="../assets/kid1.png" class="kid1" alt="">
    <div class="textdiv">
      <h3>Vitaminli İçecekler</h3>
      <div class="content">

        <p>Günümüzde sağlıklı beslenme ve aktif yaşam tarzı, sağlığımızı koruma ve zindeliğimizi sürdürme konusunda büyük
          önem taşımaktadır. Dengeli bir diyetin yanı sıra vücudumuzun ihtiyaç duyduğu vitamin ve mineralleri almak da
          yaşam
          kalitemizi yükseltir. İşte bu noktada, vitaminli içecekler, vücudumuza doğal bir enerji kaynağı sağlamak için
          harika bir seçenek olarak ön plana çıkar.
        </p>
        <p>
          Vitaminli içecekler, içerdikleri vitamin ve minerallerle vücudumuzun ihtiyaç duyduğu besinleri kolayca
          alabilmemizi sağlar. Doğal meyve suları, sebze içecekleri ve vitamin takviyeli içecekler, günlük yaşantımızın
          hızlı temposunda beslenme ihtiyacımızı karşılamak için pratik ve etkili bir çözümdür.
        </p>
      </div>
      <NuxtLink class="button" to="/products">
      <div >
          Vitaminli İçecekleri Keşfet
        </div>
      </NuxtLink>
    </div>
    <img src="../assets/kid2.png" class="kid2" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.comp {
  display: flex;
  height: 573px;
  justify-content: center;

  position: relative;

  .content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .kid1 {
    position: absolute;
    height: 75%;
    left: -114px;
    top: 72px;
  }

  .kid2 {
    position: absolute;
    height: 83%;
    right: -120px;
    top: 23px;
  }

  .textdiv {
    color: #084f9e;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;


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

@media only screen and (max-width: 480px) {

  .section,
  .comp {
    flex-direction: column;
    width: 100%;

    .textdiv {
      width: 100%;
      text-align: center;

      .button {
        margin-inline: auto;


      }

      display: flex;
    }

    .imgdiv {
      width: 80%;
      margin-inline: auto;
    }
  }

  h3 {
    text-align: center
  }

  .kid1,
  .kid2 {
    display: none;
  }
}
</style>