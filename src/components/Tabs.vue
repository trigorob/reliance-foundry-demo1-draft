<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-blue-600 bg-white': openTab !== 1, 'text-white bg-blue-600': openTab === 1}">
            <i class="fas fa-space-shuttle text-base mr-1"></i> USA
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-blue-600 bg-white': openTab !== 2, 'text-white bg-blue-600': openTab === 2}">
            <i class="fas fa-cog text-base mr-1"></i> UK
          </a>
        </li>        
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3);show3 = !show3" v-bind:class="{'text-blue-600 bg-white': openTab !== 3, 'text-white bg-blue-600': openTab === 3}">
            <i class="fas fa-briefcase text-base mr-1"></i> About
          </a>
        </li>        
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <transition name="fade">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">

              <USAChartGDP />
              <USAPredictedGDP />
              
            </div>
            </transition>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">

              <UKChartGDP />
              <UKPredictedGDP />

            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <About />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from './About.vue'
import USAPredictedGDP from './USAPredictedGDP.vue'
import USAChartGDP from './USAChartGDP.vue'
import UKPredictedGDP from './UKPredictedGDP.vue'
import UKChartGDP from './UKChartGDP.vue'


export default {
  name: "Tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  },
  components: {
    About,
    USAPredictedGDP,
    USAChartGDP,
    UKPredictedGDP,
    UKChartGDP,    
  }  
}
</script>
