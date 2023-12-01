<script setup>
import LemendaInventoryFloor from "../../components/LemendaInventoryFloor.vue";
</script>
<template>
  <div>
    <div class="floorplan-wrapper">
      <svg viewBox="-150 20 840 350" class="floorplan">
        <g class="gdown">
          <!-- 2001 -->
          <path
            d="M 35 150 L 35 130 L 90 130 L 90 200 L 50 200 L 50 150 L 35 150"
            :class="['floorplan', 'unit', getUnitStatus('2001')]"
          ></path>
          <text x="52" y="165" :class="getUnitStatus('2001')">UNIT-2001</text>
          <text x="62" y="175" :class="getUnitStatus('2001')">01 BR</text>
          <!-- 2002 -->
          <rect
            x="90"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('2002')]"
          ></rect>
          <text x="92" y="165" :class="getUnitStatus('2002')">UNIT-2002</text>
          <text x="102" y="175" :class="getUnitStatus('2002')">01 BR</text>
          <!-- 2003 -->
          <rect
            x="130"
            y="120"
            width="40"
            height="80"
            :class="['floorplan', 'unit', getUnitStatus('2003')]"
          ></rect>
          <text x="132" y="165" :class="getUnitStatus('2003')">UNIT-2003</text>
          <text x="142" y="175" :class="getUnitStatus('2003')">01 BR</text>
          <!-- 2004 -->
          <rect
            x="170"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('2004')]"
          ></rect>
          <text x="172" y="165" :class="getUnitStatus('2004')">UNIT-2004</text>
          <text x="182" y="175" :class="getUnitStatus('2004')">01 BR</text>
          <!-- 2005 -->
          <rect
            x="210"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('2005')]"
          ></rect>
          <text x="212" y="165" :class="getUnitStatus('2005')">UNIT-2005</text>
          <text x="222" y="175" :class="getUnitStatus('2005')">01 BR</text>
          <!-- 2006 -->
          <rect
            x="250"
            y="110"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('2006')]"
          ></rect>
          <text x="252" y="165" :class="getUnitStatus('2006')">UNIT-2006</text>
          <text x="262" y="175" :class="getUnitStatus('2006')">01 BR</text>
          <!-- 2007 -->
          <path
            d="M 290 120 L 315 120 L 315 130 L 330 130 L 330 150 L 350 175 L 330 200 L 290 200"
            :class="['floorplan', 'unit', getUnitStatus('2007')]"
          ></path>
          <text x="295" y="165" :class="getUnitStatus('2007')">UNIT-2007</text>
          <text x="303" y="175" :class="getUnitStatus('2007')">01 BR</text>
        </g>
        <g class="gdown">
          <!-- 2008 -->
          <rect
            x="50"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('2008')]"
          ></rect>
          <text x="52" y="265" :class="getUnitStatus('2008')">UNIT-2008</text>
          <text x="62" y="275" :class="getUnitStatus('2008')">01 BR</text>
          <!-- 2009 -->
          <rect
            x="90"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('2009')]"
          ></rect>
          <text x="92" y="265" :class="getUnitStatus('2009')">UNIT-2009</text>
          <text x="102" y="275" :class="getUnitStatus('2009')">01 BR</text>
          <!-- 2010 -->
          <rect
            x="130"
            y="220"
            width="40"
            height="90"
            :class="['floorplan', 'unit', getUnitStatus('2010')]"
          ></rect>
          <text x="132" y="265" :class="getUnitStatus('2010')">UNIT-2010</text>
          <text x="142" y="275" :class="getUnitStatus('2010')">01 BR</text>
          <!-- 2011 -->
          <rect
            x="170"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('2011')]"
          ></rect>
          <text x="172" y="250" :class="getUnitStatus('2011')">UNIT-2011</text>
          <text x="182" y="260" :class="getUnitStatus('2011')">Studio</text>
          <!-- 2012 -->
          <rect
            x="210"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('2012')]"
          ></rect>
          <text x="212" y="250" :class="getUnitStatus('2012')">UNIT-2012</text>
          <text x="222" y="260" :class="getUnitStatus('2012')">Studio</text>
          <!-- 2013 -->
          <rect
            x="250"
            y="220"
            width="40"
            height="60"
            :class="['floorplan', 'unit', getUnitStatus('2013')]"
          ></rect>
          <text x="252" y="250" :class="getUnitStatus('2013')">UNIT-2013</text>
          <text x="262" y="260" :class="getUnitStatus('2013')">Studio</text>
          <!-- 2014 -->
          <path
            d="M 290 220 L 340 220 L 358 200 L 386 228 L 350 263 L 350 280 L 290 280"
            :class="['floorplan', 'unit', getUnitStatus('2014')]"
          ></path>
          <text x="302" y="250" :class="getUnitStatus('2014')">UNIT-2014</text>
          <text x="312" y="260" :class="getUnitStatus('2014')">02 BR</text>
        </g>
        <g style="transform: rotate(45deg) translate(347px, -149px)">
          <path d="M 60 50 L 80 50 L 80 20 L 70 20 L 60 30 L 60 50"></path>
          <!-- 2015 -->
          <path
            d="M 80 50 L 100 50 L 100 100 L 140 100 L 140 20 L 80 20"
            :class="['floorplan', 'unit', getUnitStatus('2015')]"
          ></path>
          <text x="102" y="55" :class="getUnitStatus('2015')">UNIT-2015</text>
          <text x="113" y="65" :class="getUnitStatus('2015')">01 BR</text>
          <!-- 2016 -->
          <path
            d="M 110 -15 L 140 -15 L 180 -15 L 180 2 L 195 2 L 195 85 L 180 85 L 180 100 L 140 100 L 140 8 L 110 8"
            :class="['floorplan', 'unit', getUnitStatus('2016')]"
          ></path>
          <text x="151" y="55" :class="getUnitStatus('2016')">UNIT-2016</text>
          <text x="160" y="65" :class="getUnitStatus('2016')">02 BR</text>
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
            20TH FLOOR - PROJECT 1
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
        (data) => data.floor === "20th" && data.availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) => data.floor === "20th" && data.availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) => data.floor === "20th" && data.availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) => data.floor === "20th" && data.availability === "Blocked"
      ).length;
      this.hayat = this.floorData.filter(
        (data) => data.floor === "20th" && data.availability === "Hayat"
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
