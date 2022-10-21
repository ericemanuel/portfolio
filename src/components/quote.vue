<template>
  <article>
    <div class="container">
      <h1>
        <em>{{ quote }}</em>
      </h1>
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
.container {
  display: flex;
  flex-direction: column;
}

h1 {
  margin-bottom: 5px;
  text-align: center;
  font-size: 24px;
}

span {
  width: 100%;
  text-align: right;
  font-size: 20px;
}
</style>
