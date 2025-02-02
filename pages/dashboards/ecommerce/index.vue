<template>
  <b-row>
    <StatWidgets />
    <MonthlyAvgIncome />
  </b-row>
  <b-row class="justify-content-center">
    <PopularProducts />
    <Customers />
  </b-row>
  <b-row class="justify-content-center">
    <TopSelling />
    <CategoriesData />
    <RecentsOrder />
  </b-row>
</template>
<script setup lang="ts">
import StatWidgets from '~/pages/dashboards/ecommerce/components/StatWidgets.vue'
import MonthlyAvgIncome from '~/pages/dashboards/ecommerce/components/MonthlyAvgIncome.vue'
import PopularProducts from '~/pages/dashboards/ecommerce/components/PopularProducts.vue'
import Customers from '~/pages/dashboards/ecommerce/components/Customers.vue'
import TopSelling from '~/pages/dashboards/ecommerce/components/TopSelling.vue'
import CategoriesData from '~/pages/dashboards/ecommerce/components/CategoriesData.vue'
import RecentsOrder from '~/pages/dashboards/ecommerce/components/RecentsOrder.vue'

definePageMeta({
  layout: 'default',
  title: 'Ecommerce'
})
</script>
