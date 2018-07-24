<template>
<div>
  <div id="searchBlock">
    <b-card title="NASA SEARCH">
      <b-card-header>Search For Something</b-card-header>
      <b-form @submit="onSubmit">
        <b-form-input v-model="searchValue"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
      <b-form-group>
        <b-form-checkbox-group plain v-model="selected" :options="options"/>
      </b-form-group>
        <b-button type="submit">search</b-button>
      </b-form>
    </b-card>
  </div>
  <b-card title="Audio" v-if="selected.includes('audio')">
  <b-container id="mediaContainer" fluid >
      <div id="media" v-for="res in result.Audio" :key = res.data.media_type>
        <audioContainer :desc=res.data[0].description></audioContainer>
      </div>
  </b-container>
  </b-card>
  <b-card title="Images" v-if="selected.includes('image')">
  <b-container id="mediaContainer" fluid v-if="result != [] && selected.includes('image')">
        <div id="media" v-for="res in result.Image" :key = res.data.media_type>
          <imageContainer :imgSrc =res.links[0].href></imageContainer>
        </div>
  </b-container>
  </b-card>
</div>
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'
import imageContainer from '../components/Image.vue'
import audioContainer from '../components/Audio.vue'

export default Vue.extend({
   name: 'searchPage',
  components: {
    imageContainer,
    audioContainer
  },
   data () {
    return {
      searchValue: 'moon',
      result:[],
      options:[
        {text:"Audio", value:"audio"},
        {text:"Image", value:"image"},
        {text:"Video", value:"video"},
      ],
      selected: ["audio", "image", "video"]
    }
  },
  methods:{ 
    onSubmit (evt) {
      let s = new SearchService();
      evt.preventDefault();
      s.search(this.searchValue, (res)=>{
        this.result=res
        console.log(this.result);
      })
    },
   }
    
})
</script>


<style lang="scss">

#mediaContainer{
    display: flex;
    flex-wrap: wrap;
}
#media{
  size: 10em
}
</style>
