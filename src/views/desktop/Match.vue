<template>
  <div class="flex pt-[22px]">
    <div class="grow pr-5">
      <MatchSquare
        :name="'ICC WORLD CRICKET LEAGUE MATCHES'"
        :date="'Jan 16 2023 08:00:00 AM'"
        :countries="['india', 'pakistan']"
      />
      <MatchAccordion :name="'Match Odds'" class="mb-[10px]">
        <MarketBar :texts="['Market', 'Back', 'Lay']" :width="642" />
        <BetRow
          v-for="(row, key) in matchBetRows"
          :key="key"
          :placeBetFlag="true"
          v-bind="row"
          class="mb-[1px] last:mb-0"
        />
      </MatchAccordion>
      <MatchAccordion :name="'Bookmaker 0%Comm'" class="mb-[10px]">
        <MarketBar :texts="['Market', 'Back', 'Lay']" :width="210" />
        <BetRow
          v-for="(row, key) in bookBetRows"
          :key="key"
          :placeBetFlag="false"
          v-bind="row"
          class="mb-[1px] last:mb-0"
        />
      </MatchAccordion>
      <div class="grid grid-cols-2 gap-[10px] mb-[10px] font-bold text-sm text-header-bg">
        <button
          class="h-[31px] hover:bg-warning hover:border-warning dark:hover:text-header-bg rounded-[5px] box-border"
          :class="{
            'bg-warning': membership == 'fancy',
            'border border-header-bg dark:border-warning dark:text-warning': membership != 'fancy',
          }"
          @click="handleClickMemberShip('fancy')"
        >Fancy</button>
        <button
          class="h-[31px] hover:bg-warning hover:border-warning dark:hover:text-header-bg rounded-[5px] box-border"
          :class="{
            'bg-warning': membership == 'premium',
            'border border-header-bg dark:border-warning dark:text-warning': membership != 'premium',
          }"
          @click="handleClickMemberShip('premium')"
        >Premium</button>
      </div>
      <div>
        <div :class="{'hidden': membership !== 'fancy', 'block': membership == 'fancy'}">
          <ul class="inline-flex rounded-t-[5px] overflow-hidden font-bold text-sm text-header-bg dark:text-white mb-[1px]">
            <li
              class="px-5 py-1 mr-[1px] hover:bg-warning dark:hover:bg-warning dark:hover:text-header-bg cursor-pointer"
              :class="{
                'bg-middle-lighter-warning dark:bg-lighter-secondary': activeTab != 'all',
                'bg-warning text-header-bg': activeTab == 'all'
              }"
              @click="handleClickTab('all')"
            >All</li>
            <li
              class="px-5 py-1 mr-[1px] hover:bg-warning dark:hover:bg-warning dark:hover:text-header-bg cursor-pointer"
              :class="{
                'bg-middle-lighter-warning dark:bg-lighter-secondary': activeTab != 'player',
                'bg-warning text-header-bg': activeTab == 'player'
              }"
              @click="handleClickTab('player')"
            >Player</li>
            <li
              class="px-5 py-1 mr-[1px] hover:bg-warning dark:hover:bg-warning dark:hover:text-header-bg cursor-pointer"
              :class="{
                'bg-middle-lighter-warning dark:bg-lighter-secondary': activeTab != 'wicket',
                'bg-warning text-header-bg': activeTab == 'wicket'
              }"
              @click="handleClickTab('wicket')"
            >Wicket</li>
            <li
              class="px-5 py-1 mr-[1px] hover:bg-warning dark:hover:bg-warning dark:hover:text-header-bg cursor-pointer"
              :class="{
                'bg-middle-lighter-warning dark:bg-lighter-secondary': activeTab != 'digit',
                'bg-warning text-header-bg': activeTab == 'digit'
              }"
              @click="handleClickTab('digit')"
            >Last Digit</li>
          </ul>
          <div>
            <MarketBar :texts="['Session markets', 'No', 'Yes']" :width="210" />
            <BetRow :placeBetFlag="false" :name="'1st 2 Wkt Runs ADKR'" :currentExposure="200" :newExposure="-200" :points="[[1.69, 1690], [1.7, 1700]]" class="mb-[1px]" />
            <BetRow :placeBetFlag="false" :name="'1st 3 Wkt Runs ADKR Adv'" :currentExposure="200" :newExposure="-200" :points="[[1.69, 1690], [1.7, 1700]]" class="mb-[1px]" />
          </div>
        </div>
        <div :class="{'hidden': membership !== 'premium', 'block': membership == 'premium'}">
          <SimpleAccordion :name="'Will there be a tie'" class="mb-2">
            <BetRow :placeBetFlag="false" :name="'Yes'" :currentExposure="200" :newExposure="-200" :points="[[1.69, 1690]]" class="mb-[1px]" />
            <BetRow :placeBetFlag="false" :name="'Yes'" :currentExposure="200" :newExposure="-200" :points="[[1.69, 1690]]" />
          </SimpleAccordion>
          <SimpleAccordion :name="'1st innings over 19 - canterbury kings total'">
            <BetRow :placeBetFlag="false" :name="'over 9.5'" :currentExposure="200" :newExposure="-200" :points="[[1.69, 1690]]" class="mb-[1px]" />
            <BetRow :placeBetFlag="false" :name="'under 9.5'" :currentExposure="200" :newExposure="-200" :points="[[1.69, 1690]]" />
          </SimpleAccordion>
        </div>
      </div>
    </div>
    <div class="w-[678px]">
      <LiveStream :link="'1.mp4'" class="mb-[10px]" />
      <Bet class="mb-[5px]" />
      <BetResult :name="'Matched Bets (1)'" :rows="matchedRows" :flag="true" :averageFlag="true" class="mb-[10px]" />
      <BetResult :name="'Unmatched Bets (1)'" :rows="unMatchedRows" :flag="false" :averageFlag="false" />
    </div>
  </div>
