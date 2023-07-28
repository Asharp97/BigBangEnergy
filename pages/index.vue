<template>
  <div class="gap">
    <hero />
    <aboutus />
    <vitaminler />
    <vitamincontent />
    <prodport />
    <shampoo />

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