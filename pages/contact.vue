<template>
  <div class="container">
    <div class="contact rev">
      <div class="image">
        <nuxt-img src="whiteLogo.png" alt="" />
      </div>
      <div class="content">
        <div class="col">
          <a target=”_blank” href="https://maps.app.goo.gl/gDT2JAumz1a6brRE8?g_st=com.tinyspeck.chatlyio.share">
            <div class="cont">
              <h4>Adres</h4>
              <!-- <p>Emek, Şems Cd. No:7, 34785 Sancaktepe/İstanbul</p> -->
            </div>
          </a>
          <div class="cont">
            <h4>Phone</h4>
            <div class="phone">
              <a href="tel:+90 532 225 10 21">+90 532 225 10 21</a>
              <!-- <a href="tel:0216 313 67 67">0216 313 67 67</a> -->
            </div>
          </div>
        </div>
        <div class="col">
          <div class="cont">
            <h4>Bağlantılar & Sosyal Medya</h4>
            <div class="Icons">
              <Icon class="icon" name="skill-icons:linkedin" />
              <Icon class="icon" name="skill-icons:instagram" />
              <Icon class="icon" name="skill-icons:twitter" />
              <Icon class="icon" name="devicon:facebook" />
            </div>
          </div>
          <a href="mailto:bigbang-energy.com.tr">
            <div class="cont">
              <h4>Mail Adresi</h4>
              <p>bigbang-energy.com.tr</p>
            </div>
          </a>
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
.contact {
  margin-block: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 57px;
  height: 559px;

  p {
    font-size: 18px;
  }

  .image {
    width: 80%;

    img {}
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    .col {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 42px;
      height: 250px;

      .cont {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .phone {

          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .Icons {
          display: flex;
          gap: 12px;

          .icon {
            font-size: 43px;
          }

        }
      }

      h4 {
        font-size: 25px;
        font-weight: 400;
        border-bottom: 1px solid white;
        width: fit-content;
      }

      p {
        font-size: 15px;
        font-weight: 300;

      }
    }
  }
}

@media only screen and (max-width : 480px) {
  .contact {
    border-radius: 0;
    height: fit-content !important;

    .content {
      flex-direction: column;
      gap: 42px;
      margin-block: 19px;

      .col {
        height: fit-content;
        width: fit-content !important;

        .phone {
          flex-direction: row !important;

          a {
            width: fit-content;
          }
        }
      }
    }
  }
}
</style>