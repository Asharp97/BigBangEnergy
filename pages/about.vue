<template>
  <div>
    <div class="section">
      
    </div>
    <div class="section">
      <div class="lists ">
        <div class="container lists">
          <div class="list">
            <div class="content">
              <h2>Katı Üretim</h2>
              <div>
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
              <p>Üretimler, kapalı devre, HACCP yönetmeliğine uygun son teknoloji ekipmanlarla yapılmaktadır.
              </p>
              <p>
                Çiğnenebilir Yumuşak Jel
              </p>
              <p>
                Takviye edici gıda üretimi konusunda çiğnenebilir yumuşak jel üretim bandımız</p>
            </div>
          </div>
          <div class="list">
            <div class="content">
              <h2>Likit Üretim</h2>
              <div>
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
              <p>Üretimler, otomasyon kontrollü, manuel müdahalenin olmadığı, kapalı şekilde çalışan tanklarda
                yapılmaktadır. Etken ve yardımcı maddeler bu tanklara vakum sistemiyle aktarılır.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div class="section colors">
      <div class="container">
        <div class="whitebg">
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
@import "./assets/scss/variabls.scss";

.section {
  color: $primary;

  .h1 {
    display: flex;
  }

  h1 {}

  p {}

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
      }

      .border {
        border-bottom: 1px solid $primary;
      }

    }


  }

}

.sci {
  background-image: url();
  //note
}

.colors {
  background-image: url();
  //note

}
</style>