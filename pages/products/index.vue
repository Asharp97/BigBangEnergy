<template>
  <div class="prod container">
    <div class="section hero">
      <img src="../../assets/prodfam.png" alt="">
      <h4>BigBang Energy</h4>
      <p>BigBang Energy olarak, müşterilerimize en kaliteli vitaminleri sunmayı taahhüt ediyoruz. Ürünlerimiz doğal
        içeriklerle formüle edilir ve her biri sağlık uzmanları tarafından titizlikle incelenir. Sağlığınızı desteklemek
        amacıyla geniş bir ürün yelpazemiz bulunmaktadır. Vitamin desteğine ihtiyaç duyduğunuzda, doğru ürünü seçmenize
        yardımcı olmak için uzman ekibimiz her zaman hizmetinizdedir.
      </p>
      <p>
        Sağlıklı bir gelecek için doğru adım atın ve BigBang Energy ile sağlığınıza değer katın! Unutmayın, sağlıklı bir
        yaşam için doğru beslenme önemlidir ve doğru vitaminler, enerjinizi artırmanıza ve günlük zorluklarla başa
        çıkmanıza yardımcı olur.</p>
    </div>
    <div class="section">

      <div class="header" @click="vitaminsIsOpen = !vitaminsIsOpen">
        <h2>Vitaminler & Takviye Edici Gıdalar </h2>
        <Icon name="ph:caret-down-bold" class="icon" :class="vitaminsIsOpen ? 'up' : ''" />
      </div>
      <div class="cards" v-show="vitaminsIsOpen">
        <div v-for="vitamin in vitamins" :key="id">
          <NuxtLink :to="`/products/${vitamin.id}`">
            <div class="card">
              <div class="imgBg thumb">
                <img :src="`http://bigbang-energy.com.tr/prodImages/${vitamin.id}.png`" alt="">
                <div class="icon">
                  <Icon name="ph:magnifying-glass-light" />
                </div>
              </div>
              <h6>{{ vitamin.name }}</h6>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="header" @click="drinksIsOpen = !drinksIsOpen">
        <h2>Vitaminli İçecekler</h2>
        <Icon name="ph:caret-down-bold" class="icon" :class="drinksIsOpen ? 'up' : ''" />
      </div>
      <div class="cards" v-show="drinksIsOpen">
        <div v-for="drink in drinks" :key="id">
          <NuxtLink :to="`/products/drink/${drink.id}`">
            <div class="card">
              <div class="drinkbg thumb" :style="`Background: linear-gradient(180deg, ${drink.color} 60%, #fff 100%);`">
                <img :src="`http://bigbang-energy.com.tr/prodImages/drinks/${drink.id}.png`" alt="">
                <div class="icon">
                  <Icon name="ph:magnifying-glass-light" />
                </div>
              </div>
              <h6>{{ drink.name }}</h6>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="header" @click="shampoosIsOpen = !shampoosIsOpen">
        <h2>Kozmetik Ürünleri & Şampuanlar</h2>
        <Icon name="ph:caret-down-bold" class="icon" :class="shampoosIsOpen ? 'up' : ''" />
      </div>
      <div class="cards" v-show="shampoosIsOpen">
        <div v-for="shampoo in shampoos" :key="id">
          <NuxtLink :to="`/products/shampoo/${shampoo.id}`">
            <div class="card">
              <div class="shampoobg thumb"
                :style="`Background: linear-gradient(180deg, ${shampoo.color} 60%, #fff 100%);`">
                <img :src="`http://bigbang-energy.com.tr/prodImages/shampoos/${shampoo.id}.png`" alt="">
                <div class="icon">
                  <Icon name="ph:magnifying-glass-light" />
                </div>
              </div>
              <h6>{{ shampoo.name }}</h6>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import data from "../../assets/products.json"

const vitamins = ref(data.vitamins)
const drinks = ref(data.drinks)
const shampoos = ref(data.shampoos)

const vitaminsIsOpen = ref(true)
const drinksIsOpen = ref(false)
const shampoosIsOpen = ref(false)


</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    width: 100%;
  }

  h4 {
    font-size: 25px;
  }
}

.prod {
  color: #084F9E;

  display: flex;
  flex-direction: column;
  gap: 40px;

  .header {
    font-size: 15px;
    font-weight: 600;
    padding-block: 12px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #084F9E;
    transition: 300ms;
    cursor: pointer;

    &:hover {
      background-color: rgba(182, 170, 170, 0.126);
    }

    .icon {
      font-size: 25px;
      transition: 300ms;
    }

    .up {
      transform: rotate(-180deg);
    }

  }

  .cards {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 26px;
    padding-block: 20px;
    transition: 300ms;



    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-align: center;

      &:hover {
        .icon {
          opacity: 1;

        }

      }

      .thumb {
        position: relative;
      }

      .icon {
        z-index: 10;
        color: white;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        position: absolute;
        opacity: 0;
        transition: 300ms;
        border-radius: inherit;
        font-size: 40px;
        background-color: rgba(0, 0, 0, 0.498);
      }



      .imgBg {
        background: linear-gradient(180deg, #084F9F 0%, #57C9CB 100%);
        border-radius: 15px;
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          // padding-inline: 30px;
          // padding-block: 13px;
          height: 100%;

        }

      }

      .drinkbg {
        border-radius: 15px;
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          // padding-inline: 30px;
          // padding-block: 13px;
          height: 100%;

        }

        h6 {
          width: 119px;

        }
      }

      .shampoobg {
        border-radius: 15px;
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          // padding-inline: 30px;
          // padding-block: 13px;
          height: 100%;

        }

        h6 {
          width: 119px;

        }
      }
    }
  }
}
</style>