<template>
    <b-container v-on:click="store">
        <router-link to="/about" class="nav-link">
        <span><img id = "videoIcon" src='../assets/video.png' alt="Thumbnail"/>
        {{vidData.data[0].nasa_id}}</span>
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
#videoIcon{
    width: 2em;
    height: auto;
}

</style>
