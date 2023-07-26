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
      <ul>
        <NuxtLink class="list" to="/commercial">
          <div class="list"> Kurumsal</div>
        </NuxtLink>
        <NuxtLink class="list" to="/products">
          <div class="list"> Ürunlerimiz
            <Icon name="ci:caret-down-md" />
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
</style>