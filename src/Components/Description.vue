<template>
    <b-card id="desc" style="max-width: 50rem;">
        <b-card-body>
                {{mediaData.data[0].description}} 
        </b-card-body>
    </b-card>
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'

export default Vue.extend({
   name: 'description',
   props:['mediaData'],
   data () {
    return {
      
    }
  },
  methods:{ 
  }
    
})
</script>


<style lang="scss">
#desc{
    border:none;
}
</style>
