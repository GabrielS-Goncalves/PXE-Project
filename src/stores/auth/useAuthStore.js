import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token') || null);
    const user = ref(JSON.parse(localStorage.getItem('user' || 'null')));
    const isAuthenticated = computed(() => !!token.value);

    function login(userData, userToken) {
        const UserAdmin = import.meta.env.VITE_USER
        const UserPassword = import.meta.env.VITE_PASSWORD
        if (UserAdmin === userData && UserPassword === userToken){
            token.value = userToken
            userData.value = userData
            localStorage.setItem('token', userToken)
            localStorage.setItem('user', JSON.stringify(userData))
        }
    }

    function logout() {
        token.value = null
        user.value = null
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return { token, user, isAuthenticated, login, logout }
})