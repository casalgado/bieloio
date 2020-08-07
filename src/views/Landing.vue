<template>
  <div class="home" @click="drawLine">
    <div id="oc">
      <img :src="outerCircle" alt="" />
    </div>
    <div id="ic">
      <img :src="innerCircle" alt="" />
    </div>
    <div id="li">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1116.98 919">
        <defs>
          <mask id="liMask">
            <rect
              id="innerLiMask"
              x="-919"
              y="-198"
              width="919"
              height="1117"
              fill="#fff"
            />
          </mask>
        </defs>
        <g id="li-reveal" mask="url(#liMask)">
          <path
            class="path-li"
            d="M955.05,714.76C733.86,428.15,505.12,131.78,134,27.35A938.3,938.3,0,0,0,0,0V121.12a817.65,817.65,0,0,1,101.46,21.67c333,93.69,549.37,374.07,758.79,645.44,33.61,43.56,67.47,87.43,102,130.77H1117C1061.46,852.65,1008,783.32,955.05,714.76Z"
          />
        </g>
      </svg>
    </div>

    <p id="slogan" class="landing-text">
      Historias que el <br />
      mundo debe escuchar
    </p>
    <h2 id="logo-text" class="landing-text">BIELO</h2>
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
    drawLine: function() {
      console.log("this");
      gsap.to("#innerLiMask", {
        duration: 0.5,
        rotation: 90,
        transformOrigin: "bottom right",
      });
    },
  },
  mounted() {},
};
</script>
<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  max-width: 1100px;
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
}

#logo-text {
  left: 0px;
  font-weight: 1000;
  font-family: "agrandir-wideheavy";
}

#slogan {
  right: 0px;
  text-align: right;
  text-transform: uppercase;
  font-family: "agrandir-variableregular";
}

.path-li {
  fill: #1c2628;
}
</style>
