<template>
  <div class="prod container">
    <div class="section hero">
      <nuxt-img src="/prodfam.png" alt="" />
      <h4>BigBang Energy</h4>
      <p>BigBang Energy olarak, müşterilerimize en kaliteli vitaminleri sunmayı taahhüt ediyoruz. Ürünlerimiz doğal
        içeriklerle formüle edilir ve her biri sağlık uzmanları tarafından titizlikle incelenir. Sağlığınızı
        desteklemek
        amacıyla geniş bir ürün yelpazemiz bulunmaktadır. Vitamin desteğine ihtiyaç duyduğunuzda, doğru ürünü
        seçmenize
        yardımcı olmak için uzman ekibimiz her zaman hizmetinizdedir.
      </p>
      <p>
        Sağlıklı bir gelecek için doğru adım atın ve BigBang Energy ile sağlığınıza değer katın! Unutmayın, sağlıklı
        bir
        yaşam için doğru beslenme önemlidir ve doğru vitaminler, enerjinizi artırmanıza ve günlük zorluklarla başa
        çıkmanıza yardımcı olur.</p>
    </div>
    <section>
      <Accordion :data="vitamins" baseUrl="products/" title="Vitaminler & Takviye Edici Gıdalar" />
    </section>
    <section>
      <Accordion :data="drinks" baseUrl="products/drinks/" title="Vitaminli İçecekler" />
    </section>
    <section>
      <Accordion :data="shampoos" baseUrl="products/shampoos/" title="Kozmetik Ürünleri & Şampuanlar" />
    </section>
  </div>
</template>

<script setup>
import data from "../../assets/products.json"

const vitamins = data.vitamins
const drinks = data.drinks
const shampoos = data.shampoos

const vitaminsIsOpen = ref(true)
const drinksIsOpen = ref(true)
const shampoosIsOpen = ref(true)


</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 30px;

  .img {
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

        .img {
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

        .img {
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

        .img {
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

@media only screen and (max-width : 480px) {

  h2,
  h4,
  p {
    padding-inline: 12px;
  }

  .prod {
    .cards {
      justify-content: center;
    }
  }
}
</style>