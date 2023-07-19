<template>
  <div class="bg-header-bg h-[38px] md:h-[65px] flex justify-between items-center md:justify-end px-[6px] md:pl-24 md:pr-10">
    <div class="flex md:hidden justify-center items-center w-8 h-6 border border-warning rounded-md cursor-pointer">
      <img src="../../../assets/imgs/arrow-left.svg" alt="Back">
    </div>
    <div class="flex items-center font-semibold text-[8px] md:text-[15px] leading-[11px] md:leading-5 text-warning">
      <div
        class="flex h-6 md:h-10 items-center justify-center border border-warning rounded-md px-2 md:px-5 mr-[6px] md:mr-5 cursor-pointer"
      >
        <img src="../../../assets/imgs/wallet.svg" alt="wallet" class="w-[13.04px] md:w-[22px] mr-[6px] md:mr-[10px]" />
        <span>₹1503.46</span>
      </div>
      <div class="flex h-6 md:h-10 items-center border border-warning rounded-md px-2 md:px-5 mr-[6px] md:mr-5 cursor-pointer">
        <router-link to="/bethistory">
          <span>MY BETS</span>
        </router-link>
      </div>
      <div class="flex h-6 md:h-10 items-center border border-warning rounded-md px-2 md:px-5 mr-[6px] md:mr-5 cursor-pointer">
        <img src="../../../assets/imgs/refresh.svg" alt="refresh" class="w-[13.04px] md:w-[22px]" />
      </div>
      <div class="flex h-6 md:h-10 items-center bg-warning rounded-md px-2 md:px-5 cursor-pointer" @click="$emit('switchTheme')">
        <img src="../../../assets/imgs/moon.svg" alt="moon" class="w-[13.04px] md:w-[22px] dark:hidden" />
        <img src="../../../assets/imgs/sun.png" alt="sun" class="w-[13.04px] md:w-[22px] hidden dark:flex" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-component"
};
</script>