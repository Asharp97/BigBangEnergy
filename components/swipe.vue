<template>
  <Swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="0" navigation :speed="800" :loop="true"
    @slideNextTransitionStart="nextstart" @slidePrevTransitionStart="prevstart" @slideNextTransitionEnd="nextend"
    @slidePrevTransitionEnd="prevend">
    <SwiperSlide class="strawberry slide">
      <div class="content">

        <img class="prod" src="http://bigbang-energy.com.tr/prodImages/drinks/6.png" alt="strawberry vitamin drink">
        <NuxtLink to="/products/drink/6"><button>
            ÜRÜNÜ GÖR
          </button></NuxtLink>
      </div>

      <nuxt-img class="texture float" v-for="n in 4" :class="`texture${n}`" src="textures/strawberry.png" width="500" />
      <nuxt-img class="texture float" v-for="n in 6" :class="`texture${n + 4}`" src="textures/leaf.png" width="500" />
    </SwiperSlide>

    <SwiperSlide class="vitamin slide">
      <div class="content">
        <img class="prod" src="http://bigbang-energy.com.tr/prodImages/1.png" alt="sambucus vitamin">
        <NuxtLink to="/products/1"><button>ÜRÜNÜ GÖR</button>
        </NuxtLink>
      </div>

      <nuxt-img class="texture float" v-for="n in 4" :class="`texture${n}`" src="textures/pil.png" width="500"
        style="scale:0.5" />
      <nuxt-img class="texture float" v-for="n in 6" :class="`texture${n + 4}`" src="textures/blueberry.png"
        width="500" />
    </SwiperSlide>

    <SwiperSlide class="shampoo slide">
      <div class="content">
        <img class="prod" src="http://bigbang-energy.com.tr/prodImages/shampoos/1.png" alt="jasmin shampoo">
        <NuxtLink to="/products/shampoo/1">
          <button> ÜRÜNÜ GÖR
          </button>
        </NuxtLink>
      </div>

      <nuxt-img class="texture float" v-for="n in 4" :class="`texture${n}`" src="textures/jasmin.png" width="500"
        style="scale:0.5" />
      <nuxt-img class="texture float" v-for="n in 6" :class="`texture${n + 4}`" src="textures/jasmin.png" width="500" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
    }
  },
  setup() {
    const nextstart = () => {
      const elements = document.getElementsByClassName('texture')
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("nextStart");
        elements[i].classList.remove("float");
      }

      const content = document.getElementsByClassName('content')
      for (var i = 0; i < content.length; i++) {
        content[i].classList.add('nextObj')
      }

    }
    const prevstart = () => {
      const elements = document.getElementsByClassName('texture')
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("prevStart");
        elements[i].classList.remove("float");
      }

      const content = document.getElementsByClassName('content')
      for (var i = 0; i < content.length; i++) {
        content[i].classList.add('prevObj')
      }
    }

    const nextend = () => {
      const elements = document.getElementsByClassName('texture')
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("nextStart");
        elements[i].classList.add("float");
      }

      const content = document.getElementsByClassName('content')
      for (var i = 0; i < content.length; i++) {
        content[i].classList.remove('nextObj')
      }
    }
    const prevend = () => {
      const elements = document.getElementsByClassName('texture')
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("prevStart");
        elements[i].classList.add("float");
      }

      const content = document.getElementsByClassName('content')
      for (var i = 0; i < content.length; i++) {
        content[i].classList.remove('prevObj')
      }
    }
    return {
      nextstart,
      nextend,
      prevstart,
      prevend,
      modules: [Navigation],
    };
  },
};
</script>
<style lang="scss">
.swiper {
  width: 100%;

  .swiper-wrapper {
    width: 100%;

    .SwiperSlide {
      width: 100% !important;
      height: 500px;
      // cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .slide {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 12px;
      height: 40rem;
      position: relative;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 520px;

        button {
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          border-radius: 15px;
          padding: 10px 15px;
          border: none;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          cursor: pointer;
          transition: 300ms;

          &:hover {
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
          }

          &:active {
            color: #e0d8d8;


            span {
              transition-delay: 300ms;
            }
          }
        }

        .prod {
          height: 400px;
        }
      }

      .texture {
        position: absolute;
        transition: 330ms;
        display: flex;
        z-index: 1;
      }

      .nextStart,
      .prevStart {
        animation-duration: 500ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
      }


      .nextStart {
        animation-name: next;
      }

      .prevStart {
        animation: next reverse;
      }

      .nextObj {
        animation: nextObj 550ms ease-in-out;
      }

      .prevObj {
        animation: nextObj 650ms ease-in-out reverse;
      }

      .float {
        animation: float 10s ease;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }

      .texture1 {
        transition-delay: 200ms;
        animation-delay: 20ms;
        top: 20%;
        left: 10%;
        width: 8%;
        rotate: 30deg;
      }

      .texture2 {
        transition-delay: 100ms;
        animation-delay: 10ms;
        top: 18%;
        left: 65%;
        width: 16%;
        rotate: -67deg;
      }

      .texture3 {
        transition-delay: 150ms;
        animation-delay: 15ms;
        top: 64%;
        left: 80%;
        width: 12%;
        rotate: 1deg;
      }

      .texture4 {
        transition-delay: 250ms;
        animation-delay: 25ms;
        top: 61%;
        left: 15%;
        width: 16%;
        rotate: 120deg;
      }

      .texture5 {
        transition-delay: 175ms;
        animation-delay: 50ms;
        top: 40%;
        left: 27%;
        width: 13%;
        rotate: 0deg;
      }

      .texture6 {
        transition-delay: 125ms;
        animation-delay: 25ms;
        top: 60%;
        left: 60%;
        width: 17%;
        rotate: -48deg;
      }

      .texture7 {
        transition-delay: 75ms;
        animation-delay: 75ms;
        top: 27%;
        left: 81%;
        width: 15%;
        rotate: -140deg;
      }

      .texture8 {
        transition-delay: 150ms;
        animation-delay: 15ms;
        top: 14%;
        left: 21%;
        width: 10%;
        rotate: -100deg;
      }

      .texture9 {
        transition-delay: 250ms;
        animation-delay: 25ms;
        top: 50%;
        left: 5%;
        width: 10%;
        rotate: -283deg;
      }

      .texture10 {
        transition-delay: 225ms;
        animation-delay: 22ms;
        top: 15%;
        left: 55%;
        width: 10%;
        rotate: -143deg;
      }

    }

    .SwiperSlide-active {

      .texture,
      .anim {
        scale: 1.2;
      }
    }

    .strawberry {
      background-color: #B6384E;

      button {
        color: #B6384E;

        &:active {
          background-color: #B6384E;
        }
      }
    }

    .vitamin {
      background-color: #54899C;

      button {
        color: #54899C;

        &:active {
          background-color: #54899C;
        }
      }
    }

    .shampoo {
      background-color: #AE8B33;

      button {
        color: #AE8B33;

        &:active {
          background-color: #AE8B33;
        }
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: black;
    background-color: white;
    border-radius: 50%;
    width: 1px;
    height: 1px;
    padding: 15px;

    &::after {
      font-size: 19px;
    }
  }
}



@keyframes float {
  0% {
    transform: rotate(0deg);
    translate: 0 0;
  }

  50% {
    transform: rotate(-3deg);
    translate: 5px 6px;
  }

  100% {
    transform: rotate(0deg);
    translate: 0 0;
  }
}

@keyframes next {
  0% {
    translate: 0px 0px;
  }

  50% {
    translate: 500px 0;
  }

  100% {
    translate: 0 0;
  }
}

@keyframes nextObj {
  0% {
    translate: 0 0;
  }

  50% {
    translate: -200px 0px;
    scale: 0.95;
  }

  100% {
    translate: 0 0;
  }
}

@media only screen and (max-width:480px) {
  @keyframes float {
    0% {
      transform: rotate(0deg);
      translate: 0 0;
    }

    50% {
      transform: rotate(3deg);
      translate: 15px 16px;
    }

    100% {
      transform: rotate(0deg);
      translate: 0 0;
    }
  }
}
</style>