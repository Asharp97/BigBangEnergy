<template>
  <div>
    <div class="forDetails">
      Privat Label üretim yapılır. Detaylı bilgi için iletişime geçiniz.
    </div>
    <div class="mobLogo">
      <nuxt-img src="logo.png" alt="" />
    </div>
    <div class="top container">


      <div class="section bet">
        <nuxt-img src="logo.png" alt="" />
        <span>© Big Bang Energy 2023 <br> All rights reserved </span>
      </div>

      <NuxtLink to="/commercial">
        <div class="section">
          <h2>Kurumsal</h2>
          <h4>Kalite Politikamız</h4>
          <h4>Çevre Politikamız</h4>
          <h4>İSG Politikamız</h4>
          <h4>Tesisimiz</h4>
          <h4>Sertifikalarımız</h4>
        </div>
      </NuxtLink>

      <NuxtLink to="/products">
        <div class="section">
          <h2>Ürünlerimiz</h2>
          <h4>Vitaminler</h4>
          <h4>Vitaminli İçecekler</h4>
          <h4>Şampuanlar</h4>
          <h4>Takviye ediciler</h4>
          <h4>Yeni ürünlerimiz</h4>
          <h4>Contact Us</h4>
        </div>
      </NuxtLink>
      <!-- Products Deleted -->
      <NuxtLink to="/about">
        <div class="section">
          <h2>Üretim Portföyümüz</h2>
          <h4>Katı Üretim</h4>
          <h4>Likit Üretim</h4>
          <h4>Kozmetik Üretim</h4>
        </div>
      </NuxtLink>
      <NuxtLink to="/contact">
        <div class="section contact">
          <h2>İletişim</h2>
          <h4>Mail Adresin</h4>
          <input class="input" placeholder="Mail Adresin" />
          <div class="button">İletişime Geç</div>
        </div>
      </NuxtLink>

    </div>
    <div class="bot-bg">
      <div class="bot container">
        <a target=”_blank” href="https://maps.app.goo.gl/gDT2JAumz1a6brRE8?g_st=com.tinyspeck.chatlyio.share">
          <div class="section">
            <Icon name="material-symbols:location-on-outline" class="icon" />
            <span>Holding Adres Adres: Emek, Şems Cd. <br> No:7, 34785 Sancaktepe/İstanbul</span>
          </div>
        </a>
        <a href="mailto:bigbang-energy.com.tr">

          <div class="section">
            <Icon name="material-symbols:mail" class="icon" />
            <span>bigbang-energy.com.tr</span>
          </div>
        </a>
        <a href="tel:+90 532 225 10 21">

          <div class="section">
            <Icon name="material-symbols:call" class="icon" />
            <span>+90 532 225 10 21</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.mobLogo {
  display: none;
}

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
      color: #084f9e;
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
  background-color: #084f9e;
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

@media only screen and (max-width : 480px) {

  .forDetails {
    text-align: center;
    margin-inline: 21px;
  }

  .contact,
  .bet {
    display: none !important;

  }

  .top {
    border-top: 1px solid gray;
    justify-content: space-evenly;
  }

  .mobLogo {
    display: flex;

    img {
      height: 60px;
      padding-left: 12px;
      margin-bottom: 20px;
      filter: grayscale(100%);

    }
  }

  .bot {
    .section {
      .icon {
        font-size: 30px;
      }

      span {
        display: none;
      }
    }
  }


}
</style>