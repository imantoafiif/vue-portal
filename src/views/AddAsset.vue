<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { ref, type Ref } from 'vue'
    import { useAssetsStore } from '@/stores/assets';

    const assetsStore = useAssetsStore()

    const addAsset = () => {
      assetsStore.addAsset({
        "AssetID": asset_fields[0].model.value as string,
        "AssetName": asset_fields[1].model.value as string,
        "Category": asset_fields[2].model.value as string,
        "Status": asset_fields[3].model.value as string,
        "ModelNumber": asset_fields[4].model.value as string,
        "SerialNumber": asset_fields[5].model.value as string,
        "Description": asset_fields[6].model.value as string,
        "PurchaseCost": purchase_fields[0].model.value as number,
        "PurchaseDate": purchase_fields[1].model.value as string,
        "VendorName": purchase_fields[2].model.value as string,
      })

      asset_fields.forEach(item => item.model.value = '')
      purchase_fields.forEach(item => {
        if(item.type === 'number') {
          item.model.value = 0
        } else {
          item.model.value = ''
        }
      })
    }

    const asset_fields = [
      { model: ref(''), plaecholder: 'Asset ID/Tag', type: 'text' },
      { model: ref(''), plaecholder: 'Asset Name', type: 'text' },
      { model: ref(null), plaecholder: 'Category', type: 'select', options: [
        { label: 'Category', value: null },
        { label: 'Vehicle', value: 'Vehicle' },
        { label: 'Tire', value: 'Tire' }
      ]},
      { model: ref(null), plaecholder: 'Status', type: 'select', options: [
        { label: 'Status', value: null },
        { label: 'Inactive', value: 'Inactive' },
        { label: 'In Repair', value: 'In Repair' },
        { label: 'Active', value: 'Active' }
      ] },
      { model: ref(''), plaecholder: 'Model/Number', type: 'text' },
      { model: ref(''), plaecholder: 'Serial Number', type: 'text' },
      { model: ref(''), plaecholder: 'Description', type: 'text' },
    ]

    const purchase_fields = [
      { model: ref(0), plaecholder: 'Purchase Cost', type: 'number' },
      { model: ref(''), plaecholder: 'Purchase Date', type: 'date' },
      { model: ref(''), plaecholder: 'Vendor Name', type: 'text' },
    ]

</script>

<template>
    <!-- <div>Asset</div> -->
    <div class="content">
        <div class="table-container">
            <div class="table-header">
                <div class="table-header-title">
                  <router-link to="/asset">
                    <img src="/ico-arrow-outline.png"/>
                  </router-link>
                  <span>Add Asset</span>
                </div>
                <!-- <div class="table-controller">
                    <router-link to="/asset/add">
                        <button class="btn-add-asset">+ Add Asset</button>
                    </router-link>  
                    <input placeholder="Search Asset..."/>
                </div> -->
            </div>
            <form
              @submit.prevent="addAsset" 
              class="table-body">
              <div>
                <span>Asset Information</span>
                <div class="table-body-section">
                  <template 
                    :key="key"
                    v-for="(item, key) in asset_fields">
                    <input 
                      v-if="item.type !== 'select'"
                      v-model="item.model.value"
                      required
                      :type="item.type"
                      :placeholder="item.plaecholder" />
                    <select 
                      v-else
                      v-model="item.model.value">
                      <option
                        :selected="o.value == null"
                        :disabled="o.value == null"
                        :value="o.value"
                        :key="key" 
                        v-for="(o, key) in item.options">
                        {{ o.label }}
                      </option>
                    </select>
                  </template>
                </div>
                <button type="submit">Add Asset</button>
                <!-- <button 
                  @click="addAsset('')"
                  type="button">
                  test
                </button> -->
              </div>
              <div>
                <span>Purchase Information</span>
                <div class="table-body-section">
                  <input 
                    :type="item.type"
                    v-model="item.model.value"
                    required
                    :key="key"
                    :placeholder="item.plaecholder"
                    v-for="(item, key) in purchase_fields" />
                </div>              
              </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .table-container {
        background: white;
        border: 1px solid #EAECF0;
        border-radius: 12px;
    }

    .table-header-title > span {
        font-weight: 600;
        font-size: 18px;
    }

    .table-header {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 18px;
    }

    .table-header-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }

    .table-header-title img {
      width: 24px;
      height: 24px;
    }

    .table-body {
        display: flex;
        flex-direction: row;
        padding: 0px 48px 18px 48px;
        gap: 36px;
    }

    .table-body > div > span {
      font-weight: 600;
      font-size: 16px;
    }

    .table-body-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .table-body > div {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex-grow: 1;
    }

    .table-body-section input, select {
        border-radius: 8px;
        border: 1px solid #d3d3d3;
        padding: 0 16px 0 16px;
        width: 233px;
        font-weight: 400;
        font-size: 16px;
        padding: 16px;
        width: auto;
    }

    .table-body-section input:focus, select:focus {
        outline: none;
    }

    .table-body button {
      width: fit-content;
      font-weight: 600;
      font-size: 16px;
      background: #2065DA;
      color: white;
      border: none;
      padding: 12px;
      width: 200px;
      border-radius: 6px;
      margin-top: 20px;
      cursor: pointer;
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

    a {
      display: flex;
      align-items: center;
    }
</style>