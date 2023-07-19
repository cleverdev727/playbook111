<template>
  <div
    class="flex h-[30px] items-center rounded-[5px] px-[2px] overflow-x-auto scrollbar-hide overflow-y-hidden"
  >
    <div class="flex font-bold text-[10px] leading-[14px] text-header-bg dark:text-white min-w-max">
      <div
        class="group flex px-[10px] py-2 mr-[5px] rounded-[5px] cursor-pointer hover:bg-warning dark:hover:bg-warning"
        v-for="route in routes"
        :key="route.id"
        @click="handleRedirect(route)"
        :class="{
          'bg-warning': currentPath == route.path || activeTab == route.id,
          'bg-middle-lighter-warning dark:bg-dark-row-bg': currentPath !== route.path && activeTab !== route.id
        }"
      >
        <img
          :src="require(`../../../assets/imgs/${route.id}.svg`)"
          :alt="route.id"
          class="h-[15px] mr-[10px] brightness-0 group-hover:invert-0 dark:brightness-0"
          :class="{
            'dark:invert': currentPath !== route.path && activeTab !== route.id,
          }"
        />
        <span
          class="dark:group-hover:text-header-bg"
          :class="{
            'dark:text-header-bg': currentPath == route.path || activeTab == route.id
          }"
        >{{ route.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-tab-component',
  computed: {
    currentPath() {
      return this.$route.path;
    }
  },
  data: function() {
    return {
      activeTab: '',
      routes: [
        {
          id: 'live',
          label: 'L I V E',
          path: '/mobile/live'
        },
        {
          id: 'cricket',
          label: 'C R I C K E T',
          path: '/mobile'
        },
        {
          id: 'soccer',
          label: 'S O C C E R',
          path: '/mobile/soccer'
        },
        {
          id: 'tennis',
          label: 'T E N N I S',
          path: '/mobile/tennis'
        },
        {
          id: 'badminton',
          label: 'B A D M I N T O N',
          path: '/mobile/badminton'
        },
      ]
    }
  },
  methods: {
    handleRedirect(route) {
      this.activeTab = route.id;
      this.$router.push(route.path);
    }
  }
}
</script>