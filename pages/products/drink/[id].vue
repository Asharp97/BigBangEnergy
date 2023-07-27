<template>
  <div class="container">
    <div class="prod section">
      <div class="imgDiv">
        <img :src="`http://bigbang-energy.com.tr/prodImages/drinks/${id}.png`" alt="">
      </div>
      <div class="textDiv">
        <div class="header">
          <h1>
            {{ drinks[id].name }}
          </h1>
        </div>
        <div class="bottom">
          <div class="l">
            <img class="tableContent" :src="`http://bigbang-energy.com.tr/prodImages/drinks/tables/${id}-1.png`" alt="">
          </div>
          <div class="r">
            <div class="rt">
              <img class="tableContent" :src="`http://bigbang-energy.com.tr/prodImages/drinks/tables/${id}-2png`" alt="">
            </div>
            <div class="rb">
              <p> {{ drinks[id].notes }} </p>
            </div>
          </div>
        </div>
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
  color: #084F9E;

  .imgDiv {
    width: 30%;

    img {
      width: 100%;
    }
  }

  .textDiv {
    width: 65%;
    display: flex;
    flex-direction: column;

    .header {
      h1 {
        font-size: 60px;
        font-weight: 400;
        width: 60%;
        border-bottom: #084F9E 1px solid;
      }

    }

    .bottom {
      display: flex;

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
      font-size: 60px;
      font-weight: 400;
      width: 60%;
      border-bottom: #084F9E 1px solid;
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

    .imgDiv {
      width: 300px;

      img {
        width: 100%;
      }
    }
  }
}
</style>