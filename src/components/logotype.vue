<template>
  <router-link id="logotype" to="/">
    <img src="@/assets/logos/ericemanuel.svg" alt="Eric Emanuel" />
  </router-link>
</template>

<script>
export default {
  name: 'logotype'
}
</script>

<style scoped lang="scss">
img {
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 10;
  width: 170px;
}

@media only screen and (min-width: 1000px) {}
</style>
