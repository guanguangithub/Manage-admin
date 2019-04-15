<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
html {
  font-size: 100px;
}
* {
  font-size: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: "微软雅黑";
  box-sizing: border-box;
}
body {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html,
body {
  width: 100%;
  height: 100%;
}
#app{
  width:100%;
  height:100%;
}
</style>
