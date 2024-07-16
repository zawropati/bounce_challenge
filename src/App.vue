<template>
  <div class="overlay wrapper" v-if="flowStore.stage=='bookingProgress'">
    <h2>Placing Booking
      <br>
       ...
    </h2>
  </div>
  <div class="overlay wrapper overlay-success" v-if="flowStore.stage=='bookingSuccess'">
    <h2 class="success-text">Booking placed!</h2>
  </div>
  <div class="wrapper">
    <BookingStorage/>
    <BagPicker/>
    <div class="content-box">
      <PersonalDetails/>
      <CardDetails/>
    </div>
    <TotalSection />
  </div>
</template>
<script>
import { mapStores } from 'pinia'
import { useFlowStore, useCountStore } from './store/main';
import TotalSection from './components/TotalSection.vue';
import BookingStorage from './components/BookingStorage.vue';
import PersonalDetails from './components/PersonalDetails.vue';
import CardDetails from './components/CardDetails.vue'
import BagPicker from './components/BagPicker.vue'

export default {
    name: 'App',
    components: {
      PersonalDetails,
      CardDetails,
      TotalSection,
      BookingStorage,
      BagPicker
    },
    data () {
      return {}
    },
    watch: {
      cardNumber: function(val){
        this.personalStore.setCardNumber(val)
        // console.log(val)
      },
      'flowStore.stage': function(newStage) {
        if (newStage === 'bookingProgress') {
          this.handleBookingProcess();
        }
      }
    },
    computed: {
      ...mapStores(useFlowStore, useCountStore),
    },
    mounted(){
    },
    methods: {
      handleBookingProcess() {
        setTimeout(() => {
        // imitate booking process, approx. 50% chance of getting true or false
        const successfullyBooked = Math.random() > 0.5;
        if (successfullyBooked) {
          this.flowStore.setStage('bookingSuccess');
          this.countStore.setCountInital()
          //TO DO: set a button text as a state so it can be changed from here when booking was success
          // setTimeout(() => {
          //   this.flowStore.setStage('initial');
          // }, 2000);
        } else {
          this.flowStore.setStage('bookingFailed');
        }
      }, 2000);
    }
    },
}
</script>
<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.wrapper {
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.overlay > h2{
  color: white;
  text-align: center;
}
.overlay-success{
  background-color: white;
}
.success-text{
  font-weight: bold;
  color: black !important;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
