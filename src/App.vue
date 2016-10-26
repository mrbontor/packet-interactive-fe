<template>
  <div id="app">
    <stack v-bind:mymsg="mymsg" v-bind:packets="packets"></stack>
  </div>
</template>

<script>
import Stack from './components/Stack'
import Hello from './components/Hello'

export default {
  name: 'app',
  props: ['mymsg', 'packets'],
  components: {
    Stack,
    Hello
  }
}
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
