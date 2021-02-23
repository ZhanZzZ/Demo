<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list :cities="cities" :hot="hotCities" :msg="letter" />
    <city-alphabet :cities="cities" @change="handleLetterCli" />
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: "",
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterCli(msg) {
      this.letter = msg;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style>
</style>