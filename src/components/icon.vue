<template>
  <a :href="link">
    <img :src="require('@/assets/logos/' + icon + '.svg')" :alt="alt" />
  </a>
</template>

<script>
  export default {
    name: 'icon',
    props: ['link', 'icon', 'alt']
  };
</script>

<style scoped lang="scss">
  img {
    height: 18px;
  }

  @media only screen and (min-width: 1000px) {
    img {
      height: 20px;
    }
  }
</style>
