<script setup>
import LemendaInventoryFloor from "../../components/LemendaInventoryFloor.vue";
</script>
<template>
  <div>
    <div class="floorplan-wrapper">
      <svg viewBox="-150 50 940 430" class="floorplan">
        <g>
          <!-- 301 -->
          <path
            d="M 35 150 L 35 130 L 90 130 L 90 200 L 50 200 L 50 150 L 35 150"
            :class="['floorplan', 'unit', getUnitStatus('501')]"
          ></path>
          <text x="55" y="165" :class="getUnitStatus('501')">UNIT-501</text>
          <text x="61" y="175" :class="getUnitStatus('501')">01 BR</text>
          <!-- 302 -->
          <rect
            x="90"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('502')]"
          ></rect>
          <text x="95" y="165" :class="getUnitStatus('502')">UNIT-502</text>
          <text x="101" y="175" :class="getUnitStatus('502')">01 BR</text>
          <!-- 303 -->
          <rect
            x="130"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('503')]"
          ></rect>
          <text x="135" y="165" :class="getUnitStatus('503')">UNIT-503</text>
          <text x="141" y="175" :class="getUnitStatus('503')">01 BR</text>
          <!-- 304 -->
          <rect
            x="170"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('504')]"
          ></rect>
          <text x="175" y="165" :class="getUnitStatus('504')">UNIT-504</text>
          <text x="181" y="175" :class="getUnitStatus('504')">01 BR</text>
          <!-- 305 -->
          <rect
            x="210"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('505')]"
          ></rect>
          <text x="215" y="165" :class="getUnitStatus('505')">UNIT-505</text>
          <text x="221" y="175" :class="getUnitStatus('505')">01 BR</text>
          <!-- 306 -->
          <rect
            x="250"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('506')]"
          ></rect>
          <text x="255" y="165" :class="getUnitStatus('506')">UNIT-506</text>
          <text x="261" y="175" :class="getUnitStatus('506')">01 BR</text>
          <!-- 307 -->
          <path
            d="M 290 120 L 315 120 L 315 130 L 330 130 L 330 150 L 350 175 L 330 200 L 290 200"
            :class="['floorplan', 'unit', getUnitStatus('507')]"
          ></path>
          <text x="295" y="165" :class="getUnitStatus('507')">UNIT-507</text>
          <text x="301" y="175" :class="getUnitStatus('507')">01 BR</text>
        </g>
        <g>
          <!-- 308 -->
          <rect
            x="50"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('508')]"
          ></rect>
          <text x="55" y="265" :class="getUnitStatus('508')">UNIT-508</text>
          <text x="61" y="275" :class="getUnitStatus('508')">01 BR</text>
          <!-- 309 -->
          <rect
            x="90"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('509')]"
          ></rect>
          <text x="95" y="265" :class="getUnitStatus('509')">UNIT-509</text>
          <text x="101" y="275" :class="getUnitStatus('509')">01 BR</text>
          <!-- 310 -->
          <rect
            x="130"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('510')]"
          ></rect>
          <text x="135" y="265" :class="getUnitStatus('510')">UNIT-510</text>
          <text x="141" y="275" :class="getUnitStatus('510')">01 BR</text>
          <!-- 311 -->
          <rect
            x="170"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('511')]"
          ></rect>
          <text x="175" y="250" :class="getUnitStatus('511')">UNIT-511</text>
          <text x="181" y="260" :class="getUnitStatus('511')">Studio</text>
          <!-- 312 -->
          <rect
            x="210"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('512')]"
          ></rect>
          <text x="215" y="250" :class="getUnitStatus('512')">UNIT-512</text>
          <text x="221" y="260" :class="getUnitStatus('512')">Studio</text>
          <!-- 313 -->
          <rect
            x="250"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('513')]"
          ></rect>
          <text x="255" y="250" :class="getUnitStatus('513')">UNIT-513</text>
          <text x="261" y="260" :class="getUnitStatus('513')">Studio</text>
          <!-- 314 -->
          <path
            d="M 290 220 L 340 220 L 358 200 L 386 228 L 350 263 L 350 280 L 290 280"
            :class="['floorplan', 'unit', getUnitStatus('514')]"
          ></path>
          <text x="305" y="250" :class="getUnitStatus('514')">UNIT-514</text>
          <text x="311" y="260" :class="getUnitStatus('514')">02 BR</text>
        </g>
        <g style="transform: rotate(45deg) translate(334px, -162px)">
          <path d="M 60 50 L 80 50 L 80 20 L 70 20 L 60 30 L 60 50"></path>
          <!-- 315 -->
          <path
            d="M 80 50 L 100 50 L 100 100 L 140 100 L 140 20 L 80 20"
            :class="['floorplan', 'unit', getUnitStatus('515')]"
          ></path>
          <text x="105" y="55" :class="getUnitStatus('515')">UNIT-515</text>
          <text x="114" y="65" :class="getUnitStatus('515')">01 BR</text>
          <!-- 316 -->
          <path
            d="M 140 2 L 180 2 L 180 100 L 140 100 L 140 2"
            :class="['floorplan', 'unit', getUnitStatus('516')]"
          ></path>
          <text x="145" y="55" :class="getUnitStatus('516')">UNIT-516</text>
          <text x="154" y="65" :class="getUnitStatus('516')">01 BR</text>
          <!-- 317 -->
          <path
            d="M 180 2 L 220 2 L 220 80 L 200 80 L 200 100 L 180 100"
            :class="['floorplan', 'unit', getUnitStatus('517')]"
          ></path>
          <text x="185" y="40" :class="getUnitStatus('517')">UNIT-517</text>
          <text x="194" y="50" :class="getUnitStatus('517')">01 BR</text>
          <!-- 318 -->
          <path
            d="M 220 2 L 260 2 L 260 70 L 220 70"
            :class="['floorplan', 'unit', getUnitStatus('518')]"
          ></path>
          <text x="225" y="40" :class="getUnitStatus('518')">UNIT-518</text>
          <text x="234" y="50" :class="getUnitStatus('518')">01 BR</text>
          <!-- 319 -->
          <path
            d="M 260 2 L 320 2 L 320 70 L 260 70"
            :class="['floorplan', 'unit', getUnitStatus('519')]"
          ></path>
          <text x="275" y="40" :class="getUnitStatus('519')">UNIT-519</text>
          <text x="284" y="50" :class="getUnitStatus('519')">02 BR</text>
          <!-- 320 -->
          <path
            d="M 320 2 L 350 2 L 350 20 L 390 20 L 390 70 L 375 70 L 375 80 L 320 80 L 320 2"
            :class="['floorplan', 'unit', getUnitStatus('520')]"
          ></path>
          <text x="335" y="40" :class="getUnitStatus('520')">UNIT-520</text>
          <text x="344" y="50" :class="getUnitStatus('520')">02 BR</text>

          <path d="M 210 80 L 320 80"></path>
        </g>
        <!-- ETC -->
        <path d="M 50 200 L 50 150 L 15 150 L 25 235 L 50 235" class="b"></path>
        <path
          d="M 25 235 L 33 310 L 50 310 M 27 236 L 35 308 L 50 308 M 50 308 50 332 L 110 332 L 110 310 M 52 310 52 330 L 108 330 L 108 310"
        ></path>
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

        <g style="transform: translate(608px, 376px)">
          <rect
            x="0"
            y="0"
            width="15"
            height="10"
            style="transform: rotate(45deg)"
          ></rect>
        </g>
        <path
          d="M 603 401 L 611 393 M 601 399 L 609 391 M 599 397 L 607 389 M 597 395 L 605 387 M 595 393 L 603 385 M 593 391 L 601 383"
        ></path>
        <path
          d="M 618 387 L 628 377 M 616 385 L 626 375 M 614 383 L 624 373 M 612 381 L 622 371 M 610 379 L 620 369 M 608 377 L 618 367"
        ></path>
        <path
          d="M 611 394 L 620 403 M 613 392 L 622 401 M 615 390 L 624 399 M 617 388 L 626 397 M 619 386 L 628 395"
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
            5TH FLOOR - PROJECT 1
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
        (data) => data.floor === "5th" && data.availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) => data.floor === "5th" && data.availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) => data.floor === "5th" && data.availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) => data.floor === "5th" && data.availability === "Blocked"
      ).length;
      this.hayat = this.floorData.filter(
        (data) => data.floor === "5th" && data.availability === "Hayat"
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
