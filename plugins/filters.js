import Vue from 'vue'
import moment from 'moment'

Vue.filter('capitalize', val => val.toUpperCase())
Vue.filter('formatDate', val => {
  return moment(val).format("Do MMMM YYYY");
} )