import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token') || null);
    const user = ref(localStorage.getItem('user' || null));

    const isAuthenticated = computed(() => !!token.value);

    function login(username, password) {
        const UserAdmin = import.meta.env.VITE_AUTH_USER
        const UserPassword = import.meta.env.VITE_AUTH_PASSWORD

        if (username === UserAdmin && password === UserPassword){
            const fakeToken = btoa(`${username}:${Date.now()}`)
            
            token.value = fakeToken
            user.value = username
            localStorage.setItem('token', fakeToken)
            localStorage.setItem('user', username)

            return true
        }

        return false
    }

    function logout() {
        token.value = null
        user.value = null
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return { token, user, isAuthenticated, login, logout }
})