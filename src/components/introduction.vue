<template>
  <article>
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="data">
        <div class="description">
          <span><em>Descrição</em></span>
          <span>{{ description }}</span>
        </div>
        <div>
          <span><em>Cliente</em></span>
          <img :src="require('@/assets/logos/' +logo +'.svg')" :alt="alt" />
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
    props: ['title', 'description', 'logo', 'alt', 'skills']
  }
</script>

<style scoped lang="scss">
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    margin-bottom: 80px;
    font-size: 46px;
    font-weight: 600;
  }

  .data {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .description {
    width: 300px;
  }

  span {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }

  img {
    margin-top: 5px;
    height: 40px;
  }

  @media only screen and (min-width: 1000px) {
    h1 {
      font-size: 90px;
    }

    .data {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
