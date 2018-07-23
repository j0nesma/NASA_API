<template>
<div>
<view-wrapper class="hm-zoom" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20(7).jpg" alt="">

</view-wrapper>

<b-img  thumbnail fluid :src=imgSrc  width="100%" height="100%" alt="Thumbnail" />
    
  </div>
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


<style>
imagebox {
  
};
</style>
