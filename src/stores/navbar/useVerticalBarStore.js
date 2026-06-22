import { defineStore } from "pinia";
import { ref } from "vue";

export const useVerticalBarStore = defineStore('verticalBar', () => {

    // Definição para que a VerticalBar começe aberta.
    const isOpen = ref(true);

    // Função para alternar o estado aberto/fechado.
    function toggleVerticalBar() {
        isOpen.value = !isOpen.value;
    }

    // Função para forçar a abertura.
    function openVerticalBar() {
        isOpen.value = true;
    }

    // Função para forçar o fechamento.
    function closeVerticalBar() {
        isOpen.value = false;
    }

    // O store retorna o estado e as ações.
    return {isOpen, toggleVerticalBar, openVerticalBar, closeVerticalBar};
})