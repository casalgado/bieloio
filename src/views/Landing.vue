<template>
  <div class="home">
    <div id="oc">
      <img :src="outerCircle" alt="" />
    </div>
    <div id="ic">
      <img :src="innerCircle" alt="" />
    </div>
    <div id="li">
      <img :src="line" alt="" />
    </div>

    <p id="slogan" class="landing-text">
      Historias que el <br />
      mundo debe escuchar
    </p>
    <h2 id="logo-text" class="landing-text">BIELO</h2>
  </div>
</template>

<script>
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
};
</script>
<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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

#li img {
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
</style>
