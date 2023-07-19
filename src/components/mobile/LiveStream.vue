<template>
  <div>
    <div
      class="flex justify-between items-center px-[10px] h-6 bg-warning rounded-[5px] mb-[1px] cursor-pointer"
      @click="handleClick()"
    >
      <span class="font-bold text-[10px] leading-[14px] text-header-bg">Live Stream</span>
      <img
        src="../../assets/imgs/arrow-down.svg"
        alt="arrow"
        class="w-3 transition"
        :class="{ '-rotate-90': open }"
      >
    </div>
    <div
      class="overflow-hidden transition-all"
      :class="{
        'max-h-0': !open,
        'max-h-[350px]': open,
      }"
    >
      <video :src="link" class="w-full" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "live-stream-component",
  props: {
    link: String,
  },
  data: function() {
    return {
      open: true
    }
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    }
  }
}
</script>