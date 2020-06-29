<template>
  <fieldset>
    <legend>Exercise</legend>
    <label>{{ minutes + ':' + seconds }}</label>
    <br>
    <span>
      <button @click="toggle">Start</button>
      <button @click="toggle">Stop</button>
      <button @click="reset" :disabled="!started">Reset</button>
    </span>
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      started: false,
      secondsElapsed: 0
    };
  },
  computed: {
    // NOTE: return with a padded zeros
    minutes() {
      // TODO: implement
      return '00';
    },
    seconds() {
      // TODO: implement
      return '00';
    }
  },
  methods: {
    toggle() {
      // TODO: start timer & stop timer
    },
    reset() {
      // TODO: reset secondsElapsed to 0
    }
  }
};
</script>
