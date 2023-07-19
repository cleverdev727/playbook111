<template>
  <div>
    <Accordion
      v-for="type in getTypeArr()"
      :key="type"
      class="mb-5 last:mb-0"
      :type="type"
      :scores="[1,2]"
      :num="10"
      :matchRows="getMatchRowsByType(type)"
    />
  </div>
</template>

<script>
import Accordion from '@/components/desktop/Accordion.vue';
export default {
  name: "cricket-list-view",
  components: {
    Accordion
  },
  data: function() {
    return {
      matchRows: [
        {
          id: 12,
          isPlaying: true,
          type: 'badminton',
          date: 'Today',
          time: '08:43 PM',
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false]
          ]
        },
        {
          id: 13,
          isPlaying: false,
          type: 'badminton',
          date: 'Today',
          time: '08:43 PM',
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false]
          ]
        },
        {
          id: 14,
          isPlaying: true,
          type: 'badminton',
          date: 'Today',
          time: '08:43 PM',
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false]
          ]
        },
      ],
    };
  },
  methods: {
    getTypeArr() {
      const typeArr = this.matchRows.map(item => item.type);
      return typeArr.filter((item, index) => typeArr.indexOf(item) === index);
    },
    getMatchRowsByType(type) {
      return this.matchRows.filter(item => item.type === type);
    }
  }
};
</script>