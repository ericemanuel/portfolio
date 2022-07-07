<template>
  <introduction id="intro"
    title="Soul" description="Tomada de decisões baseadas no desejo inconsciente do usuário"
    logo="puc-rio" alt="Puc-Rio" :skills="['Desenvolvimento', 'UX Design', 'Eletrônica']"
  />

  <stage class="stage"
    stage="Desafio" title="An MVP for the tech-enabled store"
    :paragraphs="[
      'Multiple customer touchpoints provides a wide opportunity for improving the ordering experience.',
      'After a series of innovation workshops, the team has decided on perfecting the pickup and delivery process by integrating a mobile app for their consumers.',
      'With the David & Sebs at the helm of it all, the whole team quickly got into the drawing board – drafting, sharing and skeching their ideas.'
    ]"
  />

  <board id="board"
    :images="['1', '2', '3']" :alts="['1', '2', '3']"
  />

  <quote class="quote"
    quote="In just a few months – they already have branches expanding from Singapore to Bangkok. And now,
          secretly brewing six more yellow shops near you."
  />

  <stage class="stage"
    stage="Desafio" title="An MVP for the tech-enabled store"
    :paragraphs="[
      'Multiple customer touchpoints provides a wide opportunity for improving the ordering experience.',
      'After a series of innovation workshops, the team has decided on perfecting the pickup and delivery process by integrating a mobile app for their consumers.',
      'With the David & Sebs at the helm of it all, the whole team quickly got into the drawing board – drafting, sharing and skeching their ideas.'
    ]"
  />

  <gallery class="gallery"
    :images="['1', '2', '3', '1', '2', '3']" :alts="['1', '2', '3', '1', '2', '3']"
  />

  <stage class="stage"
    stage="Desafio" title="An MVP for the tech-enabled store"
    :paragraphs="[
      'Multiple customer touchpoints provides a wide opportunity for improving the ordering experience.',
      'After a series of innovation workshops, the team has decided on perfecting the pickup and delivery process by integrating a mobile app for their consumers.',
      'With the David & Sebs at the helm of it all, the whole team quickly got into the drawing board – drafting, sharing and skeching their ideas.'
    ]"
  />

  <gallery class="gallery"
    :images="['1', '2', '3', '1', '2', '3']" :alts="['1', '2', '3', '1', '2', '3']"
  />

  <others id="others"
    :links="['./montehermom', './designsystem']"
    :titles="['Monte Hermom', 'Design System']" :images="['1', '2']" :alts="['1', '2']"
  />
</template>

<script>
  import introduction from '@/components/introduction.vue'
  import stage from '@/components/stage.vue'
  import board from '@/components/board.vue'
  import quote from '../components/quote.vue'
  import gallery from '../components/gallery.vue'
  import others from '@/components/others.vue'

  export default {
    name: 'soul',
    components: { introduction, stage, board, quote, gallery, others }
  };
</script>

<style scoped lang="scss">
  #hero {
    margin-top: 60px;
    position: relative;
  }

  @media only screen and (min-width: 940px) {
    #hero {
      margin-top: 150px;
    }
  }
</style>
