<template>
  <div id="text-container">
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition1"
      :interval="interval"
      id="pid0"
      class="ptext"
      @mouseover.native="displayCondition1 = true"
      >En Bielo creemos en el poder de las historias.</VueTextTransition
    >
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition2"
      :interval="interval"
      id="pid1"
      class="ptext"
      @mouseover.native="displayCondition2 = true"
      >Esta es la nuestra.</VueTextTransition
    >
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition3"
      :interval="interval"
      id="pid2"
      class="ptext"
      @mouseover.native="displayCondition3 = true"
    >
      Camilo las escribe. Vive en Bogotá. Su especialidad son los videojuegos,
      pero le hala a cualquier cosa con personajes, tres actos y conflicto. Lo
      más importante para el es donde guardas la salsa de tomate.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition4"
      :interval="interval"
      id="pid3"
      class="ptext"
      @mouseover.native="displayCondition4 = true"
    >
      Esteban las produce. Vive en Los Ángeles. Ama el cine, y cree en el poder
      que tienen para darle voces a quienes no suelen ser escuchados. Como
      weight of land, recientemente blacklisted.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition5"
      :interval="interval"
      id="pid4"
      class="ptext"
      @mouseover.native="displayCondition5 = true"
    >
      Camilo y Esteban son primos, y siempre habían querido trabajar juntos,
      pero está el pequeño detalle de los 5600 kms de distancia.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition6"
      :interval="interval"
      id="pid5"
      class="ptext"
      @mouseover.native="displayCondition6 = true"
    >
      Pero contar historias es lo que les importa, y encontraron la manera de
      hacerlo virtual:
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition7"
      :interval="interval"
      id="pid6"
      class="ptext"
      @mouseover.native="displayCondition7 = true"
    >
      Nuestros protagonistas quisieron montar una compañía de podcasts y
      videojuegos.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition8"
      :interval="interval"
      id="pid7"
      class="ptext"
      @mouseover.native="displayCondition8 = true"
    >
      Pero no podían no hacerlo solos, la idea era hacer las cosas bien, no solo
      hacerlas.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition9"
      :interval="interval"
      id="pid8"
      class="ptext"
      @mouseover.native="displayCondition9 = true"
      >Así que en el camino encontraron un mentor.</VueTextTransition
    >
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition10"
      :interval="interval"
      id="pid9"
      class="ptext"
      @mouseover.native="displayCondition10 = true"
    >
      Andrés es amigo de Camilo de toda la vida, tuvo una exitosa carrera como
      trader y consultor, pero lo dejó todo para dedicarse a asesorar empresas
      con corazón e historias, con los que conectara de verdad.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition11"
      :interval="interval"
      id="pid10"
      class="ptext"
      @mouseover.native="displayCondition11 = true"
    >
      Esteban y Camilo empezaron a ser asesorados por Andrés, quien les enseñó
      sobre proyecciones, estados financieros, balances, y todas esas historias
      que ni Esteban ni Camilo sabían contar.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition12"
      :interval="interval"
      id="pid11"
      class="ptext"
      @mouseover.native="displayCondition12 = true"
    >
      Pero, como siempre, hay fuerzas de adversidad.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition13"
      :interval="interval"
      id="pid12"
      class="ptext"
      @mouseover.native="displayCondition13 = true"
      >El Covid llegó. Y daño mucho caminar.(*)</VueTextTransition
    >
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition14"
      :interval="interval"
      id="pid13"
      class="ptext"
      @mouseover.native="displayCondition14 = true"
    >
      Los proyectos que había escrito Camilo se frenaron.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition15"
      :interval="interval"
      id="pid14"
      class="ptext"
      @mouseover.native="displayCondition15 = true"
      >Las producciones en Los Ángeles pararon.</VueTextTransition
    >
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition16"
      :interval="interval"
      id="pid15"
      class="ptext"
      @mouseover.native="displayCondition16 = true"
    >
      El café que Andrés manejaba, del cual Camilo era asiduo cliente, entro en
      Hiatus.
    </VueTextTransition>
    <VueTextTransition
      tag="p"
      name="fade"
      :show="displayCondition17"
      :interval="interval"
      id="pid16"
      class="ptext"
      @mouseover.native="displayCondition17 = true"
    >
      Con las ganas intactas Esteban, Andrés y Camilo tomaron un salto de fe, y
      se le dedicaron de lleno a Bielo Media, a esta nueva manera de contar
      historias que el mundo debe escuchar.
    </VueTextTransition>
  </div>
</template>

<script>
import VueTextTransition from "vue-text-transition";
export default {
  name: "About",
  data() {
    return {
      interval: 5,
      displayCondition1: false,
      displayCondition2: false,
      displayCondition3: false,
      displayCondition4: false,
      displayCondition5: false,
      displayCondition6: false,
      displayCondition7: false,
      displayCondition8: false,
      displayCondition9: false,
      displayCondition10: false,
      displayCondition11: false,
      displayCondition12: false,
      displayCondition13: false,
      displayCondition14: false,
      displayCondition15: false,
      displayCondition16: false,
      displayCondition17: false,
    };
  },
  components: {
    VueTextTransition,
  },
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

.v--vtt-fade {
  will-change: transform, opacity;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  margin-bottom: 0px;
}

.v--vtt-fade_visible {
  opacity: 1;
  transform: translateY(0);
}

.v--vtt-fade_hidden {
  opacity: 0.1;
  transform: translateY(0px);
}
</style>
