<template>
  <div class="rounded-[5px] overflow-hidden">
    <div
      class="flex justify-between items-center h-[29px] px-[10px] bg-warning cursor-pointer"
      @click="handleclick()"
    >
      <span class="font-bold text-[10px] leading-[14px] text-header-bg">{{ name }}</span>
      <img
        src="../../assets/imgs/arrow-down.svg"
        alt
        class="w-3 transition"
        :class="{'-rotate-90': !open}"
      />
    </div>
    <div
      class="overflow-hidden transition-all"
      :class="{ 'max-h-0': !open, ' max-h-[1000px]': open }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-simple-accordion-component",
  props: {
    name: String
  },
  data: function() {
    return {
      open: true
    };
  },
  methods: {
    handleclick() {
      this.open = !this.open;
    }
  }
};
</script>