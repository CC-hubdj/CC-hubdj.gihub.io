<template>
  <div>
    <Header />
    <Tabbar />
  </div>
</template>
<script>
import Header from "../Detail/Header.vue";
import Tabbar from "../Detail/Tabbar.vue";
export default {
  name: "app",
  components: {
    Header,
    Tabbar
  }
};
</script>