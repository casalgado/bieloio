<template>
  <div class="home" @click="showNav">
    <div class="svg-container top-container">
      <svg
        id="circles"
        data-name="circles"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1702 1064"
      >
        <path
          id="outer"
          class="stroke"
          d="M1702.74,746.55q-93.42,26.41-202.43,31.62-23.62,1.11-46.57,1.16h-2.49c-171.46,0-317.49-44.57-434.11-132.52-134.75-101.53-207.41-244.65-216-425.34Q795.48,101.47,829.27,0"
        />
        <path
          id="inner"
          class="fill"
          transform="translate(526,-450)"
          d="M1230.13.41q-85,78.41-79,204t97.9,194.86q92,69.31,236.14,62.44,135-6.41,217.54-75V0H1230.59Z"
        />
      </svg>
    </div>
    <div class="svg-container bot-container">
      <svg
        id="lines"
        data-name="lines"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1702 1064"
      >
        <path
          id="line"
          class="stroke"
          d="M0,209.4q33.67,6.38,66.81,15.71C379,313,571.45,562.26,757.51,803.36c68.92,89.3,139,180.14,214.76,260.86"
        />
      </svg>
    </div>

    <p id="slogan" class="text-element">
      Historias que el <br />
      mundo debe escuchar
    </p>
    <div id="logo-text" class="text-element">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.56 22.85">
        <g id="Capa_1" data-name="Capa 1">
          <path
            class="cls-1"
            d="M0,.85l15,0a10.71,10.71,0,0,1,4.26.78,7,7,0,0,1,2.95,2.16,5,5,0,0,1,1.07,3.15,4.83,4.83,0,0,1-.89,2.87,4.18,4.18,0,0,1-2.29,1.72,4.48,4.48,0,0,1,2.64,1.76,5.33,5.33,0,0,1,0,6.35,6.94,6.94,0,0,1-3,2.18,11,11,0,0,1-4.25.78l-15.44,0ZM13.12,9.6A3.29,3.29,0,0,0,15.19,9,1.87,1.87,0,0,0,16,7.44a1.79,1.79,0,0,0-.79-1.52,3.47,3.47,0,0,0-2.07-.57H7.27V9.62Zm.35,8.45a3.53,3.53,0,0,0,2.18-.63,1.92,1.92,0,0,0,.83-1.59,2,2,0,0,0-.84-1.67,3.47,3.47,0,0,0-2.18-.64l-6.17,0,0,4.53Z"
          />
          <path class="cls-1" d="M35.07.77l7.27,0,0,21.76-7.26,0Z" />
          <path
            class="cls-1"
            d="M54.55.72l19.24,0v5l-12.21,0V9.21l11,0v4.34l-11,0v3.86l12.53,0v5l-19.54.05Z"
          />
          <path
            class="cls-1"
            d="M85.4.65l7.27,0,0,16.05,10.6,0,0,5.71-17.87.05Z"
          />
          <path
            class="cls-1"
            d="M120.15,21.46a11.44,11.44,0,0,1-5-4,10.44,10.44,0,0,1-1.78-6,10.37,10.37,0,0,1,1.75-6,11.37,11.37,0,0,1,5-4A18.1,18.1,0,0,1,127.46,0a17.9,17.9,0,0,1,7.36,1.4,11.38,11.38,0,0,1,5,4,10.36,10.36,0,0,1,1.77,6,10.37,10.37,0,0,1-1.74,6,11.45,11.45,0,0,1-4.95,4,18,18,0,0,1-7.35,1.43A18.15,18.15,0,0,1,120.15,21.46Zm12.29-5.81a5.25,5.25,0,0,0,1.86-4.24,5.27,5.27,0,0,0-1.88-4.25,8.53,8.53,0,0,0-9.89,0,5.28,5.28,0,0,0-1.88,4.26,5.25,5.25,0,0,0,1.9,4.24,7.53,7.53,0,0,0,5,1.55A7.44,7.44,0,0,0,132.44,15.65Z"
          />
        </g>
      </svg>
    </div>
    <ul id="nav" class="text-element">
      <li id="li1" @click="goto('about')">Nosotros</li>
      <li id="li2" @click="goto('contact')">Contacto</li>
      <li id="li3" @click="goto('content')">Contenido</li>
    </ul>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "Landing",
  components: {},
  computed: {},
  methods: {
    enter: function() {
      gsap
        .to("#line", {
          duration: 1,
          "stroke-dashoffset": 0,
        })
        .delay(0.4);
      gsap
        .to("#outer", {
          duration: 1,
          "stroke-dashoffset": 3200,
        })
        .delay(0.7);
      gsap
        .to("#inner", {
          duration: 1,
          transform: "translate(0,0)",
        })
        .delay(1);
      gsap
        .timeline()
        .to("#logo-text", {
          duration: 1,
          opacity: 1,
        })
        .delay(0.7);
      gsap
        .to("#slogan", {
          duration: 2,
          opacity: 1,
        })
        .delay(1.7);
    },
    exit: function() {
      gsap
        .to("#line", {
          duration: 1,
          "stroke-dashoffset": -1600,
        })
        .delay(0);
      gsap
        .to("#outer", {
          duration: 1,
          "stroke-dashoffset": 4800,
        })
        .delay(0.4);
      gsap
        .to(".fill", {
          duration: 1,
          transform: "translate(526px,-450px)",
        })
        .delay(0.7);
      gsap
        .timeline()
        .to(".text-element", {
          duration: 0.5,
          opacity: 0,
        })
        .delay(0.4);
    },
    showNav: function() {
      gsap
        .timeline()
        .to("#logo-text", {
          duration: 0.7,
          transform: "translate(0,-130px)",
          "margin-bottom": "35px",
          ease: "easeInOut",
        })
        .to("#li1", {
          duration: 0.3,
          opacity: 1,
          cursor: "pointer",
        })
        .to("#li2", {
          duration: 0.3,
          opacity: 1,
          cursor: "pointer",
        })
        .to("#li3", {
          duration: 0.3,
          opacity: 1,
          cursor: "pointer",
        });
    },
    goto(route) {
      this.exit();
      setTimeout(
        function() {
          this.$router.push(route);
          console.log(route);
        }.bind(this),
        1200
      );
    },
  },
  mounted() {
    this.enter();
  },
};
</script>
<style scoped>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.home div {
  position: absolute;
  width: 100%;
  margin: 0 auto;
}

