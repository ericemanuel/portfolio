<template>
  <router-link id="logo" to="/">
    <div class="container">
      <img src="@/assets/logos/ee.svg" alt="Eric Emanuel">
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'logo'
};
</script>

<style scoped lang="scss">
img {
  margin: 0 auto;
  width: 40px;
}

@media only screen and (min-width: 1000px) {
  img {
    width: 50px;
  }
}
</style>
