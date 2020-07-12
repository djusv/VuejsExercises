<template>
  <div>
    <exercise01/>
    <exercise02/>
    <exercise03/>
    <exercise04/>
    <exercise05/>
  </div>
</template>

<script>
import exercise01 from './exercise01/exercise.vue';
import exercise02 from './exercise02/exercise.vue';
import exercise03 from './exercise03/exercise.vue';
import exercise04 from './exercise04/exercise.vue';
import exercise05 from './exercise05/exercise.vue';

export default {
  components: {
    exercise01,
    exercise02,
    exercise03,
    exercise04,
    exercise05
  }
};
</script>