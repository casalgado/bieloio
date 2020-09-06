<template>
  <div id="about-container">
    <div id="whitespace">
      <div id="logo" @click="goto('/')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.5 52.6">
          <title>LogoForAnimation</title>
          <path
            class="stroke-path"
            id="p1"
            d="M1.12,16.45C12,4.22,23.62-.62,34.43,2.35c9.3,2.55,15.14,10.91,20.68,18.08C59,25.5,62.9,29.81,68,32.8,75,36.9,84.22,37,92.22,37l134.48-.06"
          />
          <path
            class="fill-path"
            id="l1"
            d="M86.22,1.77l15,0a10.89,10.89,0,0,1,4.26.77,7.16,7.16,0,0,1,2.95,2.17,5,5,0,0,1,1.07,3.14,4.93,4.93,0,0,1-.89,2.88,4.27,4.27,0,0,1-2.29,1.72,4.49,4.49,0,0,1,2.63,1.76A5.05,5.05,0,0,1,110,17.33a5.15,5.15,0,0,1-1.06,3.2A6.85,6.85,0,0,1,106,22.71a11,11,0,0,1-4.25.78l-15.44,0Zm13.12,8.75a3.24,3.24,0,0,0,2.06-.61,1.87,1.87,0,0,0,.79-1.55,1.79,1.79,0,0,0-.8-1.52,3.42,3.42,0,0,0-2.06-.57H93.49v4.26ZM99.69,19a3.49,3.49,0,0,0,2.17-.63,1.88,1.88,0,0,0,.83-1.6,2,2,0,0,0-.84-1.67,3.49,3.49,0,0,0-2.17-.63l-6.17,0V19Z"
          />
          <path
            class="fill-path"
            id="l2"
            d="M121.29,1.69l7.26,0,.06,21.76h-7.27Z"
          />
          <path
            class="fill-path"
            id="l3"
            d="M140.77,1.64l19.24,0V6.64l-12.22,0v3.46l11,0v4.34l-11,0v3.86l12.52,0v5l-19.54,0Z"
          />
          <path
            class="fill-path"
            id="l4"
            d="M171.62,1.57l7.26,0,0,16,10.61,0v5.71l-17.87,0Z"
          />
          <path
            class="fill-path"
            id="l5"
            d="M206.36,22.37a11.35,11.35,0,0,1-5-4,10.36,10.36,0,0,1-1.77-6,10.37,10.37,0,0,1,1.74-6,11.35,11.35,0,0,1,5-4,19.94,19.94,0,0,1,14.73,0,11.44,11.44,0,0,1,5,4,10.44,10.44,0,0,1,1.78,6,10.37,10.37,0,0,1-1.75,6,11.49,11.49,0,0,1-4.94,4,19.87,19.87,0,0,1-14.73,0Zm12.3-5.8a5.27,5.27,0,0,0,1.86-4.24,5.29,5.29,0,0,0-1.88-4.25,8.54,8.54,0,0,0-9.9,0,5.27,5.27,0,0,0-1.87,4.26,5.23,5.23,0,0,0,1.89,4.23,8.59,8.59,0,0,0,9.9,0Z"
          />
          <path
            class="stroke-path"
            id="p2"
            d="M273.39,51.1a18,18,0,0,1-11.07-3.38,13.74,13.74,0,0,1-5.51-10.84,13.84,13.84,0,0,1,4.45-11.33c3-2.78,7-4.31,11.95-4.54s9.06.9,12.31,3.39A13.87,13.87,0,0,1,291,35.26a13.78,13.78,0,0,1-4.41,11.3c-3,2.76-7,4.27-11.93,4.51l-1.19,0h-.06Z"
          />
          <path
            class="fill-path"
            id="p3"
            d="M279.75,40.6a6,6,0,0,0,1.9-4.91A6,6,0,0,0,279.3,31a9.71,9.71,0,0,0-11.24.53,6,6,0,0,0-1.91,4.93,5.93,5.93,0,0,0,2.36,4.72,8.6,8.6,0,0,0,5.72,1.51A8.42,8.42,0,0,0,279.75,40.6Z"
          />
        </svg>
      </div>
      <div id="slogan">
        <img src="../assets/SloganVertical.svg" alt="" />
      </div>
      <div id="slogan-mask"></div>
    </div>
    <div id="article">
      <h1 id="title">Historias</h1>
      <div id="text">
        <p>En Bielo creemos en el poder de las historias.</p>
        <p>Esta es la nuestra.</p>
        <p>
          Camilo las escribe. Vive en Bogotá. Su especialidad son los
          videojuegos, pero le hala a cualquier cosa con personajes, tres actos
          y conflicto. Lo más importante para el es donde guardas la salsa de
          tomate.
        </p>
        <p>
          Esteban las produce. Vive en Los Ángeles. Ama el cine, y cree en el
          poder que tienen para darle voces a quienes no suelen ser escuchados.
          Como weight of land, recientemente blacklisted.
        </p>
        <p>
          Camilo y Esteban son primos, y siempre habían querido trabajar juntos,
          pero está el pequeño detalle de los 5600 kms de distancia.
        </p>
        <p>
          Pero contar historias es lo que les importa, y encontraron la manera
          de hacerlo virtual:
        </p>
        <p>
          Nuestros protagonistas quisieron montar una compañía de podcasts y
          videojuegos.
        </p>
        <p>
          Pero no podían no hacerlo solos, la idea era hacer las cosas bien, no
          solo hacerlas.
        </p>
        <p>Así que en el camino encontraron un mentor.</p>
        <p>
          Andrés es amigo de Camilo de toda la vida, tuvo una exitosa carrera
          como trader y consultor, pero lo dejó todo para dedicarse a asesorar
          empresas con corazón e historias, con los que conectara de verdad.
        </p>
        <p>
          Esteban y Camilo empezaron a ser asesorados por Andrés, quien les
          enseñó sobre proyecciones, estados financieros, balances, y todas esas
          historias que ni Esteban ni Camilo sabían contar.
        </p>
        <p>Pero, como siempre, hay fuerzas de adversidad.</p>
        <p>El Covid llegó. Y daño mucho caminar.(*)</p>
        <p>Los proyectos que había escrito Camilo se frenaron.</p>
        <p>Las producciones en Los Ángeles pararon.</p>
        <p>
          El café que Andrés manejaba, del cual Camilo era asiduo cliente, entro
          en Hiatus.
        </p>
        <p>
          Con las ganas intactas Esteban, Andrés y Camilo tomaron un salto de
          fe, y se le dedicaron de lleno a Bielo Media, a esta nueva manera de
          contar historias que el mundo debe escuchar.
        </p>
      </div>
      <div id="images">
        <div class="image" id="i1"></div>
        <div class="image" id="i2"></div>
        <div class="image" id="i3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "About",
  methods: {
    enter: function() {
      gsap
        .to("#p1", {
          duration: 0.5,
          "stroke-dashoffset": 0,
          ease: "easeOut",
        })
        .delay(0.4);
      gsap
        .to("#p2", {
          duration: 0.9,
          opacity: 1,
          ease: "easeOut",
        })
        .delay(1.15);
      gsap
        .to("#p3", {
          duration: 0.9,
          opacity: 1,
          ease: "easeOut",
        })
        .delay(1.1);
      gsap
        .to("#l1", {
          duration: 0.5,
          opacity: 1,
          ease: "easeOut",
        })
        .delay(0.6);
      gsap
        .to("#l2", {
          duration: 0.5,
          opacity: 1,
          ease: "easeOut",
        })
        .delay(0.7);
      gsap
        .to("#l3", {
          duration: 0.5,
          opacity: 1,
          ease: "easeOut",
        })
        .delay(0.8);
      gsap
        .to("#l4", {
          duration: 0.5,
          opacity: 1,
          ease: "easeOut",
        })
        .delay(0.9);
      gsap
        .to("#l5", {
          duration: 0.5,
          opacity: 1,
          ease: "easeOut",
        })
        .delay(1.0);
      gsap
        .to("#slogan-mask", {
          duration: 1.2,
          height: "0px",
          ease: "easeOut",
        })
        .delay(1.4);
      gsap
        .to("#title", {
          duration: 0.4,
          width: "100%",
          left: "0px",
          ease: "easeOut",
        })
        .delay(1.4);
      gsap
        .to("#text", {
          duration: 1.2,
          height: "2000px",
          ease: "easeOut",
        })
        .delay(1.8);
      gsap
        .to("#i1", {
          duration: 0.3,
          top: "0px",
          "padding-top": "113%",
          ease: "easeOut",
        })
        .delay(1.9);
      gsap
        .to("#i2", {
          duration: 0.3,
          top: "0px",
          "padding-top": "113%",
          ease: "easeOut",
        })
        .delay(2.0);
      gsap
        .to("#i3", {
          duration: 0.3,
          top: "0px",
          "padding-top": "113%",
          ease: "easeOut",
        })
        .delay(2.1);
    },
    goto(route) {
      setTimeout(
        function() {
          this.$router.push(route);
          console.log(route);
        }.bind(this),
        0
      );
    },
  },
  mounted() {
    this.enter();
  },
};
</script>

