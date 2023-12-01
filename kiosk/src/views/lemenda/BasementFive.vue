<script setup>
import LemendaInventoryPark from "../../components/LemendaInventoryPark.vue";
</script>
<template>
  <div>
    <br />
    <div class="floorplan-wrapper">
      <svg viewBox="0 0 660 440" class="floorplan">
        <g>
          <path
            d="M 50 100 L 80 100 L 80 150 L 85 150 M 50 100 L 55 180 L 65 180"
            class="container bold"
          ></path>
          <path
            d="M 55 180 L 85 180 L 85 297 L 140 297 M 135 297 L 135 297 L 198 297 L 198 295 L 255 295 L 255 285 L 390 285 L 395 280 L 427 310 L 483 327 L 570 430 L 656 362 L 400 30 M 50 107 L 49 90 L 270 90 L 270 150 L 360 150 L 325 80 L 345 65 L 350 74 L 328 40 L 382 6 L 401 31"
            class="container"
          ></path>
          <!-- ELEVATOR -->
          <path d="M 415 50 L 390 69 L 393 73" class="container bold"></path>
          <path
            style="transform: translate(12px, 17px)"
            d="M 415 50 L 390 69 L 393 73 L 387 65"
            class="container bold"
          ></path>
          <path
            style="transform: translate(25px, 33px)"
            d="M 415 50 L 390 69 L 393 73 L 387 65"
            class="container bold"
          ></path>
          <path
            style="transform: translate(38px, 50px)"
            d="M 415 50 L 390 69 L 387 65"
            class="container bold"
          ></path>
          <!-- SEPTIC TANK -->
          <path
            style="transform: translate(20px, 26px)"
            d="M 465 115 403 162 L 434 203 L 496 156"
            class="container"
          ></path>
        </g>
        <rect
          x="110"
          y="95"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('94')]"
        >
          <title></title>
        </rect>

        <rect
          x="140"
          y="95"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('93')]"
        >
          <title></title>
        </rect>
        <rect
          x="165"
          y="95"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('92')]"
        >
          <title></title>
        </rect>

        <rect
          x="110"
          y="240"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('97')]"
        >
          <title></title>
        </rect>

        <rect
          x="144"
          y="240"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('98')]"
        >
          <title></title>
        </rect>
        <rect
          x="169"
          y="240"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('99')]"
        >
          <title></title>
        </rect>

        <rect
          x="200"
          y="237"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('100')]"
        >
          <title></title>
        </rect>
        <rect
          x="225"
          y="237"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('101')]"
        >
          <title></title>
        </rect>

        <rect
          x="255"
          y="227"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('102')]"
        >
          <title></title>
        </rect>
        <rect
          x="280"
          y="227"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('103')]"
        >
          <title></title>
        </rect>

        <rect
          x="310"
          y="227"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('104')]"
        >
          <title></title>
        </rect>
        <rect
          x="360"
          y="227"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('105')]"
        >
          <title></title>
        </rect>

        <g style="transform: translate(378px, -328px) rotate(52deg)">
          <rect
            x="490"
            y="207"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('88')]"
          >
            <title></title>
          </rect>
          <rect
            x="525"
            y="207"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('87')]"
          >
            <title></title>
          </rect>
          <rect
            x="550"
            y="207"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('86')]"
          >
            <title></title>
          </rect>
          <rect
            style="transform: translate(877px, -335px) rotate(88deg)"
            x="610"
            y="207"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('85')]"
            comment="true"
          >
            <title>for permit compliance</title>
          </rect>
        </g>
        <g style="transform: translateY(0px)">
          <text
            x="20"
            y="380"
            style="
              fill: #fff;
              font-size: 14px;
              font-weight: 900;
              letter-spacing: 2px;
              text-decoration: underline;
            "
          >
            BASEMENT 5 - PROJECT 1
          </text>
          <rect
            x="20"
            y="390"
            width="40"
            height="30"
            rx="2"
            class="counter available"
          ></rect>
          <text x="25" y="400" class="counter available">AVAILABLE</text>
          <text x="30" y="415" class="counter available big">
            {{ formatNumber(available) }}
          </text>

          <rect
            x="70"
            y="390"
            width="40"
            height="30"
            rx="2"
            class="counter sold"
          ></rect>
          <text x="82" y="400" class="counter">SOLD</text>
          <text x="80" y="415" class="counter big">
            {{ formatNumber(sold) }}
          </text>

          <rect
            x="120"
            y="390"
            width="40"
            height="30"
            rx="2"
            class="counter reserved"
          ></rect>
          <text x="126" y="400" class="counter reserved">RESERVED</text>
          <text x="130" y="415" class="counter reserved big">
            {{ formatNumber(reserved) }}
          </text>

          <rect
            x="170"
            y="390"
            width="40"
            height="30"
            rx="2"
            class="counter blocked"
          ></rect>
          <text x="177" y="400" class="counter">BLOCKED</text>
          <text x="180" y="415" class="counter big">
            {{ formatNumber(blocked) }}
          </text>
        </g>

        <!-- TEXT -->
        <text x="118" y="127" :class="getParkingStatus('94')">94</text>
        <text x="149" y="127" :class="getParkingStatus('93')">93</text>
        <text x="173" y="127" :class="getParkingStatus('92')">92</text>
        <text x="118" y="272" :class="getParkingStatus('97')">97</text>
        <text x="152" y="272" :class="getParkingStatus('98')">98</text>
        <text x="176" y="272" :class="getParkingStatus('99')">99</text>
        <text x="206" y="269" :class="getParkingStatus('100')">100</text>
        <text x="231" y="269" :class="getParkingStatus('101')">101</text>
        <text x="261" y="260" :class="getParkingStatus('102')">102</text>
        <text x="286" y="260" :class="getParkingStatus('103')">103</text>
        <text x="316" y="260" :class="getParkingStatus('104')">104</text>
        <text x="366" y="260" :class="getParkingStatus('105')">105</text>
        <text x="498" y="217" :class="getParkingStatus('88')">88</text>
        <text x="521" y="244" :class="getParkingStatus('87')">87</text>
        <text x="535" y="263" :class="getParkingStatus('86')">86</text>
        <text x="550" y="381" :class="getParkingStatus('85')">85</text>

        <text
          x="445"
          y="188"
          style="font-family: monospace; font-size: 8px; fill: #25b7c4"
        >
          SEPTIC TANK
        </text>
      </svg>
      <LemendaInventoryPark />
    </div>
  </div>
