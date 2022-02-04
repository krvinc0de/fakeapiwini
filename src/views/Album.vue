<template>
  <v-container>
    <div class="ma-3"
     v-for="al in album"
        :key="al.id">
      <AlbumPhoto :title="al.title" :url="al.url"/>
    </div>
  </v-container>
</template>


<script>
import axios from "axios";
import AlbumPhoto from "@/components/AlbumPhoto";

export default {
  components: {AlbumPhoto},
  data(){
    return{
      album:[]
    }
  },
  methods:{
    getIMG(){
      axios.get('https://jsonplaceholder.typicode.com/albums/'+this.$route.params.id+'/photos')
      .then((resp)=>{
        for(let i in resp.data){
          this.album.push(resp.data[i])
        }
        console.log(this.album)
      })
    }
  },
  mounted() {
    this.getIMG()
  }
}
</script>