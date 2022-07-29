<template>
  <div class="container">
    <div class="texts">
      <h1 v-html="title"></h1>
      <hr />
      <p v-html="description"></p>
    </div>
    <img :src="require('@/assets/vectors/' + icon + '.svg')" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'slide',
  props: ['title', 'description', 'icon', 'alt']
};
</script>

<style scoped lang="scss">
.container {
  flex-direction: column-reverse;
  align-items: flex-start;
}

.texts {
  margin-top: -20px;
}

h1 {
  font-size: 36px;
  font-weight: 600;
}

p {
  font-size: 14px;
}

img {
  margin-left: auto;
  height: 180px;
  z-index: -1;
}

@media only screen and (min-width: 1000px) {
  .container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .texts {
    margin: 0 20px 0 0;
  }

  h1 {
    font-size: 60px;
  }

  p {
    font-size: 18px;
  }

  img {
    margin-left: 0;
    height: 350px;
  }
}
</style>
