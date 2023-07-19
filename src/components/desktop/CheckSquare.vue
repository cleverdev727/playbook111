<template>
  <div
    class="flex justify-center items-center w-[15px] h-[15px] rounded-[2px] cursor-pointer"
    :class="{
      'bg-secondary dark:bg-light-grey': !flag,
      'bg-warning': flag
    }"
    @click="handleclick()"
  >
    <img src="../../assets/imgs/tick.svg" alt="tick" class="w-[9px]" v-if="flag">
  </div>
</template>

<script>
export default {
  name: "check-square-component",
  data: function() {
    return {
      flag: false,
    }
  },
  methods: {
    handleclick() {
      this.flag = !this.flag;
    }
  }
}
</script>