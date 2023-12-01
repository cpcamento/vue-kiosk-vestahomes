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
            d="M 55 180 L 60 260 L 83 260 L 83 297 L 135 297 M 135 297 L 135 297 L 198 297 L 198 295 L 255 295 L 255 285 L 390 285 L 395 280 L 427 310 L 483 327 L 570 415 L 656 362 L 400 30 M 190 150 L 360 150 L 325 80 L 345 65 L 350 74 L 328 40 L 382 6 L 401 31"
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
        </g>
        <rect
          x="85"
          y="95"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('31')]"
        >
          <title></title>
        </rect>
        <rect
          x="110"
          y="95"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('30')]"
        >
          <title></title>
        </rect>

        <rect
          x="140"
          y="95"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('29')]"
        >
          <title></title>
        </rect>
        <rect
          x="165"
          y="95"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('28')]"
        >
          <title></title>
        </rect>

        <rect
          x="85"
          y="240"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('33')]"
        >
          <title></title>
        </rect>
        <rect
          x="110"
          y="240"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('34')]"
        >
          <title></title>
        </rect>

        <rect
          x="140"
          y="240"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('35')]"
        >
          <title></title>
        </rect>
        <rect
          x="165"
          y="240"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('36')]"
        >
          <title></title>
        </rect>

        <rect
          x="198"
          y="237"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('37')]"
        >
          <title></title>
        </rect>
        <rect
          x="223"
          y="237"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('38')]"
        >
          <title></title>
        </rect>

        <rect
          x="255"
          y="227"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('39')]"
        >
          <title></title>
        </rect>
        <rect
          x="280"
          y="227"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('40')]"
        >
          <title></title>
        </rect>

        <rect
          x="310"
          y="227"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('41')]"
        >
          <title></title>
        </rect>
        <rect
          x="360"
          y="227"
          width="25"
          height="55"
          :class="['floorplan', 'unit', getParkingStatus('42')]"
        >
          <title></title>
        </rect>

        <g style="transform: translate(386px, -316px) rotate(52deg)">
          <rect
            x="395"
            y="227"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('27')]"
          >
            <title></title>
          </rect>
          <rect
            x="430"
            y="227"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('26')]"
          >
            <title></title>
          </rect>
          <rect
            x="455"
            y="227"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('25')]"
          >
            <title></title>
          </rect>

          <rect
            x="490"
            y="207"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('24')]"
          >
            <title></title>
          </rect>
          <rect
            x="525"
            y="207"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('23')]"
          >
            <title></title>
          </rect>
          <rect
            x="550"
            y="207"
            width="25"
            height="55"
            :class="['floorplan', 'unit', getParkingStatus('22')]"
          >
            <title></title>
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
            BASEMENT 2 - PROJECT 1
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
        <text x="95" y="127" :class="getParkingStatus('31')">31</text>
        <text x="119" y="127" :class="getParkingStatus('30')">30</text>
        `
        <text x="150" y="127" :class="getParkingStatus('29')">29</text>
        <text x="174" y="127" :class="getParkingStatus('28')">28</text>
        <text x="94" y="272" :class="getParkingStatus('33')">33</text>
        <text x="118" y="272" :class="getParkingStatus('34')">34</text>
        <text x="148" y="272" :class="getParkingStatus('35')">35</text>
        <text x="173" y="272" :class="getParkingStatus('36')">36</text>
        <text x="207" y="269" :class="getParkingStatus('37')">37</text>
        <text x="231" y="269" :class="getParkingStatus('38')">38</text>
        <text x="264" y="260" :class="getParkingStatus('39')">39</text>
        <text x="288" y="260" :class="getParkingStatus('40')">40</text>
        <text x="319" y="260" :class="getParkingStatus('41')">41</text>
        <text x="369" y="260" :class="getParkingStatus('42')">42</text>
        <text x="421" y="172" style="font-size: 14px">👨‍🦽</text>
        <text x="436" y="162" :class="getParkingStatus('27')">27</text>
        <text x="454" y="190" :class="getParkingStatus('26')">26</text>
        <text x="468" y="211" :class="getParkingStatus('25')">25</text>
        <text x="510" y="227" :class="getParkingStatus('24')">24</text>
        <text x="528" y="252" :class="getParkingStatus('23')">23</text>
        <text x="543" y="272" :class="getParkingStatus('22')">22</text>
        <text
          x="545"
          y="274"
          :class="getParkingStatus('22')"
          style="
            transform: translate(-62px, 414px) rotate(-38deg);
            font-size: 4px;
            letter-spacing: 2px;
          "
        >
          PENTHOUSE-1
        </text>
        <text
          x="545"
          y="274"
          :class="getParkingStatus('23')"
          style="
            transform: translate(-77px, 394px) rotate(-38deg);
            font-size: 4px;
            letter-spacing: 2px;
          "
        >
          PENTHOUSE-1
        </text>
        <text
          x="545"
          y="274"
          :class="getParkingStatus('25')"
          style="
            transform: translate(-136px, 351px) rotate(-38deg);
            font-size: 4px;
            letter-spacing: 2px;
          "
        >
          PENTHOUSE-2
        </text>
        <text
          x="545"
          y="274"
          :class="getParkingStatus('26')"
          style="
            transform: translate(-151px, 331px) rotate(-38deg);
            font-size: 4px;
            letter-spacing: 2px;
          "
        >
          PENTHOUSE-3
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
          data.basement_no === "Basement2" &&
          data.parking_availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) =>
          data.basement_no === "Basement2" &&
          data.parking_availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) =>
          data.basement_no === "Basement2" &&
          data.parking_availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) =>
          data.basement_no === "Basement2" &&
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
