<script setup>
    import { useSidebarStore } from '@/stores/navbar/useSidebarStore';

    const sidebarStore = useSidebarStore();
    function toggleMenu(){
        sidebarStore.toggleSidebar();
    }
</script>

<template>
    <nav class="Central-navbar">
        <div class="Left-side">
            <div class="Menu-button">
                <button @click="toggleMenu" class="Main-button">
                    <span class="Open-icon">☰</span>
                </button>
            </div>
            <div class="App-logo">
                <span class="Main-logo">PXE Project</span>
            </div>
        </div>
        <div class="Central-side">
            <div class="Search-wrapper">
                <input type="text" class="Search-input" v-model="searchTerm" placeholder="Search..." @keyup.enter="search">
                <button @click="search" class="Search-button">🔍</button>
            </div>
        </div>
        <div class="Right-side">

        </div>
    </nav>
</template>

<style scoped>
    .Central-navbar{
        position: fixed;
        width: 100%;
        height: 50px;
        background-color: #0948c8;
        color: aliceblue;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    .Left-side{
        position: relative;
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .Menu-button{
        width: 60px;
    }

    .Central-side{
        position: relative;
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .Search-wrapper{
        display: flex;
        align-items: center;
        max-width: 400px;
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
    }

    .Search-wrapper:hover{
        border: 1px solid aliceblue;
    }

    .Search-input {
        flex-grow: 1;
        padding: 8px 15px;
        border: none;
        outline: none;
        font-size: 14px;
        background-color: #222838;
        color: aliceblue;
        height: 34px;
        box-sizing: border-box;
    }

    .Search-input::placeholder{
        color: aliceblue;
    }

    .Search-button{
        background-color: #222838;
        color: aliceblue;
        border: none;
        border-left: 1px solid aliceblue;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 14px;
        height: 34px;
        box-sizing: border-box;
    }

    .Search-button:hover{
        background-color: aliceblue;
    }

    .Right-side{
        position: relative;
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .Main-button{
        background: none;
        border: none;
        color: aliceblue;
        cursor: pointer;
        padding: 0 4px;
        font-size: 1.2em;
    }

    .Main-button:hover{
        opacity: 0.6;
    }
</style>