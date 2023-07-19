<template>
  <div
    class="group relative flex justify-between bg-white dark:bg-dark-row-bg after:bg-row-hover-bg after:absolute after:top-0 after:left-0 after:w-0 after:h-full hover:after:w-full after:transition-all after:duration-1000 border border-white dark:border-dark-row-border dark:hover:border-warning rounded-[3px] px-5 py-[5px] cursor-pointer"
    @click="handleRedirect(id)"
  >
    <div
      class="absolute flex items-center justify-center w-[37px] h-[15px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm -rotate-90 group-hover:flex"
      v-if="isPlaying"
    >
      <span
        class="font-bold text-[10px] leading-[14px] text-warning dark:text-header-bg mb-[1px]"
      >LIVE</span>
    </div>
    <div class="flex items-center">
      <div class="flex flex-col justify-center px-4 py-[2px] mr-5 rounded-[5px]" :class="isPlaying ? 'live-card' : 'border border-warning'">
        <span class="text-xs">{{ date }}</span>
        <span class="text-[10px] leading-[10px]">{{ time }}</span>
      </div>
      <hr class="w-0 h-8 border-[1.5px] border-warning mr-5" />
      <div>
        <div class="flex mb-[5px]">
          <div class="flex items-center mr-[5px]">
            <img
              :src="require(`../../assets/imgs/${countries[0]}.svg`)"
              :alt="countries[0]"
              class="w-[15px] mr-[5px]"
            />
            <span class="capitalize">{{ countries[0] }}</span>
          </div>
          <img src="../../assets/imgs/vs.svg" alt="VS" class="w-[15px] mr-[5px] dark:hidden" />
          <img src="../../assets/imgs/vs-dark.svg" alt="VS" class="w-[15px] mr-[5px] hidden dark:flex" />
          <div class="flex items-center">
            <img
              :src="require(`../../assets/imgs/${countries[1]}.svg`)"
              :alt="countries[1]"
              class="w-[15px] mr-[5px]"
            />
            <span class="capitalize">{{ countries[1] }}</span>
          </div>
        </div>
        <span class="text-muted">{{ name }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex mr-5">
        <img src="../../assets/imgs/play.svg" alt="Play" class="w-[15px] mr-[10px] cursor-pointer" />
        <img src="../../assets/imgs/chart.svg" alt="Chart" class="w-[15px] cursor-pointer" />
      </div>
      <div class="flex">
        <div v-for="(point, key) in points" :key="key" class="mr-[7px] last:mr-0">
          <PointCard
            :flag="point[2]"
            :val1="point[0]"
            :val2="point[1]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PointCard from "./PointCard.vue";
export default {
  name: "match-row-component",
  components: {
    PointCard
  },
  props: {
    id: Number,
    isPlaying: Boolean,
    date: String,
    time: String,
    countries: Array,
    name: String,
    points: Array
  },
  methods: {
    handleRedirect(id) {
      this.$router.push(`/match/${id}`);
    }
  }
};
</script>