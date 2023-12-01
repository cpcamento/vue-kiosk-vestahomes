<template>
  <div class="floorlevel">
    <RouterLink :to="{ name: 'lemenda_all_carpark' }">ALL</RouterLink>
    <RouterLink :to="{ name: 'lemenda_basement1_carpark' }"
      >Basement 1</RouterLink
    >
    <RouterLink :to="{ name: 'lemenda_basement2_carpark' }"
      >Basement 2</RouterLink
    >
    <RouterLink :to="{ name: 'lemenda_basement3_carpark' }"
      >Basement 3</RouterLink
    >
    <RouterLink :to="{ name: 'lemenda_basement4_carpark' }"
      >Basement 4</RouterLink
    >
    <RouterLink :to="{ name: 'lemenda_basement5_carpark' }"
      >Basement 5</RouterLink
    >
  </div>
</template>
