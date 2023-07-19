<template>
  <div
    class="flex flex-col justify-center items-center w-[100px] h-[41px] border rounded-[5px] cursor-pointer"
    :class="{
      'bg-blue-bg border-blue': flag,
      'bg-pink-bg border-pink': !flag,
    }"
    @click="$emit('click', flag, val1)"
  >
    <span class="font-bold text-sm" v-if="val1 != 0">{{ val1 }}</span>
    <span class="text-xs" v-if="val1 != 0">{{ val2 / 1000 }}k</span>
    <img src="../../assets/imgs/blue-lock.svg" alt="lock" v-if="val1 == 0 && flag" class="w-5 dark:hidden">
    <img src="../../assets/imgs/dark-blue-lock.svg" alt="lock" v-if="val1 == 0 && flag" class="w-5 hidden dark:flex">
    <img src="../../assets/imgs/pink-lock.svg" alt="lock" v-if="val1 == 0 && !flag" class="w-5 dark:hidden">
    <img src="../../assets/imgs/dark-pink-lock.svg" alt="lock" v-if="val1 == 0 && !flag" class="w-5 hidden dark:flex">
  </div>
</template>

<script>
export default {
  name: "point-card-component",
  props: {
    flag: Boolean,
    val1: Number,
    val2: Number
  }
}
</script>