<template>
  <div class="gap">
    <swipe />
    <!-- <aboutus />
    <vitaminler />
    <vitamincontent />
    <prodport />
    <shampoo /> -->
    <!-- comment -->

    <img src="../assets/temporary/vitamins.png" alt="">
    <img src="../assets/temporary/vitaminsdrink.png" alt="">
    <img src="../assets/temporary/Shampoo.png" alt="">
    <!-- DELETE THIS -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'index'
})
</script>

<style lang="scss" scoped>
@media only screen and (max-width:480px) {
  .gap {
    width: 100%;
  }
}
</style>