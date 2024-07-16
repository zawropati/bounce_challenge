<template>
	<div class="booking-box">
		<div class="title-box">
			<h4>Booking storage at</h4>
			<h2>Cody's cookie store</h2>
		</div>
		<div class="flex-wrapper">
			<h4>Number of bags</h4>
			<button class="small-btn" :class="{'inactive': countStore.count == 1}" @click.prevent="decrease()">
				-
			</button>
			<h4>{{ countStore.count }}</h4>
			<!-- should we only allow to register 2 bags? class="{'inactive': countStore.count == 2} -->
			<button class="small-btn" @click.prevent="increment()">
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
	justify-content: flex-start;
	gap: 1rem;
	align-items: center;
	margin: 10px 0px;
}
.booking-box{
	padding: 1rem;
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
.title-box{
  	margin-bottom: 2rem;
}
.title-box h2{
  	font-weight: 500;
}
.inactive{
	opacity: 0.5;
	pointer-events: none;
}
</style>
