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

* {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;

  body {
    a {
      color: inherit;
      text-decoration: none;
    }

    background-color: #fff;
    overflow-x: hidden;
  }
}


.container {
  width: 85%;
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
    background-color: #084f9e;
    border-radius: 50%;
  }
}


.rev {
  background-color: #084f9e;
  color: white !important;
  padding-block: 12px;
  // padding-inline: 12px;
  border-radius: 5px;

  &:before {
    background-color: white !important;
  }
}

h3 {
  font-size: 30px;
  font-weight: 400;
}

.button {
  background-color: #084f9e;
  color: white;
  border-radius: 12px;
  padding-inline: 20px;
  padding-block: 12px;

  font-size: 14px;
}

.whitebg {
  background: rgba(255, 255, 255, 0.80);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 53%;
}

.input {
  border: 1px solid #084f9e;
  padding: 12px;
  border-radius: 8px;
}

.gap {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

@media only screen and (max-width : 480px) {
  .container {
    width: 100%;
  }

}
</style>