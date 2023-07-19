<template>
  <div class="font-semibold text-[10px] leading-[9px]">
    <div class="flex justify-end items-center mb-2">
      <div class="flex items-center mr-3">
        <!-- <span class="mr-1">Rows per page</span> -->
        <select class="dark:bg-dark-row-bg" @change="handleChange($event.target.value)">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <span class="mr-3">{{ this.start }} - {{ Math.min(end, totalNum) }} of {{ totalNum }}</span>
      <div class="flex">
        <img
          src="../../assets/imgs/arrow-down.svg"
          alt="left"
          class="rotate-90 mr-2 cursor-pointer w-3"
          :class="{'opacity-40 cursor-not-allowed': start == 1}"
          @click="prev()"
        >
        <img
          src="../../assets/imgs/arrow-down.svg"
          alt="right"
          class="-rotate-90 cursor-pointer w-3"
          :class="{'opacity-40 cursor-not-allowed': end >= totalNum}"
          @click="next()"
        >
      </div>
    </div>
    <table class="w-full text-center rounded-[5px] border-collapse overflow-hidden text-[8px]">
      <thead class="bg-warning h-10 dark:text-header-bg">
        <tr>
          <th
            v-for="(col, key) in headerCols"
            :key="key"
            class="p-[10px]"
          >{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="row in filteredAry()">
          <slot v-bind="row"></slot>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "mobile-datatable-component",
  props: {
    headerCols: Array,
    rows: Array,
  },
  computed: {
    totalNum() {
      return this.rows.length;
    }
  },
  data: function() {
    return {
      perpage: 10,
      start: 1,
      end: 10
    }
  },
  methods: {
    filteredAry() {
      return this.rows.slice(this.start - 1, this.end);
    },
    handleChange(val) {
      this.perpage = val * 1;
      this.start = 1;
      this.end = val;
    },
    prev() {
      if (this.start <= 1) return;
      this.start = Math.max(1, this.start - this.perpage);
      this.end = this.start + this.perpage - 1;
    },
    next() {
      if (this.end >= this.totalNum) return;
      this.start = Math.min(this.end * 1 + 1, this.totalNum);
      this.end = this.start + this.perpage - 1;
    }
  }
}
</script>