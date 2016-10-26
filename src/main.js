import Vue from 'vue'
import App from './App'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://localhost:7777')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App v-bind:mymsg="mymsg" v-bind:packet="packets[0]"/>',
  components: { App },
  data () {
    return {
      packets: [],
      mymsg: 'Hello'
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    data: function (packet) {
      this.packets.push(packet)
    }
  }
})
