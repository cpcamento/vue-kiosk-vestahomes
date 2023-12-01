<script setup>
import NivelInventoryFloor from "../../components/NivelInventoryFloor.vue";
</script>
<template>
  <div>
    <svg
      viewBox="-150 0 1200 550"
      class="nivel-floorplan"
      oncontextmenu="return false;"
    >
      <!-- Outer -->
      <g transform="translate(50, 20)">
        <path
          d="M 0 0 L 470 0 M 470 0 L 470 496 L 0 496 L 0 0"
          style="stroke: #fff"
          class="f-transparent"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>

      <!-- Center -->
      <g transform="translate(80, 170)">
        <path
          d="M 210 10 L 225 10 M 225 10 C 225 23 240 23 240 20 M 239 20 L 239 10 M 210 10 L 210 190 M 210 200"
          stroke-width="2"
          class="f-transparent"
        ></path>
        <path
          d="M 210 40 L 270 40 M 270 41 L 270 10 M 270 10 L 255 10 M 255 10 C 255 23 240 23 240 20 M 242 20 L 242 10 M 240 40 L 240 10"
          stroke-width="2"
          class="f-transparent"
        ></path>
        <path d="M 210 80 L 250 80 M 250 70 L 250 90" stroke-width="2"></path>
        <path
          d="M 210 120 L 250 120 M 250 110 L 250 130"
          stroke-width="2"
        ></path>
        <path
          d="M 210 160 L 250 160 M 250 160 L 250 150"
          stroke-width="2"
        ></path>
        <path
          d="M 215 190 L 270 190 M 270 190 L 270 165 M 270 165 L 215 165 M 215 165 L 215 190"
        ></path>
        <path
          d="M 215 155 L 245 155 M 245 155 L 245 125 M 245 125 L 215 125 M 215 125 L 215 155"
        ></path>
        <path
          d="M 215 115 L 245 115 M 245 115 L 245 85 M 245 85 L 215 85 M 215 85 L 215 115"
        ></path>
        <path
          d="M 215 75 L 245 75 M 245 75 L 245 45 M 245 45 L 215 45 M 215 45 L 215 75"
        ></path>
        <path d="M 210 95 L 140 95 M 210 105 L 140 105" stroke-width="2"></path>
        <path
          d="M 140 10 L 180 10 M 180 10 C 180 25 210 25 210 19 M 140 10 L 140 190 M 140 189 L 180 189 C 180 175 210 175 210 180"
          stroke-width="2"
          class="f-transparent"
        ></path>

        <!-- U -->
        <!-- DOWN -->
        <path
          d="M 160 155 L 160 120 M 160 120 C 160 110 190 110 190 120 M 190 120 L 190 160"
          style="fill: #0000"
        ></path>
        <path d="M 175 120 L 175 160" stroke-width="5"></path>
        <path d="M 175 35 L 175 70" stroke-width="5"></path>
        <!-- UP -->
        <path
          d="M 160 40 L 160 70 M 160 70 C 160 80 190 80 190 70 M 190 70 L 190 35"
          style="fill: #0000"
        ></path>

        <!-- ==== -->
        <!-- DOWN -->
        <path d="M 175 160 L 210 160" class="s-grey"></path>
        <path d="M 140 155 L 210 155" class="s-grey"></path>
        <path d="M 140 150 L 210 150" class="s-grey"></path>
        <path d="M 140 145 L 210 145" class="s-grey"></path>
        <path d="M 140 140 L 210 140" class="s-grey"></path>
        <path d="M 140 135 L 210 135" class="s-grey"></path>
        <path d="M 140 130 L 210 130" class="s-grey"></path>
        <path d="M 140 125 L 210 125" class="s-grey"></path>
        <path d="M 140 120 L 210 120" class="s-grey"></path>
        <!-- UP -->
        <path d="M 175 35 L 210 35" class="s-grey"></path>
        <path d="M 140 40 L 210 40" class="s-grey"></path>
        <path d="M 140 45 L 210 45" class="s-grey"></path>
        <path d="M 140 50 L 210 50" class="s-grey"></path>
        <path d="M 140 55 L 210 55" class="s-grey"></path>
        <path d="M 140 60 L 210 60" class="s-grey"></path>
        <path d="M 140 65 L 210 65" class="s-grey"></path>
        <path d="M 140 70 L 210 70" class="s-grey"></path>

        <text x="227" y="175" class="label" style="font-size: 8px">
          ELECT. RM/
        </text>
        <text x="227" y="183" class="label" style="font-size: 8px">
          METERING
        </text>
        <text x="247" y="98" style="font-size: 6px">ELEVATOR</text>
        <text x="247" y="107" style="font-size: 6px">LOBBY</text>
        <text x="187" y="168" class="label" style="font-size: 8px">DN</text>
        <text x="187" y="32" class="label" style="font-size: 8px">DN</text>
        <text x="157" y="163" class="label" style="font-size: 8px">UP</text>
        <text x="157" y="39" class="label" style="font-size: 8px">UP</text>
        <text x="213" y="29" class="label" style="font-size: 5px">GARBAGE</text>
        <text x="213" y="35" class="label" style="font-size: 5px">CHUTE</text>
        <text x="248" y="31" class="label" style="font-size: 8px">MRF</text>
      </g>

      <!-- UNIT -->
      <!-- 901 -->
      <path
        d="M 52 40 L 90 40 L 90 22 L 215 22 L 215 110 L 180 110 L 180 80 L 170 80 L 170 87 L 52 87 L 52 39"
        :class="['unit', getParkingStatus('901')]"
      ></path>
      <text x="100" y="50" :class="['label', getParkingStatus('901')]">
        Unit-901
      </text>
      <text x="110" y="60" :class="['sub-label', getParkingStatus('901')]">
        01 BR
      </text>
      <!-- 902 -->
      <path
        d="M 215 40 L 215 153 L 275 153 L 275 147 L 285 147 L 285 40 L 215 40"
        :class="['unit', getParkingStatus('902')]"
      ></path>
      <text x="225" y="95" :class="['label', getParkingStatus('902')]">
        Unit-902
      </text>
      <text x="237" y="105" :class="['sub-label', getParkingStatus('902')]">
        Studio
      </text>
      <!-- 903 -->
      <path
        d="M 285 40 L 285 147 L 295 147 L 295 154 L 359 154 L 359 40 L 285 40"
        :class="['unit', getParkingStatus('903')]"
      ></path>
      <text x="295" y="95" :class="['label', getParkingStatus('903')]">
        Unit-903
      </text>
      <text x="307" y="105" :class="['sub-label', getParkingStatus('903')]">
        Studio
      </text>
      <!-- 905 -->
      <path
        d="M 394 110 L 359 110 L 359 22 L 479 22 L 479 40 L 519 40 L 519 87 L 404 87 L 404 80 L 394 80"
        :class="['unit', getParkingStatus('905')]"
      ></path>
      <text x="425" y="60" :class="['label', getParkingStatus('905')]">
        Unit-905
      </text>
      <text x="437" y="70" :class="['sub-label', getParkingStatus('905')]">
        01 BR
      </text>
      <!-- 906 -->
      <path
        d="M 394 154 L 519 154 L 519 87 L 404 87 L 404 94 L 394 94"
        :class="['unit', getParkingStatus('906')]"
      ></path>
      <text x="425" y="125" :class="['label', getParkingStatus('906')]">
        Unit-906
      </text>
      <text x="437" y="135" :class="['sub-label', getParkingStatus('906')]">
        Studio
      </text>
      <!-- 907 -->
      <path
        d="M 394 154 L 519 154 L 519 214 L 404 214 L 404 207 L 394 207"
        :class="['unit', getParkingStatus('907')]"
      ></path>
      <text x="425" y="185" :class="['label', getParkingStatus('907')]">
        Unit-907
      </text>
      <text x="437" y="195" :class="['sub-label', getParkingStatus('907')]">
        Studio
      </text>
      <!-- 908 -->
      <path
        d="M 394 274 L 519 274 L 519 214 L 404 214 L 404 221 L 394 221"
        :class="['unit', getParkingStatus('908')]"
      ></path>
      <text x="425" y="245" :class="['label', getParkingStatus('908')]">
        Unit-908
      </text>
      <text x="437" y="255" :class="['sub-label', getParkingStatus('908')]">
        Studio
      </text>
      <!-- 909 -->
      <path
        d="M 394 274 L 519 274 L 519 334 L 405 334 L 405 328 L 394 328"
        :class="['unit', getParkingStatus('909')]"
      ></path>
      <text x="425" y="305" :class="['label', getParkingStatus('909')]">
        Unit-909
      </text>
      <text x="437" y="315" :class="['sub-label', getParkingStatus('909')]">
        Studio
      </text>
      <!-- 910 -->
      <path
        d="M 394 394 L 519 394 L 519 334 L 405 334 L 405 341 L 394 341"
        :class="['unit', getParkingStatus('910')]"
      ></path>
      <text x="425" y="365" :class="['label', getParkingStatus('910')]">
        Unit-910
      </text>
      <text x="437" y="375" :class="['sub-label', getParkingStatus('910')]">
        Studio
      </text>
      <!-- 911 -->
      <path
        d="M 394 394 L 519 394 L 519 453 L 405 453 L 405 448 L 394 448"
        :class="['unit', getParkingStatus('911')]"
      ></path>
      <text x="425" y="425" :class="['label', getParkingStatus('911')]">
        Unit-911
      </text>
      <text x="437" y="435" :class="['sub-label', getParkingStatus('911')]">
        Studio
      </text>
      <!-- 912-->
      <path
        d="M 395 434 L 360 434 L 360 515 L 479 515 L 479 492 L 519 492 L 519 453 L 405 453 L 405 460 L 394 460"
        :class="['unit', getParkingStatus('912')]"
      ></path>
      <text x="425" y="485" :class="['label', getParkingStatus('912')]">
        Unit-912
      </text>
      <text x="437" y="495" :class="['sub-label', getParkingStatus('912')]">
        01 BR
      </text>
      <!-- 915 -->
      <path
        d="M 285 404 L 285 514 L 359 514 L 359 394 L 295 394 L 295 404 L 285 404"
        :class="['unit', getParkingStatus('915')]"
      ></path>
      <text x="295" y="455" :class="['label', getParkingStatus('915')]">
        Unit-915
      </text>
      <text x="307" y="465" :class="['sub-label', getParkingStatus('915')]">
        Studio
      </text>
      <!-- 916 -->
      <path
        d="M 215 394 L 215 514 L 285 514 L 285 404 L 275 404 L 275 394 L 215 394"
        :class="['unit', getParkingStatus('916')]"
      ></path>
      <text x="225" y="455" :class="['label', getParkingStatus('916')]">
        Unit-916
      </text>
      <text x="237" y="465" :class="['sub-label', getParkingStatus('916')]">
        Studio
      </text>
      <!-- 917 -->
      <path
        d="M 180 460 L 170 460 L 170 454 L 52 454 L 52 492 L 90 492 L 90 514 L 215 514 L 215 435 L 180 435"
        :class="['unit', getParkingStatus('917')]"
      ></path>
      <text x="90" y="485" :class="['label', getParkingStatus('917')]">
        Unit-917
      </text>
      <text x="102" y="495" :class="['sub-label', getParkingStatus('917')]">
        01 BR
      </text>
      <!-- 918 -->
      <path
        d="M 52 394 L 180 394 L 180 448 L 170 448 L 170 454 L 52 454 L 52 394"
        :class="['unit', getParkingStatus('918')]"
      ></path>
      <text x="90" y="425" :class="['label', getParkingStatus('918')]">
        Unit-918
      </text>
      <text x="102" y="435" :class="['sub-label', getParkingStatus('918')]">
        Studio
      </text>
      <!-- 919 -->
      <path
        d="M 52 334 L 170 334 L 170 340 L 180 340 L 180 394 L 52 394 L 52 334"
        :class="['unit', getParkingStatus('919')]"
      ></path>
      <text x="90" y="365" :class="['label', getParkingStatus('919')]">
        Unit-919
      </text>
      <text x="102" y="375" :class="['sub-label', getParkingStatus('919')]">
        Studio
      </text>
      <!-- 920 -->
      <path
        d="M 52 274 180 274 L 180 328 L 170 328 L 170 334 L 52 334 L 52 274"
        :class="['unit', getParkingStatus('920')]"
      ></path>
      <text x="90" y="305" :class="['label', getParkingStatus('920')]">
        Unit-920
      </text>
      <text x="102" y="315" :class="['sub-label', getParkingStatus('920')]">
        Studio
      </text>
      <!-- 921 -->
      <path
        d="M 52 214 L 170 214 L 170 220 L 180 220 L 180 274 L 52 274 L 52 214"
        :class="['unit', getParkingStatus('921')]"
      ></path>
      <text x="90" y="245" :class="['label', getParkingStatus('921')]">
        Unit-921
      </text>
      <text x="102" y="255" :class="['sub-label', getParkingStatus('921')]">
        Studio
      </text>
      <!-- 922 -->
      <path
        d="M 52 153 L 180 153 L 180 207 L 170 207 L 170 213 L 52 213 L 52 153"
        :class="['unit', getParkingStatus('922')]"
      ></path>
      <text x="90" y="185" :class="['label', getParkingStatus('922')]">
        Unit-922
      </text>
      <text x="102" y="195" :class="['sub-label', getParkingStatus('922')]">
        Studio
      </text>
      <!-- 923 -->
      <path
        d="M 52 87 L 170 87 L 170 93 L 180 93 L 180 153 L 52 153 L 52 87"
        :class="['unit', getParkingStatus('923')]"
      ></path>
      <text x="90" y="120" :class="['label', getParkingStatus('923')]">
        Unit-923
      </text>
      <text x="102" y="130" :class="['sub-label', getParkingStatus('923')]">
        Studio
      </text>

      <path d="M 180 50 L 180 480" stroke-width="3"></path>
      <path d="M 395 50 L 395 480" stroke-width="3"></path>

      <g style="transform: translate(5px, 33px)">
        <text x="194" y="185" style="font-size: 8px">H</text>
        <text x="194" y="200" style="font-size: 8px">A</text>
        <text x="194" y="215" style="font-size: 8px">L</text>
        <text x="194" y="230" style="font-size: 8px">L</text>
        <text x="194" y="255" style="font-size: 8px">W</text>
        <text x="194" y="270" style="font-size: 8px">A</text>
        <text x="194" y="285" style="font-size: 8px">Y</text>
      </g>
      <g style="transform: translate(176px, 33px)">
        <text x="194" y="185" style="font-size: 8px">H</text>
        <text x="194" y="200" style="font-size: 8px">A</text>
        <text x="194" y="215" style="font-size: 8px">L</text>
        <text x="194" y="230" style="font-size: 8px">L</text>
        <text x="194" y="255" style="font-size: 8px">W</text>
        <text x="194" y="270" style="font-size: 8px">A</text>
        <text x="194" y="285" style="font-size: 8px">Y</text>
      </g>
      <g class="legend">
        <rect
          x="685"
          y="130"
          width="260"
          height="240"
          class="fill-blured"
          rx="5"
        ></rect>
        <text x="710" y="180" style="font-weight: 900; font-size: 20px">
          9TH FLOOR - PROJECT 2
        </text>
        <rect x="700" y="200" width="110" height="40" class="fill-white"></rect>
        <rect
          x="820"
          y="200"
          width="110"
          height="40"
          class="fill-reserved"
        ></rect>
        <rect
          x="700"
          y="250"
          width="110"
          height="40"
          class="fill-blocked"
        ></rect>
        <rect x="700" y="300" width="230" height="40" class="fill-hayat"></rect>
        <rect x="820" y="250" width="110" height="40" class="fill-sold"></rect>
        <text x="709" y="224" class="t">{{ available }} - Available</text>
        <text x="835" y="224" class="t">{{ reserved }} - Reserved</text>
        <text x="709" y="274" class="t fill-white">
          {{ blocked }} - Blocked
        </text>
        <text x="835" y="274" class="t fill-white">{{ sold }} - Sold</text>
        <text x="780" y="323" class="t fill-white">{{ hayat }} - Hayat</text>
      </g>
    </svg>
    <NivelInventoryFloor />
  </div>
</template>
<script>
import { project2Data } from "../../services/lemendaApiServices";
export default {
  data() {
    return {
      floorData: [],
      available: "0",
      sold: "0",
      reserved: "0",
      blocked: "0",
      hayat: "0",
    };
  },
  mounted: async function () {
    try {
      this.floorData = await project2Data();
      this.available = this.floorData.filter(
        (data) => data.floor === "9th" && data.availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) => data.floor === "9th" && data.availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) => data.floor === "9th" && data.availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) => data.floor === "9th" && data.availability === "Blocked"
      ).length;
      this.hayat = this.floorData.filter(
        (data) => data.floor === "9th" && data.availability === "Hayat"
      ).length;
    } catch (error) {
      console.log("Error" + error);
    }
  },
  methods: {
    getParkingStatus(value) {
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
<style scoped>
svg.nivel-floorplan g.legend {
  transform: translateX(-120px);
}
</style>
