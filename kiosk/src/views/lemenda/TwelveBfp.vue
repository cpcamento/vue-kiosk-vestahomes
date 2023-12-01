<script setup>
import LemendaInventoryFloor from "../../components/LemendaInventoryFloor.vue";
</script>
<template>
  <div>
    <div class="floorplan-wrapper">
      <svg viewBox="-150 20 840 350" class="floorplan">
        <g class="gdown">
          <!-- 1201B -->
          <path
            d="M 35 150 L 35 130 L 90 130 L 90 200 L 50 200 L 50 150 L 35 150"
            :class="['floorplan', 'unit', getUnitStatus('1201B')]"
          ></path>
          <text
            x="54"
            y="165"
            style="font-size: 6px"
            :class="getUnitStatus('1201B')"
          >
            UNIT-1201B
          </text>
          <text x="62" y="175" :class="getUnitStatus('1201B')">01 BR</text>
          <!-- 1202B -->
          <rect
            x="90"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('1202B')]"
          ></rect>
          <text
            x="94"
            y="165"
            style="font-size: 6px"
            :class="getUnitStatus('1202B')"
          >
            UNIT-1202B
          </text>
          <text x="102" y="175" :class="getUnitStatus('1202B')">01 BR</text>
          <!-- 1203B -->
          <rect
            x="130"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('1203B')]"
          ></rect>
          <text
            x="134"
            y="165"
            style="font-size: 6px"
            :class="getUnitStatus('1203B')"
          >
            UNIT-1203B
          </text>
          <text x="142" y="175" :class="getUnitStatus('1203B')">01 BR</text>
          <!-- 1204B -->
          <rect
            x="170"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1204B')]"
          ></rect>
          <text
            x="174"
            y="165"
            style="font-size: 6px"
            :class="getUnitStatus('1204B')"
          >
            UNIT-1204B
          </text>
          <text x="182" y="175" :class="getUnitStatus('1204B')">01 BR</text>
          <!-- 1205B -->
          <rect
            x="210"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1205B')]"
          ></rect>
          <text
            x="215"
            y="165"
            style="font-size: 6px"
            :class="getUnitStatus('1205B')"
          >
            UNIT-1205B
          </text>
          <text x="222" y="175" :class="getUnitStatus('1205B')">01 BR</text>
          <!-- 1206B -->
          <rect
            x="250"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1206B')]"
          ></rect>
          <text
            x="255"
            y="165"
            style="font-size: 6px"
            :class="getUnitStatus('1206B')"
          >
            UNIT-1206B
          </text>
          <text x="262" y="175" :class="getUnitStatus('1206B')">01 BR</text>
          <!-- 1207B -->
          <path
            d="M 290 120 L 315 120 L 315 130 L 330 130 L 330 150 L 350 175 L 330 200 L 290 200"
            :class="['floorplan', 'unit', getUnitStatus('1207B')]"
          ></path>
          <text
            x="297"
            y="165"
            style="font-size: 6px"
            :class="getUnitStatus('1207B')"
          >
            UNIT-1207B
          </text>
          <text x="303" y="175" :class="getUnitStatus('1207B')">01 BR</text>
        </g>
        <g class="gdown">
          <!-- 1208B -->
          <rect
            x="50"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1208B')]"
          ></rect>
          <text
            x="55"
            y="265"
            style="font-size: 6px"
            :class="getUnitStatus('1208B')"
          >
            UNIT-1208B
          </text>
          <text x="62" y="275" :class="getUnitStatus('1208B')">01 BR</text>
          <!-- 1209B -->
          <rect
            x="90"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1209B')]"
          ></rect>
          <text
            x="95"
            y="265"
            style="font-size: 6px"
            :class="getUnitStatus('1209B')"
          >
            UNIT-1209B
          </text>
          <text x="102" y="275" :class="getUnitStatus('1209B')">01 BR</text>
          <!-- 1210B -->
          <rect
            x="130"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('1210B')]"
          ></rect>
          <text
            x="135"
            y="265"
            style="font-size: 6px"
            :class="getUnitStatus('1210B')"
          >
            UNIT-1210B
          </text>
          <text x="142" y="275" :class="getUnitStatus('1210B')">01 BR</text>
          <!-- 1211B -->
          <rect
            x="170"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('1211B')]"
          ></rect>
          <text
            x="176"
            y="250"
            style="font-size: 6px"
            :class="getUnitStatus('1211B')"
          >
            UNIT-1211B
          </text>
          <text
            x="182"
            y="260"
            style="font-size: 6px"
            :class="getUnitStatus('1211B')"
          >
            Studio
          </text>
          <!-- 1212B -->
          <rect
            x="210"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('1212B')]"
          ></rect>
          <text
            x="215"
            y="250"
            style="font-size: 6px"
            :class="getUnitStatus('1212B')"
          >
            UNIT-1212B
          </text>
          <text x="222" y="260" :class="getUnitStatus('1212B')">Studio</text>
          <!-- 1213B -->
          <rect
            x="250"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('1213B')]"
          ></rect>
          <text
            x="255"
            y="250"
            style="font-size: 6px"
            :class="getUnitStatus('1213B')"
          >
            UNIT-1213B
          </text>
          <text x="262" y="260" :class="getUnitStatus('1213B')">Studio</text>
          <!-- 1214B -->
          <path
            d="M 290 220 L 340 220 L 358 200 L 386 228 L 350 263 L 350 280 L 290 280"
            :class="['floorplan', 'unit', getUnitStatus('1214B')]"
          ></path>
          <text
            x="305"
            y="250"
            style="font-size: 6px"
            :class="getUnitStatus('1214B')"
          >
            UNIT-1214B
          </text>
          <text x="312" y="260" :class="getUnitStatus('1214B')">02 BR</text>
        </g>
        <g style="transform: rotate(45deg) translate(347px, -149px)">
          <path d="M 60 50 L 80 50 L 80 20 L 70 20 L 60 30 L 60 50"></path>
          <!-- 1215B -->
          <path
            d="M 80 50 L 100 50 L 100 100 L 140 100 L 140 20 L 80 20"
            :class="['floorplan', 'unit', getUnitStatus('1215B')]"
          ></path>
          <text
            x="106"
            y="55"
            style="font-size: 6px"
            :class="getUnitStatus('1215B')"
          >
            UNIT-1215B
          </text>
          <text x="113" y="65" :class="getUnitStatus('1215B')">01 BR</text>
          <!-- 1216B -->
          <path
            d="M 110 -15 L 140 -15 L 180 -15 L 180 2 L 195 2 L 195 85 L 180 85 L 180 100 L 140 100 L 140 8 L 110 8"
            :class="['floorplan', 'unit', getUnitStatus('1216B')]"
          ></path>
          <text
            x="153"
            y="55"
            style="font-size: 6px"
            :class="getUnitStatus('1216B')"
          >
            UNIT-1216B
          </text>
          <text x="160" y="65" :class="getUnitStatus('1216B')">02 BR</text>
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
            12TH-B FLOOR - PROJECT 1
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
        (data) => data.floor === "12th-B" && data.availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) => data.floor === "12th-B" && data.availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) => data.floor === "12th-B" && data.availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) => data.floor === "12th-B" && data.availability === "Blocked"
      ).length;
      this.hayat = this.floorData.filter(
        (data) => data.floor === "12th-B" && data.availability === "Hayat"
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
