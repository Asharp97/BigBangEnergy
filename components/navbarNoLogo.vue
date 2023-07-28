<template>
  <div class="navbar">

    <div class="top-bg">
      <div class="top container">
        <div class="phones">

          <div class="phone">
            <a href="tel:+90 532 225 10 21">
              <Icon name="material-symbols:call" />
              +90 532 225 10 21
            </a>
          </div>
          <Icon name="bi:dash-lg" class="sep" />
          <div class="phone">
            <a href="tel:+0216 313 67 67">
              <Icon name="material-symbols:call" />
              0216 313 67 67
            </a>
          </div>
        </div>
        <div>
          <a href="mailto:bigbang-energy.com.tr">

            <Icon name="fa6-solid:envelope" />
            bigbang-energy.com.tr
          </a>
        </div>

      </div>
    </div>
    <div class="bot container">
      <header>
        <ul>
          <NuxtLink class="list" to="/commercial">
            <div class="list"> Kurumsal</div>
          </NuxtLink>
          <NuxtLink class="list" to="/products">
            <div class="list"> Ürunlerimiz

            </div>
          </NuxtLink>
          <NuxtLink class="list" to="/about">
            <div class="list"> Üretim Portöyümüz</div>
          </NuxtLink>
          <NuxtLink class="list " to="/contact">
            <div class="list"> İletişim</div>
          </NuxtLink>
        </ul>
      </header>
    </div>
  </div>

  <div class="mobNav">
    <NuxtLink to="/">

      <img src="../assets/whiteLogo.png" alt="" class="logo">
    </NuxtLink>
    <Icon name="solar:hamburger-menu-linear" class="icon" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabls.scss";

.top-bg {
  background-color: $primary;
  height: 65px;
  align-items: center;
  display: flex;

  .top {
    color: white;
    display: flex;
    justify-content: space-between;
    padding-block: 6px;

    .phones {
      display: flex;
      align-items: center;

      // .phone {

      // }

      .sep {
        transform: rotate(90deg);
      }
    }
  }
}

.bot {
  padding-block: 12px;
  color: $primary;


  header {
    display: flex;
    justify-content: flex-end;
    height: 100px;

    .logo {
      height: 73px;
      padding-block: 20px;
    }

    ul {
      display: flex;

      .list {
        text-decoration: none;
        color: inherit;
        padding-inline: 12px;
        display: flex;
        align-items: center;
        font-weight: 500;
      }

      .router-link-active {
        div {
          background-color: $primary;
          color: white;
          border-radius: 4px;
        }
      }
    }
  }
}

.mobNav {
  display: none;
}

@media only screen and (max-width:480px) {

  .navbar {
    display: none;
  }

  .mobNav {
    background-color: $primary;
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: 64px;
    align-items: center;
    padding-inline: 10px;

    .logo {
      width: 90px;
    }

    .icon {
      color: white;
    }
  }

}
</style>