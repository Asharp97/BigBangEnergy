<template>
  <div class="hero container">
    <div class="textdiv">
      <img class="logo" src="../assets/logo.png" alt="">
      <p>Biz, BigBang Energy, sizlere doğal ve kaliteli vitaminleri ve besin desteklerini sunarak daha sağlıklı bir yaşam
      </p>
      <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur minima ab fugit distinctio possimus </p> -->
      <NuxtLink to="/products">
        <div class="discover button">Ürünleri Keşfet</div>
      </NuxtLink>
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
.hero {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .textdiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 16px;
    width: 30%;
    color: #084f9e;

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

@media only screen and (max-width : 480px) {
  .hero {
    flex-direction: column;

    .textdiv {
      flex-direction: column;
      order: 2;
      width: 100%;
      text-align: center;

      .logo,
      .discover {
        display: none;
      }
    }

    .slider {
      order: 1;
      width: 100%;
    }
  }
}
</style>