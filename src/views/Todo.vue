<template>
  <v-container>
    <div v-for="std in todo" :key="std.id">
      <Tarea :title="std.title" :completed="std.completed"/>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import Tarea from "@/components/Tarea";

export default {
  components: {Tarea},
  data(){
    return{
      todo:[]
    }
  },
  methods:{
    getTodo(){
      axios.get('https://jsonplaceholder.typicode.com/todos/?userId='+this.$route.params.id)
      .then((resp)=>{
        for(let i in resp.data){
          this.todo.push(resp.data[i])
        }
        console.log(this.todo)
      })
    }
  },
  mounted() {
    this.getTodo()
  }
}
</script>