<template>
  <div>
    <div class="top container">

      <div class="section bet">
        <img src="../assets/logo.png" alt="">
        <span>Copyright to Big Bang Energy </span>
      </div>

      <div class="section">
        <h2>Kurumsal</h2>
        <h3>Kalite Politikamız</h3>
        <h3>Çevre Politikamız</h3>
        <h3>İSG Politikamız</h3>
        <h3>Tesisimiz</h3>
        <h3>Sertifikalarımız</h3>
      </div>
      <div class="section">
        <h2>Ürünlerimiz</h2>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
      </div>
      <div class="section">
        <h2>Üretim Portföyümüz</h2>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
      </div>
      <div class="section">
        <h2>İletişim</h2>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
        <h3>Kalite Politikamız</h3>
      </div>

    </div>
    <div class="bot-bg">
      <div class="bot container">
        <div class="section">
          <Icon name="material-symbols:location-on-outline" />
          <span>Akçaburgaz Mahallesi 3080 Sok. <br> No:4 Esenyurt- İstanbul/Türkiye</span>
        </div>
        <div class="section">
          <Icon name="material-symbols:mail" />
          <span>bigbang-energy.com.tr</span>
        </div>
        <div class="section">
          <Icon name="material-symbols:call" />
          <span>+271 386-647-3637</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabls.scss";

.top {
  display: flex;
  justify-content: space-evenly;

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-block: 40px;

    h2 {
      color: $primary;
      font-size: 16px;
      font-weight: 700;
    }

    h3 {
      color: #77808B;
      font-weight: 400;
    }

    img {
      height: 87px;
      filter: grayscale(100%);
    }
  }

  .bet {
    justify-content: space-between !important;
  }
}

.bot-bg {
  background-color: $primary ;
  color: white;
  height: 112px;
  align-items: center;
  display: flex;
  .bot {
    display: flex;
    justify-content: center;
    gap: 2%;

    .section {
      padding-block: 12px;
      display: flex;
      align-items: center;
      gap: 12px;

    }
  }
}
</style>