</template>

<script>
import { project1CarparkData } from "../../services/lemendaApiServices";
export default {
  data() {
    return {
      floorData: [],
      available: "0",
      sold: "0",
      reserved: "0",
      blocked: "0",
    };
  },
  mounted: async function () {
    try {
      this.floorData = await project1CarparkData();
      this.available = this.floorData.filter(
        (data) =>
          data.basement_no === "Basement5" &&
          data.parking_availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) =>
          data.basement_no === "Basement5" &&
          data.parking_availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) =>
          data.basement_no === "Basement5" &&
          data.parking_availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) =>
          data.basement_no === "Basement5" &&
          data.parking_availability === "Blocked"
      ).length;
    } catch (error) {
      console.log("Error" + error);
    }
  },
  methods: {
    getParkingStatus(value) {
      return this.floorData
        .filter((data) => data.parking_no === value)
        .map((data) => data.parking_availability);
    },
    formatNumber(number) {
      return number.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    },
  },
};
</script>
<style>
g.gdown {
  transform: translateY(18px);
}
.floorplan-wrapper {
  display: flex;
}
.white {
  color: #fff;
}
.text-center {
  text-align: center;
}
svg rect.counter.available {
  fill: #fff;
  stroke: #fff;
}
svg rect.counter.sold {
  fill: red;
  stroke: red;
}
svg rect.counter.reserved {
  fill: yellow;
  stroke: yellow;
}
svg rect.counter.blocked {
  fill: #955fc1;
  stroke: #955fc1;
}
svg rect.counter.hayat {
  fill: #c97747;
  stroke: #c97747;
}
svg.floorplan {
  width: 64%;
  display: flex;
  margin: auto;
  user-select: none;
  pointer-events: none;
  padding: 1rem;
  background: #00000085;
  border-radius: 20px;
}
svg.floorplan rect,
svg.floorplan path {
  fill: #0000;
  stroke: #ccc;
  stroke-width: 1;
}

svg.floorplan rect.Available,
svg.floorplan path.Available,
svg.floorplan rect.unit,
svg.floorplan path.unit {
  fill: #fff;
  stroke: #ccc;
}
svg.floorplan rect.Sold,
svg.floorplan path.Sold {
  stroke: #ff7c7c;
  fill: red;
}
svg.floorplan rect.Reserved,
svg.floorplan path.Reserved {
  stroke: yellow;
  fill: yellow;
}
svg.floorplan rect.Blocked,
svg.floorplan path.Blocked {
  stroke: #9f62d1;
  fill: #955fc1;
}
svg.floorplan text.counter {
  fill: #fff;
  font-size: 5px;
  font-weight: 900;
}
svg.floorplan text.counter.big {
  font-size: 15px;
}
svg.floorplan text {
  font-size: 8px;
}
svg.floorplan text.counter.available,
svg.floorplan text.counter.reserved {
  fill: #000;
}

svg.floorplan text.Sold,
svg.floorplan text.Blocked {
  fill: #fff;
}
svg.floorplan text.Available,
svg.floorplan text.Reserved {
  fill: #000;
}

svg.floorplan rect.Hayat,
svg.floorplan path.Hayat {
  fill: #c97747;
  stroke: #d77e4a;
}
svg.floorplan text.Hayat {
  fill: #fff;
}

.floorplan + text {
  font-size: 7px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  fill: #0ea0ad;
}
.floorplan + text + text {
  font-size: 6px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  fill: #0ea0ad;
}
</style>
