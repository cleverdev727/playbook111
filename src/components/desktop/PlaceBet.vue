<template>
  <div
    class="relative flex p-5 overflow-hidden"
    :class="{
      'bg-light-blue dark:bg-lighter-blue': flag,
      'bg-light-pink dark:bg-lighter-pink': !flag,
      'justify-center': spin,
      'justify-end': !spin,
    }"
  >
    <button
      class="absolute flex justify-center items-center w-5 aspect-square bg-warning rounded-[5px] top-[10px] right-5"
      @click="$emit('close')"
      v-if="!spin"
    >
      <img src="../../assets/imgs/close.svg" alt="close" class="w-[8.21px]" />
    </button>
    <div class="w-[642px] font-semibold text-sm text-header-bg dark:text-white" v-if="!spin">
      <div class="flex mb-[2px]">
        <div class="mr-[14px]">
          <span class="block ml-[17px] mb-[2px] text-xs">Odds</span>
          <div class="flex items-center">
            <button
              class="w-3 h-[21px] shrink-0 bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[2px] mr-[5px] dark:text-warning"
              @click="minus('odds')"
            >-</button>
            <input
              type="number"
              class="w-[280px] h-[30px] px-2 rounded-[5px] bg-white dark:bg-input-color outline-none mr-[5px]"
              :value="odds"
              @change="$emit('change', 'odds', $event.target.value)"
            />
            <button
              class="w-3 h-[21px] shrink-0 bg-warning rounded-[2px] dark:text-header-bg"
              @click="plus('odds')"
            >+</button>
          </div>
        </div>
        <div class="flex flex-col grow">
          <span class="block ml-[17px] mb-[2px] text-xs">Stake</span>
          <div class="flex items-center">
            <button
              class="w-3 h-[21px] shrink-0 bg-warning dark:bg-transparent dark:border dark:border-warning rounded-[2px] mr-[5px] dark:text-warning"
              @click="minus('stake')"
            >-</button>
            <input
              type="number"
              class="block w-[280px] h-[30px] px-2 rounded-[5px] bg-white dark:bg-input-color outline-none mr-[5px]"
              :value="stake"
              @change="$emit('change', 'stake', $event.target.value)"
            />
            <button
              class="w-3 h-[21px] shrink-0 bg-warning rounded-[2px] dark:text-header-bg"
              @click="plus('stake')"
            >+</button>
          </div>
        </div>
      </div>
      <div class="flex justify-end mb-[10px]">
        <span class="text-xs cursor-pointer" @click="clear()">Clean</span>
      </div>
      <div class="grid grid-cols-6 gap-[5px] mb-[10px] dark:text-warning">
        <button
          class="w-[103px] h-[29px] bg-warning dark:bg-row-hover-bg dark:border dark:border-warning rounded-[5px]"
          @click="setStake(100)"
        >+100</button>
        <button
          class="w-[103px] h-[29px] bg-warning dark:bg-row-hover-bg dark:border dark:border-warning rounded-[5px]"
          @click="setStake(500)"
        >+500</button>
        <button
          class="w-[103px] h-[29px] bg-warning dark:bg-row-hover-bg dark:border dark:border-warning rounded-[5px]"
          @click="setStake(1000)"
        >+1,000</button>
        <button
          class="w-[103px] h-[29px] bg-warning dark:bg-row-hover-bg dark:border dark:border-warning rounded-[5px]"
          @click="setStake(5000)"
        >+5,000</button>
        <button
          class="w-[103px] h-[29px] bg-warning dark:bg-row-hover-bg dark:border dark:border-warning rounded-[5px]"
          @click="setStake(10000)"
        >+10,000</button>
        <button
          class="w-[103px] h-[29px] bg-warning dark:bg-row-hover-bg dark:border dark:border-warning rounded-[5px]"
          @click="setStake(50000)"
        >+50,000</button>
      </div>
      <div class="flex justify-end items-center">
        <div class="flex items-center mr-[50px] text-xs">
          <span class="mr-[10px]">Profit</span>
          <span>
            INR.
            <span class="text-success">100.00</span>
          </span>
        </div>
        <button
          class="w-[378px] h-[30px] bg-warning border border-warning dark:bg-row-hover-bg rounded-[5px] dark:text-warning"
          @click="placeBet()"
        >Place Bet</button>
      </div>
    </div>
    <div class="w-[253px] min-h-[145px] flex flex-col justify-between items-center" v-if="spin">
      <div class="w-full flex justify-between font-semibold text-sm text-header-bg dark:text-white">
        <span>Your Odds: {{ odds }}</span>
        <span>Your Stake: {{ stake }}</span>
      </div>
      <div class="relative">
        <div
          class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current dark:border-white border-r-white dark:border-r-black align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl dark:text-white">{{ cooldown }}</span>
      </div>
      <div class="flex flex-col font-semibold text-lg dark:text-white opacity-60 text-center">
        <span>Please wait.</span>
        <span>We are processing your bets.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "place-bet-component",
  props: {
    flag: Boolean,
    odds: Number,
    stake: Number
  },
  data: function() {
    return {
      spin: false,
      cooldown: 5
    };
  },
  methods: {
    setStake(val) {
      this.$emit("change", "stake", this.stake + val);
    },
    clear() {
      this.$emit("change", "stake", 0);
    },
    plus(param) {
      let val =
        param == "odds"
          ? Math.round((this.odds + 0.01) * 100) / 100
          : this.stake + 1;
      this.$emit("change", param, val);
    },
    minus(param) {
      let val =
        param == "odds"
          ? Math.round((this.odds - 0.01) * 100) / 100
          : this.stake - 1;
      val >= 0 && this.$emit("change", param, val);
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
        title: "",
        message: "Bet placed successfully"
      });
    }
  }
};
</script>