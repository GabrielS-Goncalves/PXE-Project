<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const appVersion = import.meta.env.VITE_APP_VERSION;
    const appBuildDate = import.meta.env.VITE_APP_BUILD_DATE;

    // Função para controlar se o dropdown está aberto ou fechado
    // Variável para o estado reativo local
    const UserMenuIsOpen = ref(false);
    const DropdownRef = ref(null);

    function toggleUserMenu() {
        UserMenuIsOpen.value = !UserMenuIsOpen.value;
    };

    // Função para verificar se o menu está aberto e se o clique não ocorreu dentro do botão/dropdown
    function handleClickOutside(event) {
        if (UserMenuIsOpen.value && DropdownRef.value && !DropdownRef.value.contains(event.target)) {
            UserMenuIsOpen.value = false;
        };
    };

    // Quando o componente é montado no DOM
    // Adiciona o listener de clique no documento inteiro
    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
    });

    // Quando o compnente é removido do DOM
    // Remove o listener para evitar vazamentos de memória
    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
    });

    function handleLogout() {
        localStorage.removeItem('token');
        router.push('/auth/login')
        UserMenuIsOpen.value = false;
    };

</script>

<template>
    <div class="Central-UserDropdown" ref="DropdownRef">
        <button @click="toggleUserMenu" class="User-button">👤</button>
        <div v-if="UserMenuIsOpen" class="User-dropdown">
            <div class="Dropdown-header">
                PXE Project
            </div>
            <div class="App-version">
                <p>
                    Version: <span>{{ appVersion }}</span>
                </p>
                <p>
                    Build: <span>{{ appBuildDate }}</span>
                </p>
            </div>
            <hr class="Dropdown-divider">
            <button @click="handleLogout" class="Dropdown-item Exit-button">Exit</button>
        </div>
    </div>
</template>

<style scoped>
    .Central-UserDropdown{
        position: relative;
        padding-left: 330px;
    }

    .User-button{
        background: none;
        border: none;
        color: aliceblue;
        cursor: pointer;
        padding: 10px;
        font-size: 1.5em;
    }

    .User-dropdown{
        position: absolute;
        top: calc(100% + 5px);
        right: 0;
        width: 220px;
        background-color: #222838;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1010;
        padding: 0;
    }

    .Dropdown-header{
        padding: 8px 15px;
        font-weight: bold;
        text-align: center;
        color: aliceblue;
        cursor: default;
    }

    .App-version{
        font-size: 0.8em;
        color: aliceblue;
        padding: 4px 15px 10px;
        text-align: center;
    }

    .App-version>p{
        margin: 0;
    }

    .App-version>p>span{
        color: aqua;
    }

    .Dropdown-item{
        display: block;
        width: 100%;
        text-align: center;
        padding: 8px 15px;
        background: none;
        border: none;
        color: aliceblue;
        transition: background-color 0.2s;
    }

    .Dropdown-item:hover{
        background-color: aliceblue;
        color: #222838;
    }

    .Exit-button{
        color: #e74c3c;
    }

    .Exit-button:hover{
        background-color: #e74c3c;
        border-radius: 0 0 4px 4px;
        cursor: pointer;
    }

    .Dropdown-divider{
        border: 0;
        height: 1px;
        background: aliceblue;
        margin-bottom: 0;
    }
</style>