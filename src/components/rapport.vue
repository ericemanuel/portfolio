<template>
  <div></div>
</template>

<script>
  export default {
    name: 'rapport'
  }
</script>

<style scoped lang="scss">
  div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -3;
    background-image: url(@/assets/vectors/rapport.svg);
    background-size: 300px;
    background-repeat: repeat;
    opacity: .2;
  }

  @media only screen and (min-width: 1000px) {
    div {
      background-size: 400px;
    }
  }
</style>
