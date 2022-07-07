<template>
  <router-link :to="link">
    <img class="logo" :src="require('@/assets/logos/' + logo + '.svg')" :alt="logo_alt" />
    <img class="icon" :src="require('@/assets/vectors/' + icon + '.svg')" :alt="icon_alt" />
    <div class="texts">
      <span>{{ category }}</span>
      <h1 v-html="title"></h1>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'card',
    props: ['link', 'logo', 'logo_alt', 'icon', 'icon_alt', 'category', 'title']
  };
</script>

<style scoped lang='scss'>
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 14px 12px;
    width: 100%;
    height: 220px;
    border-radius: 10px;
    border-bottom: 2px solid #3298cb;
    background-color: rgba(20, 40, 60, 0.35);
  }

  a:nth-of-type(2n) {
    transform: translateY(50px);
  }

  .logo {
    height: 15px;
  }

  .icon {
    margin: 0 auto;
    max-width: 75px;
    max-height: 70px;
  }

  .texts {
    display: flex;
    flex-direction: column;
  }

  span {
    margin-bottom: 3px;
    font-weight: 300;
    font-size: 10px;
    font-style: italic;
  }

  h1 {
    font-size: 16px;
  }

  @media only screen and (min-width: 1000px) {
    a {
      height: 400px;
      padding: 26px;
      border-radius: 15px;
      border-bottom: 4px solid #3298cb;
    }

    a:nth-of-type(2n) {
      transform: none;
    }

    a:nth-of-type(3n-1) {
      transform: translateY(50px);
    }

    a:nth-of-type(3n-2) {
      transform: translateY(100px);
    }

    .logo {
      height: 30px;
    }

    .icon {
      margin: 0 auto;
      max-width: 140px;
      max-height: 130px;
    }

    span {
      margin-bottom: 5px;
      font-size: 14px;
    }

    h1 {
      font-size: 26px;
    }
  }
</style>
