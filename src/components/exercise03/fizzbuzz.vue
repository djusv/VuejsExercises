<template>
  <fieldset>
    <legend>Exercise</legend>
    <label>{{sliderValue}}</label>
    <br>
    <input v-model="sliderValue" type="range" min="0" max="100" value="0" step="1">
    <br>
    <span>
      <label>Fizz</label>
      <label>Buzz</label>
    </span>
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: 0
    };
  },
  computed: {}
};
</script>
