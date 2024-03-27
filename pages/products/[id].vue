<template>
  <div class="container">
    <div class="prod section">

      <div class="imgdiv">
        <!-- <img :src="`http://bigbang-energy.com.tr/products/${id}.png`" alt="" /> -->

        <nuxt-img class="img" :src="`products/${id}.png`" />

      </div>
      <div class="textdiv">
        <div class="header">
          <h1>
            {{ vitamins[id - 1].name }}
          </h1>
        </div>
        <div class="subheader">

          <h2>
            {{ vitamins[id - 1].tablet }}
          </h2>
        </div>
        <div class="details">
          <h3 v-if="vitamins[id - 1].details">
            Sağlık Beyanları
          </h3>
          <div v-for="detail in vitamins[id - 1].details">
            <div class="detailHeader">
              {{ detail.header }}
            </div>
            {{ detail.content }}
          </div>
        </div>
        <div class="content section" v-if="!vitamins[id - 1].details">
          <div class="table">

            <!-- <img class="tableContent" :src="`http://bigbang-energy.com.tr/products/tables/${id}.png`" alt="" /> -->
            <nuxt-img class="img tableContent" :src="`products/tables/${id}.svg`" />

            <div class="disclaimer">
              <p>
                Türk Gıda Kodeksi Beslenme ve Sağlık Beyanları Yönetmeliği (29960 sayılı mükerrer / 26.01.2017 tarihli
                Resmi Gazete yayını)
              </p>
              <p>
                **BRD: Beslenme Referans Değeri
              </p>
              <p>
                BIG BANG ENERGY
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content section" v-if="vitamins[id - 1].details">
      <div class="header">
        <h1> İçerikler </h1>
      </div>
      <div class="table">
        <!-- <img class="tableContent" :src="`http://bigbang-energy.com.tr/products/tables/${id}.png`" alt="" /> -->
        <nuxt-img class="img tableContent" :src="`products/tables/${id}.svg`" />
        <div class="disclaimer">
          <p>
            Türk Gıda Kodeksi Beslenme ve Sağlık Beyanları Yönetmeliği (29960 sayılı mükerrer / 26.01.2017 tarihli Resmi
            Gazete yayını)
          </p>
          <p>
            **BRD: Beslenme Referans Değeri
          </p>
          <p>
            BIG BANG ENERGY
          </p>
        </div>
        <div class="imgdiv">
          <!-- <img :src="`http://bigbang-energy.com.tr/products/${id}.png`" alt="" class="secondImg"> -->
          <nuxt-img class="img secondImg" :src="`products/${id}.png`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../assets/products.json"
// const { id } = useRoute().params

export default {
  data() {
    return {
      id: useRoute().params.id,
      vitamins: data.vitamins,
      drinks: data.drink,
      shampoos: data.shampoo
    }
  },
}

</script>

<style lang="scss" scoped>
.prod {
  display: flex;
  justify-content: space-between;
  color: #084F9E;

  .imgdiv {
    width: 30%;
    max-width: 600px;

    .img {
      max-height: 700px;
      width: 100%;
      object-fit: contain;
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
        border-bottom: #084F9E 1px solid;
      }

    }


    .subheader {
      display: flex;
      justify-content: flex-end;

      h2 {
        font-size: 16px;
        font-weight: 400;
        width: 60%;
        border-bottom: #084F9E 1px solid;
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

.section {
  color: #084F9E;
}

.content {
  .header {
    h1 {
      font-size: 50px;
      font-weight: 400;
      width: fit-content;
      border-bottom: #084F9E 1px solid;
    }

  }

  .table {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tableContent {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      width: 100%;
      max-width: 300px;
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

      .img {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width : 480px) {
  .prod {
    flex-direction: row-reverse;
    margin-block: 30px;

    .content {}

    .imgdiv {
      height: fit-content;
      float: left;
    }

  }

  h1 {
    font-size: 20px !important;
    margin-block: 12px;
  }

  .container {
    width: 96%;
  }

  .table {
    flex-wrap: wrap;
    justify-content: center !important;
    gap: 12px;

    .tableContent {
      // width: 80%;
    }
  }

  .secondImg {
    display: none;
  }
}
</style>