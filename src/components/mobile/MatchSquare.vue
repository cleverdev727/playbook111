<template>
  <div class="relative px-[5px] pt-[10px] pb-5 bg-light-warning dark:bg-header-bg border border-square-border rounded-[5px] text-[8px] leading-[11px] text-header-bg">
    <div class="absolute flex flex-col justify-center w-[227.72px] h-[33.17px] left-1/2 -top-[6.45px] -translate-x-1/2 bg-ribbon bg-100% text-center">
      <span class="font-bold">{{ name }}</span>
      <span class="font-semibold">{{ date }}</span>
    </div>
    <div class="flex justify-between items-center mb-[25px]">
      <div class="flex justify-center items-center w-4 h-4 bg-warning rounded-[5px] cursor-pointer">
        <img src="../../assets/imgs/i.svg" alt="info" class="w-2">
      </div>
        <img src="../../assets/imgs/live1.svg" alt="Live" class="w-[17.85px]">
    </div>
    <div class="relative flex justify-center border-b border-header-bg mb-[19.63px]">
      <div class="relative flex justify-between max-w-sm w-full pb-[10px]">
        <div class="relative mr-6">
          <img src="../../assets/imgs/tab-half.png" alt="tab-half" class="w-[138px] h-[25px]">
          <div class="absolute flex items-center right-[30px] top-1/2 -translate-y-1/2">
            <img :src="require(`../../assets/imgs/${countries[0]}.svg`)" :alt="countries[0]" class="w-[14.81px] mr-[7.22px]">
            <span class="font-bold uppercase">{{ countries[0] }}</span>
          </div>
        </div>
        <img src="../../assets/imgs/vs.svg" alt="VS" class="absolute w-[14.81px] left-1/2 -translate-x-1/2 bottom-8 dark:hidden">
        <img src="../../assets/imgs/vs-dark.svg" alt="VS" class="absolute w-[14.81px] left-1/2 -translate-x-1/2 bottom-8 hidden dark:flex">
        <div class="relative">
          <img src="../../assets/imgs/tab-half.png" alt="tab-half" class="rotateY-180 w-[138px] h-[25px]">
          <div class="absolute flex items-center left-[30px] top-1/2 -translate-y-1/2">
            <img :src="require(`../../assets/imgs/${countries[1]}.svg`)" :alt="countries[1]" class="w-[14.81px] mr-[7.22px]">
            <span class="font-bold uppercase">{{ countries[1] }}</span>
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
  name: "mobile-match-square-component",
  props: {
    name: String,
    date: String,
    countries: Array,
  }
}
</script>