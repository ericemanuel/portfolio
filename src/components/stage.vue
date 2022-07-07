<template>
  <article>
    <div class="container">
      <div class="title">
        <span><em>{{ stage }}</em></span>
        <h1>{{ title }}</h1>
        <hr>
      </div>
      <div>
        <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'stage',
    props: ['stage', 'title', 'paragraphs']
  }
</script>

<style scoped lang="scss">
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    margin-right: 75px;
  }

  span {
    margin-bottom: 5px;
  }

  h1 {
    width: 350px;
    font-weight: 600;
    font-size: 32px;
  }

  p:not(:last-child) {
    margin-bottom: 30px;
  }

  p, span {
    font-size: 16px;
  }

  @media only screen and (min-width: 1000px) {
    .container {
      flex-direction: row;
    }

    h1 {
      font-size: 36px;
    }

    p, span {
      font-size: 18px;
    }
  }
</style>
