<template>
  <header>
    <div class="container">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <span>{{ title }}</span>
  </header>
</template>

<script>
export default {
  name: 'cover',
  props: ['title', 'description']
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-top: 0;
  background-color: gray;
}

.container {
  flex-direction: column;
}

h1 {
  font-size: 70px;
  font-weight: 600;
}

p {
  font-size: 14px;
}

span {
  position: absolute;
  font-weight: 700;
  font-size: 400px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  opacity: .15;
}

@media only screen and (min-width: 1000px) {
  p {
    font-size: 18px;
  }
}
</style>
