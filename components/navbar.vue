<template>
  <div class="top-bg">
    <div class="top container">
      <div class="phones">

        <div class="phone">
          <Icon name="material-symbols:call" />
          +90 555 555 55 55
        </div>
        <Icon name="bi:dash-lg" class="sep" />
        <div class="phone">
          <Icon name="material-symbols:call" />
          +90 555 555 55 55
        </div>
      </div>
      <div>
        <Icon name="fa6-solid:envelope" />
        bigbang-energy.com.tr
      </div>

    </div>
  </div>
  <div class="bot container">
    <header>
      <NuxtLink to="/"><img class="logo" src="../assets/logo.png" alt=""></NuxtLink>
      <ul>
        <NuxtLink class="li" to="/commercial">
          <div class="li"> Kumursal</div>
        </NuxtLink>
        <NuxtLink class="li" to="/products">
          <div class="li"> Ürunlerimiz
            <Icon name="ci:caret-down-md" />
          </div>
        </NuxtLink>
        <NuxtLink class="li" to="/about">
          <div class="li"> Üretim Portöyümüz</div>
        </NuxtLink>
        <NuxtLink class="li " to="/contact">
          <div class="li cont"> İletişim</div>
        </NuxtLink>
      </ul>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.top-bg {
  background-color: #084f9e;

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

  header {
    display: flex;
    justify-content: space-between;

    .logo {
      height: 73px;
    }

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

      .cont {
        background-color: #084f9e;
        color: white;
        border-radius: 4px;
      }
    }
  }
}
</style>