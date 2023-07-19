<template>
  <div
    class="pl-[10px] pr-[15px] py-[10px] bg-warning dark:bg-header-bg border border-square-border rounded-[10px]"
  >
    <div
      class="flex justify-between font-montserrat font-semibold text-base text-header-bg dark:text-white pr-5 pb-[10px] mb-[10px] border-b border-header-bg dark:border-square-border"
    >
      <div class="flex items-center">
        <img
          :src="require(`../../assets/imgs/${type}.svg`)"
          :alt="type"
          class="brightness-0 mr-[11px] h-[25px] dark:invert"
        />
        <span class="uppercase">{{ `${type} (${num})` }} </span>
      </div>
      <div class="relative flex w-[635px] items-center">
        <span class="w-1/3 text-center">{{ scores[0] }}</span>
        <span class="w-1/3 text-center">X</span>
        <span class="w-1/3 text-center">{{ scores[1] }}</span>
        <img
          src="../../assets/imgs/arrow-down.svg"
          alt="arrow"
          class="absolute w-[14px] bottom-0 right-0 cursor-pointer transition dark:invert"
          :class="{
            '-rotate-90': !open
          }"
          @click="handleClick()"
        />
      </div>
    </div>
    <div
      class="pl-2 font-semibold text-sm text-center text-header-bg dark:text-white overflow-hidden transition-all"
      :class="{
        'max-h-0' : !open,
        'opacity-100 max-h-[1000px]' : open,
      }"
    >
      <div v-for="(row, key) in matchRows" :key="key" class="mb-[5px] last:mb-0">
        <MatchRow v-bind="row" />
      </div>
    </div>
  </div>
</template>

<script>
import MatchRow from './MatchRow.vue';
export default {
  name: 'accordion-component',
  components: {
    MatchRow
  },
  props: {
    type: String,
    num: Number,
    scores: Array,
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