<template>
  <div class="home" @click="showNav">
    <div id="oc">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 963.17 844.23">
        <defs>
          <mask id="ocMaskContainer">
            <rect
              id="ocMask"
              x="-319"
              y="-964"
              width="1282"
              height="964"
              fill="#fff"
            />
          </mask>
        </defs>
        <g id="oc-reveal" mask="url(#ocMaskContainer)">
          <path
            class="custom-path"
            d="M963.17,695q-86.88,23.26-188.52,28.12-23.6,1.11-46.55,1.17h0c-166.87-.51-304.94-41.14-414.25-123.49C193.44,510.17,128.47,381.06,120.72,217Q115.07,98.23,151.44,0H24.82Q-4.7,103,.91,222.72C10.46,424,91.46,583.48,241.67,696.59c130,98,292.8,147.64,484,147.64h2.77q25.59,0,51.92-1.28,96.87-4.61,182.86-24.31Z"
          />
        </g>
      </svg>
    </div>
    <div id="ic">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.58 450.73">
        <defs>
          <mask id="icMaskContainer">
            <rect
              id="icMask"
              x="0"
              y="0"
              width="526"
              height="451"
              fill="#fff"
            />
          </mask>
        </defs>
        <g id="ic-reveal" mask="url(#icMaskContainer)">
          <path
            id="icPath"
            class="custom-path"
            transform="translate(526,-450)"
            d="M81.29,0c-1.52,1.35-3,2.7-4.54,4.08Q-5.42,79.91.38,201.32T95.05,389.75q89,67,228.36,60.39,124-5.88,202.17-66V0Z"
          />
        </g>
      </svg>
    </div>
    <div id="li">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1116.98 919">
        <defs>
          <mask id="liMaskContainer">
            <rect
              id="liMask"
              x="-919"
              y="-198"
              width="919"
              height="1117"
              fill="#fff"
            />
          </mask>
        </defs>
        <g id="li-reveal" mask="url(#liMaskContainer)">
          <path
            class="custom-path"
            d="M955.05,714.76C733.86,428.15,505.12,131.78,134,27.35A938.3,938.3,0,0,0,0,0V121.12a817.65,817.65,0,0,1,101.46,21.67c333,93.69,549.37,374.07,758.79,645.44,33.61,43.56,67.47,87.43,102,130.77H1117C1061.46,852.65,1008,783.32,955.05,714.76Z"
          />
        </g>
      </svg>
    </div>

    <p id="slogan" class="landing-text">
      Historias que el <br />
      mundo debe escuchar
    </p>
    <p id="logo-text" class="landing-text">BIELO</p>
    <ul id="nav" class="landing-text">
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
  computed: {
    innerCircle: function() {
      return require(`../assets/InnerCircle.svg`);
    },
    outerCircle: function() {
      return require(`../assets/OuterCircle.svg`);
    },
    line: function() {
      return require(`../assets/Line.svg`);
    },
  },
  methods: {
    animate: function() {
      gsap.to("#liMask", {
        duration: 0.8,
        rotation: 90,
        transformOrigin: "bottom right",
      });
      gsap
        .to("#ocMask", {
          duration: 0.8,
          rotation: -90,
          transformOrigin: "bottom right",
        })
        .delay(0.4);
      gsap
        .to("#icPath", {
          duration: 1,
          transform: "translate(0,0)",
        })
        .delay(0.7);
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
    this.animate();
  },
};
</script>
<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  margin: 0 auto;
}

.home div {
  position: absolute;
}

#ic {
  width: 30.83%;
  height: 42.4%;
  top: 0px;
  right: 0px;
  max-width: 361px;
}

#ic img {
  width: 100%;
  left: 0px;
}

#oc {
  width: 56.6%;
  height: 79.4%;
  top: 0px;
  right: 0px;
  max-width: 663px;
}

#oc img {
  width: 100%;
  right: 0px;
}

#li {
  width: 65.6%;
  height: 86.4%;
  bottom: 0px;
  left: 0px;
  max-width: 768px;
}

#li svg {
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;
}

.landing-text {
  position: absolute;
  margin: 30px;
  bottom: 0px;
  opacity: 0;
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

.custom-path {
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
