<template>
  <fieldset>
    <legend>
      <h1>Posts & Comments</h1>
    </legend>
    <h2>Description</h2>
    <p>An online forum is a place where users post article and comment on each others posts.</p>
    <h2>Instructions</h2>
    <pre>
      Given is an example set of components to visualize posts, comments and users.<br>
      Create your own components to visualize Post, Comments and Users.<br>
      You are allowed to create a different layout<br>
      Add styling to differentiate even and odd posts and comments<br>
      You can use other libraries but try to use existing APIs (async/await, fetch, etc...)<br>
      Reuse or modify code frome the examples if needed
    </pre>
    <example/>
    <postboard/>
  </fieldset>
</template>

<script>
import example from './example/posts';
import postboard from './postboard';
export default {
  components: {
    example,
    postboard
  }
};
</script>