<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import LeftBrochure from "./components/LeftBrochure.vue";
import RightBrochure from "./components/RightBrochure.vue";
</script>

<template>
  <div class="flex">
    <LeftBrochure />
    <div class="content-wrapper">
      <div class="top-header">
        <div>
          <marquee behavior="scroll" direction="left"
            ><p style="padding-top: 4px">
              VESTAHOMES COMMERCIAL INCORPORATED
            </p></marquee
          >
        </div>
      </div>
      <div class="app-content">
        <div><RouterView /></div>
      </div>
    </div>
    <RightBrochure />
  </div>
  <Navigation />
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: system-ui, -apple-system, "Futura", BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}
.flex {
  display: flex;
}
.top-header {
  background: #154252;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 4px;
  font-weight: 900;
  font-family: math;
  font-size: 30px;
}

.top-header > div {
  width: 50%;
  margin: auto;
}

@font-face {
  font-family: "Futura";
  src: url(@/assets/fonts/futura/FuturaBookfont.ttf);
}
.content-wrapper {
  width: 100%;
}
.content-wrapper .app-content {
  width: 100%;
  background: #eee;
  height: calc(100vh - 130px);
  position: relative;
  overflow: auto;
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  box-sizing: border-box;
  flex-wrap: nowrap;
}
.content-wrapper .app-content > div {
  width: 95%;
  margin: auto;
  position: relative;
  box-sizing: border-box;
}
</style>
