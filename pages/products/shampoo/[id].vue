<template>
  <div class="container">
    <div class="prod section" :style="`color:${shampoos[id - 1].color}`">
      <div class="imgdiv">
        <img :src="`http://bigbang-energy.com.tr/prodImages/shampoos/${id}.png`" alt="" />
      </div>
      <div class="textdiv">
        <div class="header">
          <h1 :style="`border-bottom: ${shampoos[id - 1].color} 1px solid;`">
            {{ shampoos[id - 1].name }}
          </h1>
        </div>
        <div class="subheader">
          <h2 :style="`border-bottom: ${shampoos[id - 1].color} 1px solid;`">
            {{ shampoos[id - 1].flavor }}
          </h2>
        </div>
        <p>
          Sağlıklı ve güzel saçlar, kendimizi iyi hissetmemizin ve özgüvenimizi artırmanın önemli bir parçasıdır. BigBang
          Energy olarak, sizlere doğal ve etkili şampuanlar sunarak, saçlarınıza özen göstermenize ve onları en iyi
          şekilde korumanıza yardımcı oluyoruz.
        </p>
        <p>
          Sizlere sağlıklı ve güzel saçlar için en iyi çözümleri sunmaktan mutluluk duyuyoruz. BigBang Energy ailesine
          katılarak, saç bakımınızda doğallığı ve etkinliği bir arada yaşayın. Sağlıklı saçlar, daha mutlu günler
          demektir!
        </p>
      </div>
    </div>
  </div>
</template>

<script >
import data from "../../../assets/products.json"
// const { id } = useRoute().params

export default {
  data() {
    return {
      id: useRoute().params.id,
      vitamins: data.vitamins,
      shampoos: data.shampoos,
      shampoos: data.shampoos
    }
  },
  created() {
    console.log(useRoute().params)
  }
}

</script>

<style lang="scss" scoped>
.prod {
  display: flex;
  justify-content: space-between;

  .imgdiv {
    width: 30%;

    img {
      width: 80%;
      // transform: scale(0.5);
    }
  }

  .textdiv {
    width: 65%;
    display: flex;
    flex-direction: column;

    p {
      margin-top: 30px;
    }

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