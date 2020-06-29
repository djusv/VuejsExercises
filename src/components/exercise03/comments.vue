<template>
  <div>
    <button @click="toggle">Show all comments</button>
    <div v-show="showComments" v-for="comment in comments" :key="comment.id" class="comment">
      <span>
        <p>{{ comment.body }}</p>
        <sub>written by: {{ comment.name + ' - ' + comment.email }}</sub>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postBody: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showComments: false,
      comments: []
    };
  },
  methods: {
    toggle() {
      this.showComments = !this.showComments;
    },
    getComments(postId) {
      // TODO: implement GET request use 'getUrl' function
      // eslint-disable-next-line
      const getUrl = postId => `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
      return [
        {
          postId: 1,
          id: 1,
          name: 'id labore ex et quam laborum',
          email: 'Eliseo@gardner.biz',
          body:
            'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
        }
      ];
    }
  },
  mounted() {
    this.comments = this.getComments(this.postId);
  }
};
</script>

<style scoped>
.comment {
  border-radius: 5px;
  text-align: left;
  margin-left: 45px;
  padding: 10px;
  border: solid 1px black;
}

.comment:nth-child(even) {
  background: darkgray;
}

.comment:nth-child(odd) {
  background: gainsboro;
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
