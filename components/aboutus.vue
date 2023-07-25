<template>
  <div class="container comp">
    <div class="imgDiv">
      <img src="../assets/comp2.png" alt="">
    </div>
    <div class="textdiv">
      <h3>Hakkımızda</h3>
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabls.scss";
.comp {
  display: flex;
  padding-block: 40px;
  justify-content: space-between;
  .imgDiv{
    width: 50%;
    img{
      width: 100%;
    }
  }
  .textdiv {
    color: $primary;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-right: 28px;
    
    h3{
      font-size: 30px;
      font-weight: 400;
      
    }
    p{
      font-size: 16px;
    }
  }
}
</style>