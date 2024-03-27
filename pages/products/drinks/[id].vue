<template>
  <div class="container">
    <div class="prod section" :style="`color:${drinks[id - 1].color}`">
      <div class="imgdiv">
        <nuxt-img class="img" :src="`products/drinks/${id}.png`" />

      </div>
      <div class="textdiv">
        <div class="header">
          <h1 :style="`border-bottom: ${drinks[id - 1].color} 1px solid;`">
            {{ drinks[id - 1].name }}
          </h1>
        </div>
        <div class="subheader">
          <h2 :style="`border-bottom: ${drinks[id - 1].color} 1px solid;`">
            VİTAMİNLİ İÇECEK
          </h2>
        </div>
        <div class="bottom">
          <div class="l">
            <nuxt-img class="tableContent" :src="`products/drinks/tables/${id}-1.svg`" alt="" />

          </div>
          <div class="r">
            <div class="rt">
              <nuxt-img class="tableContent" :src="`products/drinks/tables/${id}-2.svg`" alt="" />

            </div>
            <div class="rb">
              <p> {{ drinks[id - 1].notes }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../../assets/products.json"
// const { id } = useRoute().params

export default {
  data() {
    return {
      id: useRoute().params.id,
      vitamins: data.vitamins,
      drinks: data.drinks,
      shampoos: data.shampoos
    }
  },
}

</script>

<style lang="scss" scoped>
.prod {
  display: flex;
  justify-content: space-between;

  .imgdiv {
    width: 30%;

    img {
      width: 100%;
    }
  }

  .textdiv {
    width: 65%;
    display: flex;
    flex-direction: column;

    .header {
      h1 {
        font-size: 50px;
        font-weight: 400;
        width: fit-content;
      }

    }

    .bottom {
      display: flex;
      gap: 25px;
      margin-top: 20px;

      .r {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }


    .subheader {
      display: flex;
      justify-content: flex-end;

      h2 {
        font-size: 16px;
        font-weight: 400;
        width: 60%;

        text-align: end;
      }
    }

    .details {
      margin-top: 40px;

      h3 {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 600;
      }

      .detailHeader {
        font-size: 15px;
        font-weight: 700;
        margin-top: 12px;
      }
    }
  }
}


.content {
  .header {
    h1 {
      font-size: 60px;
      font-weight: 400;
      width: 60%;
    }

  }

  .table {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tableContent {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .disclaimer {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        padding-inline: 20px;
      }


      align-items: center;
      width: 380px;
      height: 180px;
      border-radius: 9px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    }

    .imgdiv {
      width: 300px;

      img {
        width: 100%;
      }
    }
  }
}
</style>