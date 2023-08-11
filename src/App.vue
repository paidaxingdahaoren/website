<template>
  <ContactUs />
  <HeaderTop />
  <FooterButtom />
  <router-view></router-view>
</template>

<script name="App" setup>
import ContactUs from "@/components/ContactUs.vue";
import HeaderTop from "@/components/HeaderTop";
import FooterButtom from "@/components/FooterButtom"
</script>

<style lang="less">
#app {
  position: relative;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  
}
</style>
