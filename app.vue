<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import "./assets/scss/variabls.scss";


* {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;

}

body {
  background-color: #fff;
}

.container {
  width: 1440px;
  margin-inline: auto;
}

.li {
  padding-left: 24px;
  padding-right: 12px;
  padding-block: 12px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 14px;
    left: 7px;
    height: 12px;
    width: 12px;
    background-color: $primary;
    border-radius: 50%;
  }
}

.rev {
  background-color: #084f9e;
  color: white;
  padding-block: 12px;
  border-radius: 5px;

  &:before {
    background-color: white !important;
  }
}

.button {
  background-color: #084f9e;
  color: white;
  border-radius: 4px;
  padding: 12px;
}

.whitebg{
  background: rgba(255, 255, 255, 0.80);
  width: 100%;
}
</style>