<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "agrandir-variableregular";
  src: url("./assets/fonts/agrandir-variable-webfont.woff2") format("woff2"),
    url("./assets/fonts/agrandir-variable-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "agrandir-wideheavy";
  src: url("./assets/fonts/agrandir-wideheavy.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgb(219, 240, 238);
  margin: 0px;
}

*:active,
*:focus {
  outline: 0;
  outline-color: transparent;
  outline-width: 0;
  outline-style: none;
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
}
</style>
