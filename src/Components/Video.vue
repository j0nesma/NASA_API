<template>
    <b-container v-on:click="store">
        <router-link to="/about" class="nav-link">
        <b-col><img id = "videoIcon" src='../assets/video.png' alt="Thumbnail"/>
        <span id="title">{{vidData.data[0].nasa_id}}</span></b-col>
        </router-link>
    </b-container>
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'

export default Vue.extend({
   name: 'VideoContainer',
   props:['vidData'],
   data () {
        return {
        }
    },
    methods:{ 
    store(evt){
      this.$store.state.Data = this.$props.vidData;
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
  width: 12em;
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
}
</style>
