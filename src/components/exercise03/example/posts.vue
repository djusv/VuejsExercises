<template>
  <fieldset>
    <legend>Example</legend>
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="user" width="100" height="100">
        <img :src="`https://api.adorable.io/avatars/100/${post.userId}.png`">
      </div>
      <div class="post-body">
        <span>
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
          <sub>written by: {{ users[0].name }}</sub>
        </span>
        <comments :post-id="post.id"/>
      </div>
    </div>
  </fieldset>
</template>

<script>
import Comments from './comments';
import { getUsersSync, getPostsSync } from '../api.js';
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
  mounted() {
    this.users = getUsersSync();
    this.posts = getPostsSync();
  }
};
</script>

<style scoped>
.post {
  display: flex;
  border-radius: 15px;
  margin-top: 25px;
  border: 1px solid black;
}
.post-body {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.user {
  padding: 15px;
  width: 100px;
}
sub {
  text-align: right;
  display: flex;
  flex-direction: row-reverse;
}
</style>
