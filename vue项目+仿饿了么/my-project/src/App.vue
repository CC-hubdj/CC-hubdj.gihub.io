<template>
  <keep-alive>
    <div id="app">
      <router-view />
      <!-- <Tabbar /> -->
    </div>
  </keep-alive>
</template>

<script>
// import Tabbar from "./components/Tabbar.vue";
export default {
  data() {
    return {
      test: "hhhha"
    };
  },
  name: "app",
  components: {
    // Tabbar
  }
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #fff !important;
}
#app {
  height: 100%;
}
</style>

