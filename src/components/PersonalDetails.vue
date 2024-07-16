<template>
  <div class='details-box' v-if="flowStore.stage !== 'initial'">
    <form role="form" aria-labelledby="personal-details-heading">
      <div v-if="personalStore.isEditable">
        <h3 id="personal-details-heading">Personal Details:</h3>
          <div class="input-box">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" aria-required="true" required>
          </div>
          <div class="input-box" >
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" aria-required="true" required>
          </div>
      </div>
      <div class="edit-personal-box" v-if="!personalStore.isEditable" role="region" aria-live="polite">
        <h4>Personal Details:</h4>
        <button aria-label="Change personal details" @click.prevent="editDetails()">Change?</button>
      </div>
    </form>
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
      },
      email: function(val){
        this.personalStore.setEmail(val)
      }
    },
    computed: {
        ...mapStores(usePersonalStore, useFlowStore),
    },
    methods: {
        editDetails(){
          this.personalStore.setEditable(true)
        }
    }
}
</script>
<style scoped>
.edit-personal-box{
  background: rgb(81, 217, 81);
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem 0;
}
.edit-personal-box button{
  background: none;
  border: none;
}
.details-box{
  padding: 1rem;
}
</style>
