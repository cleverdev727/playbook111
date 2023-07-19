<template>
  <div>
    <div
      class="flex justify-between items-center px-[10px] bg-warning dark:bg-more-light-warning rounded-[3px] h-[30px] font-montserrat font-bold text-[12px] leading-[10px] text-header-bg dark:text-white mb-[5px]"
      @click="handleClick()"
    >
      <div class="flex items-center">
        <img
          :src="require(`../../assets/imgs/${type}.svg`)"
          :alt="type"
          class="brightness-0 mr-[5px] h-[15px] dark:brightness-100"
        />
        <span class="uppercase dark:text-warning">{{ `${type} (${num})` }}</span>
      </div>
      <div class="flex items-end">
        <img
          src="../../assets/imgs/mobile-tab-arrow-down.svg"
          alt="arrow"
          class="w-[14px] bottom-0 right-0 cursor-pointer transition dark:invert"
          :class="{
            '-rotate-90': !open
          }"
        />
      </div>
    </div>
    <div
      class="font-semibold text-[9px] leading-[11px] text-center text-header-bg dark:text-white  overflow-y-hidden transition-all"
      :class="{
        'max-h-0' : !open,
        'opacity-100 max-h-[2000px]' : open,
      }"
    >
      <div v-for="(row, key) in matchRows" :key="key" class="mb-3 last:mb-0 first:mt-2">
        <MatchRow
          v-bind="row"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MatchRow from './MatchRow.vue';
export default {
  name: 'mobile-accordion-component',
  components: {
    MatchRow
  },
  props: {
    type: String,
    num: Number,
    matchRows: Array
  },
  data: function() {
    return {
      open: true,
    }
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    }
  }
}
</script>