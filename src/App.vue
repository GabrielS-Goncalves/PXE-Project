<script setup>
  import CentralNavBar from './components/CentralNavBar/CentralNavBar.vue';
  import CentralVerticalBar from './components/CentralVerticalBar/CentralVerticalBar.vue';
  import { useSidebarStore } from './stores/navbar/useSidebarStore.js';

  const sidebarStore = useSidebarStore()
</script>

<template>
  <div id="App-container">
    <CentralNavBar/>
    <!-- <CentralVerticalBar/> -->

    <!-- <main :class="['Main-content', {'Sidebar-active': sidebarStore.isOpen}]">
      <RouterView/>
    </main> -->
  </div>
</template>

<style>
  body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #222838;
    color: aliceblue;
  }
</style>
