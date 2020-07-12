<template>
  <fieldset>
    <legend>
      <h1>Job Listings</h1>
    </legend>
    <h2>Description</h2>
    <p>Your challenge is to build out a job listing page.</p>
    <h2>Instructions</h2>
    <pre>
      See */sketches* for design inspiriations.
      You can use any tools you like to help you complete the challenge.<br>
      - Display all jobs in a sigle list<br>
      BONUS
      - Filter job listings based on the categories<br>
        The categories are:
          - Role: Frontend, Backend, Fullstack
          - Level: Junior, Midweight, Senior
          - Languages: Python, Ruby, JavaScript, HTML, CSS
          - Tools: React, Sass, Vue, Django, RoR (Ruby on Rails)
    </pre>
    <joblisting/>
  </fieldset>
</template>

<script>
import joblisting from './joblisting';
export default {
  components: {
    joblisting
  }
};
</script>