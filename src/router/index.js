import Vue from 'vue';
import VueRouter from 'vue-router';
import CricketList from '../views/desktop/CricketList.vue'
import LiveList from '../views/desktop/LiveList.vue'
import SoccerList from '../views/desktop/SoccerList.vue'
import TennisList from '../views/desktop/TennisList.vue'
import BadmintonList from '../views/desktop/BadmintonList.vue'
import BetHistory from '../views/desktop/BetHistory.vue'
import MobileCricketList from '../views/mobile/CricketList.vue'
import MobileLiveList from '../views/mobile/LiveList.vue'
import MobileSoccerList from '../views/mobile/SoccerList.vue'
import MobileTennisList from '../views/mobile/TennisList.vue'
import MobileBadmintonList from '../views/mobile/BadmintonList.vue'
import MobileBetHistory from '../views/mobile/BetHistory.vue'
import Match from '../views/desktop/Match.vue'
import MobileMatch from '../views/mobile/Match.vue'
import Error403 from '../views/desktop/Error403.vue'
import MobileError403 from '../views/mobile/Error403.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: CricketList
  },
  {
    path: '/live',
    component: LiveList
  },
  {
    path: '/soccer',
    component: SoccerList
  },
  {
    path: '/tennis',
    component: TennisList
  },
  {
    path: '/badminton',
    component: BadmintonList
  },
  {
    path: '/bethistory',
    component: BetHistory
  },
  {
    path: '/mobile',
    component: MobileCricketList
  },
  {
    path: '/mobile/live',
    component: MobileLiveList
  },
  {
    path: '/mobile/soccer',
    component: MobileSoccerList
  },
  {
    path: '/mobile/tennis',
    component: MobileTennisList
  },
  {
    path: '/mobile/badminton',
    component: MobileBadmintonList
  },
  {
    path: '/mobile/bethistory',
    component: MobileBetHistory
  },
  {
    path: '/match/:id',
    component: Match
  },
  {
    path: '/mobile/match/:id',
    component: MobileMatch
  },
  {
    path: '/error403',
    component: Error403
  },
  {
    path: '/mobile/error403',
    component: MobileError403
  },
];

const router = new VueRouter({
  routes
});

export default router;