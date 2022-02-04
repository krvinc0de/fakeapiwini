<template>
  <v-row dense>
    <v-col cols="12">
      <v-card
          elevation="2"
      color="primary"
      class="ma-2"
      >
        <v-card-title   class = white--text >
          {{ this.title }}
        </v-card-title>

        <v-card-subtitle  class = white--text>{{this.body}}</v-card-subtitle>

        <v-card-actions>
          <button @click="IRcomentarios()">
            escuchar ahora
          </button>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props:{
    title:String,
    body:String,
    userId:Number,
    id:Number
  },
  methods:{
    IRcomentarios(){
      window.location = '/#/comentarios/'+this.id
    }
  }
}
</script>
<style>
 button{
  border-radius:10%;
  background-color: #46ac4b;
  text-align: center;
  margin-inline: 10px;
  margin-bottom: 5%;
  cursor: pointer;
  color: rgb(255, 255, 255);
 }