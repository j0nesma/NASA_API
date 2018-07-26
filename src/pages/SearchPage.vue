<template>
  <b-container flex class="sectionHeight">
    <b-row class="justify-content-md-center">
    <b-container flex>
      <b-row>
        <b-col><b-card title="NASA SEARCH">
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
        </b-col>
      </b-row>
    </b-container>
  </b-row>
  <b-row>
    <b-container flex>
      <b-row>
        <b-col><b-card v-if="selected.includes('audio') && result.Audio" no-body class="mb-1">
          <b-container flex>
            <b-row>
              <b-col cols="12"><b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.audio variant="info" class="text-left">Audio</b-btn>
              </b-card-header></b-col>
            </b-row>
            <b-row>
              <b-col><b-collapse id="audio" role="tabpanel">
                <b-card-body>
                  <b-container id="mediaContainer" fluid >
                    <b-row>
                    <b-col id="media" v-for="res in result.Audio" :key = res.data.media_type>
                      <audioContainer :audioData=res></audioContainer>
                    </b-col>
                    <b-col><span v-if="result.Audio && result.Audio.length==0">Sorry no results were found :(</span></b-col>
                    </b-row>
                  </b-container>
                </b-card-body>
              </b-collapse></b-col>
            </b-row>
          </b-container>
        </b-card></b-col>
      </b-row>
    </b-container>
  </b-row>
  <b-row >
    <b-container flex>
      <b-row>
        <b-col>
          <b-card v-if="selected.includes('image') && result.Image" no-body class="mb-1">
            <b-container flex>
              <b-row>
                <b-col>
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.images variant="info" class="text-left">Images</b-btn>
                  </b-card-header>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-collapse id="images" role="tabpanel">
                    <b-container id="mediaContainer" fluid>
                      <b-row>
                      <b-col id="media" v-for="res in result.Image" :key = res.data.media_type>
                        <imageContainer :data=res ></imageContainer>
                      </b-col>
                      </b-row>
                      <span v-if="result.Images && result.Image.length==0">Sorry no results were found :(</span>
                    </b-container>
                  </b-collapse>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </b-row>
  <b-row >
    <b-container flex>
      <b-row>
        <b-col>
          <b-card v-if="selected.includes('video') && result.Video" no-body class="mb-1">
            <b-container flex>
              <b-row>
                <b-col>
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.video variant="info" class="text-left">Video</b-btn>
                  </b-card-header>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-collapse id="video" role="tabpanel">
                    <b-container flex>
                      <b-row>
                        <b-col v-for="res in result.Video" :key = res.data.media_type >
                          <videoContainer :vidData=res></videoContainer>
                          <span v-if="result.Video && result.Video.length==0">Sorry no results were found :(</span>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-collapse>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
        this.$store.state.result = res
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
  // size: 10em
}
.sectionHeight {
height:100vh;
}
</style>
