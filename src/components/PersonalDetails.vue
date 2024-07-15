<template>
  <div v-if="flowStore.stage == 'personal' || flowStore.stage == 'card'">
    <div v-if="personalStore.isEditable">
      <h4>Personal Details</h4>
      <form @submit.prevent="submit">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
      </form>
    </div>
    <div class="edit-personal-box" v-if="!personalStore.isEditable">
      <h4>Personal Details:</h4>
      <button @click.prevent="editDetails()">Change?</button>
    </div>
  </div>

</template>
<script>
import { mapStores } from 'pinia'
import { usePersonalStore } from './../store/main'
import { useFlowStore } from './../store/main'

export default {
    name: 'PersonalDetails',
    data () {
      return {
        name: '',
        email: ''
      }
    },
    watch: {
      name: function(val){
        this.personalStore.setName(val)

        // console.log(val)
      },
      email: function(val){
        this.personalStore.setEmail(val)

        // console.log(val)
      }
    },
    computed: {
        ...mapStores(usePersonalStore, useFlowStore),
    },
    methods: {
        // setName(name) {
        //   this.personalStore.setName(name)
        // },
        // setEmail(email) {
        //   this.personalStore.setEmail(email)
        // },
        editDetails(){
          this.personalStore.setEditable(true)
        }
        // setEmail(email) {
        //   this.personalStore.setEmail(email)
        // },
    },
}
</script>
<style scoped>
.flex-wrapper{
    display: flex;
    justify-content: space-around;
}
.edit-personal-box{
  background: green;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem
}
</style>
