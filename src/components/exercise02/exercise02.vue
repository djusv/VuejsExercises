<template>
  <fieldset>
    <legend>
      <h1>Stopwatch</h1>
    </legend>
    <h2>Description</h2>
    <p>
      A stopwatch is used to measure the amount of time that elapses between its activation and deactivation.
      The timing functions are traditionally controlled by two buttons on the case.
      Pressing the first button starts the timer running, and pressing the button a second time stops it, leaving the elapsed time displayed.
      A press of the second button then resets the stopwatch to zero.
    </p>
    <h2>Instructions</h2>
    <pre>Finish the implementation of the Stopwatch component
      <br>Pressing the "Start" button should increase the "secondsElapsed" every second by one
      <br>Pressing the "Stop" button should stop the timer
      <br>Pressing the "Reset" button should reset the "secondsElapsed" to zero
      <br>The timer should be displayed in minutes and seconds with padded zeroes
      <br>Hide the "Stop" button when the stopwatch is not started
      <br>Hide the "Start" button when the stopwatch is already started
    </pre>
    <Stopwatch/>
  </fieldset>
</template>

<script>
import Stopwatch from './stopwatch';
export default {
  components: { Stopwatch }
};
</script>