<template>
  <main>
    <div v-if="isLoading">
      <div class="inventory-option">
        <RouterLink :to="{ name: 'nivel_all_floorplan' }">Floorplan</RouterLink>
        <RouterLink :to="{ name: 'nivel_all_carpark' }">Carpark</RouterLink>
      </div>
      <div class="svg-wrapper">
        <svg
          viewBox="0 0 1700 1180"
          oncontextmenu="return false;"
          class="inventory-nivel"
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
            <rect
              x="0"
              y="820"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <rect
              x="0"
              y="860"
              width="100"
              height="40"
              class="unit side-label"
            ></rect>
            <text class="side-label" x="20" y="45">FLOOR</text>
            <text class="side-label" x="30" y="85">28th</text>
            <text class="side-label" x="30" y="125">27th</text>
            <text class="side-label" x="30" y="165">26th</text>
            <text class="side-label" x="30" y="205">25th</text>
            <text class="side-label" x="30" y="245">23rd</text>
            <text class="side-label" x="30" y="285">22nd</text>
            <text class="side-label" x="30" y="325">21st</text>
            <text class="side-label" x="30" y="365">20th</text>
            <text class="side-label" x="30" y="405">19th</text>
            <text class="side-label" x="30" y="445">18th</text>
            <text class="side-label" x="30" y="485">17th</text>
            <text class="side-label" x="30" y="525">16th</text>
            <text class="side-label" x="30" y="565">15th</text>
            <text class="side-label" x="30" y="605">12th</text>
            <text class="side-label" x="30" y="645">11th</text>
            <text class="side-label" x="30" y="685">10th</text>
            <text class="side-label" x="30" y="725">9th</text>
            <text class="side-label" x="30" y="765">8th</text>
            <text class="side-label" x="30" y="805">7th</text>
            <text class="side-label" x="30" y="845">6th</text>
            <text class="side-label" x="30" y="885">5th</text>
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
              class="unit top-mcs"
            ></rect>
            <rect
              x="420"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="500"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="580"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="660"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain"
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
              class="unit top-mountain-city"
            ></rect>
            <rect
              x="980"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain-city"
            ></rect>
            <rect
              x="1060"
              y="20"
              width="80"
              height="40"
              class="unit top-mountain-city"
            ></rect>
            <rect
              x="1140"
              y="20"
              width="80"
              height="40"
              class="unit top-mcsc"
            ></rect>
            <rect
              x="1220"
              y="20"
              width="80"
              height="40"
              class="unit top-mcs"
            ></rect>
            <rect
              x="1300"
              y="20"
              width="80"
              height="40"
              class="unit top-mcs"
            ></rect>
            <rect
              x="1380"
              y="20"
              width="80"
              height="40"
              class="unit top-mcs"
            ></rect>
            <rect
              x="1460"
              y="20"
              width="80"
              height="40"
              class="unit top-mcs"
            ></rect>
            <rect
              x="1540"
              y="20"
              width="80"
              height="40"
              class="unit top-mcs"
            ></rect>
            <rect
              x="1620"
              y="20"
              width="80"
              height="40"
              class="unit top-mcs"
            ></rect>

            <text class="top-city" x="135" y="45">1</text>
            <text class="top-city" x="215" y="45">2</text>
            <text class="top-city" x="295" y="45">3</text>
            <text class="top-text" x="375" y="45">5</text>
            <text class="top-text" x="455" y="45">6</text>
            <text class="top-text" x="535" y="45">7</text>
            <text class="top-text" x="615" y="45">8</text>
            <text class="top-text" x="695" y="45">9</text>
            <text class="top-text" x="775" y="45">10</text>
            <text class="top-text" x="850" y="45">11</text>
            <text class="top-city" x="930" y="45">12</text>
            <text class="top-city" x="1010" y="45">15</text>
            <text class="top-city" x="1090" y="45">16</text>
            <text class="top-text" x="1170" y="45">17</text>
            <text class="top-text" x="1250" y="45">18</text>
            <text class="top-text" x="1330" y="45">19</text>
            <text class="top-text" x="1410" y="45">20</text>
            <text class="top-text" x="1490" y="45">21</text>
            <text class="top-text" x="1570" y="45">22</text>
            <text class="top-text" x="1650" y="45">23</text>
          </g>
          <g data-label="twentyeightFloor">
            <rect
              x="100"
              y="60"
              width="80"
              height="40"
              :class="['unit', getUnitStatus('2801')]"
            ></rect>
            <text x="125" y="85" :class="getUnitStatus('2801')">2801</text>
            <rect
              x="180"
              y="60"
              width="80"
              height="40"
              :class="['unit', getUnitStatus('2802')]"
            ></rect>
            <text x="205" y="85" :class="getUnitStatus('2802')">2802</text>
            <rect
              x="420"
              y="60"
              width="80"
              height="40"
              :class="['unit', getUnitStatus('2803')]"
            ></rect>
            <text x="444" y="85" :class="getUnitStatus('2803')">2803</text>
            <rect
              x="500"
              y="60"
              width="80"
              height="40"
              :class="['unit', getUnitStatus('2805')]"
            ></rect>
            <text x="525" y="85" :class="getUnitStatus('2805')">2805</text>
            <rect
              x="1140"
              y="60"
              width="80"
              height="40"
              :class="['unit', getUnitStatus('2806')]"
            ></rect>
            <text x="1165" y="85" :class="getUnitStatus('2806')">2806</text>
            <rect
              x="1220"
              y="60"
              width="80"
              height="40"
              :class="['unit', getUnitStatus('2807')]"
            ></rect>
            <text x="1242" y="85" :class="getUnitStatus('2807')">2807</text>
            <rect
              x="1300"
              y="60"
              width="80"
              height="40"
              :class="['unit', getUnitStatus('2808')]"
            ></rect>
            <text x="1322" y="85" :class="getUnitStatus('2808')">2808</text>
            <rect
              x="1380"
              y="60"
              width="80"
              height="40"
              :class="['unit', getUnitStatus('2809')]"
            ></rect>
            <text x="1400" y="85" :class="getUnitStatus('2809')">2809</text>
          </g>
          <g data-label="twentySevenFloor">
            <g v-for="(item, index) in twentySevenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="100"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
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
          <g data-label="twentySixFloor">
            <g v-for="(item, index) in twentySixFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="140"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
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
          <g data-label="twentyFiveFloor">
            <g v-for="(item, index) in twentyFiveFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="180"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
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
          <g data-label="twentyThreeFloor">
            <g v-for="(item, index) in twentyThreeFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="220"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
                :x="getXValue(125, index)"
                y="245"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="twentyTwoFloor">
            <g v-for="(item, index) in twentyTwoFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="260"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
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
          <g data-label="twentyOneFloor">
            <g v-for="(item, index) in twentyOneFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="300"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
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
          <g data-label="twentyFloor">
            <g v-for="(item, index) in twentyFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="340"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="365"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="nineTenFloor">
            <g v-for="(item, index) in nineTenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="380"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="405"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="eighTenFloor">
            <g v-for="(item, index) in eighTenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="420"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="445"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="sevenTenFloor">
            <g v-for="(item, index) in sevenTenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="460"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="485"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="sixTenFloor">
            <g v-for="(item, index) in sixTenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="500"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="525"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="fifthTenFloor">
            <g v-for="(item, index) in fifthTenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="540"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="565"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="twelveFloor">
            <g v-for="(item, index) in twelveFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="580"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="605"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="elevenFloor">
            <g v-for="(item, index) in elevenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="620"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="645"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="tenFloor">
            <g v-for="(item, index) in tenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="660"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="685"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="nineFloor">
            <g v-for="(item, index) in nineFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="700"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="725"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="eightFloor">
            <g v-for="(item, index) in eightFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="740"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="765"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="sevenFloor">
            <g v-for="(item, index) in sevenFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="780"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="805"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="sixFloor">
            <g v-for="(item, index) in sixFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="820"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="845"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g data-label="fiveFloor">
            <g v-for="(item, index) in fiveFloor" :key="index">
              <rect
                :x="getXValue(100, index)"
                y="860"
                width="80"
                height="40"
                :class="[
                  'unit',
                  item.unit,
                  item.availability,
                  checkRoom(item.room),
                ]"
              ></rect>
              <text
                :class="['unit', item.unit, item.availability]"
                :x="getXValue(125, index)"
                y="885"
              >
                {{ item.unit }}
              </text>
            </g>
          </g>
          <g class="legend">
            <text
              class="legend"
              x="755"
              y="940"
              style="font-size: 30px; font-weight: 800; font-family: fangsong"
            >
              LEGEND
            </text>
            <rect
              x="440"
              y="960"
              width="200"
              height="40"
              class="unit Studio"
            ></rect>
            <rect
              x="440"
              y="1000"
              width="200"
              height="40"
              class="unit onebr"
            ></rect>
            <rect
              x="440"
              y="1040"
              width="200"
              height="40"
              class="unit twobr"
            ></rect>
            <rect
              x="440"
              y="1080"
              width="200"
              height="40"
              class="unit legend hayat"
            ></rect>
            <text x="480" y="986">{{ totalStudio }} - Studio</text>
            <text x="480" y="1026">{{ totalOneBR }} - 1 Bedroom</text>
            <text x="480" y="1066">{{ totalTwoBR }} - 2 Bedroom</text>
            <text x="480" y="1106" class="fill-white">
              {{ totalHayat }} - Hayat
            </text>

            <rect
              x="720"
              y="960"
              width="200"
              height="40"
              class="unit available"
            ></rect>
            <rect
              x="720"
              y="1000"
              width="200"
              height="40"
              class="unit Reserved"
            ></rect>
            <rect
              x="720"
              y="1040"
              width="200"
              height="40"
              class="unit legend blocked"
            ></rect>
            <rect
              x="720"
              y="1080"
              width="200"
              height="40"
              class="unit Sold"
            ></rect>
            <text x="755" y="986">{{ totalAvailable }} - Available</text>
            <text x="755" y="1026">{{ totalReserved }} - Reserved</text>
            <text x="755" y="1066" class="fill-white">
              {{ totalBlocked }} - Blocked
            </text>
            <text x="755" y="1106" class="fill-white">
              {{ totalSold }} - Sold
            </text>

            <rect
              x="1020"
              y="960"
              width="360"
              height="40"
              class="unit top-city"
            ></rect>
            <rect
              x="1020"
              y="1000"
              width="360"
              height="40"
              class="unit top-mcs"
            ></rect>
            <rect
              x="1020"
              y="1040"
              width="360"
              height="40"
              class="unit top-mountain"
            ></rect>
            <rect
              x="1020"
              y="1080"
              width="360"
              height="40"
              class="unit top-mountain-city"
            ></rect>
            <rect
              x="1020"
              y="1120"
              width="360"
              height="40"
              class="unit top-mcsc"
            ></rect>
            <text x="1055" y="986">{{ totalCitySea }} - City / Sea</text>
            <text x="1055" y="1026" class="fill-white">
              {{ totalMountainCitySea }} - Mountain / City / Sea
            </text>
            <text x="1055" y="1066" class="fill-white">
              {{ totalMountain }} - Mountain
            </text>
            <text x="1055" y="1106">
              {{ totalMountainCityLights }} - Mountain / Citylights Tower
            </text>
            <text x="1055" y="1146" class="fill-white">
              {{ totalCityLightsMountainCitySea }} - Citylights Tower / Mountain
              / City / Sea
            </text>
          </g>
        </svg>
      </div>
    </div>
    <div v-else>
      <div class="loader-message">Accessing Inventory Project 2 ...</div>
    </div>
  </main>
