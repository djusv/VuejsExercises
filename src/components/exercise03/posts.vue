<template>
  <fieldset>
    <legend>Exercise</legend>

    <button @click="reload">refresh</button>

    <div v-for="post in posts" :key="post.id" class="post">
      <h3>Title: {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <comments :post-id="post.id"/>
      <sub>written by: {{ post.userId }}</sub>
    </div>
  </fieldset>
</template>

<script>
import Comments from './comments';
export default {
  components: {
    Comments
  },
  data() {
    return {
      users: [],
      posts: []
    };
  },
  methods: {
    getPosts() {
      // TODO: implement GET request use 'getUrl' function
      // eslint-disable-next-line
      const getUrl = () => 'https://jsonplaceholder.typicode.com/posts';
      return [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body:
            'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        }
      ];
    },
    reload() {
      this.posts = this.getPosts();
    },
    getUsers() {
      // TODO: implement GET request use 'getUrl' function
      // eslint-disable-next-line
      const getUrl = () => 'https://jsonplaceholder.typicode.com/users';
      return [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz'
        }
      ];
    }
  },
  mounted() {
    this.users = this.getUsers();
  }
};
</script>

<style scoped>
.post {
  border: 1px solid darkgrey;
  border-radius: 15px;
  margin-top: 25px;
}
.post:nth-child(even) {
  background: lightgrey;
}
.post:nth-child(odd) {
  background: whitesmoke;
}
</style>
