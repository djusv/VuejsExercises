<template>
  <fieldset>
    <legend>
      <h1>FizzBuzz</h1>
    </legend>
    <h2>Description</h2>
    <p>
      Below is a small component with a range input and some labels.
      Under specific conditions the "Fizz" and "Buzz" labels should be shown.
    </p>
    <h2>Instructions</h2>
    <pre>Implement the FizzBuzz component
      <br>For each multiple of 3, only the label "Fizz" should be visible.
      <br>For each multiple of 5, only the label "Buzz" should be visible.
      <br>For numbers which are multiples of both 3 and 5, both labels should be visible.
      <br>Both labels should be hidden when the value is 0.
    </pre>
    <fizzbuzz/>
  </fieldset>
</template>

<script>
import fizzbuzz from './fizzbuzz';
export default {
  components: { fizzbuzz }
};
</script>