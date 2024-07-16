<template>
    <div class="picker-box">
        <!-- TO DO:
        - items should have diffetent prices and total amount should change based on that
        - enable changing the bag type
        - enable mixing bag types
        -->
        <div v-if="flowStore.stage == 'initial'">
            <h3>Pick a bag type</h3>
				<div class="flex-wrapper">
					<img
					v-for="(image, index) in images"
					:key="index"
					@click="selectBag(index, image)"
					:src="image.src"
					:class="{'active': activeImageIndex === index}"
					class='bag-image'
					/>
      		</div>
   	 	</div>
		<div v-else>
			<h3>Selected bag type:</h3>
			{{ personalStore.bagType }}
		</div>
	</div>
</template>
<script>
import { mapStores } from 'pinia'
import { useFlowStore } from './../store/main'
import { usePersonalStore } from './../store/main'

export default {
    computed: {
        ...mapStores(usePersonalStore, useFlowStore),
    },
    data() {
        return{
            activeImageIndex: null,
            images: [
            { src: new URL('@/assets/bag2.jpeg', import.meta.url).href, name: 'Handbag' },
            { src: new URL('@/assets/bag1.jpeg', import.meta.url).href, name: 'Backpack' },
            { src: new URL('@/assets/bag3.jpeg', import.meta.url).href, name: 'Luggage' }
            ]
        }
    },
    methods: {
        selectBag(index, image) {
            this.personalStore.setBagType(image.name)
            this.activeImageIndex = index;
        }
    },
}
</script>
<style scoped>
.bag-image{
    width: 4rem;
    margin: 0.5rem;
}
.flex-wrapper{
    align-items: center;
}
.picker-box{
    padding: 1rem;
    border-bottom: 1px solid grey;
}
.active{
    border: 2px solid red;
}
</style>
