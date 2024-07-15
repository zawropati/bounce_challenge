<template>
    <div class="flex-wrapper total-box">
        <h3>{{ countStore.count }} bag </h3>
        <h3>{{ countPrice(countStore.count) }} $ </h3>
        <button class='next-btn' :class="{'btn-disabled': isNextDisabled()}" @click.prevent="nextStep">
            <!-- v-if="isNextDisabled()" -->
            {{ buttonText }}
        </button>
    </div>
</template>
<script>
import { mapStores } from 'pinia'
import { useCountStore, useFlowStore } from './../store/main'
import { usePersonalStore } from './../store/main'

export default {
    // const router = useRouter();
    data() {
        return{
            buttonText: 'Next'
        }
    },
  computed: {
    ...mapStores(useCountStore, usePersonalStore, useFlowStore),
      // personalDetails() {
      //   return this.personalDetails;
      // },
  },
  methods: {
    countPrice(val) {
        return (val*5.9).toFixed(2)
    },
    isNextDisabled() {
        if(this.flowStore.stage !== 'initial' && this.flowStore.stage !== 'card'){
            if((this.personalStore.name == '' || this.personalStore.email == '')){
                return true
            }else{
                return false
            }
        }
        if(this.flowStore.stage == 'card'){
            if(this.personalStore.cardNumber == '' || this.personalStore.name == '' || this.personalStore.email == ''){
                return true
            }else{
                return false
            }
        }
        // return !(this.personalStore.name && this.personalStore.email && this.flowStore.stage == 'initial');
    },
    nextStep() {
        if(this.flowStore.stage == 'initial'){
            this.flowStore.setStage('personal')
            return
        }
        if(this.flowStore.stage == 'personal'){
            this.personalStore.setEditable(false)
            this.flowStore.setStage('card')
            this.buttonText = 'Book'
            return
        }
        if(this.flowStore.stage == 'card'){
            this.buttonText = 'Book'
            this.personalStore.setEditable(false)
            this.flowStore.setStage('bookingProgress')

            console.log(this.flowStore.stage)
        }
    },
  },
}
</script>
<style scoped>
.flex-wrapper{
    display: flex;
    justify-content: space-around;
}
.total-box{
    border-top: 1px solid grey;
    padding: 1rem;
}
.btn-disabled{
    opacity: 0.5;
    pointer-events: none;
}
.next-btn{
    background-color: rgb(78, 143, 255);
    border: none;
    width: 4rem;
    cursor: pointer;
    border-radius: 0.25rem;
}
</style>
