<template>
  <div>
    <Accordion
      v-for="type in getTypeArr()"
      :key="type"
      class="mb-[10px] last:mb-0"
      :type="type"
      :num="10"
      :matchRows="getMatchRowsByType(type)"
    />
  </div>
</template>

<script>
import Accordion from '@/components/mobile/Accordion.vue';
export default {
  name: "mobile-cricket-list-view",
  components: {
    Accordion
  },
  data: function() {
    return {
      matchRows: [
        {
          id: 11,
          isPlaying: true,
          type: 'soccer',
          date: 'Today',
          time: '08:43 PM',
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false],
          ]
        },
        {
          id: 12,
          isPlaying: false,
          type: 'soccer',
          date: 'Today',
          time: '08:43 PM',
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false],
          ]
        },
        {
          id: 13,
          isPlaying: true,
          type: 'soccer',
          date: 'Today',
          time: '08:43 PM',
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false],
          ]
        },
        {
          id: 14,
          isPlaying: false,
          type: 'soccer',
          date: 'Today',
          time: '08:43 PM',
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, 1690, true],
            [1.7, 1740, false],
            [1.69, 1690, true],
            [1.7, 1740, false],
          ]
        },
      ]
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