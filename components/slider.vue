<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <!-- <img class="image" src="..\assets\slides\S1.png" alt=""> -->
        <img class="image" :src="slide" alt="">
        <!-- :src="slide"  -->
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
        'http://bigbang-energy.com.tr/images/S1.png',
        'http://bigbang-energy.com.tr/images/S2.png',
        'http://bigbang-energy.com.tr/images/S3.png',
      ],
    }
  },
})
</script>

<style scoped lang="scss">
.carousel__next,
.carousel__prev {
  :focus {
    outline: none;
  }

  position: absolute;

  .carousel__item {
    .image {
      width: 100% !important;
    }
  }
}


.carousel__item {
  display: flex;
  justify-content: center;
  gap: 12px;
}





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
  width: 0px;
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

.carousel__slide--next,
.carousel__slide--prev {

  width: 160px !important;

}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  z-index: 10;
  opacity: 1;
  width: 280px !important;
  height: 445px;
}
</style>