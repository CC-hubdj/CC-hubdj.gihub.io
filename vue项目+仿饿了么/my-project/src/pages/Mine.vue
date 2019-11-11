<template>
  <div id="mine">
    <MineHeader />
    <MineMaininfo />
    <MineProfile />
    <MineprofileYs />
  </div>
</template>

<script>
import MineHeader from "./MineHeader.vue";
import MineMaininfo from "./MineMaininfo.vue";
import MineProfile from "./MineProfile.vue";
import MineprofileYs from "./MineprofileYs.vue";
export default {
  components: {
    MineHeader,
    MineMaininfo,
    MineProfile,
    MineprofileYs
  }
};
</script>

<style lang="css">
#mine {
    height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}
</style>