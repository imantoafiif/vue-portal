<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink, useRoute } from 'vue-router'

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
        <div class="sidebar">
            <div class="sidebar-head">
                <img src="/asset-findr.png"/>
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
        </div>
        <div class="content-container">
            <div class="navbar">
                <span>{{ active_page.label }}</span>
                <div class="navbar-end">
                    <!-- <img src="/notif-outlined.png"/> -->
                    <img src="/avatar.png" alt="avatar"/>
                </div>
            </div>
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

    .content-container {
        display: flex;
        flex-direction: column;
        background: plum;
        width: 100%;
    }

    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #fcfcfc;
        padding: 24px 16px 24px 16px;
    }

    .navbar-end {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
    }

    .navbar-end img:first-child {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    .navbar-end img:last-child {
        width: 40px;
        height: 40px;
        background: #FFBC99;
        border-radius: 50%;
    }

    .navbar span {
        color: rgba(0, 0, 0, 0.56);
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 32px */
        letter-spacing: 0.15px;
        display: flex;
        align-items: center;
    }

    .main-content {
        background: cyan;
        height: 100%;
        overflow-y: auto;
        background: #F3F4F7;
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