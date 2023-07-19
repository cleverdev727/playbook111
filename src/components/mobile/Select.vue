<template>
  <div class="relative font-bold text-[10px] leading-[14px] text-header-bg">
    <div
      class="flex justify-between items-center px-[10px] h-[30px] bg-warning rounded-[3px] mb-2 cursor-pointer"
      @click="handleClick()"
    >
      <div class="flex items-center">
        <img :src="require(`../../assets/imgs/${curType}.svg`)" :alt="curType" class="w-[13px] mr-[5px] brightness-0">
        <span class="uppercase">{{ curType }}</span>
      </div>
      <img src="../../assets/imgs/mobile-arrow-down.svg" alt="arrow" class="w-[14px] transition" :class="{'-rotate-90': this.open}">
    </div>
    <ul
      class="absolute w-full overflow-hidden bg-white rounded-[3px] transition-all z-50"
      :class="{
        'max-h-0': !open,
        'max-h-[500px]': open,
      }"
    >
      <li
        v-for="(type, index) in typeAry"
        :key="index"
        class="flex px-[10px] py-3 cursor-pointer hover:bg-light-grey"
        @click="handleSelect(type)"
      >
        <img :src="require(`../../assets/imgs/${type}.svg`)" :alt="type" class="w-[13px] mr-[5px] brightness-0" />
        <span class="uppercase">{{ type }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mobile-select-component',
  props: {
    typeAry: Array,
  },
  data() {
    return {
      open: false,
      curType: 'cricket'
    }
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    },
    handleSelect(type) {
      this.curType = type;
      this.open = false;
      this.$emit('changeType', type);
    }
  }
}
</script>