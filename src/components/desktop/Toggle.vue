<template>
  <div
    class="w-[30px] h-[16.8px] p-[2px] rounded-full cursor-pointer transition-all"
    :class="{
      'bg-secondary dark:bg-light-grey': !flag,
      'bg-warning': flag,
    }"
    @click="handleToggle()"
  >
    <div
      class="h-full aspect-square  rounded-full dark:bg-header-bg transition-all"
      :class="{
        'ml-0 bg-lighter-warning': !flag,
        'ml-[calc(100%-12.8px)] bg-white': flag,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "toggle-component",
  data: function() {
    return {
      flag: false,
    }
  },
  methods: {
    handleToggle() {
      this.flag = !this.flag;
      this.$emit('toggle', this.flag);
    }
  }
}
</script>