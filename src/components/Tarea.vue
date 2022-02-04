<template>
  <v-card class="ma-5"
      elevation="2"
      color="#485052"
     >
    <v-card-text class = white--text>
      {{this.title}}
    </v-card-text>
   <v-icon v-if="this.completed" class = white--text>
     mdi-checkbox-marked-circle
   </v-icon>
  </v-card>
</template>

<script>
export default {
  props:{
    title:String,
    completed:Boolean
  }
}
</script>