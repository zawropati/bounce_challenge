import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrease() {
      if(this.count !== 0){
        this.count--
      }
  },
  },
})

export const usePersonalStore = defineStore('personal', {
  state: () => ({
    name: '',
    email: '',
    cardNumber: '',
    isEditable: true
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
    }
  },
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
})

