<template>
  <v-container>
    <div v-for="putos in PUTO" :key="putos.id" class="ma-3">
      <album :title="putos.title" :id="putos.id"/>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import Album from "@/components/album";

export default {
  components: {Album},
  data(){
    return{
      PUTO:[]
    }
  },
  methods:{
    getPutos(){
      axios.get('https://jsonplaceholder.typicode.com/albums/?userId='+this.$route.params.id)
      .then((resp)=>{
        for(let i in resp.data){
          this.PUTO.push(resp.data[i])
        }
        console.log(this.PUTO)
      })
    }
  },
  mounted() {
    this.getPutos()
  }
}
</script>