<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth/useAuthStore';

    const authStore = useAuthStore();
    const router = useRouter();

    const username = ref('')
    const password = ref('')
    const errorMessage = ref('')

    async function handleLogin() {
        errorMessage.value = '';

        const success = await authStore.login(username.value, password.value);

        if(success){
            router.push('/dashboard/home');
        } else {
            errorMessage.value = 'Usuário ou senha inválidos.'
        }
    }
</script>

<template>
    <div class="login-Container">
        <div class="login-Card">
            <h2>Image Deployer</h2>
            <form @submit.prevent="handleLogin">
                <div class="input-Group">
                    <label>Usuário</label>
                    <input type="text" v-model="username" required placeholder="Type your username">
                </div>
                <div class="input-Group">
                    <label>Senha</label>
                    <input type="password" v-model="password" required placeholder="Type your password">
                </div>
                <p v-if="errorMessage">{{ errorMessage }}</p>
                <button type="submit" class="btn-Login">Login</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .login-Container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-image: url('/images/background/wallpaper.png');
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    }

    .login-Card{
        background: #222838;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
        border: 1px solid aliceblue;
    }

    h2{
        margin-bottom: 24px;
        color: aliceblue;
        text-align: center;
    }

    .input-Group{
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
    }

    label{
        margin-bottom: 6px;
        font-weight: 500;
        color: aliceblue;
    }

    input{
        padding: 10px;
        border: none;
        border-radius: 4px;
        font-size: 1em;
        background-color: #222838;
        color: aliceblue;
        border: 1px solid aliceblue;
    }

    input:hover{
        border: 2px solid aliceblue;
    }

    p{
        color: brown;
    }

    .btn-Login{
        width: 100%;
        padding: 12px;
        background-color: #02b004;
        color: aliceblue;
        border: none;
        border-radius: 4px;
        font-size: 1.1em;
        cursor: pointer;
        transition: background 0.2s;
    }

    .btn-Login:hover{
        background-color: #06e009;
    }
</style>