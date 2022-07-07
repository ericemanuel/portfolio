<template>
  <section>
    <div class="container">
      <router-link :to="links[0]">
        <div>
          <span><em>Anterior</em></span>
          <h1>{{ titles[0] }}</h1>
        </div>
        <img :src="require('@/assets/images/' + images[0] + '.png')" :alt="alts[0]" />
      </router-link>
      <router-link :to="links[1]">
        <div>
          <span><em>Próximo</em></span>
          <h1>{{ titles[1] }}</h1>
        </div>
        <img :src="require('@/assets/images/' + images[1] + '.png')" :alt="alts[1]" />
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'others',
  props: ['links', 'titles', 'images', 'alts']
}
</script>

<style scoped lang="scss">
section {
  padding: 80px 0;
  background-color: rgba(0, 0, 0, .3);

  .container {
    justify-content: space-between;

    a:first-child {
      display: none;
    }

    a {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 350px;

      div {
        z-index: 2;

        span {
          margin-bottom: 5px;
          font-size: 18px;
        }

        h1 {
          font-size: 36px;
          font-weight: 600;
        }
      }

      img {
        position: absolute;
        right: 0;
        width: 200px;
        height: 120px;
        opacity: .3;
      }
    }
  }
}

@media only screen and (min-width: 1000px) {
  section {
    padding: 100px 0;

    .container {
      a:first-child {
        display: flex;
      }
    }
  }
}
</style>
