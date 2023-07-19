<template>
  <div id="app" class="relative font-sans" :class="{'dark': theme == 'dark'}">
    <MobileHeader @switchTheme="switchTheme()" class="flex md:hidden" v-if="$route.path.indexOf('error403') == -1" />
    <Header @switchTheme="switchTheme()" class="hidden md:flex" v-if="$route.path.indexOf('error403') == -1" />
    <div
      class="px-[2px] md:px-3 py-[10px] md:pt-5 md:pb-10 bg-most-light-warning dark:bg-[#1E1E1E]"
      :class="{
        'min-h-[calc(100vh-38px)] md:min-h-[calc(100vh-65px)]': $route.path.indexOf('error403') == -1,
        'min-h-screen': $route.path.indexOf('error403') > -1,
      }"
    >
      <MobileTab class="flex md:hidden mb-[15px]" v-if="$route.path.indexOf('error403') == -1" />
      <Tab class="hidden md:flex mb-[10px]" v-if="$route.path.indexOf('error403') == -1" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/desktop/Header.vue";
import MobileHeader from "./components/layout/mobile/Header.vue";
import Tab from "./components/layout/desktop/Tab.vue";
import MobileTab from "./components/layout/mobile/Tab.vue";
export default {
  name: "App",
  components: {
    Header,
    MobileHeader,
    Tab,
    MobileTab,
},
  data: function() {
    return {
      theme: 'dark',
    }
  },
  methods: {
    switchTheme() {
      this.theme = this.theme == '' ? 'dark' : '';
    },
  }
};
</script>

<style>
@import "style.css";
</style>
