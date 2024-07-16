<template>
  	<div class="card-box" v-if="flowStore.stage == 'card' || flowStore.stage == 'bookingProgress' || flowStore.stage == 'bookingFailed'">
		<h3 id="payment-heading">Payment Information:</h3>
		<form role="form" aria-labelledby="payment-heading">
			<div class="input-box">
				<label for="card">Card details:</label>
				<input type="text" id="card" v-model="cardNumber" aria-required="true" required>
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
