<template>
  <v-card
      class="mx-auto"
      max-width="500"
      color="dark"
  >
    <v-card-title>
      {{this.title}}
    </v-card-title>

    <v-card-actions>
      <v-btn
          color="white lighten-2"
          text
          @click="irAlbum()"
      >
        Explorar albumes
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:{
    id:Number,
    title:String
  },
  methods:{
    irAlbum(){
      window.location = "/#/album/"+this.id
    }
  }
}
</script>