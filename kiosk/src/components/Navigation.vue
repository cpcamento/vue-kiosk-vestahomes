<template>
  <div class="navigator">
    <RouterLink to="/">Project 1 Inventory</RouterLink>
    <RouterLink :to="{ name: 'nivel' }">Project 2 Inventory</RouterLink>
    <RouterLink to="/projects/au">Australia Projects</RouterLink>
    <RouterLink to="/projects/cebu">Cebu Projects</RouterLink>
    <RouterLink to="/company-profile">Company Profile</RouterLink>
    <RouterLink to="/videos">Videos</RouterLink>
  </div>
</template>
<style>
.navigator {
  height: 90px;
  background-color: #154252;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  position: relative;
}
.navigator a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #fff;
  text-transform: uppercase;
  padding: 1rem;
  user-select: none;
  border-radius: 4px;
  position: relative;
  color: #5f6a79;
  box-shadow: 0 0 10px 0 #ccc inset;
  margin-left: 5px;
  margin-right: 5px;
  font-family: math;
}
.navigator a.router-link-active,
.navigator a:hover {
  background: #154252;
  color: #fff;
}
</style>
