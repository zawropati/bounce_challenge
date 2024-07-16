<template>
  <div class="card-box" v-if="flowStore.stage == 'card' || flowStore.stage == 'bookingProgress' || flowStore.stage == 'bookingFailed'">
      <h3>Payment Information:</h3>
      <form @submit.prevent="submit">
        <div class="input-box">
          <label for="name">Card details:</label>
          <input type="text" id="name" v-model="cardNumber" required>
        </div>
      </form>
    </div>
</template>
<script>
import { mapStores } from 'pinia'
import { usePersonalStore } from './../store/main'
import { useFlowStore } from './../store/main'

export default {
    name: 'CardDetails',
    data () {
      return {
        cardNumber: '',
      }
    },
    watch: {
      cardNumber: function(val){
        this.personalStore.setCardNumber(val)
      }
    },
    computed: {
      ...mapStores(usePersonalStore, useFlowStore),
    },
    methods: {
    },
}
</script>
<style scoped>
.edit-personal-box{
  background: green;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem
}
.card-box{
  border-top: 1px solid grey;
  padding: 1rem;
}
</style>
