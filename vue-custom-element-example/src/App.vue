<template>
  <div id="app">
    <h1 id="header">Vue Custom Element Example</h1>
    <h3>click the button below</h3>
    <MyButton v-on:click="increaseCounter" />
    <h3>counter: {{counter}}</h3>
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue';
import Vue from "vue";
import vueCustomElement from "vue-custom-element";

Vue.use(vueCustomElement);

Vue.customElement("my-button", MyButton);
export default {
  name: 'App',
  data: function() {
    return {
      counter: 0
    }
  },
  components: {
    MyButton
  },
  methods: {
    increaseCounter() {
      this.counter++;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
