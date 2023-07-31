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
        <NuxtLink to="/"><img class="logo" src="../assets/logo.png" alt=""></NuxtLink>
        <ul>
          <NuxtLink class="list" to="/commercial">
            <div class="list"> Kurumsal</div>
          </NuxtLink>

          <!-- <NuxtLink class="list" to="/products">
            <div class="list"> Ürünlerimiz
            </div>
          </NuxtLink> -->
          <!-- Products Deleted -->
          
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
.top-bg {
  width: 100%;
  background-color: #084f9e;
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
  color: #084f9e;


  header {
    display: flex;
    height: 100px;
    justify-content: space-between;

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
        padding-block: 3px;
        display: flex;
        align-items: center;
        font-weight: 500;
      }

      .router-link-active {
        div {
          background-color: #084f9e;
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
    background-color: #084f9e;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    align-items: center;
    padding-inline: 10px;

    .logo {
      width: 90px;
    }

    .icon {
      color: white;
      padding-right: 15px;
    }
  }

}
</style>