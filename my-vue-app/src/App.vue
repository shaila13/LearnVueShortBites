<template>
  <div id="app">
    <ComponentA></ComponentA>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="This is my firstr Vue.js App"/>
    <CustomerList></CustomerList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomerList from './components/CustomerList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CustomerList
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
