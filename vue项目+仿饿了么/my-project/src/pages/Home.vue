<template>
  <div>
    <Header />
    <Search />
    <Grid />
    <Banner />
    <Divider />
    <DropdownMenu />
    <Card />
  </div>
</template>

<script>
import Header from "../components/Header";
import Search from "../components/Search.vue";
import Grid from "../components/Grid.vue";
import Banner from "../components/Banner.vue";
import Divider from "../components/Divider.vue";
import DropdownMenu from "../components/DropdownMenu.vue";
import Card from "../components/Card.vue";
export default {
  name: "app",
  components: {
    Header,
    Search,
    Grid,
    Banner,
    Divider,
    DropdownMenu,
    Card
  }
};
</script>
