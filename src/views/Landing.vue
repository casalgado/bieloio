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

    <p id="slogan" class="text-element" @click="exit">
      Historias que el <br />
      mundo debe escuchar
    </p>
    <p id="logo-text" class="text-element">BIELO</p>
    <ul id="nav" class="text-element">
      <li id="li1">Nosotros</li>
      <li id="li2">Contacto</li>
      <li id="li3">Contenido</li>
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
        .delay(0.4);
      gsap
        .to("#outer", {
          duration: 1,
          "stroke-dashoffset": 4800,
        })
        .delay(0.7);
      gsap
        .to(".fill", {
          duration: 1,
          transform: "translate(526px,-450px)",
        })
        .delay(1);
      gsap
        .timeline()
        .to(".text-element", {
          duration: 0.5,
          opacity: 0,
        })
        .delay(0.7);
    },
    showNav: function() {
      gsap
        .timeline()
        .to("#logo-text", {
          duration: 0.7,
          transform: "translate(0,-130px)",
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
  left: 0px;
  font-weight: 1000;
  font-family: "agrandir-wideheavy";
  font-size: 250%;
  cursor: pointer;
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
</style>
