<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <img class="image" :src="slide" alt="">
      </div>
    </Slide>
    <template #addons>
      <navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Navigation,

  },
  data() {
    return {
      slides: [
        'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg',
        'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg',
        'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg',
        'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg',
      ],
    }
  },
})
</script>

<style scoped lang="scss">
.image {
  width: 190%;
  border-radius: 25px;
  margin-block: 12px;
}

.carousel__slide {
  padding: 5px;

}

.carousel__viewport {
  perspective: 200px;
  height: 700px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
  opacity: 0;
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
  z-index: 5;
  opacity: 1;
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
  z-index: 5;
  opacity: 1;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  z-index: 10;
  opacity: 1;
}
</style>