<template>
  <div>
    <div class="flex items-center px-[10px] py-[5px] bg-lighter-warning dark:bg-header-bg dark:text-white">
      <div class="flex grow items-center justify-between mr-2 font-bold text-header-bg text-[8px] leading-[11px]">
        <div class="flex flex-col">
          <span class="font-semibold dark:text-white">{{ name }}</span>
          <span
            :class="{
              'text-green-600': currentExposure >= 0,
              'text-red-600': currentExposure < 0,
            }"
          >{{ currentExposure }}</span>
        </div>
        <span
          :class="{
            'text-green-600': newExposure >= 0,
            'text-red-600': newExposure < 0,
          }"
        >{{ newExposure }}</span>
      </div>
      <div class="flex">
        <PointCard
          v-for="(point, key) in points"
          :key="key"
          :flag="points.length == 1 || key + 1 <= points.length / 2"
          :val1="point[0]"
          :val2="point[1]"
          class="mr-[5px] last:mr-0"
          @placebet="handleClick"
        />
      </div>
    </div>
    <PlaceBet
      :flag="flag"
      :odds="odds"
      :stake="stake"
      :class="{
        'max-h-0 py-0 border-0': !open,
        'max-h-48': open
      }"
      @close="close()"
      @change="change"
    />
  </div>
</template>

<script>
import PlaceBet from './PlaceBet.vue';
import PointCard from './PointCard.vue';
export default {
  name: "mobile-bet-row-component",
  components: {
    PointCard,
    PlaceBet
},
  props: {
    name: String,
    points: Array,
    placeBetFlag: Boolean,
    currentExposure: Number,
    newExposure: Number,
  },
  data: function() {
    return {
      flag: true,
      open: false,
      odds: 0,
      stake: 0,
    }
  },
  methods: {
    handleClick(flag, val1) {
      if (this.placeBetFlag === false) {
        return false;
      }
      this.flag = flag;
      this.odds = val1;
      this.open = true;
    },
    close() {
      this.open = false;
    },
    change(type, val) {
      type === 'odds' && (this.odds = val * 1);
      type === 'stake' && (this.stake = val * 1);
    }
  }
}
</script>