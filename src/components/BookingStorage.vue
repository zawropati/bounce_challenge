<template>
  <div class="booking-box">
    <h3>Booking storage at</h3>
    <h2>Cody's cookie store</h2>
    <div class="flex-wrapper">
      <h4>Number of bags</h4>
        <button class="small-btn" @click.prevent="decrease()">
            -
        </button>
        <h4>{{ countStore.count }}</h4>
        <button  class="small-btn" @click.prevent="increment()">
            +
        </button>
    </div>
  </div>
</template>
<script>
import { mapStores } from 'pinia'
import { useCountStore } from './../store/main'

export default {
  computed: {
    ...mapStores(useCountStore),
  },
  methods: {
    increment() {
      this.countStore.increment()
    },
    decrease() {
      this.countStore.decrease()
    },
  },
}
</script>
<style scoped>
.flex-wrapper{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0px;
  /* margin: 15px; */
}
.booking-box{
  margin: 1rem;
  /* padding: 1rem; */
  border-bottom: 1px solid grey;
}
.small-btn{
    background-color: rgb(78, 143, 255);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
}
</style>
