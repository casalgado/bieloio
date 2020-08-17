<template>
  <div id="contact">
    <div v-if="active == 0" class="options-container">
      <h2 class="question">
        Cuando viajas, tu presupuesto para comida es...
      </h2>
      <OptionBlock oid="opt-one" text="$" :ans="1" @answer="progress" />
      <OptionBlock oid="opt-two" text="$$" :ans="2" @answer="progress" />
      <OptionBlock oid="opt-three" text="$$$" :ans="3" @answer="progress" />
    </div>
    <div v-if="active == 1" class="options-container">
      <h2 class="question">
        Si estuvieras en Ciudad de Mexico, preferirias comer
      </h2>
      <OptionBlock oid="opt-one" text="tacos" :ans="1" @answer="progress" />
      <OptionBlock oid="opt-two" text="mariscos" :ans="2" @answer="progress" />
      <OptionBlock oid="opt-three" text="mole" :ans="3" @answer="progress" />
    </div>
    <div v-if="active == 2" class="options-container">
      <h2 class="question">
        Tu marisco favorito es...
      </h2>
      <OptionBlock oid="opt-one" text="pulpo" :ans="1" @answer="progress" />
      <OptionBlock oid="opt-two" text="langosta" :ans="2" @answer="progress" />
      <OptionBlock oid="opt-three" text="calamar" :ans="3" @answer="progress" />
    </div>
    <div v-if="active == 3" class="options-container">
      <h2 class="question">
        El resultado es:
      </h2>
      <h2 id="answer">
        {{ ansText }}
      </h2>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import OptionBlock from "../components/OptionBlock";
export default {
  name: "Contact",
  components: { OptionBlock },
  data() {
    return {
      active: 0,
      answers: [],
      ansText: "",
    };
  },
  methods: {
    enter: function(target, delay) {
      gsap
        .to(target, {
          duration: 0.2,
          left: "0px",
          width: "100%",
        })
        .delay(delay);
    },
    show(target, delay) {
      gsap
        .to(target, {
          duration: 0.3,
          opacity: 1,
        })
        .delay(delay);
    },
    reset() {
      gsap.to(".option", {
        duration: 0,
        left: "-35px",
        width: "0%",
      });
    },
    showAnswer() {
      gsap.to("#answer", {
        duration: 3,
        opacity: 1,
      });
    },
    setAnsText(answers) {
      let text = "Luiger la tiene dificil.";
      answers = answers.join("");
      console.log(answers);

      if (answers[0] == "3" || answers[0] == "3" || answers[1] == "2") {
        text = "Vamos a necesitar un gran equipo de marketing.";
      }

      if (
        (answers[0] == "3" && answers[1] == "2") ||
        (answers[0] == "3" && answers[2] == "2") ||
        (answers[1] == "2" && answers[2] == "2")
      ) {
        text = "El viejo Luiger va por buen camino.";
      }

      if (answers == "322") {
        text = "El negocio de Luiger sera un exito!";
      }

      this.ansText = text;
    },
    progress(evt) {
      this.active++;
      this.reset();
      this.enter("#opt-one", 0.5);
      this.enter("#opt-two", 0.6);
      this.enter("#opt-three", 0.7);
      this.answers.push(evt);

      if (this.active == 3) {
        this.setAnsText(this.answers);
        setTimeout(
          function() {
            this.showAnswer();
          }.bind(this),
          1000
        );
      }
    },
  },
  mounted() {
    this.show(".question", 0);
    this.enter("#opt-one", 1);
    this.enter("#opt-two", 1.1);
    this.enter("#opt-three", 1.2);
  },
};
</script>

<style scoped>
#contact {
  position: relative;
  margin: 0px 100px 0px 100px;
  height: 100vh;
}

.options-container {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.question {
  grid-column: span 3;
  opacity: 0;
}

#answer {
  grid-column: span 3;
  opacity: 0;
}
</style>
