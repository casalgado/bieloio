<template>
  <div :id="oid" class="option" @click="$emit('answer', ans)">
    <div class="icon"></div>
    <h2 class="text">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: "OptionBlock",
  props: {
    oid: String,
    text: String,
    ans: Number,
  },
};
</script>

<style scoped>
.option {
  width: 0%;
  height: 350px;
  position: relative;
  left: -35px;
  background-color: #1c2628;
  overflow: hidden;
  cursor: pointer;
}

.option:hover {
  background-color: #141b1d;
}

.option * {
  position: relative;
  top: 60px;
}

.icon {
  border-radius: 99px;
  background-color: lightgray;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}

.text {
  color: lightgray;
}
</style>