</template>

<script>
import MatchSquare from '@/components/desktop/MatchSquare.vue';
import MatchAccordion from '@/components/desktop/MatchAccordion.vue';
import MarketBar from '@/components/desktop/MarketBar.vue';
import BetRow from '@/components/desktop/BetRow.vue';
import LiveStream from '@/components/desktop/LiveStream.vue';
import Bet from '@/components/desktop/Bet.vue';
import BetResult from '@/components/desktop/BetResult.vue';
import SimpleAccordion from '@/components/desktop/SimpleAccordion.vue';
export default {
  name: "match-view",
  components: {
    MatchSquare,
    MatchAccordion,
    MarketBar,
    BetRow,
    LiveStream,
    Bet,
    BetResult,
    SimpleAccordion
},
  data: function() {
    return {
      matchBetRows: [
        {
          name: 'India',
          currentExposure: 200,
          newExposure: -200,
          points: [
            [1.69, 1690],
            [1.7, 1740],
            [1.69, 1690],
            [1.7, 1740],
            [1.69, 1690],
            [1.7, 1740],
          ]
        },
        {
          name: 'The Draw',
          currentExposure: 200,
          newExposure: -200,
          points: [
            [1.69, 1690],
            [1.7, 1740],
            [1.69, 1690],
            [1.7, 1740],
            [1.69, 1690],
            [1.7, 1740],
          ]
        },
        {
          name: 'Pakistan',
          currentExposure: 200,
          newExposure: -200,
          points: [
            [1.69, 1690],
            [1.7, 1740],
            [1.69, 1690],
            [1.7, 1740],
            [1.69, 1690],
            [1.7, 1740],
          ]
        },
      ],
      bookBetRows: [
        {
          name: 'India',
          currentExposure: 200,
          newExposure: -200,
          points: [
            [1.69, 1690],
            [1.7, 1700],
          ]
        },
        {
          name: 'Pakistan',
          currentExposure: 200,
          newExposure: -200,
          points: [
            [1.69, 1690],
            [1.7, 1700],
          ]
        },
      ],
      membership: 'fancy',
      activeTab: 'player',
      matchedRows: [
        ['MATH_ODDS_Centerbury', 1.38, 1.38],
        ['MATH_ODDS_Centerbury', 1.38, 1.38],
        ['MATH_ODDS_Centerbury', 1.38, 1.38],
      ],
      unMatchedRows: [
        ['MATH_ODDS_Centerbury', 1.38, 1.38],
        ['MATH_ODDS_Centerbury', 1.38, 1.38],
        ['MATH_ODDS_Centerbury', 1.38, 1.38],
      ],
    }
  },
  methods: {
    handleClickMemberShip(tab) {
      this.membership = tab;
    },
    handleClickTab(tab) {
      this.activeTab = tab;
    }
  }
}
</script>