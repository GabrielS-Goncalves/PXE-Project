<script setup>
    import { useVerticalBarStore } from '@/stores/navbar/useVerticalBarStore';
    import { ref, watch } from 'vue';

    const verticalBarStore = useVerticalBarStore();
    const openSubMenu = ref(null);
    const itemsMenu = ref([
        {
            name: 'Dashboard',
            icon: '🏠',
            to: '/dashboard/home'
        },
        {
            name: 'Storage',
            icon: '🖥️',
            children: [
                {name: 'ISOs', icon: '💿', to: '/storage/isos'}
            ]
        },
        {
            name: 'Inventory',
            icon: '📚​',
            children: [
                {name: 'Computers', icon: '💻', to: '/inventory/computers'}
            ]
        },
        {
            name: 'Administration',
            icon: '⚙️',
            to: '/administration'
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
        <nav>
            <ul class="Menu-list">
                <li v-for="item in itemsMenu" :key="item.name">
                    <RouterLink v-if="!item.children" :to="item.to" class="Menu-item" :data-tooltip="item.name" @click="handleLinkClick">
                        <span class="Icon">{{ item.icon }}</span>
                        <span class="Text" v-if="verticalBarStore.isOpen">{{ item.name }}</span>
                    </RouterLink>
                    <div v-else class="Menu-itemGroup">
                        <button @click="toggleSubMenu(item.name)" class="Menu-item Submenu-toggle" :data-tooltip="item.name">
                            <span class="Icon">{{ item.icon }}</span>
                            <span class="Text" v-if="verticalBarStore.isOpen">{{ item.name }}</span>
                            <span v-if="verticalBarStore.isOpen" :class="['Chevron', {'Is-open': openSubMenu === item.name}]">
                                &#9662;
                            </span>
                        </button>
                        <ul v-if="verticalBarStore.isOpen && openSubMenu === item.name" class="Submenu">
                            <li v-for="child in item.children" :key="child.name">
                                <RouterLink :to="child.to" class="Menu-item Submenu-item">
                                    <span class="Icon" v-if="child.icon">{{ child.icon }}</span>
                                    <span class="Text">{{ child.name }}</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
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
        transition: width 0.3s ease, left 0.3s ease;
        transform: translateY(0);
        z-index: 1050;
    }

    .VerticalBar.Is-open{
        width: 250px;
    }

    
    .Menu-list{
        list-style: none;
        padding: 0;
        margin-top: 0px;
    }
    
    .Menu-item{
        display: flex;
        align-items: center;
        position: relative;
        padding: 10px 14px;
        text-decoration: none;
        color: aliceblue;
        white-space: nowrap;
        transition: background-color 0.2s;
    }
    
    .Menu-item:hover{
        background-color: #ae3440;
    }
    
    .Menu-item.RouterLink-active{
        background-color: #0d7233;
        font-weight: bold;
    }
    
    .Menu-item::after{
        z-index: 1100;
        content: attr(data-tooltip);
        position: absolute;
        top: 50%;
        left: calc(100% + 8px);
        transform: translateY(-50%);
        white-space: nowrap;
        padding: 6px 10px;
        background-color: #f5495a;
        color: aliceblue;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    .VerticalBar:not(.Is-open) .Menu-item:hover::after{
        opacity: 1;
    }

    .VerticalBar:not(.Is-open) .Menu-item:hover{
        background-color: #ae3440;
    }
    
    .Menu-itemGroup{
        width: 100%;
    }

    .Submenu-toggle {
        display: flex;
        align-items: center;
        padding: 10px 14px;
        width: 100%;
        text-decoration: none;
        color: aliceblue;
        white-space: nowrap;
        transition: backgroud-color 0.2s;
        background: none;
        border: none;
        cursor: pointer;
        font-size: inherit;
    }

    .Submenu-toggle:hover{
        background-color: #ae3440;
    }

    .Chevron{
        margin-left: auto;
        font-size: 0.8em;
        transition: transform 0.3s ease;
    }

    .Chevron.Is-open{
        transform: rotate(180deg);
    }

    .Submenu {
        list-style: none;
        padding-left: 0;
        margin: 0;
        background-color: rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .Submenu-item{
        display: flex;
        align-items: center;
        padding-left: 40px !important;
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: 0.9em;
    }

    .Submenu-item.Text{
        color: #bdc3c7;
    }

    .Submenu-item:hover .Text{
        color: aliceblue;
    }

    .Submenu-item .Icon {
        margin-right: 10px;
    }

    .Icon{
        font-size: 1.3em;
        margin-right: 15px;
    }
</style>