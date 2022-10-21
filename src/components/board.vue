<template>
  <article>
    <div class="container">
      <div>
        <img :src="require('@/assets/images/' + images[0] + '.png')" :alt="alts[0]" />
      </div>
      <div>
        <img :src="require('@/assets/images/' + images[1] + '.png')" :alt="alts[1]" />
        <img :src="require('@/assets/images/' + images[2] + '.png')" :alt="alts[2]" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'board',
  props: ['images', 'alts']
}
</script>

<style scoped lang="scss">
.article {
  align-items: stretch;
}

.container {
  flex-direction: column;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 50px;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img:first-of-type {
      display: none;
    }
  }

  img {
    max-height: 300px;
    max-width: 100%;
  }
}

@media only screen and (min-width: 1000px) {
  section {
    margin-bottom: 150px;
  }

  .container {
    flex-direction: row;

    div:first-child {
      margin: 0 50px 0 0;
    }

    div:last-child {
      img:first-of-type {
        display: unset;
        margin-bottom: 75px;
      }
    }

    img {
      max-height: 470px;
    }
  }
}
</style>
