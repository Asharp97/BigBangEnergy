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
    <Icon name="solar:hamburger-menu-linear" class="icon" @click="sideMenu = true" v-if="!sideMenu" />
    <Icon name="solar:close-circle-outline" class="icon black" @click="sideMenu = false" v-else />
  </div>
  <div class="sideMenu" @click.self="sideMenu = false" :class="sideMenu ? 'open' : ''">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideMenu: true,
    }
  }

}
</script>

<style lang="scss" scoped>
.top-bg {
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
    width: 95%;
    height: 64px;
    align-items: center;
    padding-inline: 10px;
    position: relative;

    .logo {
      width: 90px;
    }

    .icon {
      color: white;
      position: absolute;
      right: 10px;
      font-size: 25px;
      z-index: 200;
    }

    .black {
      color: black !important;
    }
  }

  .sideMenu {
    background-color: rgba(0, 0, 0, 0.348);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    visibility: hidden;
    transition: 300ms;

    ul {
      width: 0;
      background-color: white;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-top: 70px;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow: hidden;
      transition: 300ms;
    }
  }

  .open {
    opacity: 1;
    visibility: visible;

    ul {
      width: 50%;
    }
  }

}
</style>