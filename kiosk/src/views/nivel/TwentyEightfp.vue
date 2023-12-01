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
          style="stroke: #000"
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

        <text x="227" y="175" class="label">ELECT. RM/</text>
        <text x="227" y="183" class="label">METERING</text>
        <text x="247" y="98" style="font-size: 6px">ELEVATOR</text>
        <text x="247" y="107" style="font-size: 6px">LOBBY</text>
        <text x="187" y="168" class="label">DN</text>
        <text x="187" y="32" class="label">DN</text>
        <text x="157" y="163" class="label">UP</text>
        <text x="157" y="39" class="label">UP</text>
        <text x="213" y="29" class="label" style="font-size: 5px">GARBAGE</text>
        <text x="213" y="35" class="label" style="font-size: 5px">CHUTE</text>
        <text x="248" y="31" class="label">MRF</text>
      </g>

      <!-- UNIT -->
      <!-- 2801 -->
      <rect
        x="50"
        y="20"
        width="235"
        height="120"
        :class="['unit', getParkingStatus('2801')]"
      ></rect>
      <text x="133" y="81" :class="['label', getParkingStatus('2801')]">
        UNIT-2801
      </text>
      <text x="150" y="91" :class="['sub-label', getParkingStatus('2801')]">
        02 BR
      </text>
      <!-- 2802 -->
      <rect
        x="285"
        y="20"
        width="235"
        height="120"
        :class="['unit', getParkingStatus('2802')]"
      ></rect>
      <text x="353" y="81" :class="['label', getParkingStatus('2802')]">
        UNIT-2802
      </text>
      <text x="370" y="91" :class="['sub-label', getParkingStatus('2802')]">
        02 BR
      </text>
      <!-- 2803 -->
      <rect
        x="390"
        y="140"
        width="130"
        height="127"
        :class="['unit', getParkingStatus('2803')]"
      ></rect>
      <text x="420" y="211" :class="['label', getParkingStatus('2803')]">
        UNIT-2803
      </text>
      <text x="435" y="221" :class="['sub-label', getParkingStatus('2803')]">
        01 BR
      </text>
      <!-- 2805 -->
      <rect
        x="390"
        y="268"
        width="130"
        height="127"
        :class="['unit', getParkingStatus('2805')]"
      ></rect>
      <text x="420" y="330" :class="['label', getParkingStatus('2805')]">
        UNIT-2805
      </text>
      <text x="435" y="340" :class="['sub-label', getParkingStatus('2805')]">
        01 BR
      </text>
      <!-- 2806 -->
      <rect
        x="285"
        y="395"
        width="235"
        height="120"
        :class="['unit', getParkingStatus('2806')]"
      ></rect>
      <text x="353" y="450" :class="['label', getParkingStatus('2806')]">
        UNIT-2806
      </text>
      <text x="367" y="460" :class="['sub-label', getParkingStatus('2806')]">
        02 BR
      </text>
      <!-- 2807 -->
      <rect
        x="50"
        y="395"
        width="235"
        height="120"
        :class="['unit', getParkingStatus('2807')]"
      ></rect>
      <text x="133" y="450" :class="['label', getParkingStatus('2807')]">
        UNIT-2807
      </text>
      <text x="153" y="460" :class="['sub-label', getParkingStatus('2807')]">
        02 BR
      </text>
      <!-- 2808 -->
      <rect
        x="50"
        y="268"
        width="130"
        height="127"
        :class="['unit', getParkingStatus('2808')]"
      ></rect>
      <text x="80" y="330" :class="['label', getParkingStatus('2808')]">
        UNIT-2808
      </text>
      <text x="97" y="340" :class="['sub-label', getParkingStatus('2808')]">
        01 BR
      </text>
      <!-- 2809 -->
      <rect
        x="50"
        y="140"
        width="130"
        height="127"
        :class="['unit', getParkingStatus('2809')]"
      ></rect>
      <text x="80" y="210" :class="['label', getParkingStatus('2809')]">
        UNIT-2809
      </text>
      <text x="97" y="220" :class="['sub-label', getParkingStatus('2809')]">
        01 BR
      </text>

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
        <text x="705" y="180" style="font-weight: 900; font-size: 20px">
          28TH FLOOR - PROJECT 2
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
        (data) => data.floor === "28th" && data.availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) => data.floor === "28th" && data.availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) => data.floor === "28th" && data.availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) => data.floor === "28th" && data.availability === "Blocked"
      ).length;
      this.hayat = this.floorData.filter(
        (data) => data.floor === "28th" && data.availability === "Hayat"
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
