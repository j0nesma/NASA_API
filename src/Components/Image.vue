<template>
  <router-link to="/about" class="nav-link"><b-img v-on:click="store" thumbnail fluid :src=data.links[0].href  id="thumbnailImage" alt="Thumbnail" /></router-link>
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'

export default Vue.extend({
   name: 'imageContainer',
   props:['data'],
   data () {
    return {
    }
  },
  methods:{ 
    store(evt){
      this.$store.state.Data = this.$props.data;
    }
   }
    
})
</script>


<style lang="scss">
#thumbnailImage{
  min-width: 5em;
  height: 5em;
}
</style>
