<script >
import appHeader from './components/appHeader.vue'
import appMain from './components/appMain.vue'
import appFooter from './components/appFooter.vue'

export default {
  components: {
    appHeader, appMain, appFooter
  },
  data() {
    return {
      keyFeatures: [
        {
          "featureImg": "fa-solid fa-layer-group",
          "feature": "Modular",
          "p": "Composed in a pseudo-latin language which more or less corresponds."
        },
        {
          /* "feature-img":"fa-solid fa-airplay", */
          "featureImg": "fa-solid fa-layer-group",
          "feature": "Responsive",
          "p": "Composed in a pseudo-latin language which more or less corresponds."
        },
        {
          /* "feature-img":"fa-regular fa-sparkle", */
          "featureImg": "fa-solid fa-layer-group",
          "feature": "Customizable",
          "p": "Composed in a pseudo-latin language which more or less corresponds."
        },
        {
          /* "feature-img":"fa-solid fa-maximize", */
          "featureImg": "fa-solid fa-layer-group",
          "feature": "Scalable",
          "p": "Composed in a pseudo-latin language which more or less corresponds."
        },

      ],
      plans: [
        {
          type: "Basic",
          price: "9.00",
          p: "All the basics for the business that are just getting started",
          features: ['Full Access', 'Enhanced Security', 'Source Files', '1 Domain Free', 'Enhanced Security']

        },
        {
          type: "Business",
          price: "39.00",
          p: "Better for growing business that want more customers",
          /* feature:['Full Access','Enhanced Security','Source Files','1 Domain Free','Enhanced Security'] */

        },
        {
          type: "Enterprise",
          price: "79.00",
          p: "Advanced features for pros who need more customization",
          /* feature:['Full Access','Enhanced Security','Source Files','1 Domain Free','Enhanced Security'] */

        },
      ],
      navbarLinks: ['LANDING', 'PAGES', 'DOCS'],

      partners: ['/img/amazon.svg', '/img/shopify.svg', '/img/spotify.svg', '/img/google.svg', '/img/lenovo.svg', '/img/paypal.svg'],
      company: ['About', 'Services', 'team', 'Pricing', 'Project', 'Careers', 'Blog', 'Login'],
      usefullLinks: ['Terms of service', 'Privacy Policy', 'Documentation', 'Changelog', 'Components'],
      payments: ['/img/american-ex.png', '/img/discover.png', '/img/master-card.png', '/img/paypal.png', '/img/visa.png']
    }
  }
}
</script>

<template>
  <appHeader :navbarLinks="navbarLinks" :partners="partners"></appHeader>
  <appMain :keyFeatures="keyFeatures" :plans="plans"></appMain>
  <appFooter :company="company" :usefullLinks="usefullLinks" :payments="payments"></appFooter>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap');
</style>
