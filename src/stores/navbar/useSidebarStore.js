import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore('sideBar', () => {

    // Definição para que a sidebar começe aberta.
    const isOpen = ref(true);

    // Função para alternar o estado aberto/fechado.
    function toggleSidebar() {
        isOpen.value = !isOpen.value;
    }

    // Função para forçar a abertura.
    function openSidebar() {
        isOpen.value = true;
    }

    // Função para forçar o fechamento.
    function closeSidebar() {
        isOpen.value = false;
    }

    // O store retorna o estado e as ações.
    return {isOpen, toggleSidebar, openSidebar, closeSidebar};
})