<template>
  <div class="floorlevel">
    <RouterLink :to="{ name: 'nivel_all_carpark' }">ALL</RouterLink>
    <RouterLink :to="{ name: 'nivel_second_carpark' }">2nd Floor</RouterLink>
    <RouterLink :to="{ name: 'nivel_third_carpark' }">3rd Floor</RouterLink>
    <RouterLink :to="{ name: 'nivel_all_carpark' }">Basement 1</RouterLink>
    <RouterLink :to="{ name: 'nivel_all_carpark' }">Basement 2</RouterLink>
    <RouterLink :to="{ name: 'nivel_all_carpark' }">Basement 3</RouterLink>
    <RouterLink :to="{ name: 'nivel_all_carpark' }">Basement 4</RouterLink>
  </div>
</template>
