<template>
  <router-link id="logotype" to="/">
    <div class="container">
      <img src="@/assets/logos/ericemanuel.svg" alt="Eric Emanuel" />
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'logotype'
  }
</script>

<style scoped lang="scss">
  img {
    width: 170px;
  }

  @media only screen and (min-width: 1000px) {
    img {
      width: 220px;
    }
  }
</style>
