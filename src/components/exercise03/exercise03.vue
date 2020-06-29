<template>
  <fieldset>
    <legend>
      <h1>Posts & Comments</h1>
    </legend>
    <h2>Description</h2>
    <p>An online forum is a place where users post article and comment on each others posts.</p>
    <h2>Instructions</h2>
    <pre>Finish the implementation of both *Posts* and *Comments* components
      <br>Replace the static implementation of *Posts.getPosts* and *Comments.getComments*
      <br>Replace the static implementation of *Comments.getUsers* and add the name of the user who wrote the Post.
      <br>Try to only make request when necessary and to try to *lazy load* the comments
    </pre>
    <posts/>
  </fieldset>
</template>

<script>
import posts from './posts';
export default {
  components: {
    posts
  }
};
</script>