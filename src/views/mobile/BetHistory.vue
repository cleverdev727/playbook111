<template>
  <div class="dark:text-white text-header-bg">
    <span class="flex font-bold text-base">Bet History</span>
    <Datatable :rows="rows" :headerCols="headerCols">
      <template v-slot="row">
        <tr class=" bg-light-blue dark:bg-dark-row-bg border-b border-white dark:border-square-border">
          <td class="p-[10px] w-[40%]">
            <p class="font-bold">{{ row.market }} / {{ row.runner }}</p>
            <p>{{ row.match }}</p>
          </td>
          <td class="p-[10px] w-[15%]">{{ row.odds }}</td>
          <td class="p-[10px] w-[15%]">{{ row.stake }}</td>
          <td class="p-[10px] w-[15%]">{{ row.status }}</td>
          <td class="p-[10px] w-[15%]">{{ row.returns }}</td>
        </tr>
      </template>
    </Datatable>
  </div>
</template>

<script>
import Datatable from '@/components/mobile/Datatable.vue';

export default {
    name: "mobile-bet-history-view",
    components: { Datatable },
    data: function () {
        return {
          headerCols: [
            'Match',
            'Odds',
            'Stake',
            'Bet Status',
            'Returns'
          ],
          rows: [
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -100
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 108
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 300,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -300
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 200,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 216
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.54,
                  "stake": 300,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -300
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 3.12,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 212
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 500,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 420
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 150,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 162
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -100
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 108
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -100
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 108
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -100
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 108
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -100
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 108
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -100
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 108
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -100
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 108
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 1.84,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "lost",
                  "returns": -100
              },
              {
                  "time": "29/04/23 08:37 PM",
                  "sport": "cricket",
                  "match": "Delhi Capitals v Sunrisers Hyderabad",
                  "market": "Match Odds",
                  "runner": "Delhi Capitals",
                  "odds": 2.08,
                  "stake": 100,
                  "currency": "inr",
                  "status": "settled",
                  "result": "won",
                  "returns": 108
              },
          ]
        };
    },
}
</script>