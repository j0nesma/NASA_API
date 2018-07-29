<template>
    <b-container  v-on:click="store">
        <router-link to="/asset/" class="nav-link">
            <span id="title"><img thumbnail fluid id = "audioIcon" src='../assets/audio.png'  width="10em" height="10em" alt="Thumbnail" />
            {{audioData.data[0].description}}</span>
        </router-link>
    </b-container>
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'

export default Vue.extend({
   name: 'audioContainer',
   props:['audioData'],
   data () {
    return {
    }
  },
  methods:{ 
      store(evt){
            this.$store.state.Data = this.$props.audioData;
        }
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
  width: 15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
