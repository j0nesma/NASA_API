<template>
<div>
  <div id="searchBlock">
    <b-card title="About Me">
      <b-card-header>Search For Something</b-card-header>
      <b-form @submit="onSubmit">
        <b-form-input v-model="searchValue"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
        <b-button type="submit">search</b-button>
      </b-form>
      <p>{{searchValue}}</p>
    </b-card>
  </div>
  <div v-if="result != []" v-for="res in result" :key="res.href">
    {{res}}
  </div>
</div>
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'

export default Vue.extend({
   name: 'searchPage',
   
   data () {
    return {
      searchValue: 'moon',
      result:[]
    }
  },
  methods:{ 
    onSubmit (evt) {
      let s = new SearchService();
      evt.preventDefault();
      s.getImage(this.searchValue, (res)=>{
        this.result=res.collection.items
      })
    },
   }
    
})
</script>


<style lang="scss">

</style>