<style scoped>
#about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}

#logo {
  position: fixed;
  top: 50px;
  left: 50px;
  width: 250px;
}

#p1 {
  stroke-dasharray: 245;
  stroke-dashoffset: 245;
}

#p2,
#p3,
#l1,
#l2,
#l3,
#l4,
#l5 {
  opacity: 0;
}

#slogan {
  position: fixed;
  width: 10px;
  top: 30%;
  left: 50px;
  overflow: hidden;
}

#slogan-mask {
  position: fixed;
  width: 10px;
  top: 30%;
  left: 50px;
  height: 330px;
  background-color: rgb(219, 240, 238);
}

#article {
  font-family: "agrandir-variableregular";
  text-align: left;
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding-top: 20%;
}

.image {
  background-color: gray;
  width: 70%;
  padding-top: 0%;
  margin: 0px 50px 50px 50px;
  position: relative;
  top: -50px;
}

#title {
  grid-column: span 2;
}

#title {
  position: relative;
  left: -40px;
  width: 0%;
  overflow: hidden;
}

#text {
  height: 0px;
  overflow: hidden;
}

.stroke-path {
  fill: none;
  stroke: #1c2628;
  stroke-miterlimit: 10;
  stroke-width: 3px;
}
.fill-path {
  fill: #1c2628;
}

/* 
remove scrollbar
*/
</style>
