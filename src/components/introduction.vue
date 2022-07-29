<template>
  <article>
    <div class="container">
      <div class="intro">
        <span><em>{{ stage }}</em></span>
        <h1>{{ title }}</h1>
        <hr>
        <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
      </div>
      <div class="data">
        <div>
          <span><em>Local</em></span>
          <span>{{ location }}</span>
        </div>
        <div>
          <span><em>Ano</em></span>
          <span>{{ date }}</span>
        </div>
        <div>
          <span><em>Cliente</em></span>
          <img :src="require('@/assets/logos/' + logo + '.svg')" :alt="alt" />
        </div>
        <div>
          <span><em>Habilidades</em></span>
          <ul>
            <li v-for="skill in skills">. {{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'introduction',
  props: ['stage', 'title', 'paragraphs', 'location', 'date', 'logo', 'alt', 'skills']
}
</script>

<style scoped lang="scss">
.container {
  flex-direction: column;
  align-items: flex-start;
}

.intro {
  margin-bottom: 40px;

  span {
    margin-bottom: 5px;
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
  }

  p:not(:last-child) {
    margin-bottom: 30px;
  }
}

.data {
  display: grid;
  grid-template-columns: repeat(auto-fit, max(170px));
  grid-gap: 20px;
  width: 100%;

  span {
    margin-bottom: 5px;
  }

  img {
    height: 40px;
  }

  li:not(:last-child) {
    margin-bottom: 5px;
  }
}

span,
p,
li {
  font-size: 14px;
}

@media only screen and (min-width: 1000px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
  }

  .intro {
    margin: 0 80px 0 0;

    h1 {
      font-size: 36px;
    }
  }

  .data {
    grid-gap: 40px;
    width: auto;
  }

  span,
  p,
  li {
    font-size: 18px;
  }
}
</style>
