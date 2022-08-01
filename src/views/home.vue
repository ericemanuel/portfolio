<template>
  <header id="hero">
    <swiper
      :modules="modules"
      :speed="1500"
      :autoplay="{ delay: 7000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="slide in slides">
        <slide
          :title="slide.title"
          :description="slide.description"
          :icon="slide.icon"
          :alt="slide.alt"
        />
      </swiper-slide>
    </swiper>
  </header>

  <section id="about">
    <div class="container">
      <div class="photo">
        <img src="@/assets/images/eric.jpg" alt="Eric Emanuel" />
        <div class="outline"></div>
      </div>
      <div class="texts">
        <h1>Boas ideias vêm do encontro de vários conhecimentos</h1>
        <hr />
        <p>
          Eu estudo Design, Desenvolvimento, Marketing, Liderança, Música
          <em>e faço um miojo maravilhoso!</em>
        </p>
        <div>
          <icon link="#" icon="whatsapp" alt="Whatsapp" />
          <icon link="#" icon="instagram" alt="Instagram" />
          <icon link="#" icon="facebook" alt="Facebook" />
          <icon link="#" icon="linkedin" alt="LinkedIn" />
        </div>
      </div>
    </div>
  </section>

  <section id="portfolio">
    <div class="container">
      <card
        v-for="card in cards"
        :link="card.link"
        :logo="card.logo"
        :logo_alt="card.alt"
        :icon="card.icon"
        :icon_alt="card.alt"
        :category="card.category"
        :title="card.title"
      />
    </div>
    <video autoplay muted loop playsinline poster="@/assets/videos/greengrid.png">
      <source src="@/assets/videos/greengrid.webm" type="video/webm" />
    </video>
  </section>

  <section id="blog">
    <a class="container" href="#">
      <h1>Meu Blog</h1>
      <hr />
      <p>Eu mantenho um blog sobre assuntos interessantes, dê uma olhada! =D</p>
    </a>
  </section>
</template>

<script>
import animation from '@/components/animation.vue'
import rapport from '@/components/rapport.vue'
import slide from '@/components/slide.vue'
import icon from '@/components/icon.vue'
import card from '@/components/card.vue'
import logo from '@/components/logo.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'

export default {
  name: 'home',
  components: { animation, rapport, Swiper, SwiperSlide, slide, icon, card, logo },
  data() {
    return {
      slides: [
        {
          title: "Designer e<br> desenvolvedor",
          description: "As soluções <em>bonitas e funcionais</em> que você<br> precisa, juntas em um único profissional.",
          icon: "gears", alt: "Engrenagens"
        },
        {
          title: "Publicidade<br> com impacto",
          description: "Comunicações que <em>valorizam o seu negócio</em><br> e fazem seus resultados decolarem!",
          icon: "rocket", alt: "Foguete"
        },
        {
          title: "Criatividade<br> em tudo",
          description: "Para cada trabalho <em>uma inspiração única,</em><br> para cada marca uma nova perspectiva.",
          icon: "creativity", alt: "Criatividade"
        },
        {
          title: "Paixão pelo<br> o que faço",
          description: "Para gerar <em>resultados incríveis</em><br> é preciso amar o que se faz!",
          icon: "fire", alt: "Fogo"
        }
      ],
      cards: [
        {
          link: "/portfolio/montehermom",
          logo: "montehermom", logo_alt: "Monte Hermom",
          icon: "cross", icon_alt: "Cruz",
          category: "Um pouco de tudo", title: "Tecnologia<br> para dar vida"
        },
        {
          link: "/portfolio/soul",
          logo: "puc-rio", logo_alt: "Puc-Rio",
          icon: "mind", icon_alt: "Mente",
          category: "Desenvolvimento", title: "Um app que lê<br> pensamentos"
        },
        {
          link: "/portfolio/designsystem",
          logo: "sesc", logo_alt: "Sesc",
          icon: "ds", icon_alt: "Design System",
          category: "UX Design", title: "Uma interface<br> para todos"
        },
        {
          link: "/portfolio/sesc+",
          logo: "sesc", logo_alt: "Sesc",
          icon: "map", icon_alt: "Map",
          category: "UX Design", title: "A experiência<br> de explorar"
        },
        {
          link: "/portfolio/radio",
          logo: "imusica", logo_alt: "iMusica",
          icon: "play", icon_alt: "Play",
          category: "UX Design", title: "Música de um<br> jeito diferente"
        },
        {
          link: "/portfolio/ericemanuel",
          logo: "ericemanuel", logo_alt: "Eric Emanuel",
          icon: "ee", icon_alt: "EE",
          category: "Direção de arte", title: "Minha própria<br> identidade"
        }
      ]
    }
  },
  setup() {
    const onSwiper = () => {
      const pagination = document.querySelector('.swiper-pagination');
      console.log(innerWidth);
      if (innerWidth < 1000) {
        pagination.style.right = (innerWidth - 360) / 2 + "px";
      }
      else {
        pagination.style.right = (innerWidth - 900) / 2 + "px"
      }
    };
    return {
      onSwiper,
      modules: [Autoplay, Pagination]
    };
  },
};
</script>

