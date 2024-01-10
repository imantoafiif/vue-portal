<script lang="ts" setup>
    import { RouterLink, useRoute } from 'vue-router'
    import { ref } from 'vue';

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
    <aside class="sidebar">
        <div class="sidebar-head">
            <img src="/asset-findr.png" alt="logo"/>
        </div>
        <div class="sidebar-body">
            <router-link
                @click="redirect(menu.path)"
                v-for="(menu, key) in menus"
                :key="key"
                :to="menu.path">
                <span
                    :class="{'menu': true, 'active': path.fullPath === menu.path}">
                    <img :src="menu.ico" :alt="menu.label" />
                    <span>{{ menu.label }}</span>
                </span>
            </router-link>
        </div>
    </aside>
</template>

<style scoped>
    .sidebar {
        background: white;
        width: 256px;
        border-right: 1px solid rgba(0, 0, 0, .12);
    }

    .sidebar-head {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
        margin-bottom: 32px;
    }

    .sidebar-body {
        display: flex;
        flex-direction: column;
        padding: 0 8px;
    }

    .sidebar img {
        width: 149px;
        height: 140px;
    }

    .menu {
        /* padding: 20px; */
        padding: 13px 19px;
        font-weight: 500;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        /* background: #FFBC99; */
    }

    .menu:hover {
        background: #f5f5f5;
    }

    .menu img {
        width: 24px;
        height: 24px;
    }

    .menu.active {
        background: #f5f5f5;
    }
</style>