<template>
  <animation />
  <rapport />
  <logotype />
  <router-view />
  <logo />
</template>

<script>
import animation from '@/components/animation.vue';
import rapport from '@/components/rapport.vue';
import logotype from '@/components/logotype.vue';
import logo from '@/components/logo.vue';

export default {
  name: 'App',
  components: { animation, rapport, logotype, logo }
};
</script>

<style lang="scss">
@import "@/styles/resets.scss";
@import "@/styles/fonts.scss";
@import "@/styles/swiper.scss";

html {
  min-width: 340px;
  background-color: #142332;
}

body {
  position: relative;
  margin: 0;
  padding: 0 0 40px;
  overflow-x: hidden;
}

header {
  margin: 120px 0 80px;
}

section,
article,
figure {
  margin: 80px 0;
}

.container {
  display: flex;
  align-items: center;
  margin: auto;
  max-width: 360px;
}

em {
  font-weight: bolder;
  background: -webkit-linear-gradient(0deg, #3298cb, #38bfc3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

hr {
  margin: 20px 0;
  width: 30px;
  box-sizing: border-box;
  border: 2px solid #38bfc3;
}

@media only screen and (min-width: 1000px) {
  header {
    margin: 190px 0 150px;
  }

  section,
  article,
  figure {
    margin: 150px 0;
  }

  .container {
    max-width: 900px;
  }

  hr {
    margin: 33px 0 30px;
    width: 50px;
  }
}
</style>
