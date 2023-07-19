<template>
  <div class="rounded-[5px] overflow-hidden font-semibold text-xs text-header-bg dark:text-white">
    <div
      class="flex justify-between overflow-hidden transition-all"
      :class="{
        'max-h-[26px] mb-[1px]': open,
        'max-h-0': !open
      }"
    >
      <div class="flex items-center text-center h-[26px] px-5 rounded-t-[5px] bg-middle-lighter-warning dark:bg-lighter-secondary">
        <span>My Bets</span>
      </div>
      <div
        class="flex items-center text-center h-[26px] px-5 rounded-t-[5px] bg-middle-lighter-warning dark:bg-lighter-secondary"
        v-if="averageFlag"
      >
        <CheckSquare class="mr-[10px]" />
        <span >Average odds</span>
      </div>
    </div>
    <div class="flex h-[29px] justify-between items-center px-5 bg-warning cursor-pointer" @click="handleClick()">
      <span class="text-sm dark:text-header-bg">{{ name }}</span>
      <img
        src="../../assets/imgs/arrow-down.svg"
        alt="arrow"
        class="w-3 transition"
        :class="{
          '-rotate-90': !open
        }"
      >
    </div>
    <div
      class="overflow-hidden transition-all"
      :class="{
        'max-h-0': !open,
        'max-h-36': open
      }"
    >
      <div class="flex items-center h-[26px] bg-light-warning dark:bg-light-dark">
        <span class="grow px-5">Market</span>
        <span class="w-[132px] text-center">odds</span>
        <span class="w-[132px] text-center">stake</span>
      </div>
      <div>
        <div
          class="flex items-center h-10 odd:bg-light-pink even:bg-light-blue dark:bg-header-bg dark:odd:text-light-danger dark:even:text-blue mb-[1px] last:mb-0"
          v-for="(row, key) in rows"
          :key="key"
        >
          <span class="grow px-5 dark:text-white">{{ row[0] }}</span>
          <span class="w-[132px] text-center">{{ row[1] }}</span>
          <span class="w-[132px] text-center">{{ row[2] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckSquare from './CheckSquare.vue';

export default {
    name: "bet-result-component",
    components: { CheckSquare },
    props: {
      name: String,
      rows: Array,
      flag: Boolean,
      averageFlag: Boolean,
    },
    data: function() {
      return {
        open: this.flag,
      }
    },
    methods: {
      handleClick() {
        this.open = !this.open;
      }
    }
}
</script>