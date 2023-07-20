<template>
  <div class="foot-bg">
    <div class="footer container">
      <div class="foot ">
        <div class="logo">
          <img src="../assets/whiteLogo.png" alt="">
        </div>
        <ul>
          <NuxtLink to="/" class="li">
            <div class="li"> Anasayfa</div>
          </NuxtLink>
          <NuxtLink to="/" class="li">
            <div class="li"> Kurumsal</div>
          </NuxtLink>
          <NuxtLink to="/" class="li">
            <div class="li"> Ürün Porföyümüz</div>
          </NuxtLink>
          <NuxtLink to="/" class="li">
            <div class="li"> İletişim</div>
          </NuxtLink>
        </ul>
      </div>
      <div class="subfoot">
        <div>
          Copyright to Big Bang Energy
        </div>
        <div class="langs">
          <div class="lang">dr</div>
          <div class="lang">dr</div>
          <div class="lang">dr</div>
          <div class="lang">dr</div>
          <div class="lang">dr</div>
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
.foot-bg {
  background-color: #084f9e;
  color: white;

  .footer {
    display: flex;
    flex-direction: column;
    height: 375px;
    justify-content: space-evenly;

    .foot {
      display: flex;
      justify-content: space-between;

      // .logo {
      //   img {}
      // }

      ul {
        display: flex;
        .li {
          text-decoration: none;
          color: inherit;
          padding-inline: 12px;
          padding-block: 3px;
          display: flex;
          align-items: center;
        }
      }
    }

    .subfoot {
      display: flex;
      justify-content: space-between;

      .langs {
        display: flex;
        gap: 12px;

        .lang {
          border-radius: 50%;
          border: white 1px solid;
          padding: 10px;
        }
      }
    }
  }
}
</style>