<template>
  <fieldset>
    <legend>Exercise</legend>
    {{listings}}
  </fieldset>
</template>

<script>
// eslint-disable-next-line
const listings = require('./data.json');

export default {
  components: {},
  data() {
    return {
      listings: listings
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style>
</style>
