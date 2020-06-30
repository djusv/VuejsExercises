<template>
  <div>
    <b>Comments</b>
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <span>
        <p>{{ comment.body }}</p>
        <sub>written by: {{ comment.name }}</sub>
      </span>
    </div>
  </div>
</template>

<script>
import { getCommentsSync } from '../api.js';
export default {
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    this.comments = getCommentsSync(this.postId);
  }
};
</script>

<style scoped>
.comment {
  border-radius: 5px;
  text-align: left;
  margin-left: 45px;
  padding: 10px;
}
sub {
  text-align: right;
  display: block;
}
summary {
  text-align: left;
  margin-left: 45px;
}
</style>
