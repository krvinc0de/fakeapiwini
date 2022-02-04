<template>
  <v-container>
    <div v-for="post in posts" :key="post.id">
      <postscomponent
          :title="post.title"
          :body="post.body"
          :id="post.id"/>
    </div>
  </v-container>

</template>

<script>
import axios from "axios";
import Postscomponent from "@/components/postscomponent";

export default {
  components: {Postscomponent},
  data(){
    return{
      posts:[]
    }
  },
  methods:{
    getPosts(){
      axios.get('https://jsonplaceholder.typicode.com/posts/?userId='+this.$route.params.id)
      .then((resp)=>{
        for(let i in resp.data){
          this.posts.push(resp.data[i])
        }
        console.log(this.posts)
      })
    }
  },
  mounted() {
    this.getPosts()
    console.log(this.$route.params.id)
  }
}
</script>