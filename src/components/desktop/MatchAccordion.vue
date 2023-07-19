<template>
  <div class="overflow-hidden rounded-[5px]">
    <div class="flex justify-between items-center px-5 py-[5px] bg-warning cursor-pointer">
      <span class="font-semibold text-base text-header-bg">{{ name }}</span>
      <div class="flex items-center">
        <img src="../../assets/imgs/info-square.svg" alt="info" class="w-[21px] mr-[7px] cursor-pointer">
        <img
          src="../../assets/imgs/minus.svg"
          alt="minus"
          class="w-[10px] cursor-pointer"
          :class="{'hidden': !open}"
          @click="toggle()"
        >
        <img
          src="../../assets/imgs/plus.svg"
          alt="plus"
          class="w-[10px] cursor-pointer"
          :class="{'hidden': open}"
          @click="toggle()"
        >
      </div>
    </div>
    <div class="overflow-hidden transition-all" :class="{ 'max-h-0': !open, ' max-h-[1000px]': open }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "match-accordion-component",
  props: {
    name: String,
  },
  data: function() {
    return {
      open: true,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
}
</script>