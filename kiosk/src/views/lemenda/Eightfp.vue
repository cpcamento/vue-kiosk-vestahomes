<script setup>
import LemendaInventoryFloor from "../../components/LemendaInventoryFloor.vue";
</script>
<template>
  <div>
    <div class="floorplan-wrapper">
      <svg viewBox="-150 50 940 430" class="floorplan">
        <g>
          <!-- 801 -->
          <path
            d="M 35 150 L 35 130 L 90 130 L 90 200 L 50 200 L 50 150 L 35 150"
            :class="['floorplan', 'unit', getUnitStatus('801')]"
          ></path>
          <text x="56" y="165" :class="getUnitStatus('801')">UNIT-801</text>
          <text x="62" y="175" :class="getUnitStatus('801')">01 BR</text>
          <!-- 802 -->
          <rect
            x="90"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('802')]"
          ></rect>
          <text x="95" y="165" :class="getUnitStatus('802')">UNIT-802</text>
          <text x="102" y="175" :class="getUnitStatus('802')">01 BR</text>
          <!-- 803 -->
          <rect
            x="130"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('803')]"
          ></rect>
          <text x="135" y="165" :class="getUnitStatus('803')">UNIT-803</text>
          <text x="142" y="175" :class="getUnitStatus('803')">01 BR</text>
          <!-- 804 -->
          <rect
            x="170"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('804')]"
          ></rect>
          <text x="175" y="165" :class="getUnitStatus('804')">UNIT-804</text>
          <text x="181" y="175" :class="getUnitStatus('804')">01 BR</text>
          <!-- 805 -->
          <rect
            x="210"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('805')]"
          ></rect>
          <text x="215" y="165" :class="getUnitStatus('805')">UNIT-805</text>
          <text x="221" y="175" :class="getUnitStatus('805')">01 BR</text>
          <!-- 806 -->
          <rect
            x="250"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('806')]"
          ></rect>
          <text x="255" y="165" :class="getUnitStatus('806')">UNIT-806</text>
          <text x="261" y="175" :class="getUnitStatus('806')">01 BR</text>
          <!-- 807 -->
          <path
            d="M 290 120 L 315 120 L 315 130 L 330 130 L 330 150 L 350 175 L 330 200 L 290 200"
            :class="['floorplan', 'unit', getUnitStatus('807')]"
          ></path>
          <text x="295" y="165" :class="getUnitStatus('807')">UNIT-807</text>
          <text x="301" y="175" :class="getUnitStatus('807')">01 BR</text>
        </g>
        <g>
          <!-- 808 -->
          <rect
            x="50"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('808')]"
          ></rect>
          <text x="55" y="265" :class="getUnitStatus('808')">UNIT-808</text>
          <text x="61" y="275" :class="getUnitStatus('808')">01 BR</text>
          <!-- 809 -->
          <rect
            x="90"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('809')]"
          ></rect>
          <text x="95" y="265" :class="getUnitStatus('809')">UNIT-809</text>
          <text x="101" y="275" :class="getUnitStatus('809')">01 BR</text>
          <!-- 810 -->
          <rect
            x="130"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('810')]"
          ></rect>
          <text x="135" y="265" :class="getUnitStatus('810')">UNIT-810</text>
          <text x="141" y="275" :class="getUnitStatus('810')">01 BR</text>
          <!-- 811 -->
          <rect
            x="170"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('811')]"
          ></rect>
          <text x="175" y="250" :class="getUnitStatus('811')">UNIT-811</text>
          <text x="181" y="260" :class="getUnitStatus('811')">Studio</text>
          <!-- 812 -->
          <rect
            x="210"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('812')]"
          ></rect>
          <text x="215" y="250" :class="getUnitStatus('812')">UNIT-812</text>
          <text x="221" y="260" :class="getUnitStatus('812')">Studio</text>
          <!-- 813 -->
          <rect
            x="250"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('813')]"
          ></rect>
          <text x="255" y="250" :class="getUnitStatus('813')">UNIT-813</text>
          <text x="261" y="260" :class="getUnitStatus('813')">Studio</text>
          <!-- 814 -->
          <path
            d="M 290 220 L 340 220 L 358 200 L 386 228 L 350 263 L 350 280 L 290 280"
            :class="['floorplan', 'unit', getUnitStatus('814')]"
          ></path>
          <text x="305" y="250" :class="getUnitStatus('814')">UNIT-814</text>
          <text x="311" y="260" :class="getUnitStatus('814')">02 BR</text>
        </g>
        <g style="transform: rotate(45deg) translate(334px, -162px)">
          <path d="M 60 50 L 80 50 L 80 20 L 70 20 L 60 30 L 60 50"></path>
          <!-- 815 -->
          <path
            d="M 80 50 L 100 50 L 100 100 L 140 100 L 140 20 L 80 20"
            :class="['floorplan', 'unit', getUnitStatus('815')]"
          ></path>
          <text x="105" y="55" :class="getUnitStatus('815')">UNIT-815</text>
          <text x="114" y="65" :class="getUnitStatus('815')">01 BR</text>
          <!-- 816 -->
          <path
            d="M 140 2 L 180 2 L 180 85 L 160 85 L 160 100 L 140 100 L 140 2"
            :class="['floorplan', 'unit', getUnitStatus('816')]"
          ></path>
          <text x="145" y="55" :class="getUnitStatus('816')">UNIT-816</text>
          <text x="151" y="65" :class="getUnitStatus('816')">01 BR</text>
          <path d="M 180 70 L 389 70 L 389 20" class="b"></path>
        </g>
        <!-- ETC -->
        <path d="M 50 200 L 50 150 L 15 150 L 25 235 L 50 235" class="b"></path>
        <path
          d="M 330 130 L 330 115 L 300 85 M 330 115 320 115 L 295 90 L 315 68 L 636 386 L 611 412"
          class="b"
        ></path>
        <path
          d="M 438 190 L 424 205 L 393 175 M 416 197 L 429 182"
          class="b"
        ></path>
        <path
          d="M 403 183 L 416 168 M 400 180 L 413 165 M 397 177 L 409 163 M 393 175 L 407 160"
        ></path>

        <path
          d="M 322 107 L 338 90 M 320 105 L 336 88 M 318 103 L 334 86 M 316 101 L 332 84 M 314 99 L 330 82 M 312 97 L 328 80 M 310 95 L 326 78"
        ></path>
        <path
          d="M 355 107 L 342 122 L 346 126 M 368 120 L 354 135 M 350 130 L 359 139 M 381 133 L 367 148 M 363 143 L 372 152 M 394 146 L 380 161 M 376 156 L 385 165 "
          class="b"
        ></path>

        <path
          d="M 17 160 L 50 160 M 17 162 L 50 162 M 17 170 L 50 170 M 17 172 L 50 172 M 35 174 L 35 190 M 37 174 L 37 190 M 17 174 L 50 174 M 18 176 L 35 176 M 19 178 L 35 178 M 19 180 L 35 180 M 19 182 L 35 182 M 20 184 L 35 184 M 20 186 L 35 186 M 20 188 L 35 188 M 20 190 L 50 190 M 37 188 L 50 188 M 37 186 L 50 186 M 37 184 L 50 184 M 37 182 L 50 182 M 37 180 L 50 180 M 37 178 L 50 178 M 37 176 L 50 176"
        ></path>
        <g style="transform: translate(356px, 205px)">
          <text
            x="10"
            y="10"
            style="
              fill: #fff;
              font-size: 5px;
              font-family: Tahoma;
              transform: rotate(-44deg);
            "
          >
            EE ROOM
          </text>
        </g>
        <g style="transform: translateY(42px)">
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
            8TH FLOOR - PROJECT 1
          </text>
          <rect
            x="20"
            y="390"
            width="40"
            height="30"
            rx="2"
            class="counter available"
          ></rect>
          <text x="22" y="400" class="counter available">AVAILABLE</text>
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

          <rect
            x="220"
            y="390"
            width="40"
            height="30"
            rx="2"
            class="counter hayat"
          ></rect>
          <text x="232" y="400" class="counter">HAYAT</text>
          <text x="232" y="415" class="counter big">
            {{ formatNumber(hayat) }}
          </text>
        </g>
      </svg>

      <LemendaInventoryFloor />
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
        (data) => data.floor === "8th" && data.availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) => data.floor === "8th" && data.availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) => data.floor === "8th" && data.availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) => data.floor === "8th" && data.availability === "Blocked"
      ).length;
      this.hayat = this.floorData.filter(
        (data) => data.floor === "8th" && data.availability === "Hayat"
      ).length;
    } catch (error) {
      console.log("Error" + error);
    }
  },
  methods: {
    getUnitStatus(value) {
      return this.floorData
        .filter((data) => data.unit === value)
        .map((data) => data.availability);
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
