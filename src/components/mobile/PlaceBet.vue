<template>
  <div
    class="relative p-[10px] overflow-hidden border rounded-[5px]"
    :class="{
      'bg-blue-bg dark:bg-lighter-blue border-blue': flag,
      'bg-pink-bg dark:bg-lighter-pink border-pink': !flag,
    }"
  >
    <div class="font-semibold text-[10px] leading-[14px] text-header-bg dark:text-white" v-if="!spin">
      <div class="grid grid-cols-2 gap-[11px]">
        <div>
          <span class="block ml-6 mb-1">Odds</span>
          <div class="flex items-center">
            <button
              class="w-[19px] shrink-0 h-6 bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[5px] mr-[3px] dark:text-warning text-xl leading-[15px]"
              @click="minus('odds')"
            >-</button>
            <input type="number" class="w-full h-[30px] px-1 rounded-[5px] bg-white dark:bg-input-color outline-none mr-[3px]" :value="odds" @change="$emit('change', 'odds', $event.target.value)">
            <button class="w-[19px] shrink-0 h-6 bg-warning rounded-[5px] dark:text-header-bg text-xl leading-[15px]" @click="plus('odds')">+</button>
          </div>
        </div>
        <div>
          <span class="block ml-6 mb-1">Stake</span>
          <div class="flex items-center">
            <button
              class="w-[19px] shrink-0 h-6 bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[5px] mr-[3px] dark:text-warning text-xl leading-[15px]"
              @click="minus('stake')"
            >-</button>
            <input type="number" class="w-full h-[30px] px-1 rounded-[5px] bg-white dark:bg-input-color outline-none mr-[3px]" :value="stake" @change="$emit('change', 'stake', $event.target.value)">
            <button class="w-[19px] shrink-0 h-6 bg-warning rounded-[5px] dark:text-header-bg text-xl leading-[15px]" @click="plus('stake')">+</button>
          </div>
        </div>
      </div>
      <div class="flex justify-end mb-[5.31px]">
        <span class="cursor-pointer" @click="clear()">Clean</span>
      </div>
      <div class="grid grid-cols-6 gap-x-[4.5px] mb-1 dark:text-warning">
        <button class="h-[30px] bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[5px]" @click="setStake(100)">+100</button>
        <button class="h-[30px] bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[5px]" @click="setStake(500)">+500</button>
        <button class="h-[30px] bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[5px]" @click="setStake(1000)">+1,000</button>
        <button class="h-[30px] bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[5px]" @click="setStake(5000)">+5,000</button>
        <button class="h-[30px] bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[5px]" @click="setStake(10000)">+10,000</button>
        <button class="h-[30px] bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[5px]" @click="setStake(50000)">+50,000</button>
      </div>
      <div class="flex justify-end items-center">
        <div class="flex flex-col mr-[11px] dark:text-white">
          <span>Profit</span>
          <span>INR. <span class="text-success">100.00</span></span>
        </div>
        <button class="w-[105px] h-6 bg-warning border border-warning rounded-[5px] dark:text-header-bg mr-[5px]" @click="placeBet()">Place Bet</button>
        <button class="w-[93px] h-6 border border-black dark:border-warning rounded-[5px] dark:text-warning" @click="$emit('close')">Cancel</button>
      </div>
    </div>
    <div class="min-h-[131.3px] flex flex-col justify-between items-center" v-if="spin">
      <div class="w-full flex justify-between font-semibold text-xs text-header-bg dark:text-white">
        <span>Your Odds: {{ odds }}</span>
        <span>Your Stake: {{ stake }}</span>
      </div>
      <div class="relative">
        <div
          class="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current dark:border-white border-r-white dark:border-r-black align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-xl dark:text-white">{{ cooldown }}</span>
      </div>
      <div class="flex flex-col font-semibold text-sm dark:text-white opacity-60 text-center">
        <span>Please wait.</span>
        <span>We are processing your bets.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-place-bet-component",
  props: {
    flag: Boolean,
    odds: Number,
    stake: Number,
  },
  data: function() {
    return {
      spin: false,
      cooldown: 5
    }
  },
  methods: {
    setStake(val) {
      this.$emit('change', 'stake', this.stake + val);
    },
    clear() {
      this.$emit('change', 'stake', 0);
    },
    plus(param) {
      let val = param == 'odds' ? Math.round((this.odds + 0.01) * 100) / 100 : this.stake + 1
      this.$emit('change', param, val);
    },
    minus(param) {
      let val = param == 'odds' ? Math.round((this.odds - 0.01) * 100) / 100 : this.stake - 1;
      val >= 0 && this.$emit('change', param, val);
    },
    placeBet() {
      this.spin = true;
      this.cooldown = 5;
      let timing = setInterval(() => {
        this.cooldown -= 1;
      }, 1000);
      setTimeout(() => {
        clearTimeout(timing);
        this.showToastr();
        this.spin = false;
      }, 5000);
    },
    showToastr() {
      this.$toast.success({
        title:'',
        message:'Bet placed successfully'
      });
    },
  }
}
</script>