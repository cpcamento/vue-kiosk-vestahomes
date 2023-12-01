<script setup>
import LemendaInventoryFloor from "../../components/LemendaInventoryFloor.vue";
</script>
<template>
  <div>
    <div class="floorplan-wrapper">
      <svg viewBox="-150 20 840 350" class="floorplan">
        <g>
          <!-- Penthouse 1 -->
          <path
            d="M 50 130 L 230 130 L 230 270 L 80 270 L 80 200 L 50 200 L 50 130"
            :class="['floorplan', 'unit', getUnitStatus('01')]"
          ></path>
          <text x="130" y="190" :class="getUnitStatus('01')">Penthouse-01</text>
          <text x="140" y="200" :class="getUnitStatus('01')">03 BR</text>
          <!-- Penthouse 2 -->
          <path
            d="M 230 170 L 330 170 L 380 220 L 330 270 L 170 270"
            :class="['floorplan', 'unit', getUnitStatus('02')]"
          ></path>
          <text x="280" y="210" :class="getUnitStatus('02')">Penthouse-02</text>
          <text x="290" y="220" :class="getUnitStatus('02')">02 BR</text>
          <!-- Penthouse 3 -->
          <path
            d="M 360 200 L 385 175 L 407 197 L 427 177 L 505 255 L 485 275 L 495 285 L 442 338 L 350 250"
            :class="['floorplan', 'unit', getUnitStatus('03')]"
          ></path>
          <text x="410" y="250" :class="getUnitStatus('03')">Penthouse-03</text>
          <text x="420" y="260" :class="getUnitStatus('03')">02 BR</text>
        </g>
        <!-- ETC -->
        <path
          d="M 50 200 L 50 150 L 15 150 L 25 235 L 50 235 L 50 335 L 175 335 L 175 305 L 365 305 L 395 335 L 405 325 L 430 350 L 443 338"
          class="b"
        ></path>
        <path
          d="M 330 130 L 230 130 M 330 130 L 330 115 L 300 85 M 330 115 320 115 L 295 90 L 315 68 L 427 177"
          class="b"
        ></path>

        <path
          d="M 50 130 40 130 L 40 150 M 100 130 L 100 115 L 150 115 M 150 105 L 270 105 L 270 115 L 310 115 L 310 130"
        ></path>
        <path d="M 150 130 L 150 105" stroke-width="5"></path>

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
            PENTHOUSE - PROJECT 1
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
    };
  },
  mounted: async function () {
    try {
      this.floorData = await project1Data();
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
