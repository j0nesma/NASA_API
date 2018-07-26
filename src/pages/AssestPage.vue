<template>
<b-container>
  <b-row>
    <b-col sm="auto">
      <!-- <b-card> -->
      <b-img v-if="this.mediaData.data[0].media_type =='image'" :src=mediaData.links[0].href fluid img-alt="image"/>
      <p v-if="this.mediaData.data[0].media_type =='video'">Its a video</p>
      <p v-if="this.mediaData.data[0].media_type  == 'audio'">its audio</p> 
      <!-- </b-card> -->
    </b-col>
    <b-col sm="auto">
      <description :mediaData=mediaData />
    </b-col>
  </b-row>
</b-container>
</template>

<script lang="js">
import Vue from 'vue'
import description from '../components/Description.vue'

export default Vue.extend({
   name: 'assestPage',
  mounted: function() {
      this.update()
   },
   components:{
     description
   },
   data () {
    return {
      mediaData:[]
    }
  },
  methods:{ 
    update:function(){
      this.mediaData = this.$store.state.Data;
       console.log("DATA ="+this.mediaData);
    }
  }
    
})
</script>


<style lang="scss">

</style>
