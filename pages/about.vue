<template>
  <div class="sections gap">
    <div class="sci section">
      <div class="container">
        <div class="port">

          <h1>Üretim Portföyümüz</h1>
          <div class="ps">

            <p>Tarım Bakanlığı ruhsatlı tablet, kapsül, toz ve likit formunda, Sağlık Bakanlığı bildirim belgeli krem,
              likit
              ve toz grubu dermokozmetik markalarımızı ve ayrıca private label olarak ta üretimleri yapmaktayız.
            </p>
            <p>
              Üretim tesisi HACCP kurallarına uygun 5 katlı olup iki katı yaygın üretim sistemi olarak dizayn
              edilmiştir.Üretim ve ambalajlama bölümlerinde, esnek kapasite ve yüksek hıza sahip olan üretim ve ambalaj
              hatları kullanılmaktadır.</p>
          </div>
        </div>
      </div>
    </div>
    <nuxt-img class="onlyMob"
      src="https://drscdn.500px.org/photo/1074447313/m%3D900/v2?sig=c46655947cfb62114ebab57bfa6f6438bc98ac4d0e9dd907505f03e0eee490a3"
      alt="" />
    <div class="section">
      <div class="lists ">
        <div class="container lists">
          <div class="list">
            <div class="content">
              <h2>Katı Üretim</h2>
              <div class="uretims">
                <div class="border">
                  <div class="li">
                    Tablet
                  </div>
                </div>
                <div class="border">
                  <div class="li">
                    Efervesan Tablet
                  </div>
                </div>
                <div class="border">
                  <div class="li">
                    Şase
                  </div>
                </div>
                <div class="border">
                  <div class="li">
                    Kapsül
                  </div>
                </div>

              </div>
              <div class="par">
                <p>Üretimler, kapalı devre, HACCP yönetmeliğine uygun son teknoloji ekipmanlarla yapılmaktadır. </p>
                <p> Çiğnenebilir Yumuşak Jel </p>
                <p> Takviye edici gıda üretimi konusunda çiğnenebilir yumuşak jel üretim bandımız</p>
              </div>
            </div>
          </div>
          <div class="list">
            <div class="content">
              <h2>Likit Üretim</h2>
              <div class="uretims">
                <div class="border">
                  <div class="li">
                    Şurup
                  </div>
                </div>
                <div class="border">
                  <div class="li">
                    Süspansiyon
                  </div>
                </div>
                <div class="border">
                  <div class="li">
                    Sprey
                  </div>
                </div>
                <div class="border">
                  <div class="li">
                    Damla
                  </div>
                </div>

              </div>
              <div class="par">

                <p>Üretimler, otomasyon kontrollü, manuel müdahalenin olmadığı, kapalı şekilde çalışan tanklarda
                  yapılmaktadır. Etken ve yardımcı maddeler bu tanklara vakum sistemiyle aktarılır.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div class="section colors">
      <div class="color container">
        <div class=" whitebg">
          <h1>Kozmetik Üretim</h1>
          <p>Kişisel bakım, temizlik ürünleri,dermokozmetik’ten diş macununa kadar 1500 den fazla ürün gamına üretim
            yapılmaktadır.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.section {
  color: #084f9e;
  height: 100%;

  .port {
    width: 40%;
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-direction: column;
    height: 100%;

    .ps {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }

  .h1 {
    display: flex;
  }

  h1 {
    font-size: 40px;
    font-weight: 400;

  }

  p {
    font-size: 20px;
  }

  .lists {
    display: flex;
    background: linear-gradient(90deg, #FFF 46.32%, #E1EDEF 61.57%);
    padding-block: 40px;



    .list {
      width: 50%;

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width: 80%;

        .par {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }

      .border {
        border-bottom: 1px solid #084f9e;
      }
    }
  }
}

.sci {
  background-image: url('https://drscdn.500px.org/photo/1074447313/m%3D900/v2?sig=c46655947cfb62114ebab57bfa6f6438bc98ac4d0e9dd907505f03e0eee490a3');
  background-size: cover;
  height: 702px;
  display: flex;
  justify-content: center;

}

.colors {
  background-image: url('https://drscdn.500px.org/photo/1074447312/m%3D900/v2?sig=1992c547026c986f35f81c3dda4cf63fa2600052c04349fdef232cb791283c0d');
  background-size: cover;
  height: 239px;

  .color {
    display: flex;
    align-items: center;
    height: 100%;



    h1 {
      font-size: 35px;

    }


  }
}

.onlyMob {
  display: none;
}

@media only screen and (max-width : 480px) {
  .onlyMob {
    display: block;
  }

  .port {
    text-align: center;
    height: fit-content !important;
    margin-block: 20px;
    margin-inline: auto;
    width: 96% !important;
    gap: 12px !important;

    .ps {
      gap: 2px !important;
    }

  }

  h1 {
    font-size: 20px !important;
  }

  p {
    font-size: 10px !important;
  }

  .content {
    width: 100%;
  }

  .sci {
    background-image: none;
    height: fit-content;
  }

  .gap {
    gap: 0;
  }

  .lists {
    display: flex;
    flex-direction: column;
    background: none !important;

    .list {
      width: 100% !important;
      margin-block: 12px;

      .content {
        width: 100% !important;

        h2,
        .uretims,
        p {
          padding-inline: 12px;
        }

        .sci {
          background-image: none;
        }
      }
    }
  }

  .whitebg {
    p {
      padding: 12px;
    }
  }
}
</style>