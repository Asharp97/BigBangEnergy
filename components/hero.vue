<template>
  <div class="hero container">
    <div class="textDiv">
      <img class="logo" src="../assets/logo.png" alt="">
      <p>Biz, BigBang Energy, sizlere doğal ve kaliteli vitaminleri ve besin desteklerini sunarak daha sağlıklı bir yaşam</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur minima ab fugit distinctio possimus </p>
      <div class="discover button">Ürünleri Keşfet</div>
    </div>
    <div class="slider">
      <slider />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg',
        'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg',
        'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg',
        'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg',
        'https://images.pexels.com/photos/259915/pexels-photo-547114.jpeg',
      ],
      visibleSlide: 0,

    }
  },
  methods: {

  }
}


</script>

<style lang="scss" scoped>
@import "../assets/scss/variabls.scss";

.hero {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .textDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 16px;
    width: 30%;
    color: $primary;

    .logo {
      width: 303px;
    }
  }

  .discover {}

  .slider {
    width: 60%;
    // height: 663px;
    display: flex;
    align-items: center;
  }
}
</style>