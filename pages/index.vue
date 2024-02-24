<template>
  <div class="gap">
    <swipe />
    <aboutus />
    <vitaminler />
    <vitamincontent />
    <prodport />
    <shampoo />
    <!-- comment -->

    <!-- <nuxt-img src="temporary/vitamins.png" alt=""/>
    <nuxt-img src="temporary/vitaminsdrink.png" alt=""/>
    <nuxt-img src="temporary/Shampoo.png" alt=""/> -->
    <!-- DELETE THIS -->
  </div>
</template>

<script setup>
definePageMeta({ layout: 'no-logo' })
</script>

<style lang="scss" scoped>
@media only screen and (max-width:480px) {
  .gap {
    // width: 100%;
  }
}
</style>