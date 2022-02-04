<template>
    <v-card
        class="mx-auto"
        max-width="344"
        elevation="2"
        color="primary"
    >
      <v-card-text class = white--text>
        <p class="text-h4 text--primary">
          {{this.name}}
        </p>
        <div class="text--primary">
          {{this.body}}
        </div>
        <div class="text--primary">
          {{this.email}}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
            text
            color="teal accent-4"
           
        >
          leer mas
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props:{
    body:String,
    name:String,
    email:String
  },
}
</script>