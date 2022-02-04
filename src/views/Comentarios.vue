<template>
  <v-container>
    <div class="ma-5"
        v-for="comentario in comentarios"
        :key="comentario.id">
        <comentario
            :email="comentario.email"
            :body="comentario.body"
            :name="comentario.name" />
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import Comentario from "@/components/comentario";

export default {
  components: {Comentario},
  data(){
    return{
      comentarios:[]
    }
  },
  methods:{
    getComentarios(){
      axios.get('https://jsonplaceholder.typicode.com/comments/?postId='+this.$route.params.id)
      .then((Commento)=>{
        for(let i in Commento.data){
          this.comentarios.push(Commento.data[i])
        }
        console.log(this.comentarios)
      })
    }
  },
  mounted() {
    this.getComentarios()
  }
}
</script>