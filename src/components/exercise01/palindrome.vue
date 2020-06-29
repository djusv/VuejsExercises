<template>
  <fieldset>
    <legend>Exercise</legend>
    <input type="text" placeholder="Enter text here">
    <span v-if="inputText.length > 0">
      <label v-if="isPalindrome">Yes, this is a palindrome!</label>
      <label v-else>No, this isn't a palindrome!</label>
    </span>
  </fieldset>
</template>

<script>
export default {
  computed: {
    isPalindrome() {
      return false;
    }
  },
  data() {
    return { inputText: '' };
  }
};
</script>