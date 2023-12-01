<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <h1 class="text-center">LE MENDA RESIDENCES - <b>CARPARK</b></h1>
    <br />
    <div class="all-legend">
      <div>
        <h6>All Carparks</h6>
        <h3>Available</h3>
        <p>{{ this.available }}</p>
      </div>
      <div class="reserved">
        <h6>All Carparks</h6>
        <h3>Reserved</h3>
        <p>{{ this.reserved }}</p>
      </div>
      <div class="sold">
        <h6>All Carparks</h6>
        <h3>Sold</h3>
        <p>{{ this.sold }}</p>
      </div>
      <div class="blocked">
        <h6>All Carparks</h6>
        <h3>Blocked</h3>
        <p>{{ this.blocked }}</p>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="all-floorc">
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
  </div>
</template>

<script>
import { project1CarparkData } from "../../services/lemendaApiServices";
export default {
  data() {
    return {
      carparkData: [],
      available: "",
      sold: "",
      reserved: "",
      blocked: "",
    };
  },
  mounted: async function () {
    try {
      this.carparkData = await project1CarparkData();
      this.available = this.carparkData.filter(
        (data) => data.parking_availability === "Available"
      ).length;
      this.sold = this.carparkData.filter(
        (data) => data.parking_availability === "Sold"
      ).length;
      this.reserved = this.carparkData.filter(
        (data) => data.parking_availability === "Reserved"
      ).length;
      this.blocked = this.carparkData.filter(
        (data) => data.parking_availability === "Blocked"
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
.all-floorc {
  width: 750px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}
.all-floorc a {
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
}
.all-legend {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  font-family: system-ui;
}
.all-legend p {
  font-size: 30px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
