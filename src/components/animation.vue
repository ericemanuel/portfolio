<template>
  <div>
    <video autoplay loop muted playsinline poster="@/assets/videos/green.png">
      <source src="@/assets/videos/green.webm" type="video/webm" />
    </video>
  </div>
</template>

<script>
  export default {
    name: 'animation'
  };
</script>

<style scoped lang="scss">
  div {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -2;
    margin: -70px auto 0;
    width: 100%;
    max-width: 650px;
    opacity: .85;
    overflow: hidden;
  }

  video {
    display: flex;
    margin: 0 0 0 auto;
    max-width: 500px;
  }

  @media only screen and (min-width: 1000px) {
    div {
      top: 0;
      right: 0;
      left: 0;
      margin: -200px auto 0;
      max-width: 1600px;
    }

    video {
      max-width: 1200px;
    }
  }
</style>
