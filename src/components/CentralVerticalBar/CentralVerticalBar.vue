<script setup>
    import { useVerticalBarStore } from '@/stores/navbar/useVerticalBarStore';
    import { ref, watch } from 'vue';

    const verticalBarStore = useVerticalBarStore();
    const openSubMenu = ref(null);
    const itemsMenu = ref([
        {
            name: 'Home',
            icon: '🏠',
        }
    ]);

    function toggleSubMenu(itemName) {
        if (!openSubMenu.isOpen) {
            verticalBarStore.openVerticalBar();
            openSubMenu.value = itemName;
            return;
        } if (openSubMenu.value === itemName) {
            openSubMenu.value = null;
        } else {
            openSubMenu.value = itemName;
        }
    }

    watch(() => verticalBarStore.isOpen, (isNowOpen) => {
        if (!isNowOpen) {
            openSubMenu.value = null
        }
    });

    function handleLinkClick() {
        if (!verticalBarStore.isOpen) {
            verticalBarStore.openVerticalBar();
            return;
        }
        verticalBarStore.closeVerticalBar();
    }


</script>

<template>
    <aside :class="['VerticalBar', {'Is-open': verticalBarStore.isOpen}]">

    </aside>
</template>

<style scoped>
    .VerticalBar{
        position: fixed;
        left: 0;
        top: 50px;
        height: calc(100% - 50px);
        width: 55px;
        background-color: #38445c;
        color: aliceblue;
        transform: translateY(0);
        z-index: 1050;
    }
</style>