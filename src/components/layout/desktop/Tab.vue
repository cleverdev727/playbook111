<template>
  <div
    class="flex h-10 items-center md:justify-start rounded-[5px] md:bg-warning dark:bg-header-bg px-[10px] overflow-x-auto"
  >
    <div class="flex font-bold text-xs text-header-bg dark:text-white min-w-max">
      <div
        class="group flex md:w-40 px-[10px] md:px-4 py-2 md:py-[6px] mr-[5px] rounded-[5px] md:rounded-[7px] cursor-pointer hover:bg-warning dark:hover:bg-warning md:hover:bg-header-bg md:dark:hover:bg-warning"
        v-for="route in routes"
        :key="route.id"
        @click="handleRedirect(route)"
        :class="{
          'bg-warning md:bg-header-bg md:dark:bg-warning': currentPath == route.path || activeTab == route.id,
          'bg-middle-lighter-warning dark:bg-dark-row-bg md:bg-transparent': currentPath !== route.path && activeTab !== route.id
        }"
      >
        <img
          :src="require(`../../../assets/imgs/${route.id}.svg`)"
          :alt="route.id"
          class="h-[15px] mr-[10px] brightness-0 group-hover:invert-0 dark:brightness-0 md:group-hover:brightness-100 md:group-hover:dark:brightness-0 md:group-hover:dark:invert-0"
          :class="{
            'dark:invert md:brightness-0': currentPath !== route.path && activeTab !== route.id,
            'md:brightness-100': currentPath == route.path || activeTab == route.id
          }"
        />
        <span
          class="dark:group-hover:text-header-bg md:group-hover:text-warning md:group-hover:dark:text-header-bg"
          :class="{
            'md:text-warning dark:text-header-bg': currentPath == route.path || activeTab == route.id
          }"
        >{{ route.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-component',
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
          path: '/live'
        },
        {
          id: 'cricket',
          label: 'C R I C K E T',
          path: '/'
        },
        {
          id: 'soccer',
          label: 'S O C C E R',
          path: '/soccer'
        },
        {
          id: 'tennis',
          label: 'T E N N I S',
          path: '/tennis'
        },
        {
          id: 'badminton',
          label: 'B A D M I N T O N',
          path: '/badminton'
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