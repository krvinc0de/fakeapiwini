<template>
  <v-card
      elevation="4"
      color="primary"
      class="ma-2"
  >
    <v-card-title class = white--text>
      {{this.name}}
    </v-card-title>
    <v-card-subtitle class = white--text>
      {{this.email}}
    </v-card-subtitle>
    <v-card-text class = white--text>
      {{this.username}}
    </v-card-text>
    <v-card-text class = white--text>
      {{this.city}}
    </v-card-text>
    <v-card-text>
      {{this.website}}
    </v-card-text>
    <v-card-text class = white--text>
      {{this.phone}}
    </v-card-text>
    <button class = white--text type="button" @click="irPosts()" >POSTEOS</button>
    <button class = white--text type="button" @click="irAlbums()" >ALBUMES</button>
    <button class = white--text type="button" @click="irTODO()" >TODO</button>
    

  </v-card>
</template>

<script>
export default {
  props:{
    name:String,
    username:String,
    email:String,
    city:String,
    phone:String,
    website:String,
    id:Number
  },
  methods:{
    irPosts(){
      window.location = '/#/posts/'+this.id
    },
    irAlbums(){
      window.location = '/#/albums/'+this.id
    },
    irTODO(){
      window.location = '/#/todo/'+this.id
    },
  }
}
</script>

<style>
 button{
  border-radius:10%;
  background-color: #0c1b5e;
  text-align: center;
  margin-inline: 10px;
  margin-bottom: 5%;
  cursor: pointer;
  color: rgb(255, 255, 255);
  padding: 15px 20px;
 }

</style>