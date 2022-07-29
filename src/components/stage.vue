<template>
  <article>
    <div class="container">
      <div>
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

span {
  margin-bottom: 5px;
}

h1 {
  font-weight: 600;
  font-size: 28px;
}

span,
p {
  font-size: 14px;
}

p:not(:last-child) {
  margin-bottom: 30px;
}

@media only screen and (min-width: 1000px) {
  .container {
    flex-direction: row;

    div:first-of-type {
      margin-right: 100px;
    }
  }

  h1 {
    font-size: 36px;
  }

  span,
  p {
    font-size: 18px;
  }
}
</style>
