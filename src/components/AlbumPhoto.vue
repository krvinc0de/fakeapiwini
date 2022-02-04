<template>
    <v-card
        class="mx-auto"
        max-width="400"
    >
      <v-img
          :src="this.url"
          height="400px"
      ></v-img>

      <v-card-title>
        {{this.title}}
      </v-card-title>
    </v-card>
</template>

<script>
export default {
  props:{
    title:String,
    url:String
  }
}
</script>