<template>
    <b-card :title=mediaData.data[0].title
            style="max-width: 300rem;"
    >
        <b-card-body>
            <p class="card-text">
                {{mediaData.data[0].description}} 
            </p>
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

</style>
