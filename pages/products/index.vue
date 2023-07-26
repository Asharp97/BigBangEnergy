<template>
  <div>
    <!-- {{ prods }} -->
    <div v-for="vitamin in vitamins" :key="id">
      {{ vitamin.name }}-{{ vitamin.tablet }}
      <div v-for="detail in vitamin.details">
        <strong> {{ detail.header }} </strong>
        {{ detail.content }}
      </div>
    </div>

  </div>
</template>

<script>
import data from "../../assets/products.json"
export default {
  data() {
    return {
      vitamins: data.vitamins,
      drinks: data.drink,
      shampoos: data.shampoo
    }
  }

}
</script>

<style lang="scss" scoped></style>