<template>
  <Banner />
  <Content />
</template>

<script>
import Banner from "./components/Banner.vue";
import Content from "./components/Content.vue";

export default {
  components: {
    Banner,
    Content,
  },
}
</script>

<style>
::selection {
  background-image: linear-gradient(to right, #81d4fa 0%, #e1f5fe 100%);
  background-color: #81d4fa;
  color: #0a0d16;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  background-color: #262833;
}

p {
  font-size: 13px;
}

/* body {
 font-size: 1.2rem;
  line-height: 1.8;
  letter-spacing: 0.2rem;
  font-weight: 200;
  color: #f4f4f4 !important; 
} */

html {
  background-color: #262833 !important;
}

strong {
  color: #f4f4f4;
}

@font-face {
  font-family: "minecraftfont";
  src: url("./assets/fonts/minecraftfont.eot");
  src: local("minecraftfont"),
    url("./assets/fonts/minecraftfont.woff") format("woff"),
    url("./assets/fonts/minecraftfont.ttf") format("truetype");
}

.title,
.subtitle {
  text-shadow: #050607 2px 2px;
  font-family: "minecraftfont" !important;
  color: #f4f4f4 !important;
}
</style>
