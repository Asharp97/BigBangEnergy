<template>
  <div class="container">
    <div class="contact rev">
      <div class="image">
        <img src="../assets/whiteLogo.png" alt="">
      </div>
      <div class="content">
        <div class="col">
          <div class="cont">

            <h4>Adres</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, soluta nostrum eveniet, architecto ea
              voluptatibus laudantium neque laboriosam autem, maxime sequi voluptate. Quos adipisci at fuga, hic magni ad
              excepturi.</p>
          </div>
          <div class="cont">


            <h4>Phone</h4>
            <div class="phone">
              <a href="">+905555555555</a>
              <a href="">+905555555555</a>
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
          <div class="cont">
            <h4>Mail Adresi</h4>
            <p>bigbang-energy.com.tr</p>
          </div>
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

  p{
    font-size: 18px;
  }

  .image {
    width: 80%;
    img {}
  }

  .content {
    display: flex;
    justify-content: space-evenly;
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

        .phone{

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
</style>