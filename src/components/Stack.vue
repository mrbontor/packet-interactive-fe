<template>
  <div id="stack">
    <h1>{{ msg }}</h1>
    <div style="padding-left: 20%; padding-right: 20%;">
    <!-- <div> {{ packets }} | json</div> -->
    <div style="float: left;">
    Packet Info
    </div>
    <div style="float: right;">
    <div class="stack-element" @click="onClick('eth',$event)"> Ethernet </div>
    <div class="stack-element" @click="onClick('ip',$event)"> IP </div>
    <div class="stack-element" @click="onClick('mac',$event)"> TCP </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'stack',
    props: ['packets', 'mymsg'],
    data () {
      return {
        msg: 'This is the stack component'
      }
    },
    methods: {
      onClick (msg, e) {
        console.log(msg)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .stack-element{
    background-color: #42b8b9;
    max-width: 250px;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
    border-style: solid;
    border-width: thin;
    font-size: 2em;

  }

  .stack-element:hover {
    background-color: #e8e53d;
  }
</style>
