<template>
  <div id="recover">
    <RecoverHeader />
    <RecoverMain />
  </div>
</template>

<script>
import RecoverHeader from "./RecoverHeader.vue";
import RecoverMain from "./RecoverMain.vue";
export default {
  components: {
    RecoverHeader,
    RecoverMain
  }
};
</script>
<style>
#recover {
    background: #f5f5f5;
}
</style>