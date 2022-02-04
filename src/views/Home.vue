<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
          :key="user.id"
          cols="12"
          sm="4"
          v-for="user in Usuarios"
      >
        <Usuario :name="user.name"
                 :email="user.email"
                 :username="user.username"
                 :city="user.city"
                 :phone="user.phone"
                 :id="user.id" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios";
  import Usuario from "@/components/usuario";

  export default {
    name: 'Home',

    components: {
      Usuario,
    },
    data(){
      return{
        Usuarios:[]
      }
    },
    mounted() {
      this.getUser()
    },
    methods:{
      getUser() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
              for(let i in resp.data){
                this.Usuarios.push(resp.data[i])
              }
              console.log(this.Usuarios)
            })

      }
    }
  }
</script>

