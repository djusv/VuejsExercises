<template>
  <div id="app">
    <Overview/>
  </div>
</template>

<script>
import Overview from './components/Overview';

export default {
  name: 'App',
  components: {
    Overview
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
