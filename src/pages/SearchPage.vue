<template>
  <b-container flex class="sectionHeight">
    <b-row class="justify-content-md-center">
    <b-container flex>
      <b-row>
        <b-col><b-card img-src="http://t0.gstatic.com/images?q=tbn:ANd9GcQ9u48pu-6IB2FnnYl_H-15le_g8Dkt5d5RN-VWiWIl_-dyJdaa"  id="searchContainer">
          <b-form @submit="onSubmit">
            <b-form-input v-model="searchValue" placeholder="Search for something" type="text" id = "searchBox"></b-form-input>
            <b-button type="submit" :disabled="selected.length==0" class="nasa">search</b-button>
          <b-form-group>
            <b-form-checkbox-group plain v-model="selected" :options="options"/>
          </b-form-group>
          </b-form>
        </b-card>
        </b-col>
      </b-row>
    </b-container>
  </b-row>
  <b-row>
    <b-col>
        <b-card v-if="selected.includes('audio') && result.Audio" no-body class="mb-1">
          <b-row>
            <b-col cols="12"><b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.audio variant="info" class="text-left expander">Audio</b-btn>
            </b-card-header></b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-collapse visible id="audio" role="tabpanel">
              <b-card-body>
                <b-container id="mediaContainer" fluid >
                  <b-row class="justify-content-md-center">
                  <b-col cols="4" id="media" v-for="res in result.Audio" :key = res.data.media_type>
                    <audioContainer :audioData=res></audioContainer>
                  </b-col>
                  <b-col><span v-if="result.Audio && result.Audio.length==0">Sorry no results were found :(</span></b-col>
                  </b-row>
                </b-container>
              </b-card-body>
            </b-collapse></b-col>
          </b-row>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-card v-if="selected.includes('image') && result.Image" no-body class="mb-1">
          <b-row>
            <b-col>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.images variant="info" class="text-left expander">Images</b-btn>
              </b-card-header>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-collapse visible  id="images" role="tabpanel">
                <b-card-body>
                <b-container id="mediaContainer" fluid>
                  <b-row>
                  <b-col id="media" v-for="res in result.Image" :key = res.data.media_type>
                    <imageContainer :data=res ></imageContainer>
                  </b-col>
                  <b-col><span v-if="result.Image && result.Image.length==0">Sorry no results were found :(</span></b-col>
                  </b-row>
                </b-container>
                </b-card-body>
              </b-collapse>
            </b-col>
          </b-row>
      </b-card>
    </b-col>
  </b-row>
  <b-row >
    <b-col>
      <b-card v-if="selected.includes('video') && result.Video" no-body class="mb-1">
          <b-row>
            <b-col>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.video variant="info" class="text-left expander">Video</b-btn>
              </b-card-header>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-collapse visible id="video" role="tabpanel">
                <b-card-body>
                  <b-container id="mediaContainer" fluid>
                    <b-row>
                      <b-col cols="4" v-for="res in result.Video" :key = res.data.media_type >
                        <videoContainer :vidData=res></videoContainer>
                      </b-col>
                      <b-col><span v-if="result.Video && result.Video.length==0">Sorry no results were found :(</span></b-col>
                    </b-row>
                  </b-container>
                </b-card-body>
              </b-collapse>
            </b-col>
          </b-row>
      </b-card>
    </b-col>
  </b-row>
</b-container>
</template>

<script lang="js">
import Vue from 'vue'
import SearchService from '../utils/SearchService'
import imageContainer from '../components/Image.vue'
import audioContainer from '../components/Audio.vue'
import videoContainer from '../components/Video.vue'

export default Vue.extend({
   name: 'searchPage',
  components: {
    imageContainer,
    audioContainer,
    videoContainer
  },
   data () {
    return {
      searchValue: '',
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
        this.$store.state.result = res
      })
    },
    
   }
    
})
</script>


<style lang="scss">

#mediaContainer{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}
.expander{
  background-color: #204a91;
  border-color: #204a91;
}
.sectionHeight {
  height:100vh;
}

.nasa{
  background-color: #0b3d91;
  color: white
}

#searchBox{
  display:inline;
  width:17em;
}

#searchContainer{
  border: none;
}
#searchContainer img{
  width: 10em;
  height: auto;
  display: flex;
  align-self: center;
  
}

</style>
