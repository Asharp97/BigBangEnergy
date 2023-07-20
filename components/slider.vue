<template>
  <div class="slider container">
    <img class="mainSlide" :src="slides[0]" alt="">
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
      ],
      visibleSlide: 0,

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.mainSlide {
  height: 484px;
}
.slider{
  display: flex;
  img{
    border-radius: 25px;
  }
}
</style>