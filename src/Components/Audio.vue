<template>
    <b-container>
        <div class="text-center my-3">
            <img thumbnail fluid id = "audioIcon" src='../assets/audio.png'  width="100%" height="100%" alt="Thumbnail" />
            <span id="title">{{desc}}</span>
        </div>
    </b-container>
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'

export default Vue.extend({
   name: 'audioContainer',
   props:['desc'],
   data () {
    return {
    }
  },
  methods:{ 
   }
    
})
</script>


<style>
#audioIcon{
    width: 2em;
    height: auto;
}
#title{
  display: block;
  width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
