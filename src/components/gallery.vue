<template>
  <figure>
    <div class="container">
      <img v-for="image in images" :src="require('@/assets/images/' + image + '.png')" :alt="alts[image]" />
    </div>
  </figure>
</template>

<script>
export default {
  name: 'gallery',
  props: ['images', 'alts']
}
</script>

<style scoped lang="scss">
figure {
  margin: 80px 0 130px;

  &:nth-of-type(2n-1) img:nth-of-type(2n-1) {
    transform: translateY(50px);
  }

  &:nth-of-type(2n) img:nth-of-type(2n) {
    transform: translateY(50px);
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, max(170px));
    grid-gap: 20px;

    img {
      width: 100%;
      height: 250px;
      border-radius: 15px;
      background-color: #3298CB;
    }
  }
}

@media only screen and (min-width: 1000px) {
  figure {
    margin: 150px 0 250px;

    &:nth-of-type(2n) img:nth-of-type(3n-2),
    &:nth-of-type(2n-1) img:nth-of-type(3n) {
      transform: none;
    }

    img:nth-of-type(3n-1) {
      transform: translateY(50px);
    }

    &:nth-of-type(2n) img:nth-of-type(3n),
    &:nth-of-type(2n-1) img:nth-of-type(3n-2) {
      transform: translateY(100px);
    }

    .container {
      grid-template-columns: repeat(auto-fit, max(270px));
      grid-gap: 45px;

      img {
        height: 400px;
      }
    }
  }
}
</style>
