<template>
  <b-img  thumbnail fluid :src=imgSrc id="thumbnailImage" alt="Thumbnail" />
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'

export default Vue.extend({
   name: 'imageContainer',
   props:['imgSrc'],
   data () {
    return {
    }
  },
  methods:{ 
   }
    
})
</script>


<style lang="scss">
#thumbnailImage{
  width: 5em;
  height: auto;
}
</style>
