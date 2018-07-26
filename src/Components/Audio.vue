<template>
    <b-container  v-on:click="store">
        <router-link to="/about" class="nav-link">
            <img thumbnail fluid id = "audioIcon" src='../assets/audio.png'  width="100%" height="100%" alt="Thumbnail" />
            <span id="title">{{audioData.data[0].description}}</span>
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
  width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
