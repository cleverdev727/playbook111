<template>
  <div class="flex justify-between items-center bg-light-warning dark:bg-light-dark px-5 py-[5px] font-semibold text-sm text-header-bg dark:text-white">
    <span>{{ texts[0] }}</span>
    <div class="grid grid-cols-2 text-center" :style="`width: ${width}px`">
      <div>{{ texts[1] }}</div>
      <div>{{ texts[2] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "market-bar-component",
  props: {
    texts: Array,
    width: Number,
  }
}
</script>