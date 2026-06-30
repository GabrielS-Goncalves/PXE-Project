<script setup>
  import { RouterView } from 'vue-router';
  import CentralNavBar from './components/CentralNavBar/CentralNavBar.vue';
  import CentralVerticalBar from './components/CentralVerticalBar/CentralVerticalBar.vue';
  import { useVerticalBarStore } from '@/stores/navbar/useVerticalBarStore.js';
  import { useAuthStore } from './stores/auth/useAuthStore.js';

  const verticalBarStore = useVerticalBarStore()
  const authStore = useAuthStore()
</script>

<template>
  <div id="App-container" v-if="authStore.isAuthenticated">
    <CentralNavBar/>
    <CentralVerticalBar/>

  </div>
  <main :class="['Main-content', {'VerticalBar-active': verticalBarStore.isOpen}]">
    <RouterView/>
  </main>
</template>

<style>
  body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #222838;
    color: aliceblue;
  }

  .Main-content{
    padding-top: 50px;
    margin-left: 60px;
    padding-left: 20px;
    transition: margin-left 0.3s ease;
    min-height: 100vh;
  }

  .Main-content.VerticalBar-active{
    margin-left: 250px;
  }
</style>
