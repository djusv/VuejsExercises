<template>
  <fieldset>
    <legend>Example</legend>
    <div class="post">
      <div class="user" width="100" height="100">
        <img src="https://api.adorable.io/avatars/100/userid_1.png">
      </div>
      <div class="post-body">
        <span>
          <h3>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
          <p>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>written by: Leanne Graham
        </span>
        <comments/>
      </div>
    </div>
  </fieldset>
</template>

<script>
import Comments from './comments';
export default {
  components: {
    Comments
  }
};
</script>

<style scoped>
.post {
  display: flex;
  text-align: left;
}
.post-body {
  display: flex;
  flex-direction: column;
}
.user {
  padding: 20px;
  width: 100px;
}
</style>
