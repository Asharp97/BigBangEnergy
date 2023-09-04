<template>
  <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="0" navigation :speed="800" :loop="true"
    @slideNextTransitionStart="nextstart" @slidePrevTransitionStart="prevstart" @slideNextTransitionEnd="nextend"
    @slidePrevTransitionEnd="prevend">
    <swiper-slide class="strawberry slide">
      <div class="content">

        <img class="prod" src="http://bigbang-energy.com.tr/prodImages/drinks/6.png" alt="strawberry vitamin drink">
        <NuxtLink to="/products/drink/6"><button>
            <span class="left">ÜRÜNÜ</span> <span class="right">GÖR</span>
          </button></NuxtLink>
      </div>
      <img class="one texture float " src="../assets/textures/strawberry.png" />
      <img class="two texture float" src="../assets/textures/strawberry.png" />
      <img class="three texture  " src="../assets/textures/strawberry.png" />
      <img class="four texture float" src="../assets/textures/strawberry.png" />
      <img class="five texture " src="../assets/textures/leaf.png" />
      <img class="six texture float" src="../assets/textures/leaf.png" />
      <img class="seven texture float" src="../assets/textures/leaf.png" />
      <img class="eight texture float" src="../assets/textures/leaf.png" />
      <img class="nine texture " src="../assets/textures/leaf.png" />
      <img class="ten texture float" src="../assets/textures/leaf.png" />

    </swiper-slide>
    <swiper-slide class="vitamin slide">
      <div class="content">
        <img class="prod" src="http://bigbang-energy.com.tr/prodImages/1.png" alt="sambucus vitamin">
        <NuxtLink to="/products/1"><button><span class="left">ÜRÜNÜ</span> <span class="right">GÖR</span></button>
        </NuxtLink>
      </div>
      <img class="one texture float" src="../assets/textures/pil.png" style="scale:0.5" />
      <img class="two texture" src="../assets/textures/pil.png" style="scale:0.5" />
      <img class="three texture float" src="../assets/textures/pil.png" style="scale:0.5" />
      <img class="four texture" src="../assets/textures/pil.png" style="scale:0.5" />
      <img class="five texture float" src="../assets/textures/blueberry.png" />
      <img class="six texture" src="../assets/textures/blueberry.png" />
      <img class="seven texture float" src="../assets/textures/blueberry.png" />
      <img class="eight texture float" src="../assets/textures/blueberry.png" />
      <img class="nine texture" src="../assets/textures/blueberry.png" />
      <img class="ten texture float" src="../assets/textures/blueberry.png" />
    </swiper-slide>
    <swiper-slide class="shampoo slide">
      <div class="content">
        <img class="prod" src="http://bigbang-energy.com.tr/prodImages/shampoos/1.png" alt="jasmin shampoo">
        <NuxtLink to="/products/shampoo/1"><button><span class="left">ÜRÜNÜ</span> <span class="right">GÖR</span></button>
        </NuxtLink>
      </div>
      <img class="one texture" src="../assets/textures/jasmin.png" style="scale:0.5" />
      <img class="two texture" src="../assets/textures/jasmin.png" style="scale:0.5" />
      <img class="three texture float" src="../assets/textures/jasmin.png" style="scale:0.5" />
      <img class="four texture float" src="../assets/textures/jasmin.png" style="scale:0.5" />
      <img class="five texture float" src="../assets/textures/jasmin.png" />
      <img class="six texture" src="../assets/textures/jasmin.png" />
      <img class="seven texture" src="../assets/textures/jasmin.png" />
      <img class="eight texture float" src="../assets/textures/jasmin.png" />
      <img class="nine texture" src="../assets/textures/jasmin.png" />
      <img class="ten texture" src="../assets/textures/jasmin.png" />
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
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
      modules: [Navigation, Scrollbar, A11y],
    };
  },
};
</script>
<style lang="scss">
.swiper {
  width: 100%;

  .swiper-wrapper {
    width: 100%;

    .swiper-slide {
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

            .left,
            .right {
              transition: 300ms;
            }

            .left {
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
        z-index: -100;
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
        animation-name: prev;
      }

      .nextObj {
        animation: nextObj 550ms ease-in-out;
      }

      .prevObj {
        animation: prevObj 650ms ease-in-out;
      }

      .float {
        animation: float 10s ease;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }

      .one {
        transition-delay: 200ms;
        animation-delay: 20ms;
        top: 20%;
        left: 10%;
        width: 8%;
        rotate: 30deg;
      }

      .two {
        transition-delay: 100ms;
        animation-delay: 10ms;
        top: 18%;
        left: 65%;
        width: 16%;
        rotate: -67deg;
      }

      .three {
        transition-delay: 150ms;
        animation-delay: 15ms;
        top: 64%;
        left: 80%;
        width: 12%;
        rotate: 1deg;
      }

      .four {
        transition-delay: 250ms;
        animation-delay: 25ms;
        top: 61%;
        left: 15%;
        width: 16%;
        rotate: 120deg;
      }

      .five {
        transition-delay: 175ms;
        animation-delay: 50ms;
        top: 40%;
        left: 27%;
        width: 13%;
        rotate: 0deg;
      }

      .six {
        transition-delay: 125ms;
        animation-delay: 25ms;
        top: 60%;
        left: 60%;
        width: 17%;
        rotate: -48deg;
      }

      .seven {
        transition-delay: 75ms;
        animation-delay: 75ms;
        top: 27%;
        left: 81%;
        width: 15%;
        rotate: -140deg;
      }

      .eight {
        transition-delay: 150ms;
        animation-delay: 15ms;
        top: 14%;
        left: 21%;
        width: 10%;
        rotate: -100deg;
      }

      .nine {
        transition-delay: 250ms;
        animation-delay: 25ms;
        top: 50%;
        left: 5%;
        width: 10%;
        rotate: -283deg;
      }

      .ten {
        transition-delay: 225ms;
        animation-delay: 22ms;
        top: 15%;
        left: 55%;
        width: 10%;
        rotate: -143deg;
      }

    }

    .swiper-slide-active {

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
    transform: rotate(3deg);
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

@keyframes prev {
  0% {
    translate: 0 0;
  }

  50% {
    translate: -500px 0;
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

@keyframes prevObj {
  0% {
    translate: 0 0;
  }

  50% {
    translate: 200px 0px;
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