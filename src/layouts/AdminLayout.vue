<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink, useRoute } from 'vue-router'
    import MainNavbar from '@/components/MainNavbar.vue'
    import MainSidebar from '@/components/MainSidebar.vue';

    const menus = [
        { label: 'Home', path: '/home', ico: '/ico-home.png' },
        { label: 'Manage Asset', path: '/asset', ico: '/ico-wallet.png' }, 
        { label: 'Settings', path: '/about', ico: '/ico-cog.png' }, 
    ]
    const path = useRoute()

    const active_page = ref(menus.filter(item => item.path === '/asset')[0])

    const redirect = (new_path: string) => {
        const regex = new RegExp(new_path, 'i')
        active_page.value = menus.filter(item => regex.test(item.path))[0]
    }
</script>

<template>
    <div class="container">
        <main-sidebar/>
        <div class="content-container">
            <main-navbar :label="active_page.label"/>
            <div class="main-content">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        background: aliceblue;
        height: 100vh;
        display: flex;
        flex-direction: row;
    }

    .content-container {
        display: flex;
        flex-direction: column;
        background: plum;
        width: 100%;
    }

    .main-content {
        background: cyan;
        height: 100%;
        overflow-y: auto;
        background: #F3F4F7;
    }
</style>