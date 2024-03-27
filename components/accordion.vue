<template>
  <div>
    <div class="header" @click="bool = !bool">
      <h2>{{ title }}</h2>
      <Icon name="ph:caret-down-bold" class="icon" :class="bool ? 'up' : ''" />
    </div>
    <div class="cards" v-show="bool">
      <div v-for="item in data" :key="item.id">
        <NuxtLink :to="`/${baseUrl}${item.id}`">
          <div class="card">
            <div class="imgBg thumb" :style="`Background: linear-gradient(180deg, ${item.color} 60%, #fff 100%);`">
              <nuxt-img class="img" :src="`${baseUrl}${item.id}.png`" height="120" />
              <div class="icon">
                <Icon name="ph:magnifying-glass-light" />
              </div>
            </div>
            <h6>{{ item.name }}</h6>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['data', 'baseUrl', 'title'])
const bool = ref(true)
</script>

<style lang="scss" scoped>
.header {
  font-size: 15px;
  font-weight: 600;
  padding-block: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #084F9E;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    background-color: rgba(182, 170, 170, 0.126);
  }

  .icon {
    font-size: 25px;
    transition: 300ms;
  }

  .up {
    transform: rotate(-180deg);
  }

}

.cards {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 26px;
  padding-block: 20px;
  transition: 300ms;



  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;

    &:hover {
      .icon {
        opacity: 1;

      }

    }

    .thumb {
      position: relative;
    }

    .icon {
      z-index: 10;
      color: white;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      position: absolute;
      opacity: 0;
      transition: 300ms;
      border-radius: inherit;
      font-size: 40px;
      background-color: rgba(0, 0, 0, 0.498);
    }



    .imgBg {
      background: linear-gradient(180deg, #084F9F 0%, #57C9CB 100%);
      border-radius: 15px;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;

      .img {
        height: 100%;
      }
    }
  }
}
</style>