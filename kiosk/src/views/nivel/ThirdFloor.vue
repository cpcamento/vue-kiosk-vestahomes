<script setup>
import NivelInventoryPark from "../../components/NivelInventoryPark.vue";
</script>
<template>
  <div>
    <svg
      viewBox="-150 0 1200 550"
      class="nivel-floorplan"
      oncontextmenu="return false;"
    >
      <g style="transform: scale(0.8)">
        <!-- Outer -->
        <g transform="translate(50, 20)">
          <path
            d="M 0 0 L 600 0 M 600 0 L 500 600 M 500 600 C 100 560 5 510 10 510 M 10 510 L 0 -2"
            style="stroke: #fff"
            class="f-transparent"
            stroke-width="3"
          ></path>
        </g>

        <!-- Center -->
        <g transform="translate(75, 170)">
          <rect
            x="130"
            width="150"
            height="200"
            class="f-transparent"
            stroke="#777"
            rx="15"
          ></rect>
          <rect
            x="132"
            y="2"
            width="146"
            height="196"
            class="f-transparent"
            stroke="#777"
            rx="12"
          ></rect>
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
          <path
            d="M 280 160 L 305 160 M 305 160 L 305 130 M 306 130 L 280 130"
            stroke-width="2"
          ></path>
          <path
            d="M 210 95 L 140 95 M 210 105 L 140 105"
            stroke-width="2"
          ></path>
          <path
            d="M 140 10 L 180 10 M 180 10 C 180 25 210 25 210 19 M 140 10 L 140 190 M 140 189 L 180 189 C 180 175 210 175 210 180"
            stroke-width="2"
            class="f-transparent"
          ></path>
          <!-- |||||| -->
          <path d="M 283 131 L 283 138" class="s-grey"></path>
          <path d="M 286 131 L 286 138" class="s-grey"></path>
          <path d="M 289 131 L 289 138" class="s-grey"></path>
          <path d="M 292 131 L 292 138" class="s-grey"></path>
          <path d="M 295 131 L 295 138" class="s-grey"></path>
          <path d="M 298 131 L 298 138" class="s-grey"></path>
          <path d="M 301 131 L 301 138" class="s-grey"></path>
          <path d="M 283 159 L 283 152" class="s-grey"></path>
          <path d="M 286 159 L 286 152" class="s-grey"></path>
          <path d="M 289 159 L 289 152" class="s-grey"></path>
          <path d="M 292 159 L 292 152" class="s-grey"></path>
          <path d="M 295 159 L 295 152" class="s-grey"></path>
          <path d="M 298 159 L 298 152" class="s-grey"></path>
          <path d="M 301 159 L 301 152" class="s-grey"></path>

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
            ELEC. RM/
          </text>
          <text x="227" y="182" class="label" style="font-size: 8px">
            METERING
          </text>
          <text x="285" y="144" class="label" style="font-size: 8px">PWD</text>
          <text x="284" y="150" class="label" style="font-size: 8px">RAMP</text>
          <text x="247" y="98" style="font-size: 6px">ELEVATOR</text>
          <text x="247" y="107" style="font-size: 6px">LOBBY</text>
          <text x="187" y="168" class="label" style="font-size: 8px">DN</text>
          <text x="187" y="32" class="label" style="font-size: 8px">DN</text>
          <text x="157" y="163" class="label" style="font-size: 8px">UP</text>
          <text x="157" y="39" class="label" style="font-size: 8px">UP</text>
          <text x="213" y="29" class="label" style="font-size: 5px">
            GARBAGE
          </text>
          <text x="213" y="35" class="label" style="font-size: 5px">CHUTE</text>
          <text x="248" y="31" class="label" style="font-size: 8px">MRF</text>
        </g>

        <!-- ETC -->
        <g>
          <path
            d="M 475 150 L 475 280 M 475 280 L 460 420 M 475 150 C 475 145 485 145 485 145 M 485 145 L 500 145 M 500 145 C 500 147 540 140 530 205 M 530 205 L 490 425 M 490 425 C 490 440 460 440 460 420"
            class="s-grey f-transparent"
          ></path>
          <path
            d="M 477 152 L 477 282 M 477 282 L 462 420 M 477 152 C 477 147 483 147 487 147 M 487 147 L 498 147 M 498 147 C 498 149 538 142 528 205 M 528 205 L 488 423 M 488 423 C 488 438 460 438 462 418"
            class="s-grey f-transparent"
          ></path>

          <path
            d="M 570 495 L 503 495 M 503 495 L 503 590"
            stroke-width="2"
            class="f-transparent"
          ></path>
          <path
            d="M 503 590 C 503 590 525 585 525 617"
            class="s-grey f-transparent"
          ></path>

          <path
            d="M 93 21 L 93 457 M 93 457 L 118 457 M 118 457 L 118 550"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="s-grey"
          ></path>
          <path
            d="M 95 21 L 95 455 M 95 455 L 120 455 M 120 455 L 120 550"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="s-grey"
          ></path>

          <path
            d="M 480 611 L 480 510 C 490 480 510 485 530 484 M 530 484 L 560 484 L 575 390 L 495 390"
            class="s-grey f-transparent"
          ></path>
          <path
            d="M 482 611 L 482 510 C 492 482 510 487 530 486 M 530 486 L 562 486 L 578 388 L 495 388"
            class="s-grey f-transparent"
          ></path>

          <path
            d="M 497 370 L 576 370 M 576 370 L 623 93 L 623 22"
            class="s-grey f-transparent"
          ></path>
          <path
            d="M 497 372 L 578 372 M 578 372 L 625 95 L 625 22"
            class="s-grey f-transparent"
          ></path>

          <text
            x="517"
            y="530"
            class="label"
            style="font-size: 9px; font-weight: 900"
          >
            ROOF
          </text>
          <text
            x="517"
            y="545"
            class="label"
            style="font-size: 9px; font-weight: 900"
          >
            SLAB
          </text>
        </g>

        <!-- UNITS -->
        <g>
          <!-- 1 -->
          <rect
            x="411"
            y="532"
            width="39"
            height="70"
            class="unit 1 Sold"
          ></rect>
          <text x="427" y="574" class="label-units">1</text>
          <!-- 2 -->
          <rect
            x="372"
            y="528"
            width="39"
            height="70"
            class="unit 2 Sold"
          ></rect>
          <text x="388" y="568" class="label-units">2</text>
          <!-- 3 -->
          <rect
            x="293"
            y="516"
            width="39"
            height="70"
            class="unit 3 Sold"
          ></rect>
          <text x="308" y="555" class="label-units">3</text>
          <!-- 4 -->
          <rect
            x="253"
            y="508"
            width="39"
            height="70"
            class="unit 4 Sold"
          ></rect>
          <text x="270" y="548" class="label-units">4</text>
          <!-- 5 -->
          <rect
            x="174"
            y="492"
            width="39"
            height="70"
            class="unit 5 Sold"
          ></rect>
          <text x="190" y="530" class="label-units">5</text>
          <!-- 6 -->
          <rect
            x="134"
            y="483"
            width="39"
            height="70"
            class="unit 6 Sold"
          ></rect>
          <text x="150" y="525" class="label-units">6</text>

          <!-- 7 -->
          <rect
            x="164"
            y="273"
            width="39"
            height="70"
            class="unit 7 Sold"
          ></rect>
          <text x="180" y="310" class="label-units">7</text>
          <!-- 8 -->
          <rect
            x="164"
            y="202"
            width="39"
            height="70"
            class="unit 8 Sold"
          ></rect>
          <text x="180" y="245" class="label-units">8</text>
          <!-- 9 -->
          <rect
            x="131"
            y="22"
            width="39"
            height="70"
            class="unit 9 Available"
          ></rect>
          <text x="145" y="60" class="label-units">9</text>
          <!-- 10 -->
          <rect
            x="170"
            y="22"
            width="39"
            height="70"
            class="unit 10 Sold"
          ></rect>
          <text x="182" y="60" class="label-units">10</text>
          <!-- 11 -->
          <rect
            x="260"
            y="22"
            width="39"
            height="70"
            class="unit 11 Sold"
          ></rect>
          <text x="273" y="60" class="label-units">11</text>
          <!-- 12 -->
          <rect
            x="299"
            y="22"
            width="39"
            height="70"
            class="unit 12 Sold"
          ></rect>
          <text x="312" y="60" class="label-units">12</text>
          <!-- 13 -->
          <rect
            x="393"
            y="22"
            width="39"
            height="70"
            class="unit 13 Sold"
          ></rect>
          <text x="405" y="60" class="label-units">13</text>
          <!-- 14 -->
          <rect
            x="432"
            y="22"
            width="39"
            height="70"
            class="unit 14 Sold"
          ></rect>
          <text x="444" y="60" class="label-units">14</text>
          <!-- 15 -->
          <rect
            x="526"
            y="22"
            width="39"
            height="70"
            class="unit 15 Sold"
          ></rect>
          <text x="539" y="60" class="label-units">15</text>
          <!-- 16 -->
          <rect
            x="565"
            y="22"
            width="39"
            height="70"
            class="unit 16 Sold"
          ></rect>
          <text x="575" y="60" class="label-units">16</text>
          <!-- 17 -->
          <rect
            x="434"
            y="200"
            width="39"
            height="70"
            class="unit 17 Sold"
          ></rect>
          <text x="444" y="245" class="label-units">17</text>
          <!-- 18 -->
          <rect
            x="465"
            y="220"
            width="39"
            height="70"
            class="unit 18 Sold"
            style="transform: rotate(7deg)"
          ></rect>
          <text x="440" y="318" class="label-units">18</text>
        </g>
        <!-- MOTORCYCLE -->
        <g style="transform: rotate(279deg) translate(-671px, 147px)">
          <!-- M1 -->
          <rect x="290" y="450" width="15" height="30" fill="#999"></rect>
          <rect x="305" y="450" width="15" height="30" fill="#999"></rect>
          <rect x="320" y="450" width="15" height="30" fill="#999"></rect>
          <rect x="335" y="450" width="15" height="30" fill="#999"></rect>
          <rect x="350" y="450" width="15" height="30" fill="#999"></rect>
          <text x="296" y="470" class="label-units" style="font-size: 10px">
            1
          </text>
          <text x="310" y="470" class="label-units" style="font-size: 10px">
            2
          </text>
          <text x="325" y="470" class="label-units" style="font-size: 10px">
            3
          </text>
          <text x="340" y="470" class="label-units" style="font-size: 10px">
            4
          </text>
          <text x="355" y="470" class="label-units" style="font-size: 10px">
            5
          </text>
        </g>
        <text x="496" y="411" style="font-size: 6px">MOTORCYCLE</text>
        <text x="496" y="421" style="font-size: 6px">PARKING</text>
        <image
          width="15"
          xlink:href="https://lemenda-inventory-project2.vestahomes.com.ph/public/img/disabled.png"
          style="transform: translate(143px, 64px)"
        ></image>
      </g>

      <g class="legend">
        <rect
          x="685"
          y="130"
          width="260"
          height="200"
          class="fill-blured"
          rx="5"
        ></rect>
        <text x="705" y="180" style="font-weight: 900; font-size: 20px">
          3RD FLOOR - PROJECT 2
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
        <rect x="820" y="250" width="110" height="40" class="fill-sold"></rect>
        <text x="709" y="224" class="t">{{ available }} - Available</text>
        <text x="835" y="224" class="t">{{ reserved }} - Reserved</text>
        <text x="709" y="274" class="t fill-white">
          {{ blocked }} - Blocked
        </text>
        <text x="835" y="274" class="t fill-white">{{ sold }} - Sold</text>
      </g>
    </svg>
    <NivelInventoryPark />
  </div>
</template>
<script>
import { project2CarparkData } from "../../services/lemendaApiServices";
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
      this.floorData = await project2CarparkData();
      this.available = this.floorData.filter(
        (data) =>
          data.basement_no === "thirdFloor" &&
          data.parking_availability === "Available"
      ).length;
      this.sold = this.floorData.filter(
        (data) =>
          data.basement_no === "thirdFloor" &&
          data.parking_availability === "Sold"
      ).length;
      this.reserved = this.floorData.filter(
        (data) =>
          data.basement_no === "thirdFloor" &&
          data.parking_availability === "Reserved"
      ).length;
      this.blocked = this.floorData.filter(
        (data) =>
          data.basement_no === "thirdFloor" &&
          data.parking_availability === "Blocked"
      ).length;
    } catch (error) {
      console.log("Error" + error);
    }
  },
  methods: {
    getParkingStatus(value) {
      return this.floorData
        .filter((data) => data.id == value)
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
<style scoped>
svg.nivel-floorplan g.legend {
  transform: translateX(-120px);
}
</style>
