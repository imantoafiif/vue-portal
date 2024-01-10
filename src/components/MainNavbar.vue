<script lang="ts" setup>
    interface prop {
        label: string
    }
    const props = withDefaults(defineProps<prop>(), {
        label: ''
    })
</script>

<template>
    <nav class="navbar">
        <span>{{ props.label }}</span>
        <div class="navbar-end">
            <!-- <img src="/notif-outlined.png"/> -->
            <img src="/avatar.png" alt="avatar"/>
        </div>
    </nav>
</template>

<style scoped>
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
</style>