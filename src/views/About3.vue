<template>
  <div id="text-container">
    <div
      v-if="show"
      id="screen"
      :style="{ left: xoff, top: yoff }"
      @mouseenter="show = true"
      @mouseleave="show = false"
    >
      <div id="screen-head"></div>
      <div id="screen-content"></div>
      <div id="screen-foot"></div>
    </div>
    <p id="pid0" class="ptext">
      En Bielo creemos en el poder de las
      <span
        id="screen1"
        class="screen-target"
        @mouseenter="
          show = true;
          setPosition('screen1');
        "
        @mouseleave="show = false"
        >historias.</span
      >
    </p>

    <p id="pid1" class="ptext">Esta es la nuestra.</p>

    <p id="pid2" class="ptext">
      Camilo las escribe. Vive en Bogotá. Su especialidad son los videojuegos,
      pero le hala a cualquier cosa con personajes, tres actos y conflicto. Lo
      más importante para el es donde guardas la
      <span
        id="screen2"
        class="screen-target"
        @mouseenter="
          show = true;
          setPosition('screen2');
        "
        @mouseleave="show = false"
        >salsa de tomate.</span
      >
    </p>

    <p id="pid3" class="ptext">
      Esteban las produce. Vive en Los Ángeles. Ama el cine, y cree en el poder
      que tienen para darle voces a quienes no suelen ser escuchados. Como
      weight of land, recientemente blacklisted.
    </p>

    <p id="pid4" class="ptext">
      Camilo y Esteban son primos, y siempre habían querido trabajar juntos,
      pero está el pequeño detalle de los 5600 kms de distancia.
    </p>

    <p id="pid5" class="ptext">
      Pero contar historias es lo que les importa, y encontraron la manera de
      hacerlo virtual:
    </p>

    <p id="pid6" class="ptext">
      Nuestros protagonistas quisieron montar una compañía de podcasts y
      videojuegos.
    </p>

    <p id="pid7" class="ptext">
      Pero no podían no hacerlo solos, la idea era hacer las cosas bien, no solo
      hacerlas.
    </p>

    <p id="pid8" class="ptext">Así que en el camino encontraron un mentor.</p>
    <p id="pid9" class="ptext">
      Andrés es amigo de Camilo de toda la vida, tuvo una exitosa carrera como
      trader y consultor, pero lo dejó todo para dedicarse a asesorar empresas
      con corazón e historias, con los que conectara de verdad.
    </p>

    <p id="pid10" class="ptext">
      Esteban y Camilo empezaron a ser asesorados por Andrés, quien les enseñó
      sobre proyecciones, estados financieros, balances, y todas esas historias
      que ni Esteban ni Camilo sabían contar.
    </p>

    <p id="pid11" class="ptext">
      Pero, como siempre, hay fuerzas de adversidad.
    </p>

    <p id="pid12" class="ptext">
      El Covid llegó. Y daño mucho
      <span
        id="screen3"
        class="screen-target"
        @mouseenter="
          show = true;
          setPosition('screen3');
        "
        @mouseleave="show = false"
        >caminar.</span
      >
    </p>

    <p id="pid13" class="ptext">
      Los proyectos que había escrito Camilo se frenaron.
    </p>

    <p id="pid14" class="ptext">Las producciones en Los Ángeles pararon.</p>

    <p id="pid15" class="ptext">
      El café que Andrés manejaba, del cual Camilo era asiduo cliente, entro en
      Hiatus.
    </p>

    <p id="pid16" class="ptext">
      Con las ganas intactas Esteban, Andrés y Camilo tomaron un salto de fe, y
      se le dedicaron de lleno a Bielo Media, a esta nueva manera de contar
      historias que el mundo debe escuchar.
    </p>
  </div>
</template>

<script>
export default {
  name: "About3",
  data() {
    return {
      show: false,
      xoff: "100px",
      yoff: "100px",
    };
  },
  methods: {
    setPosition: function(evt) {
      console.log(evt);
      let element = document.getElementById(evt);
      let x = element.getBoundingClientRect().x;
      let y = element.getBoundingClientRect().y;
      console.log(x, y);
      this.xoff = x + "px";
      this.yoff = y + 15 + "px";
    },
  },
  components: {},
  mounted() {},
};
</script>

<style>
#text-container {
  font-family: "agrandir-variableregular";
  margin: 20px;
  margin-top: 50px;
  font-size: 1.15em;
}

.ptext {
  text-align: start;
  margin: 0px;
}

#screen {
  position: absolute;
  border-radius: 10px;
  width: 300px;
  overflow: hidden;
}

#screen-head,
#screen-foot {
  height: 15px;
  width: 100%;
  background-color: #1c2628;
}

#screen-content {
  height: 168px;
  background-color: lightgray;
}

.screen-target {
  font-weight: bold;
}
</style>
