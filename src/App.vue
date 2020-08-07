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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-color: rgb(219, 240, 238);
  margin: 0px;
}
</style>
