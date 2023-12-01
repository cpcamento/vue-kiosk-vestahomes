<template>
  <div class="sidebrochure">
    <RouterLink to="/lemenda-brochure">
      <img src="@/assets/images/lemenda.webp" alt="images" />
    </RouterLink>
    <RouterLink to="/lemenda-nivel-brochure">
      <img src="@/assets/images/lemendanivel.webp" alt="images" />
    </RouterLink>
    <RouterLink to="/designer-series-brochure">
      <img src="@/assets/images/designer_series.webp" alt="images" />
    </RouterLink>
    <RouterLink to="/homedesign-brochure">
      <img src="@/assets/images/homedesign.webp" alt="images" />
    </RouterLink>
    <RouterLink to="/smartliving-brochure">
      <img src="@/assets/images/smartliving.webp" alt="images" />
    </RouterLink>
    <RouterLink to="/edmondson-brochure">
      <img src="@/assets/images/edmondson.webp" alt="images" />
    </RouterLink>
    <RouterLink to="/parkpoint-brochure">
      <img src="@/assets/images/parkpoint.webp" alt="images" />
    </RouterLink>
  </div>
</template>

<style>
.sidebrochure {
  z-index: 9;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 150px;
  background-color: #154252;
  height: calc(100vh - 90px);
}
.sidebrochure img {
  height: 70px;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 #ccc inset;
  display: block;
}
.sidebrochure a {
  user-select: none;
}
.sidebrochure a.router-link-active img,
.sidebrochure a:hover img {
  box-shadow: 0 0 10px 0 #ccc;
}
</style>
