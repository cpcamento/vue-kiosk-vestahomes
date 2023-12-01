import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/inventory/lemenda/all/floorplan",
      name: "lemenda_all_inventory",
      component: () => import("../views/lemenda/Floorplan.vue"),
    },
    {
      path: "/inventory/lemenda/3rd/floorplan",
      name: "lemenda_third_inventory",
      component: () => import("../views/lemenda/Thirdfp.vue"),
    },
    {
      path: "/inventory/lemenda/4th/floorplan",
      name: "lemenda_four_inventory",
      component: () => import("../views/lemenda/Fourfp.vue"),
    },
    {
      path: "/inventory/lemenda/5th/floorplan",
      name: "lemenda_fifth_inventory",
      component: () => import("../views/lemenda/Fivefp.vue"),
    },
    {
      path: "/inventory/lemenda/6th/floorplan",
      name: "lemenda_six_inventory",
      component: () => import("../views/lemenda/Sixfp.vue"),
    },
    {
      path: "/inventory/lemenda/7th/floorplan",
      name: "lemenda_seven_inventory",
      component: () => import("../views/lemenda/Sevenfp.vue"),
    },
    {
      path: "/inventory/lemenda/8th/floorplan",
      name: "lemenda_eight_inventory",
      component: () => import("../views/lemenda/Eightfp.vue"),
    },
    {
      path: "/inventory/lemenda/9th/floorplan",
      name: "lemenda_nine_inventory",
      component: () => import("../views/lemenda/Ninefp.vue"),
    },
    {
      path: "/inventory/lemenda/10th/floorplan",
      name: "lemenda_ten_inventory",
      component: () => import("../views/lemenda/Tenfp.vue"),
    },
    {
      path: "/inventory/lemenda/11th/floorplan",
      name: "lemenda_eleven_inventory",
      component: () => import("../views/lemenda/Elevenfp.vue"),
    },
    {
      path: "/inventory/lemenda/12th-A/floorplan",
      name: "lemenda_twelvea_inventory",
      component: () => import("../views/lemenda/TwelveAfp.vue"),
    },
    {
      path: "/inventory/lemenda/12th-B/floorplan",
      name: "lemenda_twelveb_inventory",
      component: () => import("../views/lemenda/TwelveBfp.vue"),
    },
    {
      path: "/inventory/lemenda/14th/floorplan",
      name: "lemenda_fourten_inventory",
      component: () => import("../views/lemenda/Fourtenfp.vue"),
    },
    {
      path: "/inventory/lemenda/15th/floorplan",
      name: "lemenda_fifthten_inventory",
      component: () => import("../views/lemenda/Fifthtenfp.vue"),
    },
    {
      path: "/inventory/lemenda/16th/floorplan",
      name: "lemenda_sixten_inventory",
      component: () => import("../views/lemenda/Sixtenfp.vue"),
    },
    {
      path: "/inventory/lemenda/17th/floorplan",
      name: "lemenda_seventen_inventory",
      component: () => import("../views/lemenda/Seventenfp.vue"),
    },
    {
      path: "/inventory/lemenda/18th/floorplan",
      name: "lemenda_eighten_inventory",
      component: () => import("../views/lemenda/Eightenfp.vue"),
    },
    {
      path: "/inventory/lemenda/19th/floorplan",
      name: "lemenda_nineten_inventory",
      component: () => import("../views/lemenda/Ninetenfp.vue"),
    },
    {
      path: "/inventory/lemenda/20th/floorplan",
      name: "lemenda_twenty_inventory",
      component: () => import("../views/lemenda/Twentyfp.vue"),
    },
    {
      path: "/inventory/lemenda/penthouse/floorplan",
      name: "lemenda_penthouse_inventory",
      component: () => import("../views/lemenda/Penthousefp.vue"),
    },
    {
      path: "/inventory/lemenda/all/carpark",
      name: "lemenda_all_carpark",
      component: () => import("../views/lemenda/Carpark.vue"),
    },
    {
      path: "/inventory/lemenda/basement1/carpark",
      name: "lemenda_basement1_carpark",
      component: () => import("../views/lemenda/BasementOne.vue"),
    },
    {
      path: "/inventory/lemenda/basement2/carpark",
      name: "lemenda_basement2_carpark",
      component: () => import("../views/lemenda/BasementTwo.vue"),
    },
    {
      path: "/inventory/lemenda/basement3/carpark",
      name: "lemenda_basement3_carpark",
      component: () => import("../views/lemenda/BasementThree.vue"),
    },
    {
      path: "/inventory/lemenda/basement4/carpark",
      name: "lemenda_basement4_carpark",
      component: () => import("../views/lemenda/BasementFour.vue"),
    },
    {
      path: "/inventory/lemenda/basement5/carpark",
      name: "lemenda_basement5_carpark",
      component: () => import("../views/lemenda/BasementFive.vue"),
    },
    {
      path: "/nivel",
      name: "nivel",
      component: () => import("../views/nivel/Nivel.vue"),
    },
    {
      path: "/inventory/nivel/all/floorplan",
      name: "nivel_all_floorplan",
      component: () => import("../views/nivel/Floorplan.vue"),
    },
    {
      path: "/inventory/nivel/5th/floorplan",
      name: "nivel_five_floorplan",
      component: () => import("../views/nivel/Fivefp.vue"),
    },
    {
      path: "/inventory/nivel/6th/floorplan",
      name: "nivel_six_floorplan",
      component: () => import("../views/nivel/Sixfp.vue"),
    },
    {
      path: "/inventory/nivel/7th/floorplan",
      name: "nivel_seven_floorplan",
      component: () => import("../views/nivel/Sevenfp.vue"),
    },
    {
      path: "/inventory/nivel/8th/floorplan",
      name: "nivel_eigth_floorplan",
      component: () => import("../views/nivel/Eigthfp.vue"),
    },
    {
      path: "/inventory/nivel/9th/floorplan",
      name: "nivel_nine_floorplan",
      component: () => import("../views/nivel/Ninefp.vue"),
    },
    {
      path: "/inventory/nivel/10th/floorplan",
      name: "nivel_ten_floorplan",
      component: () => import("../views/nivel/Tenfp.vue"),
    },
    {
      path: "/inventory/nivel/11th/floorplan",
      name: "nivel_eleven_floorplan",
      component: () => import("../views/nivel/Elevenfp.vue"),
    },
    {
      path: "/inventory/nivel/12th/floorplan",
      name: "nivel_twelve_floorplan",
      component: () => import("../views/nivel/Twelvefp.vue"),
    },
    {
      path: "/inventory/nivel/15th/floorplan",
      name: "nivel_fifthten_floorplan",
      component: () => import("../views/nivel/Fifthtenfp.vue"),
    },
    {
      path: "/inventory/nivel/16th/floorplan",
      name: "nivel_sixten_floorplan",
      component: () => import("../views/nivel/Sixtenfp.vue"),
    },
    {
      path: "/inventory/nivel/17th/floorplan",
      name: "nivel_seventen_floorplan",
      component: () => import("../views/nivel/Seventenfp.vue"),
    },
    {
      path: "/inventory/nivel/18th/floorplan",
      name: "nivel_eigthten_floorplan",
      component: () => import("../views/nivel/Eigthtenfp.vue"),
    },
    {
      path: "/inventory/nivel/19th/floorplan",
      name: "nivel_nineten_floorplan",
      component: () => import("../views/nivel/Ninetenfp.vue"),
    },
    {
      path: "/inventory/nivel/20th/floorplan",
      name: "nivel_twenty_floorplan",
      component: () => import("../views/nivel/Twentyfp.vue"),
    },
    {
      path: "/inventory/nivel/21st/floorplan",
      name: "nivel_twentyone_floorplan",
      component: () => import("../views/nivel/TwentyOnefp.vue"),
    },
    {
      path: "/inventory/nivel/22nd/floorplan",
      name: "nivel_twentytwo_floorplan",
      component: () => import("../views/nivel/TwentyTwofp.vue"),
    },
    {
      path: "/inventory/nivel/23rd/floorplan",
      name: "nivel_twentythree_floorplan",
      component: () => import("../views/nivel/TwentyThreefp.vue"),
    },
    {
      path: "/inventory/nivel/25th/floorplan",
      name: "nivel_twentyfive_floorplan",
      component: () => import("../views/nivel/TwentyFivefp.vue"),
    },
    {
      path: "/inventory/nivel/26th/floorplan",
      name: "nivel_twentysix_floorplan",
      component: () => import("../views/nivel/TwentySixfp.vue"),
    },
    {
      path: "/inventory/nivel/27th/floorplan",
      name: "nivel_twentyseven_floorplan",
      component: () => import("../views/nivel/TwentySevenfp.vue"),
    },
    {
      path: "/inventory/nivel/28th/floorplan",
      name: "nivel_twentyeight_floorplan",
      component: () => import("../views/nivel/TwentyEightfp.vue"),
    },
    {
      path: "/inventory/nivel/all/carpark",
      name: "nivel_all_carpark",
      component: () => import("../views/nivel/Carpark.vue"),
    },
    {
      path: "/inventory/nivel/second/carpark",
      name: "nivel_second_carpark",
      component: () => import("../views/nivel/SecondFloor.vue"),
    },
    {
      path: "/inventory/nivel/third/carpark",
      name: "nivel_third_carpark",
      component: () => import("../views/nivel/ThirdFloor.vue"),
    },
  ],
});

export default router;
