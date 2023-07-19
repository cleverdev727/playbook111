<template>
  <div class="px-[10px] py-[5px] bg-lighter-warning dark:bg-light-dark rounded-[5px]">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <Toggle @toggle="toggle" class="mr-[10px]" />
        <span class="font-semibold text-[10px] leading-[14px] text-header-bg dark:text-white">1 Click</span>
      </div>
      <div class="flex h-[18px] items-center font-semibold text-[10px] leading-[14px] text-header-bg dark:text-white">
        <div class="flex items-center mr-[10px]">
          <CheckSquare class="mr-[5px]" />
          <span>Accept All Odds</span>
        </div>
        <div :class="{ 'hidden': !flag, 'flex': flag }">
          <button
            class="h-[18px] px-[10px] bg-warning rounded-[5px] dark:text-header-bg"
            :class="{
              'hidden': editFlag,
              'block': !editFlag
            }"
            @click="edit()"
          >
            Edit
          </button>
          <div :class="{ 'hidden': !editFlag, 'flex': editFlag }" >
            <button
              class="h-[18px] px-[10px] bg-warning rounded-[5px] mr-[5px] dark:text-header-bg"
              @click="save()"
            >
              Save
            </button>
            <button
              class="h-[18px] px-[10px] bg-danger rounded-[5px] text-white"
              @click="cancel()"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-[29px] grid grid-cols-3 gap-[10px] overflow-hidden font-bold text-xs text-header-bg transition-all"
      :class="{
        'max-h-0': !flag,
        'max-h-[29px] mt-[11px] mb-[7px]': flag
      }"
    >
      <button class="bg-warning rounded-[5px]" :class="{'hidden': editFlag}">{{ val1 }}</button>
      <input
        type="number"
        class="bg-white rounded-[5px] px-2 outline-none"
        :class="{'hidden': !editFlag}"
        :value="val1"
        ref="input1"
      />
      <button class="bg-warning rounded-[5px]" :class="{'hidden': editFlag}">{{ val2 }}</button>
      <input
        type="number"
        class="bg-white rounded-[5px] px-2 outline-none"
        :class="{'hidden': !editFlag}"
        :value="val2"
        ref="input2"
      />
      <button class="bg-warning rounded-[5px]" :class="{'hidden': editFlag}">{{ val3 }}</button>
      <input
        type="number"
        class="bg-white rounded-[5px] px-2 outline-none"
        :class="{'hidden': !editFlag}"
        :value="val3"
        ref="input3"
      />
    </div>
  </div>
</template>

<script>
import CheckSquare from './CheckSquare.vue';
import Toggle from './Toggle.vue';
export default {
  name: "mobile-bet-component",
  components: {
    Toggle,
    CheckSquare
},
  data: function() {
    return {
      flag: false,
      editFlag: false,
      val1: 20,
      val2: 50,
      val3: 100
    }
  },
  methods: {
    toggle(flag) {
      this.flag = flag;
      this.editFlag = false;
    },
    edit() {
      this.editFlag = true;
    },
    cancel() {
      this.editFlag = false;
    },
    save() {
      this.val1 = this.$refs.input1.value;
      this.val2 = this.$refs.input2.value;
      this.val3 = this.$refs.input3.value;
      this.editFlag = false;
    }
  }
}
</script>