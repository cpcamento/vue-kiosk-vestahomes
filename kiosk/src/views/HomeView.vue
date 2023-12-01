<template>
  <main>
    <div v-if="isLoading">
      <div class="inventory-option">
        <RouterLink :to="{ name: 'lemenda_all_inventory' }"
          >Floorplan</RouterLink
        >
        <RouterLink :to="{ name: 'lemenda_all_carpark' }">Carpark</RouterLink>
      </div>
      <div class="svg-wrapper">
        <svg
          viewBox="0 0 1750 830"
          oncontextmenu="return false;"
          class="inventory"
        >
          <g>
            <rect
              x="0"
              y="20"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="60"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="100"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="140"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="180"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="220"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="260"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="300"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="340"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="380"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="420"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="460"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="500"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="540"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="580"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="620"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="660"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="700"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="740"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="780"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <text class="side-label" x="20" y="45">FLOOR</text>
            <text class="side-label" x="30" y="85">3rd</text>
            <text class="side-label" x="30" y="125">4th</text>
            <text class="side-label" x="30" y="165">5th</text>
            <text class="side-label" x="30" y="205">6th</text>
            <text class="side-label" x="30" y="245">7th</text>
            <text class="side-label" x="30" y="285">8th</text>
            <text class="side-label" x="30" y="325">9th</text>
            <text class="side-label" x="30" y="365">10th</text>
            <text class="side-label" x="30" y="405">11th</text>
            <text class="side-label" x="20" y="445">12th-A</text>
            <text class="side-label" x="20" y="485">12th-B</text>
            <text class="side-label" x="30" y="525">14th</text>
            <text class="side-label" x="30" y="565">15th</text>
            <text class="side-label" x="30" y="605">16th</text>
            <text class="side-label" x="30" y="645">17th</text>
            <text class="side-label" x="30" y="685">18th</text>
            <text class="side-label" x="30" y="725">19th</text>
            <text class="side-label" x="30" y="765">20th</text>
            <text class="side-label" x="5" y="805">Penthouse</text>
          </g>
          <g>
            <rect
              x="100"
              y="20"
              width="80"
              height="40"
              class="unit top-city"
            ></rect>
            <rect
              x="180"
              y="20"
              width="80"
              height="40"
              class="unit top-city"
            ></rect>
            <rect
              x="260"
              y="20"
              width="80"
              height="40"
              class="unit top-city"
            ></rect>
            <rect
              x="340"
              y="20"
              width="80"
              height="40"
              class="unit top-city"
            ></rect>
            <rect
              x="420"
              y="20"
              width="80"
              height="40"
              class="unit top-city"
            ></rect>
            <rect
              x="500"
              y="20"
              width="80"
              height="40"
              class="unit top-city"
            ></rect>
            <rect
              x="580"
              y="20"
              width="80"
              height="40"
              class="unit top-partial"
            ></rect>
            <rect
              x="660"
              y="20"
              width="80"
              height="40"
              class="unit top-mcs"
            ></rect>
            <rect
              x="740"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="820"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="900"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="980"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="1060"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="1140"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="1220"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="1300"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="1380"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="1460"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="1540"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="1620"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>

            <text class="top-text" x="135" y="45">1</text>
            <text class="top-text" x="215" y="45">2</text>
            <text class="top-text" x="295" y="45">3</text>
            <text class="top-text" x="375" y="45">4</text>
            <text class="top-text" x="455" y="45">5</text>
            <text class="top-text" x="535" y="45">6</text>
            <text class="top-text" x="615" y="45">7</text>
            <text class="top-text" x="695" y="45">8</text>
            <text class="top-text" x="775" y="45">9</text>
            <text class="top-text" x="850" y="45">10</text>
            <text class="top-text" x="930" y="45">11</text>
            <text class="top-text" x="1010" y="45">12</text>
            <text class="top-text" x="1090" y="45">13</text>
            <text class="top-text" x="1170" y="45">14</text>
            <text class="top-text" x="1250" y="45">15</text>
            <text class="top-text" x="1330" y="45">16</text>
            <text class="top-text" x="1410" y="45">17</text>
            <text class="top-text" x="1490" y="45">18</text>
            <text class="top-text" x="1570" y="45">19</text>
            <text class="top-text" x="1650" y="45">20</text>
          </g>
          <g data-label="thirdFloor">
            <g v-for="(item, index) in thirdFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="60"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="85"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="fourthFloor">
            <g v-for="(item, index) in fourthFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="100"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="125"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="fifthFloor">
            <g v-for="(item, index) in fifthFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="140"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="165"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="sixFloor">
            <g v-for="(item, index) in sixFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="180"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="205"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="sevenFloor">
            <g v-for="(item, index) in sevenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="220"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="245"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="eightFloor">
            <g v-for="(item, index) in eigthFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="260"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="285"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="nineFloor">
            <g v-for="(item, index) in nineFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="300"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="325"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="tenFloor">
            <g v-for="(item, index) in tenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="340"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(120, index)"
                y="365"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="elevenFloor">
            <g v-for="(item, index) in elevenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="380"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(120, index)"
                y="405"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="twelveAFloor">
            <g v-for="(item, index) in twelveAFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="420"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(120, index)"
                y="445"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="twelveBFloor">
            <g v-for="(item, index) in twelveBFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="460"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(120, index)"
                y="485"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="fourtenFloor">
            <g v-for="(item, index) in fourtenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="500"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(123, index)"
                y="525"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="fiftenFloor">
            <g v-for="(item, index) in fifthtenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="540"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(123, index)"
                y="565"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="sixtenFloor">
            <g v-for="(item, index) in sixtenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="580"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(123, index)"
                y="605"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="seventenFloor">
            <g v-for="(item, index) in seventenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="620"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(123, index)"
                y="645"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="eightenFloor">
            <g v-for="(item, index) in eightenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="660"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(123, index)"
                y="685"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="ninetenFloor">
            <g v-for="(item, index) in ninetenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="700"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(123, index)"
                y="725"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="twentyFloor">
            <g v-for="(item, index) in twentyFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="740"
                width="80"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(123, index)"
                y="765"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="penthouseFloor">
            <g v-for="(item, index) in penthouseFloor" :key="index">
              <rect
                :x="getPHXValue('rect', index)"
                y="780"
                :width="getPHXValue('width', index)"
                height="40"
                :class="['unit', item.unit, item.availability]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getPHXValue('text', index)"
                y="805"
              >
                PENTHOUSE-{{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="legend">
            <rect
              x="1460"
              y="300"
              width="240"
              height="40"
              class="legend hayat"
            ></rect>
            <rect
              x="1460"
              y="340"
              width="240"
              height="40"
              class="legend available"
            ></rect>
            <rect
              x="1460"
              y="380"
              width="240"
              height="40"
              class="legend reserved"
            ></rect>
            <rect
              x="1460"
              y="420"
              width="240"
              height="40"
              class="legend blocked"
            ></rect>
            <rect
              x="1460"
              y="460"
              width="240"
              height="40"
              class="legend sold"
            ></rect>

            <rect
              x="1460"
              y="540"
              width="240"
              height="40"
              class="legend city"
            ></rect>
            <rect
              x="1460"
              y="580"
              width="240"
              height="40"
              class="legend partial"
            ></rect>
            <rect
              x="1460"
              y="620"
              width="240"
              height="40"
              class="legend mountain"
            ></rect>
            <rect
              x="1460"
              y="660"
              width="240"
              height="40"
              class="legend mcs"
            ></rect>
            <text class="legend hayat" x="1505" y="325">
              {{ this.totalHayat }} - Hayat
            </text>
            <text class="legend available" x="1505" y="365">
              {{ this.totalAvailable }} - Available
            </text>
            <text class="legend reserved" x="1505" y="405">
              {{ this.totalReserved }} - Reserved
            </text>
            <text class="legend blocked" x="1505" y="445">
              {{ this.totalBlocked }} - Blocked
            </text>
            <text class="legend sold" x="1505" y="485">
              {{ this.totalSold }} - Sold
            </text>
            <text class="legend sold city" x="1505" y="565">108 - City</text>
            <text class="legend sold partial" x="1505" y="605">
              19 - Partial
            </text>
            <text class="legend sold mountain" x="1505" y="645">
              166 - Mountain
            </text>
            <text class="legend sold mcs" x="1490" y="685">
              18 - Mountain City & Sea
            </text>
          </g>
        </svg>
      </div>
    </div>
    <div v-else>
      <div class="loader-message">Accessing Inventory Project 1 ...</div>
    </div>
  </main>
</template>

<script>
import { project1Data } from "../services/lemendaApiServices";

export default {
  data() {
    return {
      floorplan: [],
      thirdFloor: [],
      fourthFloor: [],
      fifthFloor: [],
      sixFloor: [],
      sevenFloor: [],
      eigthFloor: [],
      nineFloor: [],
      tenFloor: [],
      elevenFloor: [],
      twelveAFloor: [],
      twelveBFloor: [],
      fourtenFloor: [],
      fifthtenFloor: [],
      sixtenFloor: [],
      seventenFloor: [],
      eightenFloor: [],
      ninetenFloor: [],
      twentyFloor: [],
      penthouseFloor: [],
      totalHayat: "",
      totalAvailable: "",
      totalReserved: "",
      totalBlocked: "",
      totalSold: "",
      isLoading: false,
    };
  },
  mounted() {
    this.floorData();
    setInterval(this.floorData, 10000);
  },
  methods: {
    async floorData() {
      try {
        this.floorplan = await project1Data();
        this.thirdFloor = this.floorplan.filter((item) => item.floor === "3rd");
        this.fourthFloor = this.floorplan.filter(
          (item) => item.floor === "4th"
        );
        this.fifthFloor = this.floorplan.filter((item) => item.floor === "5th");
        this.sixFloor = this.floorplan.filter((item) => item.floor === "6th");
        this.sevenFloor = this.floorplan.filter((item) => item.floor === "7th");
        this.eigthFloor = this.floorplan.filter((item) => item.floor === "8th");
        this.nineFloor = this.floorplan.filter((item) => item.floor === "9th");
        this.tenFloor = this.floorplan.filter((item) => item.floor === "10th");
        this.elevenFloor = this.floorplan.filter(
          (item) => item.floor === "11th"
        );
        this.twelveAFloor = this.floorplan.filter(
          (item) => item.floor === "12th-A"
        );
        this.twelveBFloor = this.floorplan.filter(
          (item) => item.floor === "12th-B"
        );
        this.fourtenFloor = this.floorplan.filter(
          (item) => item.floor === "14th"
        );
        this.fifthtenFloor = this.floorplan.filter(
          (item) => item.floor === "15th"
        );
        this.sixtenFloor = this.floorplan.filter(
          (item) => item.floor === "16th"
        );
        this.seventenFloor = this.floorplan.filter(
          (item) => item.floor === "17th"
        );
        this.eightenFloor = this.floorplan.filter(
          (item) => item.floor === "18th"
        );
        this.ninetenFloor = this.floorplan.filter(
          (item) => item.floor === "19th"
        );
        this.twentyFloor = this.floorplan.filter(
          (item) => item.floor === "20th"
        );
        this.penthouseFloor = this.floorplan.filter(
          (item) => item.floor === "21st"
        );

        this.totalHayat = this.floorplan.filter(
          (item) => item.availability === "Hayat"
        ).length;

        this.totalAvailable = this.floorplan.filter(
          (item) => item.availability === "Available"
        ).length;

        this.totalReserved = this.floorplan.filter(
          (item) => item.availability === "Reserved"
        ).length;

        this.totalBlocked = this.floorplan.filter(
          (item) => item.availability === "Blocked"
        ).length;

        this.totalSold = this.floorplan.filter(
          (item) => item.availability === "Sold"
        ).length;

        this.isLoading = true;
      } catch (error) {
        console.log("Error" + error);
      }
    },
    getXValue(start, index) {
      return start + index * 80;
    },
    getPHXValue(type, index) {
      if (type === "rect") {
        if (index == 0) return 100;
        else if (index == 1) return 740;
        else return 1220;
      } else if (type === "width") {
        if (index == 0) return 640;
        else if (index == 1) return 480;
        else return 480;
      } else {
        if (index == 0) return 353;
        else if (index == 1) return 910;
        else return 1400;
      }
    },
  },
};
</script>

<style>
.inventory-option {
  padding: 0.5rem;
  margin: auto;
  padding-left: 3rem;
  margin-top: 1rem;
}
.inventory-option a {
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  box-shadow: 0 0 2px 0 #000 inset;
  background-color: #2f75b5;
}

.loader-message {
  position: fixed;
  top: 50%;
  left: 50%;
  background: #000;
  color: #fff;
  padding: 1rem;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
}
a.inventory-button {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  border-color: #2f75b5;
  background: #2f75b5;
  border-radius: 4px;
  margin-top: 2rem;
  float: right;
}
svg.inventory rect.unit {
  fill: #fff;
  stroke: #709a8b;
  stroke-width: 1px;
}
svg.inventory rect.legend {
  fill: #fff;
  stroke: #709a8b;
}
svg.inventory text.legend {
  font-weight: 400;
}
svg.inventory text.legend.reserved,
svg.inventory text.legend.hayat,
svg.inventory text.legend.blocked,
svg.inventory text.legend.sold {
  fill: #fff;
}
svg.inventory text.legend.available,
svg.inventory text.legend.reserved {
  fill: #000;
}

svg.inventory rect.legend.hayat {
  fill: #c97747;
  stroke: #c97747;
}

svg.inventory rect.legend.reserved {
  fill: yellow;
  stroke: yellow;
}

svg.inventory rect.legend.available {
  fill: #fff;
  stroke: #fff;
}
svg.inventory rect.legend.blocked {
  fill: #955fc1;
  stroke: #955fc1;
}
svg.inventory rect.legend.sold {
  fill: red;
  stroke: red;
}
svg.inventory rect.unit.Sold {
  fill: red;
  stroke: #eb7f7f;
}
svg.inventory text.unit.Sold,
svg.inventory text.unit.Hayat,
svg.inventory text.unit.Blocked {
  fill: #fff;
}
svg.inventory text.unit.Reserved {
  fill: #000;
}
svg.inventory rect.unit.Hayat {
  fill: #c97747;
  stroke: #c17041;
}
svg.inventory rect.unit.Reserved {
  fill: yellow;
  stroke: #efef0c;
}
svg.inventory rect.unit.Blocked {
  fill: #955fc1;
  stroke: #955fc1;
}
svg.inventory rect.side-label {
  fill: #000;
  stroke: #333;
}
svg.inventory text.side-label {
  fill: #fff;
}
svg.inventory rect.top-city,
svg.inventory rect.legend.city {
  fill: #2f75b5;
  stroke: #2f75b5;
}
svg.inventory rect.top-partial,
svg.inventory rect.legend.partial {
  fill: #827717;
  stroke: #827717;
}
svg.inventory rect.top-mountain,
svg.inventory rect.legend.mountain {
  fill: #548235;
  stroke: #548235;
}
svg.inventory rect.top-mcs,
svg.inventory rect.legend.mcs {
  fill: #ed7d31;
  stroke: #ed7d31;
}
svg.inventory text.top-text {
  fill: #fff;
}
svg.inventory text {
  user-select: none;
  pointer-events: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
