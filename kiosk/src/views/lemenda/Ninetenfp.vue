<script setup>
import LemendaInventoryFloor from "../../components/LemendaInventoryFloor.vue";
</script>
<template>
  <div>
    <div class="floorplan-wrapper">
      <svg viewBox="-150 20 840 350" class="floorplan">
        <g class="gdown">
          <!-- 1901 -->
          <path
            d="M 35 150 L 35 130 L 90 130 L 90 200 L 50 200 L 50 150 L 35 150"
            :class="['floorplan', 'unit', getUnitStatus('1901')]"
          ></path>
          <text x="52" y="165" :class="getUnitStatus('1901')">UNIT-1901</text>
          <text x="62" y="175" :class="getUnitStatus('1901')">01 BR</text>
          <!-- 1902 -->
          <rect
            x="90"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('1902')]"
          ></rect>
          <text x="92" y="165" :class="getUnitStatus('1902')">UNIT-1902</text>
          <text x="102" y="175" :class="getUnitStatus('1902')">01 BR</text>
          <!-- 1903 -->
          <rect
            x="130"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('1903')]"
          ></rect>
          <text x="132" y="165" :class="getUnitStatus('1903')">UNIT-1903</text>
          <text x="142" y="175" :class="getUnitStatus('1903')">01 BR</text>
          <!-- 1904 -->
          <rect
            x="170"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1904')]"
          ></rect>
          <text x="172" y="165" :class="getUnitStatus('1904')">UNIT-1904</text>
          <text x="182" y="175" :class="getUnitStatus('1904')">01 BR</text>
          <!-- 1905 -->
          <rect
            x="210"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1905')]"
          ></rect>
          <text x="212" y="165" :class="getUnitStatus('1905')">UNIT-1905</text>
          <text x="222" y="175" :class="getUnitStatus('1905')">01 BR</text>
          <!-- 1906 -->
          <rect
            x="250"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1906')]"
          ></rect>
          <text x="252" y="165" :class="getUnitStatus('1906')">UNIT-1906</text>
          <text x="262" y="175" :class="getUnitStatus('1906')">01 BR</text>
          <!-- 1907 -->
          <path
            d="M 290 120 L 315 120 L 315 130 L 330 130 L 330 150 L 350 175 L 330 200 L 290 200"
            :class="['floorplan', 'unit', getUnitStatus('1907')]"
          ></path>
          <text x="295" y="165" :class="getUnitStatus('1907')">UNIT-1907</text>
          <text x="303" y="175" :class="getUnitStatus('1907')">01 BR</text>
        </g>
        <g class="gdown">
          <!-- 1908 -->
          <rect
            x="50"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1908')]"
          ></rect>
          <text x="52" y="265" :class="getUnitStatus('1908')">UNIT-1908</text>
          <text x="62" y="275" :class="getUnitStatus('1908')">01 BR</text>
          <!-- 1909 -->
          <rect
            x="90"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1909')]"
          ></rect>
          <text x="92" y="265" :class="getUnitStatus('1909')">UNIT-1909</text>
          <text x="102" y="275" :class="getUnitStatus('1909')">01 BR</text>
          <!-- 1910 -->
          <rect
            x="130"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1910')]"
          ></rect>
          <text x="132" y="265" :class="getUnitStatus('1910')">UNIT-1910</text>
          <text x="142" y="275" :class="getUnitStatus('1910')">01 BR</text>
          <!-- 1911 -->
          <rect
            x="170"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('1911')]"
          ></rect>
          <text x="173" y="250" :class="getUnitStatus('1911')">UNIT-1911</text>
          <text x="182" y="260" :class="getUnitStatus('1911')">Studio</text>
          <!-- 1912 -->
          <rect
            x="210"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('1912')]"
          ></rect>
          <text x="212" y="250" :class="getUnitStatus('1912')">UNIT-1912</text>
          <text x="222" y="260" :class="getUnitStatus('1912')">Studio</text>
          <!-- 1913 -->
          <rect
            x="250"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('1913')]"
          ></rect>
          <text x="252" y="250" :class="getUnitStatus('1913')">UNIT-1913</text>
          <text x="262" y="260" :class="getUnitStatus('1913')">Studio</text>
          <!-- 1914 -->
          <path
            d="M 290 220 L 340 220 L 358 200 L 386 228 L 350 263 L 350 280 L 290 280"
            :class="['floorplan', 'unit', getUnitStatus('1914')]"
          ></path>
          <text x="302" y="250" :class="getUnitStatus('1914')">UNIT-1914</text>
          <text x="312" y="260" :class="getUnitStatus('1914')">02 BR</text>
        </g>
        <g style="transform: rotate(45deg) translate(347px, -149px)">
          <path d="M 60 50 L 80 50 L 80 20 L 70 20 L 60 30 L 60 50"></path>
          <!-- 1915 -->
          <path
            d="M 80 50 L 100 50 L 100 100 L 140 100 L 140 20 L 80 20"
            :class="['floorplan', 'unit', getUnitStatus('1915')]"
          ></path>
          <text x="102" y="55" :class="getUnitStatus('1915')">UNIT-1915</text>
          <text x="113" y="65" :class="getUnitStatus('1915')">01 BR</text>
          <!-- 1916 -->
          <path
            d="M 110 -15 L 140 -15 L 180 -15 L 180 2 L 195 2 L 195 85 L 180 85 L 180 100 L 140 100 L 140 8 L 110 8"
            :class="['floorplan', 'unit', getUnitStatus('1916')]"
          ></path>
          <text x="151" y="55" :class="getUnitStatus('1916')">UNIT-1916</text>
          <text x="160" y="65" :class="getUnitStatus('1916')">02 BR</text>
        </g>
        <!-- ETC -->
        <g class="gdown">
          <path
            d="M 50 200 L 50 150 L 15 150 L 25 235 L 50 235"
            class="b"
          ></path>
          <path
            d="M 330 130 L 330 115 L 300 85 M 330 115 320 115 L 295 90 L 315 68 L 488 238"
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
        </g>
        <g style="transform: translate(355px, 223px)">
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
        <g style="transform: translateY(-309px)">
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
            19TH FLOOR - PROJECT 1
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
        (data) => data.floor === "19th" && data.availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) => data.floor === "19th" && data.availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) => data.floor === "19th" && data.availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) => data.floor === "19th" && data.availability === "Blocked"
      ).length;
      this.hayat = this.floorData.filter(
        (data) => data.floor === "19th" && data.availability === "Hayat"
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
