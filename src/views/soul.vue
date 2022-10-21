<template>
  <cover id="cover" title="Soul" description="Interfaces com o pensamento"></cover>

  <introduction
    id="intro"
    stage="Desafio"
    title="Interfaces controladas pelo pensamento"
    :paragraphs="[
    'Nós, humanos, percebemos e interagimos com o mundo através dos nossos cinco sentidos. Juntos, eles coletam informações sobre o ambiente que são interpretadas pelo nosso cérebro e nos tornam quem somos.',
    'Nossos computadores, por outro lado, ainda se limitam a perceber apenas inputs táteis de nossas mãos. Para cada app aberto ou mensagem lida, é necessário uma decisão do usuário e um movimento para ativá-lo.',
    'Mas, e se não precisasse ser assim?']"
    location="Rio de Janeiro"
    date="2014"
    logo="puc-rio"
    alt="Puc-Rio"
    :skills="['Desenvolvimento', 'UX Design', 'Eletrônica']"
  />

  <board id="board" :images="['1', '2', '3']" :alts="['1', '2', '3']" />

  <stage
    class="stage"
    stage="Desafio"
    title="An MVP for the tech-enabled store"
    :paragraphs="[
      'Não me entendam mal: mouses, teclados, touch, câmeras e microfones funcionam muito bem no nosso dia-a-dia, mas todos exigem uma ação do usuário para serem compreendidas. Até mesmo a Alexa exige que você fale o nome dela.',
      'Nossa comunicação com outras pessoas não funciona assim. Muitas informações são transmitidas de forma espontânea e inconsciente - como uma postura corporal, um tom de voz ou um simples olhar.',
      'Mas é claro que esses dados existem em algum lugar: o nosso cérebro. '
    ]"
  />

  <quote
    class="quote"
    quote="&quot;Se eu pudesse resumir o seu projeto em uma palavra, escolheria Resiliência&quot;"
  />

  <gallery
    class="gallery"
    :images="['1', '1', '1', '1', '1', '1']"
    :alts="['1', '2', '3', '1', '2', '3']"
  />

  <stage
    class="stage"
    stage="Desafio"
    title="An MVP for the tech-enabled store"
    :paragraphs="[
      'Multiple customer touchpoints provides a wide opportunity for improving the ordering experience.',
      'After a series of innovation workshops, the team has decided on perfecting the pickup and delivery process by integrating a mobile app for their consumers.',
      'With the David & Sebs at the helm of it all, the whole team quickly got into the drawing board – drafting, sharing and skeching their ideas.'
    ]"
  />

  <gallery
    class="gallery"
    :images="['1', '1', '1', '1', '1', '1']"
    :alts="['1', '2', '3', '1', '2', '3']"
  />

  <others
    id="others"
    :links="['./montehermom', './designsystem']"
    :titles="['Monte Hermom', 'Design System']"
    :images="['1', '2']"
    :alts="['1', '2']"
  />
</template>

<script>
import cover from '@/components/cover.vue';
import introduction from '@/components/introduction.vue';
import stage from '@/components/stage.vue';
import board from '@/components/board.vue'
import quote from '../components/quote.vue'
import gallery from '../components/gallery.vue'
import others from '@/components/others.vue';

export default {
  name: 'soul',
  components: { cover, introduction, stage, board, quote, gallery, others }
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
