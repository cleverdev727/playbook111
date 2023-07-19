<template>
  <div class="flex flex-col items-center pt-[90px]">
    <img src="../../assets/imgs/block.png" alt="block" class="h-[140px] mb-5">
    <span class="max-w-[273px] mb-[30px] text-center font-semibold text-[10px] leading-[14px] text-header-bg dark:text-warning">
      Sorry, but you don't have permission to access this page.
      You can go back to previous page
    </span>
    <router-link to="/mobile">
      <button class="flex items-center justify-center w-[173px] h-[35px] bg-warning rounded-[5px]">
        <img src="../../assets/imgs/double-arrow.svg" alt="double-arrow" class="w-4 mr-[10px]">
        <span class="font-bold text-xs text-header-bg">BACK TO HOME</span>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'mobile-error403-view',
}
</script>