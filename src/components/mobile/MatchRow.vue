<template>
  <div class="relative" @click="handleRedirect(id)">
    <div class="flex justify-between h-6 mb-[1px]">
      <div class="flex overflow-hidden rounded-t-[5px]">
        <div class="flex justify-center items-center w-[13px] h-6 bg-warning" v-if="isPlaying">
          <span class="font-bold text-[8px] leading-[11px] text-black -rotate-90">LIVE</span>
        </div>
        <div class="flex items-center px-[10px] bg-more-light-warning dark:bg-lighter-secondary">
          <span class="font-semibold text-[10px] leading-[14px] text-header-bg dark:text-white">{{ name }}</span>
        </div>
      </div>
      <div class="flex justify-between items-center px-[10px] rounded-t-[5px] bg-warning">
        <span class="text-header-bg dark:text-header-bg">{{ date }} {{ time }}</span>
      </div>
    </div>
    <div class="px-[2px] bg-white dark:bg-header-bg rounded-b-[5px]">
      <div class="flex justify-between p-2 border-b border-light-grey dark:border-input-color">
        <div class="flex items-center">
          <img :src="require(`../../assets/imgs/${countries[0]}.svg`)" :alt="countries[0]" class="w-[13px] mr-1" />
          <span class="font-bold text-xs capitalize">{{ countries[0] }}</span>
        </div>
        <div class="flex items-center">
          <img src="../../assets/imgs/play.svg" alt="play" class="w-[10px] mr-[3px]">
          <img src="../../assets/imgs/chart.svg" alt="chart" class="w-[10px] mr-[10px]">
          <PointCard
            :flag="points[0][2]"
            :val1="points[0][0]"
            :val2="points[0][1]"
            class="mr-[5px]"
          />
          <PointCard
            :flag="points[1][2]"
            :val1="points[1][0]"
            :val2="points[1][1]"
            class="mr-[5px]"
          />
        </div>
      </div>
      <div class="flex justify-between p-2">
        <div class="flex items-center">
          <img :src="require(`../../assets/imgs/${countries[1]}.svg`)" :alt="countries[1]" class="w-[13px] mr-1" />
          <span class="font-bold text-xs capitalize">{{ countries[1] }}</span>
        </div>
        <div class="flex items-center">
          <img src="../../assets/imgs/play.svg" alt="play" class="w-[10px] mr-[3px]">
          <img src="../../assets/imgs/chart.svg" alt="chart" class="w-[10px] mr-[10px]">
          <PointCard
            :flag="points[2][2]"
            :val1="points[2][0]"
            :val2="points[2][1]"
            class="mr-[5px]"
          />
          <PointCard
            :flag="points[3][2]"
            :val1="points[3][0]"
            :val2="points[3][1]"
            class="mr-[5px]"
          />
        </div>
      </div>
    </div>

    <!-- <div
      class="absolute flex items-center justify-center w-10 h-4 left-6 top-0 -translate-x-1/2 -translate-y-1/2 bg-header-bg dark:bg-warning rounded-sm"
      v-if="isPlaying"
    >
      <span class="font-bold text-warning dark:text-header-bg mb-[0.77px]">LIVE</span>
    </div>
    <div class="flex flex-col rounded-[5px] overflow-hidden">
      <div class="flex flex-col w-full justify-start p-2 bg-light-grey dark:bg-lightest-warning">
        <span class="font-bold text-xs">{{ name }}</span>
        <span class="text-[10px]">{{ time }} {{ date }}</span>
      </div>
      <div class="flex justify-between p-2 bg-white dark:bg-dark-row-bg border-b border-header-bg dark:border-white">
        <div class="flex items-center">
          <img :src="require(`../../assets/imgs/${countries[0]}.svg`)" :alt="countries[0]" class="w-[13px] mr-1" />
          <span class="font-bold text-xs capitalize">{{ countries[0] }}</span>
        </div>
        <div class="flex">
          <PointCard
            :flag="points[0][2]"
            :val1="points[0][0]"
            :val2="points[0][1]"
            class="mr-[5px]"
          />
          <PointCard
            :flag="points[1][2]"
            :val1="points[1][0]"
            :val2="points[1][1]"
            class="mr-[5px]"
          />
        </div>
      </div>
      <div class="flex justify-between p-2 bg-white dark:bg-dark-row-bg">
        <div class="flex items-center">
          <img :src="require(`../../assets/imgs/${countries[1]}.svg`)" :alt="countries[1]" class="w-[13px] mr-1" />
          <span class="font-bold text-xs capitalize">{{ countries[1] }}</span>
        </div>
        <div class="flex">
          <PointCard
            :flag="points[2][2]"
            :val1="points[2][0]"
            :val2="points[2][1]"
            class="mr-[5px]"
          />
          <PointCard
            :flag="points[3][2]"
            :val1="points[3][0]"
            :val2="points[3][1]"
            class="mr-[5px]"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import PointCard from './PointCard.vue'
export default {
  name: "mobile-match-row-component",
  components: {
    PointCard,
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
      this.$router.push(`/mobile/match/${id}`);
    }
  }
}
</script>