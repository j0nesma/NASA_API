<template>
  <b-container>
    <router-link id="close" to="/" class="nav-link">X</router-link>
    <b-card id="backCard" :title="this.mediaData.data[0].title">
      <b-row class="justify-content-md-center">
        <b-col sm="auto">
          <b-img v-if="this.mediaData.data[0].media_type =='image'" :src=mediaData.links[0].href fluid img-alt="image"/>
          <video controls autoplay v-if="this.mediaData.data[0].media_type =='video' && videoSrc">
            <source :src=videoSrc type="video/mp4">
            Your browser does not support the audio tag.
          </video>      
          <video controls  v-if="this.mediaData.data[0].media_type  == 'audio' && audioSrc">
            <source :src=audioSrc type="audio/mpeg">
            Your browser does not support the audio tag.
          </video> 
        </b-col>
        <b-col sm="auto">
          <description :mediaData=mediaData />
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>


<script lang="js">
import Vue from 'vue'
import description from '../components/Description.vue'
import SearchService from '../utils/SearchService'

export default Vue.extend({
   name: 'assestPage',
   prop:['id'],
  mounted: function() {
      this.update()
   },
   components:{
     description
   },
   data () {
    return {
      mediaData:[],
      audioSrc:"",
      videoSrc:""
    }
  },
  methods:{ 
    update:function(){
      this.mediaData = this.$store.state.Data;
       let s = new SearchService();
       if(this.mediaData.data[0].media_type  == 'audio'){
         s.getAudioLink(this.mediaData.href, (res)=>{
           this.audioSrc = res;
         });
       }
       if(this.mediaData.data[0].media_type  == 'video'){
         s.getVideoLink(this.mediaData.href, (res)=>{
           this.videoSrc = res;
         });
       }
    }
  }
    
})
</script>


<style lang="scss">
#close{
  display:flex;
  justify-content: flex-start;
}

#backCard{
  border:none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size:1rem;
}

.card-title{
  background-color: #0b3d91;
  color: white;
}
</style>
