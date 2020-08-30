<template>
  <div id="contact">
    <div v-if="active == 0" class="options-container">
      <h2 class="question">
        las empresas deben enfocarse en que los clientes los busquen en vez de
        buscar a sus clientes - esto se genera con las historias
      </h2>
      <OptionBlock
        oid="opt-one"
        text="quiero construir mi historia"
        :ans="1"
        @answer="progress"
      />
      <OptionBlock
        oid="opt-two"
        text="quiero contar mi historia"
        :ans="2"
        @answer="progress"
      />
    </div>
    <div v-if="active == 1" class="options-container">
      <h2 class="question">
        Como deseas que tus 'usuarios' interactuen con tu historia?
      </h2>
      <OptionBlock
        oid="opt-one"
        text="one way communication"
        :ans="1"
        @answer="progress"
      />
      <OptionBlock
        oid="opt-two"
        text="two way communication"
        :ans="2"
        @answer="progress"
      />
    </div>
    <!-- <div v-if="active == 2" class="options-container">
      <h2 class="question">
        Tu marisco favorito es...
      </h2>
      <OptionBlock oid="opt-one" text="pulpo" :ans="1" @answer="progress" />
      <OptionBlock oid="opt-two" text="langosta" :ans="2" @answer="progress" />
    </div> -->
    <div v-if="active == 2" class="options-container">
      <h2 id="answer">
        El resultado es:
        {{ ansText }}
      </h2>
      <div id="answer-example"></div>
      <form id="contact-form">
        <input v-model="client.name" placeholder="nombre" />
        <input v-model="client.email" placeholder="email" />
        <input v-model="client.phone" placeholder="telefono" />
        <textarea v-model="client.comment" placeholder="comentario" />
        <button @click.stop.prevent="sendEmail">enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import emailjs from "emailjs-com";
import OptionBlock from "../components/OptionBlock";
export default {
  name: "Contact",
  components: { OptionBlock },
  data() {
    return {
      active: 0,
      answers: [],
      ansText: "",
      client: {
        name: "",
        email: "",
        phone: "",
        interest: "",
        comment: "",
      },
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
          duration: 0.4,
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
      let text = "Gamification";
      answers = answers.join("");
      console.log(answers);

      if (answers[0] == "1") {
        text = "Storytelling";
      }

      if (answers[1] == "1") {
        text = "Podcast";
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
      if (evt == "1") {
        this.active = 2;
      }

      if (this.active == 2) {
        this.setAnsText(this.answers);
        setTimeout(
          function() {
            this.showAnswer();
          }.bind(this),
          1000
        );
      }
    },
    sendEmail() {
      console.log(emailjs);
      console.log(this.client);
      // let serviceID = "gmail";
      // let templateID = "contact_email";
      // let userID = process.env.VUE_APP_EMAIL_API_USER_ID;
      // let templateParams = {
      //   client_name: this.client.name,
      //   client_email: this.client.email,
      //   client_phone: this.client.phone,
      //   client_interest: this.ansText,
      //   client_comment: this.client.comment,
      // };
      // emailjs.send(serviceID, templateID, templateParams, userID).then(
      //   function(response) {
      //     console.log("SUCCESS!", response.status, response.text);
      //   },
      //   function(error) {
      //     console.log("FAILED...", error);
      //   }
      // );
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
  grid-template-columns: 1fr 1fr;
}

.question {
  grid-column: span 2;
  opacity: 0;
}

#answer {
  grid-column: span 2;
  opacity: 0;
}

#answer-example {
  background-color: gray;
}

#contact-form button {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #1c2628;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
}

#contact-form input,
#contact-form textarea {
  width: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 5px;
  border: 1px solid #1c2628;
  margin-bottom: 5px;
  padding: 5px;
  color: #1c2628;
  background-color: rgb(219, 240, 238);
}

#contact-form input:hover,
#contact-form textarea:hover {
  background-color: rgb(219, 240, 238);
}

#contact-form input:focus,
#contact-form textarea:focus {
  background-color: rgb(237, 237, 237);
}

#contact-form textarea {
  height: 60px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #1c2628;
  opacity: 1; /* Firefox */
}
</style>
