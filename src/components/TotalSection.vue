<template>
    <div class="flex-wrapper total-box">
        <h3>{{ countStore.count }} bag </h3>
        <h3>{{ countPrice(countStore.count) }} $ </h3>
        <button class='next-btn' :class="{'btn-disabled': isNextDisabled(),'btn-error': isError()}" @click.prevent="nextStep">
            {{ buttonText }}
        </button>
    </div>
</template>
<script>
import { mapStores } from 'pinia'
import { useCountStore, useFlowStore } from './../store/main'
import { usePersonalStore } from './../store/main'

export default {
    data() {
        return{
            buttonText: 'Next'
        }
    },
    computed: {
        ...mapStores(useCountStore, usePersonalStore, useFlowStore),
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
            if(this.flowStore.stage == 'initial'){
                if(this.personalStore.bagType == ''){
                    return true
                }else{
                    return false
                }
            }
        },
        isError(){
            if(this.flowStore.stage == "bookingFailed"){
                this.buttonText = "Retry"
                return true;
            }else{
                return false;
            }
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
                this.buttonText = '...'
                this.personalStore.setEditable(false)
                this.flowStore.setStage('bookingProgress')
            }
            if(this.flowStore.stage == 'bookingFailed'){
                this.flowStore.setStage('bookingProgress')
                this.buttonText = '...'
            }
        },
    },
}
</script>
<style scoped>
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
.btn-error{
    background-color: red;
}
</style>
