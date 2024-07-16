import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 1,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrease() {
      if(this.count !== 1){
        this.count--
      }
    },
    setCountInital(){
      this.count = 1
    }
  },
  persist: true
})

export const usePersonalStore = defineStore('personal', {
  state: () => ({
    name: '',
    email: '',
    cardNumber: '',
    isEditable: true,
    bagType: ''
  }),
  getters: {
  },
  actions: {
    setName(name) {
      this.name = name
    },
    setEmail(email) {
      this.email = email
    },
    setEditable(isEditable){
      this.isEditable = isEditable
    },
    setCardNumber(cardNumber){
      this.cardNumber = cardNumber
    },
    setBagType(bagType){
      this.bagType = bagType
    }
  },
  // would need to modify the structure to persist this
  // persist: true
})

export const useFlowStore = defineStore('flow', {
  state: () => ({
    stage: 'initial'
  }),
  getters: {
  },
  actions: {
    setStage(stage) {
      this.stage = stage
    },
    setEmail(email) {
      this.email = email
    },
  },
  // would need to modify the structure to persist this
  // persist: true
})

