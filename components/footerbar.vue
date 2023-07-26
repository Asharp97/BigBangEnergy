<template>
  <div>
    <div class="forDetails">
      Privat Label üretim yapılır. Detaylı bilgi için iletişime geçiniz.
    </div>
    <div class="top container">

      <div class="section bet">
        <img src="../assets/logo.png" alt="">
        <span>Copyright to Big Bang Energy </span>
      </div>

      <div class="section">
        <h2>Kurumsal</h2>
        <h4>Kalite Politikamız</h4>
        <h4>Çevre Politikamız</h4>
        <h4>İSG Politikamız</h4>
        <h4>Tesisimiz</h4>
        <h4>Sertifikalarımız</h4>
      </div>
      <div class="section">
        <h2>Ürünlerimiz</h2>
        <h4>Vitaminler</h4>
        <h4>Vitaminli İçecekler</h4>
        <h4>Şampuanlar</h4>
        <h4>Takviye ediciler</h4>
        <h4>Yeni ürünlerimiz</h4>
        <h4>Contact Us</h4>
      </div>
      <div class="section">
        <h2>Üretim Portföyümüz</h2>
        <h4>Katı Üretim</h4>
        <h4>Likit Üretim</h4>
        <h4>Kozmetik Üretim</h4>

      </div>
      <div class="section">
        <h2>İletişim</h2>
        <h4>Mail Adresin</h4>
        <input class="input" placeholder="Mail Adresin" />
        <div class="button">İletişime Geç</div>
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

.forDetails {
  margin-inline: auto;
  margin-block: 80px;
  padding-block: 12px;
  padding-inline: 24px;
  background-color: #8CD5DE;
  color: #084F9E;
  border-radius: 8px;
  width: fit-content;

}

.top {
  display: flex;
  justify-content: space-between;
  height: 320px;

  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-block: 40px;

    h2 {
      color: $primary;
      font-size: 16px;
      font-weight: 700;
    }

    h4 {
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
    justify-content: space-evenly;

    .section {
      padding-block: 12px;
      display: flex;
      align-items: center;
      gap: 12px;

    }
  }
}
</style>