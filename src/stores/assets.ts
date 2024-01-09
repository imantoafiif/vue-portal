import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface asset_type {
  "AssetID": string;
  "AssetName": string;
  "Category": string;
  "Status": string;
  "ModelNumber": string;
  "SerialNumber": string;
  "Description": string;
  "PurchaseCost": number;
  "PurchaseDate": string;
  "VendorName": string;
}

export const useAssetsStore = defineStore('assetsStore', {
  // eslint-disable-next-line no-unused-labels
  state: () => ({ 
    filter: ref(''),
    assets: [
      {
        "AssetID": "V001",
        "AssetName": "Delivery Van",
        "Category": "Vehicle",
        "Status": "Active",
        "ModelNumber": "VD2000",
        "SerialNumber": "SN1234567890",
        "Description": "Ford Transit 2021",
        "PurchaseCost": 450000000,
        "PurchaseDate": "2021-06-15",
        "VendorName": "Ford Motors"
      },
      {
        "AssetID": "V002",
        "AssetName": "Forklift Truck",
        "Category": "Vehicle",
        "Status": "Inactive",
        "ModelNumber": "FT400",
        "SerialNumber": "SN9876543210",
        "Description": "Toyota Forklift 2020",
        "PurchaseCost": 375000000,
        "PurchaseDate": "2020-10-22",
        "VendorName": "Toyota Industries"
      },
      {
        "AssetID": "T001",
        "AssetName": "Heavy-Duty Tire",
        "Category": "Tire",
        "Status": "Active",
        "ModelNumber": "HT500",
        "SerialNumber": "SN5678901234",
        "Description": "Bridgestone Mud Terrain",
        "PurchaseCost": 5000000,
        "PurchaseDate": "2023-03-05",
        "VendorName": "Bridgestone Tires"
      },
      {
        "AssetID": "T002",
        "AssetName": "All-Season Tire Set",
        "Category": "Tire",
        "Status": "Active",
        "ModelNumber": "AS400",
        "SerialNumber": "SN2345678901",
        "Description": "Michelin CrossClimate+",
        "PurchaseCost": 6750000,
        "PurchaseDate": "2022-08-12",
        "VendorName": "Michelin Tires"
      },
      {
        "AssetID": "V003",
        "AssetName": "SUV",
        "Category": "Vehicle",
        "Status": "Active",
        "ModelNumber": "SUV2022",
        "SerialNumber": "SN1122334455",
        "Description": "Honda CR-V 2022",
        "PurchaseCost": 520000000,
        "PurchaseDate": "2022-04-30",
        "VendorName": "Honda Motors"
      },
      {
        "AssetID": "V004",
        "AssetName": "Truck",
        "Category": "Vehicle",
        "Status": "Active",
        "ModelNumber": "TRK3000",
        "SerialNumber": "SN9988776655",
        "Description": "Isuzu NPR Truck",
        "PurchaseCost": 820000000,
        "PurchaseDate": "2023-01-10",
        "VendorName": "Isuzu Motors"
      },
      {
        "AssetID": "T003",
        "AssetName": "Performance Tire",
        "Category": "Tire",
        "Status": "Active",
        "ModelNumber": "PT700",
        "SerialNumber": "SN8765432109",
        "Description": "Goodyear Eagle F1",
        "PurchaseCost": 8000000,
        "PurchaseDate": "2021-11-25",
        "VendorName": "Goodyear Tires"
      },
      {
        "AssetID": "T004",
        "AssetName": "Winter Tire Set",
        "Category": "Tire",
        "Status": "Active",
        "ModelNumber": "WT300",
        "SerialNumber": "SN5432109876",
        "Description": "Pirelli Winter Sottozero",
        "PurchaseCost": 6000000,
        "PurchaseDate": "2023-06-18",
        "VendorName": "Pirelli Tires"
      }
    ] 
  }),
  getters: {
    getFilteredAsset: state => {
      // const regex = /${filter.value}/i
      const regex = new RegExp(state.filter, 'i')
      const filtered_assets = state.assets.filter(item => regex.test(item.AssetName))
      return filtered_assets
    }
  },
  actions: {
    addAsset(value: asset_type) {
      this.assets.push(value)
    }
  }
})
