import {addNewRecord} from '../../services/tallyService.js'
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    money: null,
    canSave: false
  },
  customerData: {
    detail: null,
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },
  onMoneyBlured(e) {
    let val = Number(e.detail.value)
    let money = null
    if (!isNaN(val)) {
      money = val.toFixed(2) + ''
    }
    this.setData({money})
  },
  onMoneyChanged(e) {
    this.customerData.money = e.detail.value
    this.updateSaveButtonState()
  },
  onDetailChanged(e) {
    this.customerData.detail = e.detail.value
    this.updateSaveButtonState()
  },
  updateSaveButtonState() {
    this.setData({
      canSave: this.customerData.money && this.customerData.detail
    })
    console.log(this.data)
  },
  onSaveRecord() {
    let record = {
      money: this.customerData.money, 
      detail: this.customerData.detail
    }
    addNewRecord(record, (res)=>{
      console.log(res)
      wx.navigateBack({})
    })
  }
})