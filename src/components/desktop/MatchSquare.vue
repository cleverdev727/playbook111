<template>
  <div class="relative px-[21px] pt-5 pb-10 bg-light-warning dark:bg-header-bg border border-square-border rounded-[5px] mb-[10px]">
    <div class="absolute flex flex-col justify-center w-[560px] h-[70px] left-1/2 -top-3 -translate-x-1/2 bg-ribbon text-center text-sm text-header-bg">
      <span class="font-bold mb-[5px]">{{ name }}</span>
      <span class="font-semibold">{{ date }}</span>
    </div>
    <div class="flex justify-between items-center mb-10">
      <div class="flex items-center h-[33px] px-[15px] bg-warning rounded-[5px] cursor-pointer">
        <img src="../../assets/imgs/i.svg" alt="info" class="w-5 mr-[10px]">
        <span class="font-semibold text-[15px] leading-5">Rules</span>
      </div>
      <div class="flex items-center">
        <img src="../../assets/imgs/live1.svg" alt="Live" class="h-5 mr-[10px]">
        <span class="font-semibold text-[15px] leading-5 text-warning">LIVE</span>
      </div>
    </div>
    <div class="relative flex justify-center border-b border-header-bg mb-[50px]">
      <div class="relative flex justify-between pb-[29px] max-w-[1100px] w-full">
        <div class="relative mr-[50px]">
          <img src="../../assets/imgs/tab-half.png" alt="tab-half" class="">
          <div class="absolute flex items-center right-[70px] top-1/2 -translate-y-1/2">
            <img :src="require(`../../assets/imgs/${countries[0]}.svg`)" alt="India" class="w-[33px] mr-[10px]">
            <span class="font-extrabold text-xl text-header-bg uppercase">{{ countries[0] }}</span>
          </div>
        </div>
        <img src="../../assets/imgs/vs.svg" alt="VS" class="absolute w-11 left-1/2 -translate-x-1/2 bottom-1/2 dark:hidden">
        <img src="../../assets/imgs/vs-dark.svg" alt="VS" class="absolute w-11 left-1/2 -translate-x-1/2 bottom-1/2 hidden dark:flex">
        <div class="relative">
          <img src="../../assets/imgs/tab-half.png" alt="tab-half" class="rotateY-180">
          <div class="absolute flex items-center left-[70px] top-1/2 -translate-y-1/2">
            <img :src="require(`../../assets/imgs/${countries[1]}.svg`)" alt="India" class="w-[33px] mr-[10px]">
            <span class="font-extrabold text-xl text-header-bg uppercase">{{ countries[1] }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center h-[105px]">
      <iframe src="/frame_content.html" frameborder="0" class="w-full h-full"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "match-square-component",
  props: {
    name: String,
    date: String,
    countries: Array,
  }
}
</script>