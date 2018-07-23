<template>
<div>
  <div id="searchBlock">
    <b-card title="NASA SEARCH">
      <b-card-header>Search For Something</b-card-header>
      <b-form @submit="onSubmit">
        <b-form-input v-model="searchValue"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
        <b-button type="submit">search</b-button>
      </b-form>
    </b-card>
  </div>
  <b-container id="mediaContainer" fluid v-if="result != []">
     <div id="media" v-for="res in result.slice(0,70)" :key="res.href">
    <imageContainer v-if="res.data[0].media_type === 'image'" :imgSrc =res.links[0].href></imageContainer>
     </div>
  </b-container>
</div>
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'
import imageContainer from '../components/Image.vue'
export default Vue.extend({
   name: 'searchPage',
  components: {
    imageContainer
  },
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
        console.log(res);
        this.result=res.collection.items
        console.log(this.result);
        console.log(this.result[0].href)
      })
    },
   }
    
})
</script>


<style>
#mediaContainer{
    display: flex;
    flex-wrap: wrap;
}
#media{
  size: 10em
}
</style>
