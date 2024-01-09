<script setup lang="ts">
    import { useAssetsStore } from '@/stores/assets';
    import { RouterLink } from 'vue-router';
    import { storeToRefs } from 'pinia';
    
    const assetsStore = useAssetsStore()

    const { getFilteredAsset } = storeToRefs(assetsStore)

    assetsStore.filter = ''

    const table_struct = {
        head: [ 
            {label: 'Asset ID/Tag'}, 
            {label: 'Asset Name'}, 
            {label: 'Description'},
            {label: 'Purchase Cost'},
            {label: 'Purchase Date'},
            {label: 'Status'} 
        ]
    }

</script>

<template>
    <!-- <div>Asset</div> -->
    <div class="content">
        <div class="table-container">
            <div class="table-header">
                <span>List Asset</span>
                <div class="table-controller">
                    <router-link to="/asset/add">
                        <button class="btn-add-asset">+ Add Asset</button>
                    </router-link>  
                    <!-- <span>{{ getAssetsCount }}</span> -->
                    <input
                        v-model="assetsStore.filter" 
                        placeholder="Search Asset..."/>
                </div>
            </div>
            <div class="table-body">
                <table cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th 
                                :key="key"
                                v-for="(t, key) in table_struct.head">
                                {{ t.label }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="!getFilteredAsset.length">
                            <td
                                class="no-asset" 
                                colspan="6">
                                Asset not available !
                            </td>
                        </tr>
                        <tr 
                            v-else
                            :key="key"
                            v-for="(item, key) in getFilteredAsset">
                            <td>{{ item.AssetID }}</td>
                            <td>{{ item.AssetName }}</td>
                            <td>{{ item.Description }}</td>
                            <td>{{ item.PurchaseCost }}</td>
                            <td>{{ item.PurchaseDate }}</td>
                            <td>
                                <span :class="{
                                    'status-active': item.Status === 'Active', 
                                    'status-inactive': item.Status === 'Inactive',
                                    'status-in-repair': item.Status === 'In Repair'
                                }">
                                    {{ item.Status }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .table-container {
        background: white;
        border: 1px solid #EAECF0;
        border-radius: 12px;
    }

    .table-container span {
        font-weight: 600;
        font-size: 18px;
    }

    .table-header {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 18px;
    }

    .btn-add-asset {
        width: fit-content;
        border: none;
        border-radius: 8px;
        background: #2065DA;
        color: white;
        width: 156px;
        height: 38px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
    }

    .table-controller {
        display: flex;
        flex-direction: row;
        gap: 24px;
    }

    .table-controller input {
        border-radius: 8px;
        border: 1px solid #EAECF0;
        padding: 0 16px 0 16px;
        width: 233px;
        font-weight: 400;
        font-size: 14px;
    }

    .table-controller input:focus {
        outline: none;
    }

    .status-active {
        background: #ECFDF3;
        border-radius: 16px;
        color: #027A48;
        font-size: 12px !important;
        padding: 6px 12px 6px 12px;
    }

    .status-inactive {
        background: #FEEBEE;
        border-radius: 16px;
        color: #B23842;
        font-size: 12px !important;
        padding: 6px 12px 6px 12px;
    }

    .status-in-repair {
        background: #FFFAEB;
        border-radius: 16px;
        color: #B54708;
        font-size: 12px !important;
        padding: 6px 12px 6px 12px;
    }

    .no-asset {
        text-align: center;
        font-weight: 700;
    }

    .table-body {
    }

    table {
        width: 100%;
    }

    thead {
        background: #F9FAFB;
    }

    th, td {
        text-align: left;
        border-top: 1px solid #EAECF0;
    }

    th {
        padding: 12px 24px 12px 24px;
    }

    td {
        padding: 16px 24px 16px 24px;
    }
</style>