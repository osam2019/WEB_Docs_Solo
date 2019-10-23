<template>
  <div id="app">
    asdasdasd
    <router-view/>
  </div>
</template>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif, yanolja;*/
  font-family: baemin;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c3e50;
  position: absolute; top: 0; right: 0; bottom: 0; left: 0;
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
  @font-face {
    font-family: yanolja;
    src: url("./assets/yanolja Regular.ttf")
  }
  @font-face {
    font-family: baemin;
    src: url("./assets/BMEULJIROTTF.ttf")
  }
</style>
