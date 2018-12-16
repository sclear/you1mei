<template>
  <div id="app">
    <bar></bar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import bar from "./components/common/bar";
export default {
    name: "App",
    components: {
        bar
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
html,
body {
    height: 100%;
    min-width: 1350px;
}
#app {
    height: 100%;
}
.swiper-pagination-bullet {
    width: 33px !important;
    height: 6px !important;
    border-radius: 3px;
    background-color: rgb(255, 255, 255);
    opacity: 1;
}
.swiper-pagination-bullet-active {
    background-color: #4e9bdd;
}
</style>
