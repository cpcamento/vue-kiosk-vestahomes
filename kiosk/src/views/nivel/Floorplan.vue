<template>
  <div>
    <br />
    <br />
    <h1 class="text-center" style="font-family: math; font-weight: 100">
      LE MENDA RESIDENCES NIVEL HILLS - <b>FLOORPLAN</b>
    </h1>
    <br />
    <div class="all-legend">
      <div>
        <h6>All Units</h6>
        <h3>Available</h3>
        <p>{{ this.available }}</p>
      </div>
      <div class="reserved">
        <h6>All Units</h6>
        <h3>Reserved</h3>
        <p>{{ this.reserved }}</p>
      </div>
      <div class="sold">
        <h6>All Units</h6>
        <h3>Sold</h3>
        <p>{{ this.sold }}</p>
      </div>
      <div class="blocked">
        <h6>All Units</h6>
        <h3>Blocked</h3>
        <p>{{ this.blocked }}</p>
      </div>
      <div class="hayat">
        <h6>All Units</h6>
        <h3>Hayat</h3>
        <p>{{ this.hayat }}</p>
      </div>
    </div>
    <br />
    <br />
    <div class="all-floor">
      <RouterLink :to="{ name: 'nivel_five_floorplan' }">5th Floor</RouterLink>
      <RouterLink :to="{ name: 'lemenda_four_inventory' }"
        >6th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_fifth_inventory' }"
        >7th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_six_inventory' }">8th Floor</RouterLink>
      <RouterLink :to="{ name: 'lemenda_seven_inventory' }"
        >9th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_eight_inventory' }"
        >10th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_nine_inventory' }"
        >11th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_ten_inventory' }"
        >12th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_eleven_inventory' }"
        >15th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_twelvea_inventory' }"
        >16th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_twelveb_inventory' }"
        >17th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_fourten_inventory' }"
        >18th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_fifthten_inventory' }"
        >19th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_sixten_inventory' }"
        >20th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_seventen_inventory' }"
        >21st Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_eighten_inventory' }"
        >22nd Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_nineten_inventory' }"
        >23rd Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_twenty_inventory' }"
        >25th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_penthouse_inventory' }"
        >26th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_penthouse_inventory' }"
        >27th Floor</RouterLink
      >
      <RouterLink :to="{ name: 'lemenda_penthouse_inventory' }"
        >28th Floor</RouterLink
      >
    </div>
  </div>
</template>

<script>
import { project1Data } from "../../services/lemendaApiServices";
export default {
  data() {
    return {
      floorData: [],
      available: "",
      sold: "",
      reserved: "",
      blocked: "",
      hayat: "",
    };
  },
  mounted: async function () {
    try {
      this.floorData = await project1Data();
      this.available = this.floorData.filter(
        (data) => data.availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) => data.availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) => data.availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) => data.availability === "Blocked"
      ).length;
      this.hayat = this.floorData.filter(
        (data) => data.availability === "Hayat"
      ).length;
    } catch (error) {
      console.log("Error" + error);
    }
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
.all-floor {
  width: 750px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}
.all-floor a {
  padding: 1.5rem 1rem;
  text-decoration: none;
  box-shadow: 0 0 10px 0 #1e1e1e inset;
  display: block;
  text-align: center;
  color: #fff;
  background-color: #005979;
  text-transform: uppercase;
  border-radius: 4px;
  user-select: none;
  font-family: math;
  font-weight: 800;
  letter-spacing: 1px;
}
.all-legend {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 900px;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  gap: 2rem;
}

.all-legend > div {
  background: #fff;
  padding: 1rem 0;
  border-radius: 10px;
  width: 180px;
}
.all-legend > div.reserved {
  background-color: yellow;
}
.all-legend > div.sold {
  background-color: red;
}
.all-legend > div.blocked {
  background-color: #955fc1;
}
.all-legend > div.hayat {
  background-color: #c97747;
}
.all-legend h3 {
  font-size: 25px;
  font-family: math;
  font-weight: 800;
}
.all-legend h6 {
  font-weight: 400;
  letter-spacing: 1px;
  font-family: math;
}
.all-legend p {
  font-size: 30px;
  font-weight: 600;
  font-family: math;
}
.all-legend > div.sold p,
.all-legend > div.sold h3,
.all-legend > div.sold h6,
.all-legend > div.blocked p,
.all-legend > div.blocked h3,
.all-legend > div.blocked h6,
.all-legend > div.hayat p,
.all-legend > div.hayat h3,
.all-legend > div.hayat h6 {
  color: #fff;
}
</style>