<style scoped lang="scss">
#hero {
  position: relative;
}

#about {
  margin: 80px 0 60px;

  .container {
    align-items: flex-start;
    justify-content: space-between;
  }

  .photo {
    display: flex;
    position: relative;
    z-index: -1;
  }

  img,
  .outline {
    width: 90px;
    height: 120px;
  }

  .outline {
    position: absolute;
    z-index: -2;
    top: -10px;
    right: -10px;
    box-sizing: border-box;
    border: 1.5px solid #3298cb;
  }

  .texts {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 27px 0 0 -100px;
  }

  h1 {
    text-align: right;
    font-size: 22px;
    max-width: 210px;
  }

  p {
    margin-bottom: 20px;
    font-size: 14px;
    text-align: right;
  }

  a:not(:last-child) {
    margin-right: 15px;
  }
}

#portfolio {
  position: relative;
  margin: 60px 0 110px;

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, max(170px));
    grid-gap: 20px;
  }

  router-link {
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

  router-link:nth-of-type(2n) {
    transform: translateY(50px);
  }

  video {
    display: none;
    position: absolute;
    top: -25px;
    right: 0;
    left: 0;
    z-index: -2;
    margin: 0 auto;
    opacity: 0.85;
  }
}

#blog {
  margin: 60px 0 80px;

  .container {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  h1 {
    padding-bottom: 2px;
    font-size: 30px;
    font-weight: 700;
    background: -webkit-linear-gradient(0deg, #38bfc3, #3298cb);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    max-width: 260px;
    font-size: 14px;
  }
}

@media only screen and (min-width: 1000px) {
  #about {
    margin: 180px 0 150px;

    .container {
      align-items: center;
    }

    img,
    .outline {
      width: 260px;
      height: 345px;
    }

    .outline {
      top: -30px;
      right: -30px;
      border: 2px solid #3298cb;
    }

    .texts {
      margin: 0;
      max-width: 560px;
    }

    h1 {
      font-size: 36px;
      max-width: unset;
    }

    p {
      margin-bottom: 25px;
      max-width: 420px;
      font-size: 18px;
    }

    a {
      margin-right: 15px;

      img {
        height: 20px;
      }
    }
  }

  #portfolio {
    margin: 150px 0 250px;

    .container {
      grid-template-columns: repeat(auto-fit, max(270px));
      grid-gap: 45px;
    }

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

    video {
      display: unset;
    }
  }

  #blog {
    margin: 150px 0;

    .container {
      flex-direction: row;
      align-items: center;
    }

    h1 {
      padding-bottom: 7px;
      max-width: none;
      font-size: 36px;
    }

    hr {
      margin: 0 15px;
      transform: rotate(90deg);
    }

    p {
      padding-bottom: 5px;
      max-width: 330px;
      font-size: 18px;
    }
  }
}
</style>
