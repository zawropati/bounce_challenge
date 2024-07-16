<template>
  <div v-if="flowStore.stage == 'card' || flowStore.stage == 'bookingProgress'">
      <h4>Payemnt Information</h4>
      <form @submit.prevent="submit">
        <div>
          <label for="name">Card details:</label>
          <input  type="text" id="name" v-model="cardNumber" required>
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
</style>