</template>

<script>
import { project2Data } from "../../services/lemendaApiServices";

export default {
  data() {
    return {
      floorplan: [],
      twentySevenFloor: [],
      twentySixFloor: [],
      twentyFiveFloor: [],
      twentyThreeFloor: [],
      twentyTwoFloor: [],
      twentyOneFloor: [],
      twentyFloor: [],
      nineTenFloor: [],
      eighTenFloor: [],
      sevenTenFloor: [],
      sixTenFloor: [],
      fifthTenFloor: [],
      twelveFloor: [],
      elevenFloor: [],
      tenFloor: [],
      nineFloor: [],
      eightFloor: [],
      sevenFloor: [],
      sixFloor: [],
      fiveFloor: [],
      totalHayat: "0",
      totalAvailable: "0",
      totalReserved: "0",
      totalBlocked: "0",
      totalSold: "0",
      totalStudio: "0",
      totalOneBR: "0",
      totalTwoBR: "0",
      totalCitySea: "0",
      totalMountainCitySea: "0",
      totalMountain: "0",
      totalMountainCityLights: "0",
      totalCityLightsMountainCitySea: "0",
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
        this.floorplan = await project2Data();
        this.twentySevenFloor = this.floorplan.filter(
          (item) => item.floor === "27th"
        );
        this.twentySixFloor = this.floorplan.filter(
          (item) => item.floor === "26th"
        );
        this.twentyFiveFloor = this.floorplan.filter(
          (item) => item.floor === "25th"
        );
        this.twentyThreeFloor = this.floorplan.filter(
          (item) => item.floor === "23rd"
        );
        this.twentyTwoFloor = this.floorplan.filter(
          (item) => item.floor === "22nd"
        );
        this.twentyOneFloor = this.floorplan.filter(
          (item) => item.floor === "21st"
        );
        this.twentyFloor = this.floorplan.filter(
          (item) => item.floor === "20th"
        );
        this.nineTenFloor = this.floorplan.filter(
          (item) => item.floor === "19th"
        );
        this.eighTenFloor = this.floorplan.filter(
          (item) => item.floor === "18th"
        );
        this.sevenTenFloor = this.floorplan.filter(
          (item) => item.floor === "17th"
        );
        this.sixTenFloor = this.floorplan.filter(
          (item) => item.floor === "16th"
        );
        this.fifthTenFloor = this.floorplan.filter(
          (item) => item.floor === "15th"
        );
        this.twelveFloor = this.floorplan.filter(
          (item) => item.floor === "12th"
        );
        this.elevenFloor = this.floorplan.filter(
          (item) => item.floor === "11th"
        );
        this.tenFloor = this.floorplan.filter((item) => item.floor === "10th");
        this.nineFloor = this.floorplan.filter((item) => item.floor === "9th");
        this.eightFloor = this.floorplan.filter((item) => item.floor === "8th");
        this.sevenFloor = this.floorplan.filter((item) => item.floor === "7th");
        this.sixFloor = this.floorplan.filter((item) => item.floor === "6th");
        this.fiveFloor = this.floorplan.filter((item) => item.floor === "5th");

        this.totalSold = this.floorplan.filter(
          (item) => item.availability === "Sold"
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
        this.totalStudio = this.floorplan.filter(
          (item) => item.room === "Studio"
        ).length;
        this.totalOneBR = this.floorplan.filter(
          (item) => item.room === "01 BR"
        ).length;
        this.totalTwoBR = this.floorplan.filter(
          (item) => item.room === "02 BR"
        ).length;
        this.totalHayat = this.floorplan.filter(
          (item) => item.room === "Hayat"
        ).length;
        this.totalCitySea = this.floorplan.filter(
          (item) => item.view === "Sea"
        ).length;
        this.totalMountainCitySea = this.floorplan.filter(
          (item) => item.view === "City-Mountain-Sea"
        ).length;
        this.totalMountain = this.floorplan.filter(
          (item) => item.view === "Mountain"
        ).length;
        this.totalMountainCityLights = this.floorplan.filter(
          (item) => item.view === "City-Mountain"
        ).length;
        this.totalCityLightsMountainCitySea = this.floorplan.filter(
          (item) => item.view === "City-Mountain-City-Sea"
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
    checkRoom(value) {
      if (value === "01 BR") return "onebr";
      else if (value === "02 BR") return "twobr";
      else return value;
    },
    getUnitStatus(value) {
      return this.floorplan
        .filter((data) => data.unit === value)
        .map((data) => data.availability);
    },
  },
};
</script>

<style>
.fill-white {
  fill: #fff;
}
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
svg.inventory-nivel rect.unit {
  fill: #fff;
  stroke: #dddddd;
  stroke-width: 1px;
}
svg.inventory-nivel rect.legend {
  fill: #fff;
  stroke: #709a8b;
}
svg.inventory-nivel text.legend {
  font-weight: 400;
}
svg.inventory-nivel text.legend.reserved,
svg.inventory-nivel text.legend.hayat,
svg.inventory-nivel text.legend.blocked,
svg.inventory-nivel text.legend.sold {
  fill: #fff;
}
svg.inventory-nivel text.legend.available,
svg.inventory-nivel text.legend.reserved {
  fill: #000;
}

svg.inventory-nivel rect.legend.hayat,
svg.inventory-nivel rect.unit.hayat {
  fill: #c97747;
  stroke: #c97747;
}

svg.inventory-nivel rect.unit.Studio,
svg.inventory-nivel rect.legend.studio {
  fill: #f4b084;
  stroke: #ccc;
}
svg.inventory-nivel text.Studio {
  fill: #000;
}

svg.inventory-nivel rect.legend.onebr,
svg.inventory-nivel rect.onebr {
  fill: #ddebf7;
  stroke: #ccc;
}

svg.inventory-nivel rect.legend.twobr,
svg.inventory-nivel rect.twobr {
  fill: #bf8f00;
  stroke: #999;
}

svg.inventory-nivel rect.legend.reserved {
  fill: yellow;
  stroke: #999;
}

svg.inventory-nivel rect.legend.available {
  fill: #fff;
  stroke: #999;
}
svg.inventory-nivel rect.legend.blocked,
svg.inventory-nivel rect.unit.Blocked {
  fill: #06f;
  stroke: #999;
}
svg.inventory-nivel text.Blocked {
  fill: #fff;
}
svg.inventory-nivel rect.legend.sold {
  fill: red;
  stroke: #000;
}
svg.inventory-nivel rect.unit.Sold {
  fill: red;
  stroke: #000;
}
svg.inventory-nivel text.unit.Sold,
svg.inventory-nivel text.unit.Hayat,
svg.inventory-nivel text.unit.Blocked {
  fill: #fff;
}
svg.inventory-nivel text.unit.Reserved {
  fill: #000;
}
svg.inventory-nivel rect.unit.Hayat {
  fill: #c97747;
  stroke: #999;
}
svg.inventory-nivel rect.unit.Reserved {
  fill: yellow;
  stroke: #999;
}
svg.inventory-nivel rect.side-label {
  fill: #000;
  stroke: #999;
}
svg.inventory-nivel text.side-label {
  fill: #fff;
}
svg.inventory-nivel rect.top-city,
svg.inventory-nivel rect.legend.city {
  fill: #02e6f2;
  stroke: #999;
}
svg.inventory-nivel text.top-city,
svg.inventory-nivel text.legend.city {
  fill: #000;
}
svg.inventory-nivel rect.top-mountain-city,
svg.inventory-nivel rect.legend.mountain-city {
  fill: #d3de00;
  stroke: #999;
}
svg.inventory-nivel rect.top-mountain,
svg.inventory-nivel rect.legend.mountain {
  fill: #057707;
  stroke: #999;
}
svg.inventory-nivel rect.top-mcs,
svg.inventory-nivel rect.legend.mcs {
  fill: #8e7c05;
  stroke: #999;
}
svg.inventory-nivel rect.top-mcsc,
svg.inventory-nivel rect.legend.mcsc {
  fill: #9268c6;
  stroke: #999;
}
svg.inventory-nivel text.top-text {
  fill: #fff;
}
svg.inventory-nivel rect {
  stroke: #000 !important;
}
svg.inventory-nivel text {
  user-select: none;
  pointer-events: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
