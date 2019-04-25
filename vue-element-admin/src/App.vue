<template>
  <div id="app">
    <div class="tops">
      <navbar />
    </div>
    <div class="bottoms">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Navbar } from './layout/components'
export default {
  name: 'App',
  components: { Navbar }
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
  display:flex;
   flex-direction: column;

}
.tops{
  width:100%;
  height:70px;
  overflow: hidden;
  z-index:1212;
  position:relative;
}
.bottoms{
  flex:1;
  width:100%;
  height:100%;
  overflow: auto;
}
#app .sidebar-container{
  top:60px;
}

</style>
