<template>
  <article>
    <div class="container">
      <h1><em>{{ quote }}</em></h1>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'quote',
    props: ['quote']
  }
</script>

<style scoped lang="scss">
  h1 {
      text-align: center;
      font-size: 24px;
  }
</style>
