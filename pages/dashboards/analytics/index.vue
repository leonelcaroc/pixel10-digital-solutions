<template>
  <b-row class="justify-content-center">
    <StatWidgets />
  </b-row>
  <b-row class="justify-content-center">
    <AudienceOverview />
    <NewVisitors />
  </b-row>
  <b-row>
    <BrowserTrafficReports />
    <TotalVisits />
  </b-row>
  <b-row class="justify-content-center">
    <TrafficSources />
    <OrganicTraffic />
  </b-row>
</template>

<script setup lang="ts">
import StatWidgets from '~/pages/dashboards/analytics/components/StatWidgets.vue'
import AudienceOverview from '~/pages/dashboards/analytics/components/AudienceOverview.vue'
import BrowserTrafficReports from '~/pages/dashboards/analytics/components/BrowserTrafficReports.vue'
import NewVisitors from '~/pages/dashboards/analytics/components/NewVisitors.vue'
import OrganicTraffic from '~/pages/dashboards/analytics/components/OrganicTraffic.vue'
import TotalVisits from '~/pages/dashboards/analytics/components/TotalVisits.vue'
import TrafficSources from '~/pages/dashboards/analytics/components/TrafficSources.vue'

definePageMeta({
  layout: 'default',
  title: 'Analytics'
})
</script>