.svg-container {
  position: absolute;
}

.top-container {
  top: -50px;
  right: -50px;
}

.bot-container {
  bottom: -100px;
}

.text-element {
  position: absolute;
  margin: 30px;
  bottom: 0px;
  opacity: 0;
}

#circles {
  position: relative;
  top: -100px;
}

#outer,
#inner {
  width: 80%;
}

#line {
  stroke-dasharray: 1600;
  stroke-dashoffset: 1600;
}

#outer {
  stroke-dasharray: 1600;
  stroke-dashoffset: 1600;
}

#logo-text {
  cursor: pointer;
  width: 250px;
  left: 35px;
  margin-bottom: 25px;
  z-index: 99;
}

#slogan {
  right: 0px;
  text-align: right;
  text-transform: uppercase;
  font-family: "agrandir-variableregular";
  font-size: 140%;
}

.stroke {
  fill: none;
  stroke: #1c2628;
  stroke-linecap: square;
  stroke-miterlimit: 10;
  stroke-width: 124px;
}

.fill {
  fill: #1c2628;
}

#nav {
  padding: 0px;
  opacity: 1;
}

#nav li {
  list-style-type: none;
  text-align: left;
  font-weight: bold;
  font-size: 120%;
  text-transform: uppercase;
  cursor: default;
  margin-top: 20px;
  padding-left: 15px;
  opacity: 0;
}

.cls-1 {
  fill: #1c2628;
}
</style>
