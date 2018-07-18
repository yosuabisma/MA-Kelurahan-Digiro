<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  @import url('./assets/font.css');

  @font-face {
    font-family: "Proxima Nova";
    src: url('./assets/fonts/proxima-nova-regular.ttf');
    font-weight: normal;
  }

  @font-face {
    font-family: "Proxima Nova";
    src: url('./assets/fonts/proxima-nova-semibold.ttf');
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Proxima Nova", sans-serif;
  }

  #app {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  input {
    font-family: "Proxima Nova", sans-serif;
  }

  .icon {
    display: flex;
    color: #888888;
    overflow: hidden;
    font-size: 24px;
    vertical-align: center;
  }

  .icon.oninput {
    color: #a28ffd;
  }
</style>
