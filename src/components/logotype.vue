<template>
  <nav id="logotype">
    <div class="container">
      <router-link to="/">
        <img src="@/assets/logos/ericemanuel.svg" alt="Eric Emanuel" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'logotype'
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
}

a {
  width: 100%;
}

img {
  position: absolute;
  top: 20px;
  height: 40px;
}

@media only screen and (min-width: 1000px) {
  img {
  height: 50px;
}
}
</style>
  