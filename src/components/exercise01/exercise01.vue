<template>
  <fieldset>
    <legend>
      <h1>Palindrome</h1>
    </legend>
    <h2>Description</h2>
    <p>
      A
      <b>palindrome</b> is a word, number, phrase, or other sequence of characters
      which reads the same backward as forward, such as madam, racecar.
    </p>

    <h2>Instructions</h2>
    <pre>Finish the implementation of the Palindrome component
      <br>Make sure the following examples work:
      <br>"madam", "racecar", "Was it a car or a cat I saw?", "A man, a plan, a canal – Panama!"
    </pre>
    <Palindrome/>
  </fieldset>
</template>

<script>
import Palindrome from './palindrome';
export default {
  components: { Palindrome }
};
</script>